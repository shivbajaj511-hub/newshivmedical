/* NEW SHIV MEDICAL HALL – site behaviour */
(function () {
  var WA_NUMBER = "919814421974";
  var CATS = ["medicines", "vitamins", "babycare", "personal", "devices", "firstaid"];
  var CAT_ICON = { medicines: "💊", vitamins: "🍊", babycare: "🍼", personal: "🧴", devices: "🩺", firstaid: "🩹" };
  var t = function (k, v) { return I18N.t(k, v); };

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById("burger");
  var nav = document.getElementById("mainNav");
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- products ---------- */
  var grid = document.getElementById("productGrid");
  var statusEl = document.getElementById("productStatus");
  var chipsEl = document.getElementById("chips");
  var search = document.getElementById("searchBox");
  var products = [];
  var state = { cat: "all", q: "", loaded: false, error: false };

  function renderChips() {
    chipsEl.innerHTML = "";
    ["all"].concat(CATS).forEach(function (c) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "chip" + (state.cat === c ? " active" : "");
      b.textContent = c === "all" ? t("prod.all") : t("cat." + c);
      b.addEventListener("click", function () { state.cat = c; renderChips(); renderProducts(); });
      chipsEl.appendChild(b);
    });
  }

  function formatPrice(n) {
    var num = Number(n);
    if (!isFinite(num)) return "";
    return "₹" + num.toLocaleString("en-IN");
  }

  function renderProducts() {
    grid.innerHTML = "";
    statusEl.textContent = "";
    if (state.error) { statusEl.textContent = t("prod.loaderr"); return; }
    if (!state.loaded) { statusEl.textContent = t("prod.loading"); return; }
    if (!products.length) { statusEl.textContent = t("prod.empty"); return; }

    var q = state.q.trim().toLowerCase();
    var list = products.filter(function (p) {
      var okCat = state.cat === "all" || p.category === state.cat;
      var okQ = !q || (p.name || "").toLowerCase().indexOf(q) !== -1;
      return okCat && okQ;
    });
    if (!list.length) { statusEl.textContent = t("prod.none"); return; }

    list.forEach(function (p) {
      var card = document.createElement("article");
      card.className = "product";

      var img = document.createElement("div");
      img.className = "p-img";
      if (p.image) {
        var im = document.createElement("img");
        im.src = p.image; im.alt = p.name || ""; im.loading = "lazy";
        im.onerror = function () { img.textContent = CAT_ICON[p.category] || "💊"; };
        img.appendChild(im);
      } else {
        img.textContent = CAT_ICON[p.category] || "💊";
      }

      var body = document.createElement("div");
      body.className = "p-body";

      var cat = document.createElement("span");
      cat.className = "p-cat"; cat.textContent = t("cat." + (p.category || "medicines"));
      var name = document.createElement("h3");
      name.className = "p-name"; name.textContent = p.name || "";
      body.appendChild(cat); body.appendChild(name);

      if (p.desc) {
        var d = document.createElement("p");
        d.className = "p-desc"; d.textContent = p.desc;
        body.appendChild(d);
      }

      var row = document.createElement("div");
      row.className = "p-row";
      var price = document.createElement("span");
      price.className = "p-price";
      var sm = document.createElement("small"); sm.textContent = t("prod.price");
      price.appendChild(sm); price.appendChild(document.createTextNode(formatPrice(p.price)));
      var tag = document.createElement("span");
      tag.className = "tag " + (p.inStock ? "in" : "out");
      tag.textContent = p.inStock ? t("prod.instock") : t("prod.outstock");
      row.appendChild(price); row.appendChild(tag);
      body.appendChild(row);

      var ask = document.createElement("a");
      ask.className = "btn btn-wa btn-small";
      ask.target = "_blank"; ask.rel = "noopener";
      ask.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(t("prod.wamsg", { name: p.name || "" }));
      ask.textContent = t("prod.ask");
      body.appendChild(ask);

      card.appendChild(img); card.appendChild(body);
      grid.appendChild(card);
    });
  }

  function loadProducts() {
    fetch("products.json?v=" + Date.now(), { cache: "no-cache" })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (data) {
        products = Array.isArray(data) ? data : (data.products || []);
        state.loaded = true; state.error = false; renderProducts();
      })
      .catch(function () { state.error = true; renderProducts(); });
  }

  search.addEventListener("input", function () { state.q = search.value; renderProducts(); });

  document.querySelectorAll(".cat-card").forEach(function (c) {
    c.addEventListener("click", function () {
      state.cat = c.getAttribute("data-cat");
      renderChips(); renderProducts();
      document.getElementById("products").scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ---------- enquiry form (opens WhatsApp, nothing is stored) ---------- */
  var form = document.getElementById("enquiryForm");
  var errKeys = { eName: null, ePhone: null, eMsg: null };

  function setErr(id, key) {
    errKeys[id] = key;
    document.getElementById(id).textContent = key ? t(key) : "";
  }
  function refreshForm() {
    Object.keys(errKeys).forEach(function (id) {
      if (errKeys[id]) document.getElementById(id).textContent = t(errKeys[id]);
    });
    if (okShown) document.getElementById("fOk").textContent = t("form.ok");
  }
  var okShown = false;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("fName").value.trim();
    var phone = document.getElementById("fPhone").value.replace(/[\s-]/g, "").replace(/^(\+91|91|0)(?=\d{10}$)/, "");
    var msg = document.getElementById("fMsg").value.trim();
    var ok = true;

    setErr("eName", name.length < 2 ? "err.name" : null);
    setErr("ePhone", /^[6-9]\d{9}$/.test(phone) ? null : "err.phone");
    setErr("eMsg", msg.length < 5 ? "err.msg" : null);
    ok = !errKeys.eName && !errKeys.ePhone && !errKeys.eMsg;
    okShown = false;
    document.getElementById("fOk").textContent = "";
    if (!ok) return;

    var text = t("form.waGreeting") + "\n" +
      t("form.waName") + ": " + name + "\n" +
      t("form.waPhone") + ": " + phone + "\n\n" + msg;
    okShown = true;
    document.getElementById("fOk").textContent = t("form.ok");
    window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text), "_blank", "noopener");
  });

  /* ---------- re-render dynamic parts when language changes ---------- */
  document.addEventListener("langchange", function () {
    renderChips(); renderProducts(); refreshForm();
  });

  renderChips();
  renderProducts();
  loadProducts();
})();
