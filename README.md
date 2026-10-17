# NEW SHIV MEDICAL HALL – Website

Languages: English (default), हिन्दी, ਪੰਜਾਬੀ. Free hosting on GitHub Pages.

## Files
- `index.html`, `styles.css`, `app.js` – public website
- `i18n.js` – translation dictionary and language switcher (all 3 languages)
- `products.json` – medicine list (shown on the website)
- `images/products/` – medicine photos (created automatically)
- `admin.html`, `admin.js` – owner-only panel to add medicines, photos and prices

## Publish (GitHub Pages)
1. Create a public repository, upload all these files.
2. Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.
3. Site: `https://USERNAME.github.io/REPO/`

## Owner panel (only the owner can edit)
Open `https://USERNAME.github.io/REPO/admin.html` and bookmark it.

One-time token setup:
1. GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token.
2. Repository access: **Only select repositories** → choose this repository.
3. Permissions → Repository permissions → **Contents: Read and write**.
4. Copy the token, paste it in the admin page with your username and repository name → Save & Connect.

The token is stored only in your own browser. Visitors cannot edit anything, because GitHub
itself rejects any change that does not carry your token. Never share the token.

After saving an item, the public site updates in about 1–2 minutes.

## Adding new text later
Add the key in all three languages inside `i18n.js` (`en`, `hi`, `pa`) and use
`data-i18n="your.key"` on the HTML element.
