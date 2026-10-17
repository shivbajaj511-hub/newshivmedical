/* Owner-only panel. Edits products.json and uploads photos straight to the
   GitHub repository using the owner's personal access token.
   The token stays in THIS browser only (localStorage) – nobody else can edit. */
(function () {
  var CFG_KEY = "nsmh_gh";
  var CATS = ["medicines", "vitamins", "babycare", "personal", "devices", "firstaid"];
  var t = function (k) { return I18N.t(k); };
  var $ = function (id) { return document.getElementById(id); };

  var cfg = null;
  var items = [];
  var jsonSha = null;
  var editingId = null;
  var newImageB64 = null;

  function loadCfg() { try { return JSON.parse(localStorage.getItem(CFG_KEY)); } catch (e) { return null; } }
  function saveCfg(c) { try { localStorage.setItem(CFG_KEY, JSON.stringify(c)); } catch (e) {} }

  /* ---------- GitHub API helpers ---------- */
  function api(path, opts) {
    opts = opts || {};
    var url = "https://api.github.com/repos/" + encodeURIComponent(cfg.owner) + "/" + encodeURIComponent(cfg.repo) + "/contents/" + path;
    if (!opts.method || opts.method === "GET") url += "?ref=" + encodeURIComponent(cfg.branch) + "&t=" + Date.now();
    return fetch(url, {
      method: opts.method || "GET",
      headers: {
        "Accept": "application/vnd.github+json",
        "Authorization": "Bearer " + cfg.token,
        "Content-Type": "application/json"
      },
      body: opts.body ? JSON.stringify(opts.body) : undefined
    });
  }
  function toB64(str) {
    var bytes = new TextEncoder().encode(str), bin = "";
    bytes.forEach(function (b) { bin += String.fromCharCode(b); });
    return btoa(bin);
  }
  function fromB64(b64) {
    var bin = atob(b64.replace(/\n/g, "")), bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  }

  function fetchList() {
    return api("products.json").then(function (r) {
      if (r.status === 404) { items = []; jsonSha = null; return; }
      if (!r.ok) throw new Error("auth");
      return r.json().then(function (j) {
        jsonSha = j.sha;
        var data = JSON.parse(fromB64(j.content));
        items = Array.isArray(data) ? data : (data.products || []);
      });
    });
  }

  function putList(message, retry) {
    var body = { message: message, content: toB64(JSON.stringify({ products: items }, null, 2) + "\n"), branch: cfg.branch };
    if (jsonSha) body.sha = jsonSha;
    return api("products.json", { method: "PUT", body: body }).then(function (r) {
      if ((r.status === 409 || r.status === 422) && !retry) {
        // file changed meanwhile – refresh sha and try once more
        return api("products.json").then(function (g) { return g.json(); }).then(function (j) {
          jsonSha = j.sha; return putList(message, true);
        });
      }
      if (!r.ok) throw new Error("save");
      return r.json().then(function (j) { jsonSha = j.content.sha; });
    });
  }

  function putImage(id, b64) {
    var path = "images/products/" + id + ".jpg";
    return api(path).then(function (g) { return g.ok ? g.json().then(function (j) { return j.sha; }) : null; })
      .then(function (sha) {
        var body = { message: "Add photo " + id, content: b64, branch: cfg.branch };
        if (sha) body.sha = sha;
        return api(path, { method: "PUT", body: body });
      }).then(function (r) { if (!r.ok) throw new Error("img"); return path; });
  }

  function deleteImage(path) {
    if (!path) return Promise.resolve();
    return api(path).then(function (g) {
      if (!g.ok) return;
      return g.json().then(function (j) {
        return api(path, { method: "DELETE", body: { message: "Remove photo", sha: j.sha, branch: cfg.branch } });
      });
    }).catch(function () {});
  }

  /* ---------- image resize (keeps uploads small and fast) ---------- */
  function resizeImage(file) {
    return new Promise(function (resolve, reject) {
      var url = URL.createObjectURL(file), img = new Image();
      img.onload = function () {
        var max = 900, w = img.width, h = img.height, s = Math.min(1, max / Math.max(w, h));
        var c = document.createElement("canvas");
        c.width = Math.round(w * s); c.height = Math.round(h * s);
        var ctx = c.getContext("2d");
        ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, c.width, c.height);
        ctx.drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        var data = c.toDataURL("image/jpeg", 0.82);
        resolve({ b64: data.split(",")[1], dataUrl: data });
      };
      img.onerror = function () { URL.revokeObjectURL(url); reject(new Error("img")); };
      img.src = url;
    });
  }

  /* ---------- UI ---------- */
  function setMsg(el, key, good) {
    el.textContent = key ? t(key) : "";
    el.className = "msg " + (key ? (good ? "good" : "bad") : "");
    el.setAttribute("data-key", key || "");
    el.setAttribute("data-good", good ? "1" : "0");
  }

  function fillCats() {
    var sel = $("iCat"), cur = sel.value;
    sel.innerHTML = "";
    CATS.forEach(function (c) {
      var o = document.createElement("option");
      o.value = c; o.textContent = t("cat." + c); sel.appendChild(o);
    });
    if (cur) sel.value = cur;
  }

  function showManager() {
    $("setupCard").classList.add("hidden");
    $("managerArea").classList.remove("hidden");
    renderList();
  }

  function renderList() {
    var box = $("itemList");
    box.innerHTML = "";
    if (!items.length) {
      var p = document.createElement("p"); p.className = "help"; p.textContent = t("admin.empty"); box.appendChild(p); return;
    }
    items.forEach(function (it) {
      var row = document.createElement("div"); row.className = "admin-item";
      var th = document.createElement("div"); th.className = "thumb";
      if (it.image) { var im = document.createElement("img"); im.src = it.image + "?t=" + Date.now(); im.alt = ""; th.appendChild(im); } else th.textContent = "💊";
      var info = document.createElement("div"); info.className = "info";
      var nm = document.createElement("strong"); nm.textContent = it.name;
      var meta = document.createElement("span"); meta.className = "help";
      meta.textContent = t("cat." + it.category) + " · ₹" + it.price + " · " + (it.inStock ? t("prod.instock") : t("prod.outstock"));
      info.appendChild(nm); info.appendChild(meta);
      var btns = document.createElement("div"); btns.className = "btns";
      btns.appendChild(mkBtn(t("admin.edit"), function () { startEdit(it.id); }));
      btns.appendChild(mkBtn(it.inStock ? t("admin.toOut") : t("admin.toStock"), function () { toggleStock(it.id); }));
      btns.appendChild(mkBtn(t("admin.delete"), function () { removeItem(it.id); }));
      row.appendChild(th); row.appendChild(info); row.appendChild(btns);
      box.appendChild(row);
    });
  }
  function mkBtn(label, fn) {
    var b = document.createElement("button"); b.type = "button"; b.className = "btn btn-ghost btn-small"; b.textContent = label;
    b.addEventListener("click", fn); return b;
  }

  function resetForm() {
    editingId = null; newImageB64 = null;
    $("itemForm").reset();
    $("preview").classList.add("hidden"); $("keepPhoto").classList.add("hidden");
    $("cancelBtn").classList.add("hidden");
  }
  function startEdit(id) {
    var it = items.filter(function (x) { return x.id === id; })[0]; if (!it) return;
    editingId = id; newImageB64 = null;
    $("iName").value = it.name; $("iPrice").value = it.price; $("iCat").value = it.category;
    $("iStock").value = it.inStock ? "1" : "0"; $("iDesc").value = it.desc || ""; $("iPhoto").value = "";
    if (it.image) { $("preview").src = it.image + "?t=" + Date.now(); $("preview").classList.remove("hidden"); $("keepPhoto").classList.remove("hidden"); }
    $("cancelBtn").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function busy(on) { $("saveBtn").disabled = on; }

  function toggleStock(id) {
    items.forEach(function (x) { if (x.id === id) x.inStock = !x.inStock; });
    persist("Update stock");
  }
  function removeItem(id) {
    if (!confirm(t("admin.confirmDelete"))) return;
    var it = items.filter(function (x) { return x.id === id; })[0];
    items = items.filter(function (x) { return x.id !== id; });
    persist("Remove item").then(function () { if (it) deleteImage(it.image); });
  }
  function persist(message) {
    setMsg($("itemMsg"), "admin.saving", true); busy(true);
    return putList(message).then(function () {
      setMsg($("itemMsg"), "admin.saved", true); renderList();
    }).catch(function () {
      setMsg($("itemMsg"), "admin.errSave", false);
    }).then(function () { busy(false); });
  }

  /* ---------- events ---------- */
  $("setupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    cfg = {
      owner: $("gOwner").value.trim(), repo: $("gRepo").value.trim(),
      branch: $("gBranch").value.trim() || "main", token: $("gToken").value.trim()
    };
    setMsg($("setupMsg"), "admin.loading", true);
    fetchList().then(function () {
      saveCfg(cfg); setMsg($("setupMsg"), "admin.connected", true); showManager();
    }).catch(function () { cfg = null; setMsg($("setupMsg"), "admin.errConnect", false); });
  });

  $("iPhoto").addEventListener("change", function () {
    var f = this.files[0]; if (!f) return;
    if (!/^image\//.test(f.type)) { setMsg($("itemMsg"), "admin.errImage", false); this.value = ""; return; }
    resizeImage(f).then(function (r) {
      newImageB64 = r.b64; $("preview").src = r.dataUrl; $("preview").classList.remove("hidden"); setMsg($("itemMsg"), "", true);
    }).catch(function () { setMsg($("itemMsg"), "admin.errImage", false); });
  });

  $("itemForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var name = $("iName").value.trim(), price = parseFloat($("iPrice").value);
    if (!name || !isFinite(price) || price < 0) { setMsg($("itemMsg"), "admin.errRequired", false); return; }

    var existing = editingId ? items.filter(function (x) { return x.id === editingId; })[0] : null;
    var id = existing ? existing.id : Date.now().toString(36);
    var rec = existing || { id: id, image: "" };
    rec.name = name; rec.price = price; rec.category = $("iCat").value;
    rec.inStock = $("iStock").value === "1"; rec.desc = $("iDesc").value.trim();

    setMsg($("itemMsg"), "admin.saving", true); busy(true);
    var step = newImageB64 ? putImage(id, newImageB64).then(function (p) { rec.image = p; }) : Promise.resolve();
    step.then(function () {
      if (!existing) items.unshift(rec);
      return putList(existing ? "Edit item" : "Add item");
    }).then(function () {
      setMsg($("itemMsg"), "admin.saved", true); resetForm(); renderList();
    }).catch(function () {
      if (!existing) items = items.filter(function (x) { return x.id !== id; });
      setMsg($("itemMsg"), "admin.errSave", false);
    }).then(function () { busy(false); });
  });

  $("cancelBtn").addEventListener("click", function () { resetForm(); setMsg($("itemMsg"), "", true); });

  $("exportBtn").addEventListener("click", function () {
    var blob = new Blob([JSON.stringify({ products: items }, null, 2)], { type: "application/json" });
    var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "products-backup.json"; a.click();
  });

  $("disconnectBtn").addEventListener("click", function () {
    try { localStorage.removeItem(CFG_KEY); } catch (e) {}
    cfg = null; items = [];
    $("managerArea").classList.add("hidden"); $("setupCard").classList.remove("hidden");
    $("gToken").value = ""; setMsg($("setupMsg"), "", true);
  });

  /* re-translate dynamic text on language change */
  document.addEventListener("langchange", function () {
    fillCats();
    renderList();
    ["setupMsg", "itemMsg"].forEach(function (id) {
      var el = $(id), k = el.getAttribute("data-key");
      if (k) setMsg(el, k, el.getAttribute("data-good") === "1");
    });
  });

  fillCats();
  cfg = loadCfg();
  if (cfg) {
    $("gOwner").value = cfg.owner; $("gRepo").value = cfg.repo; $("gBranch").value = cfg.branch;
    fetchList().then(showManager).catch(function () {
      setMsg($("setupMsg"), "admin.errConnect", false);
    });
  }
})();
