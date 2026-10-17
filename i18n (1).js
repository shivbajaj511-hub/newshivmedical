/* NEW SHIV MEDICAL HALL – translation dictionary + language switcher.
   No external translation API is used. English is the default. */
(function () {
  var STORE_KEY = "nsmh_lang";

  var LANGS = {
    en: { label: "English", html: "en" },
    hi: { label: "हिन्दी", html: "hi" },
    pa: { label: "ਪੰਜਾਬੀ", html: "pa" }
  };

  var D = {
    en: {
      "meta.title": "NEW SHIV MEDICAL HALL – Trusted Pharmacy in Guruharsahai",
      "meta.desc": "NEW SHIV MEDICAL HALL, near Gurudwara Ber Sahib, Guruharsahai, Punjab. Medicines and health products. Open 8:00 AM to 9:00 PM.",
      "nav.home": "Home",
      "nav.about": "About Us",
      "nav.categories": "Categories",
      "nav.products": "Medicines & Prices",
      "nav.contact": "Contact",
      "nav.menu": "Menu",
      "lang.label": "Language",
      "hero.badge": "Your neighbourhood pharmacy",
      "hero.title": "Your Health, Our Care",
      "hero.sub": "Medicines and health products for the whole family, near Gurudwara Ber Sahib, Guruharsahai.",
      "hero.call": "Call Now",
      "hero.wa": "WhatsApp Us",
      "hero.view": "View Medicines & Prices",
      "hero.hours": "Shop Timings",
      "about.title": "About Our Shop",
      "about.p1": "NEW SHIV MEDICAL HALL is a pharmacy in Guruharsahai, run by its owner, TARSEM CHAND.",
      "about.p2": "Visit us or message us on WhatsApp to check whether your medicine is available. Please always follow your doctor's prescription.",
      "about.f1.t": "Easy to Find",
      "about.f1.d": "Near Gurudwara Ber Sahib, Guruharsahai.",
      "about.f2.t": "Check Before You Visit",
      "about.f2.d": "Call or WhatsApp to confirm availability.",
      "about.f3.t": "Prices Shown Online",
      "about.f3.d": "See listed medicines with prices on this website.",
      "cat.title": "Product Categories",
      "cat.sub": "Types of products you can ask us about",
      "cat.view": "View items",
      "cat.medicines": "Medicines",
      "cat.vitamins": "Vitamins & Supplements",
      "cat.babycare": "Baby Care",
      "cat.personal": "Personal Care",
      "cat.devices": "Health Devices",
      "cat.firstaid": "First Aid",
      "prod.title": "Available Medicines & Prices",
      "prod.sub": "Updated by the shop owner.",
      "prod.search": "Search medicine name",
      "prod.all": "All",
      "prod.instock": "In Stock",
      "prod.outstock": "Out of Stock",
      "prod.price": "Price",
      "prod.none": "No items found.",
      "prod.empty": "Our medicine list will be added soon. Please call or WhatsApp to ask about any medicine.",
      "prod.loaderr": "Could not load the list. Please try again later.",
      "prod.loading": "Loading…",
      "prod.ask": "Ask on WhatsApp",
      "prod.note": "Prices and availability may change. Please call to confirm before visiting.",
      "prod.wamsg": "Hello, please share details about: {name}",
      "hours.title": "Opening Hours",
      "hours.value": "8:00 AM to 9:00 PM",
      "contact.title": "Contact Us",
      "contact.owner": "Owner",
      "contact.phone": "Phone",
      "contact.wa": "WhatsApp",
      "contact.address": "Address",
      "contact.addressValue": "Near Gurudwara Ber Sahib, Guruharsahai",
      "contact.hours": "Opening Hours",
      "contact.map": "Open in Maps",
      "form.title": "Send an Enquiry",
      "form.name": "Your Name",
      "form.phone": "Phone Number",
      "form.msg": "Your Message (medicine name, quantity etc.)",
      "form.send": "Send via WhatsApp",
      "form.ok": "Opening WhatsApp with your enquiry…",
      "form.privacy": "Your details are used only to open a WhatsApp chat with the shop. This website does not store them or send them to any server.",
      "form.waGreeting": "Hello NEW SHIV MEDICAL HALL,",
      "form.waName": "Name",
      "form.waPhone": "Phone",
      "err.name": "Please enter your name.",
      "err.phone": "Please enter a valid 10-digit mobile number.",
      "err.msg": "Please write your message (at least 5 characters).",
      "float.call": "Call",
      "float.wa": "WhatsApp",
      "footer.rights": "© {year} NEW SHIV MEDICAL HALL. All rights reserved.",
      "footer.disc": "Always consult your doctor before using any medicine. Prescription medicines require a valid prescription.",
      "footer.privacy": "Privacy: we do not collect or store your personal data on this website.",

      "admin.title": "Owner Panel – Manage Medicines",
      "admin.back": "Back to website",
      "admin.setup": "One-time Setup",
      "admin.setupHelp": "Enter your GitHub details. The access token is saved only in this browser, so only you can edit the list.",
      "admin.owner": "GitHub username",
      "admin.repo": "Repository name",
      "admin.branch": "Branch",
      "admin.token": "Access token",
      "admin.tokenHelp": "How to get a token: GitHub → Settings → Developer settings → Fine-grained tokens → Generate. Select only this repository and give “Contents: Read and write” permission.",
      "admin.connect": "Save & Connect",
      "admin.disconnect": "Disconnect",
      "admin.connected": "Connected to GitHub.",
      "admin.add": "Add / Edit Item",
      "admin.name": "Medicine name",
      "admin.category": "Category",
      "admin.price": "Price (₹)",
      "admin.availability": "Availability",
      "admin.desc": "Details (optional)",
      "admin.photo": "Photo of medicine",
      "admin.save": "Save Item",
      "admin.cancel": "Cancel edit",
      "admin.list": "Your Items",
      "admin.edit": "Edit",
      "admin.delete": "Delete",
      "admin.toStock": "Mark In Stock",
      "admin.toOut": "Mark Out of Stock",
      "admin.confirmDelete": "Delete this item?",
      "admin.saving": "Saving… please wait.",
      "admin.saved": "Saved! The website will update in 1–2 minutes.",
      "admin.export": "Download backup",
      "admin.empty": "No items yet. Add your first medicine above.",
      "admin.loading": "Loading…",
      "admin.errConnect": "Could not connect. Check username, repository name, branch and token.",
      "admin.errRequired": "Please enter the medicine name and a valid price.",
      "admin.errImage": "Please choose an image file (photo).",
      "admin.errSave": "Could not save. Please check your connection and try again.",
      "admin.keepPhoto": "Leave empty to keep the current photo."
    },

    hi: {
      "meta.title": "NEW SHIV MEDICAL HALL – गुरुहरसहाय की भरोसेमंद दवाई की दुकान",
      "meta.desc": "NEW SHIV MEDICAL HALL, गुरुद्वारा बेर साहिब के पास, गुरुहरसहाय, पंजाब। दवाइयाँ और स्वास्थ्य उत्पाद। सुबह 8:00 बजे से रात 9:00 बजे तक खुला।",
      "nav.home": "होम",
      "nav.about": "हमारे बारे में",
      "nav.categories": "श्रेणियाँ",
      "nav.products": "दवाइयाँ और कीमतें",
      "nav.contact": "संपर्क",
      "nav.menu": "मेन्यू",
      "lang.label": "भाषा",
      "hero.badge": "आपके मोहल्ले की अपनी दवाई की दुकान",
      "hero.title": "आपकी सेहत, हमारी ज़िम्मेदारी",
      "hero.sub": "पूरे परिवार के लिए दवाइयाँ और स्वास्थ्य उत्पाद, गुरुद्वारा बेर साहिब के पास, गुरुहरसहाय।",
      "hero.call": "अभी कॉल करें",
      "hero.wa": "व्हाट्सऐप करें",
      "hero.view": "दवाइयाँ और कीमतें देखें",
      "hero.hours": "दुकान का समय",
      "about.title": "हमारी दुकान के बारे में",
      "about.p1": "NEW SHIV MEDICAL HALL गुरुहरसहाय में स्थित दवाई की दुकान है, जिसके मालिक TARSEM CHAND हैं।",
      "about.p2": "आपकी दवाई उपलब्ध है या नहीं, यह जानने के लिए दुकान पर आएँ या व्हाट्सऐप पर संदेश भेजें। कृपया हमेशा अपने डॉक्टर की पर्ची के अनुसार ही दवाई लें।",
      "about.f1.t": "आसानी से मिलें",
      "about.f1.d": "गुरुद्वारा बेर साहिब के पास, गुरुहरसहाय।",
      "about.f2.t": "आने से पहले पूछें",
      "about.f2.d": "उपलब्धता जानने के लिए कॉल या व्हाट्सऐप करें।",
      "about.f3.t": "कीमतें ऑनलाइन देखें",
      "about.f3.d": "इस वेबसाइट पर सूचीबद्ध दवाइयाँ कीमतों के साथ देखें।",
      "cat.title": "उत्पाद श्रेणियाँ",
      "cat.sub": "उत्पादों के प्रकार जिनके बारे में आप हमसे पूछ सकते हैं",
      "cat.view": "आइटम देखें",
      "cat.medicines": "दवाइयाँ",
      "cat.vitamins": "विटामिन और सप्लीमेंट",
      "cat.babycare": "शिशु देखभाल",
      "cat.personal": "व्यक्तिगत देखभाल",
      "cat.devices": "स्वास्थ्य उपकरण",
      "cat.firstaid": "प्राथमिक चिकित्सा",
      "prod.title": "उपलब्ध दवाइयाँ और कीमतें",
      "prod.sub": "दुकान मालिक द्वारा अपडेट की गई।",
      "prod.search": "दवाई का नाम खोजें",
      "prod.all": "सभी",
      "prod.instock": "उपलब्ध",
      "prod.outstock": "स्टॉक में नहीं",
      "prod.price": "कीमत",
      "prod.none": "कोई आइटम नहीं मिला।",
      "prod.empty": "हमारी दवाइयों की सूची जल्द जोड़ी जाएगी। किसी भी दवाई के बारे में पूछने के लिए कॉल या व्हाट्सऐप करें।",
      "prod.loaderr": "सूची लोड नहीं हो सकी। कृपया बाद में दोबारा कोशिश करें।",
      "prod.loading": "लोड हो रहा है…",
      "prod.ask": "व्हाट्सऐप पर पूछें",
      "prod.note": "कीमतें और उपलब्धता बदल सकती हैं। आने से पहले पुष्टि के लिए कॉल करें।",
      "prod.wamsg": "नमस्ते, कृपया इसकी जानकारी दें: {name}",
      "hours.title": "खुलने का समय",
      "hours.value": "सुबह 8:00 बजे से रात 9:00 बजे तक",
      "contact.title": "हमसे संपर्क करें",
      "contact.owner": "मालिक",
      "contact.phone": "फ़ोन",
      "contact.wa": "व्हाट्सऐप",
      "contact.address": "पता",
      "contact.addressValue": "गुरुद्वारा बेर साहिब के पास, गुरुहरसहाय",
      "contact.hours": "खुलने का समय",
      "contact.map": "मैप में खोलें",
      "form.title": "पूछताछ भेजें",
      "form.name": "आपका नाम",
      "form.phone": "फ़ोन नंबर",
      "form.msg": "आपका संदेश (दवाई का नाम, मात्रा आदि)",
      "form.send": "व्हाट्सऐप से भेजें",
      "form.ok": "आपकी पूछताछ के साथ व्हाट्सऐप खुल रहा है…",
      "form.privacy": "आपकी जानकारी का उपयोग केवल दुकान के साथ व्हाट्सऐप चैट खोलने के लिए किया जाता है। यह वेबसाइट इसे सेव नहीं करती और न ही किसी सर्वर पर भेजती है।",
      "form.waGreeting": "नमस्ते NEW SHIV MEDICAL HALL,",
      "form.waName": "नाम",
      "form.waPhone": "फ़ोन",
      "err.name": "कृपया अपना नाम लिखें।",
      "err.phone": "कृपया सही 10 अंकों का मोबाइल नंबर लिखें।",
      "err.msg": "कृपया अपना संदेश लिखें (कम से कम 5 अक्षर)।",
      "float.call": "कॉल",
      "float.wa": "व्हाट्सऐप",
      "footer.rights": "© {year} NEW SHIV MEDICAL HALL. सर्वाधिकार सुरक्षित।",
      "footer.disc": "कोई भी दवाई लेने से पहले अपने डॉक्टर से सलाह लें। डॉक्टर की पर्ची वाली दवाइयों के लिए वैध पर्ची ज़रूरी है।",
      "footer.privacy": "गोपनीयता: हम इस वेबसाइट पर आपका व्यक्तिगत डेटा न तो इकट्ठा करते हैं और न ही सेव करते हैं।",

      "admin.title": "मालिक पैनल – दवाइयाँ प्रबंधित करें",
      "admin.back": "वेबसाइट पर वापस जाएँ",
      "admin.setup": "एक बार की सेटिंग",
      "admin.setupHelp": "अपनी GitHub जानकारी भरें। एक्सेस टोकन केवल इसी ब्राउज़र में सेव रहता है, इसलिए सूची सिर्फ़ आप ही बदल सकते हैं।",
      "admin.owner": "GitHub यूज़रनेम",
      "admin.repo": "रिपॉज़िटरी का नाम",
      "admin.branch": "ब्रांच",
      "admin.token": "एक्सेस टोकन",
      "admin.tokenHelp": "टोकन कैसे बनाएँ: GitHub → Settings → Developer settings → Fine-grained tokens → Generate। केवल यही रिपॉज़िटरी चुनें और “Contents: Read and write” अनुमति दें।",
      "admin.connect": "सेव करें और जोड़ें",
      "admin.disconnect": "डिस्कनेक्ट करें",
      "admin.connected": "GitHub से जुड़ गया।",
      "admin.add": "आइटम जोड़ें / बदलें",
      "admin.name": "दवाई का नाम",
      "admin.category": "श्रेणी",
      "admin.price": "कीमत (₹)",
      "admin.availability": "उपलब्धता",
      "admin.desc": "विवरण (वैकल्पिक)",
      "admin.photo": "दवाई की फ़ोटो",
      "admin.save": "आइटम सेव करें",
      "admin.cancel": "बदलाव रद्द करें",
      "admin.list": "आपके आइटम",
      "admin.edit": "बदलें",
      "admin.delete": "हटाएँ",
      "admin.toStock": "उपलब्ध करें",
      "admin.toOut": "स्टॉक में नहीं करें",
      "admin.confirmDelete": "क्या यह आइटम हटाना है?",
      "admin.saving": "सेव हो रहा है… कृपया प्रतीक्षा करें।",
      "admin.saved": "सेव हो गया! वेबसाइट 1–2 मिनट में अपडेट हो जाएगी।",
      "admin.export": "बैकअप डाउनलोड करें",
      "admin.empty": "अभी कोई आइटम नहीं है। ऊपर अपनी पहली दवाई जोड़ें।",
      "admin.loading": "लोड हो रहा है…",
      "admin.errConnect": "जुड़ नहीं सका। यूज़रनेम, रिपॉज़िटरी का नाम, ब्रांच और टोकन जाँचें।",
      "admin.errRequired": "कृपया दवाई का नाम और सही कीमत लिखें।",
      "admin.errImage": "कृपया इमेज फ़ाइल (फ़ोटो) चुनें।",
      "admin.errSave": "सेव नहीं हो सका। कृपया इंटरनेट जाँचकर दोबारा कोशिश करें।",
      "admin.keepPhoto": "मौजूदा फ़ोटो रखने के लिए खाली छोड़ें।"
    },

    pa: {
      "meta.title": "NEW SHIV MEDICAL HALL – ਗੁਰੂਹਰਸਹਾਏ ਦੀ ਭਰੋਸੇਯੋਗ ਦਵਾਈਆਂ ਦੀ ਦੁਕਾਨ",
      "meta.desc": "NEW SHIV MEDICAL HALL, ਗੁਰਦੁਆਰਾ ਬੇਰ ਸਾਹਿਬ ਦੇ ਨੇੜੇ, ਗੁਰੂਹਰਸਹਾਏ, ਪੰਜਾਬ। ਦਵਾਈਆਂ ਅਤੇ ਸਿਹਤ ਉਤਪਾਦ। ਸਵੇਰੇ 8:00 ਵਜੇ ਤੋਂ ਰਾਤ 9:00 ਵਜੇ ਤੱਕ ਖੁੱਲ੍ਹੀ।",
      "nav.home": "ਮੁੱਖ ਪੰਨਾ",
      "nav.about": "ਸਾਡੇ ਬਾਰੇ",
      "nav.categories": "ਸ਼੍ਰੇਣੀਆਂ",
      "nav.products": "ਦਵਾਈਆਂ ਅਤੇ ਕੀਮਤਾਂ",
      "nav.contact": "ਸੰਪਰਕ",
      "nav.menu": "ਮੇਨੂ",
      "lang.label": "ਭਾਸ਼ਾ",
      "hero.badge": "ਤੁਹਾਡੇ ਆਪਣੇ ਮੁਹੱਲੇ ਦੀ ਦਵਾਈਆਂ ਦੀ ਦੁਕਾਨ",
      "hero.title": "ਤੁਹਾਡੀ ਸਿਹਤ, ਸਾਡੀ ਜ਼ਿੰਮੇਵਾਰੀ",
      "hero.sub": "ਪੂਰੇ ਪਰਿਵਾਰ ਲਈ ਦਵਾਈਆਂ ਅਤੇ ਸਿਹਤ ਉਤਪਾਦ, ਗੁਰਦੁਆਰਾ ਬੇਰ ਸਾਹਿਬ ਦੇ ਨੇੜੇ, ਗੁਰੂਹਰਸਹਾਏ।",
      "hero.call": "ਹੁਣੇ ਕਾਲ ਕਰੋ",
      "hero.wa": "ਵਟਸਐਪ ਕਰੋ",
      "hero.view": "ਦਵਾਈਆਂ ਅਤੇ ਕੀਮਤਾਂ ਵੇਖੋ",
      "hero.hours": "ਦੁਕਾਨ ਦਾ ਸਮਾਂ",
      "about.title": "ਸਾਡੀ ਦੁਕਾਨ ਬਾਰੇ",
      "about.p1": "NEW SHIV MEDICAL HALL ਗੁਰੂਹਰਸਹਾਏ ਵਿੱਚ ਸਥਿਤ ਦਵਾਈਆਂ ਦੀ ਦੁਕਾਨ ਹੈ, ਜਿਸ ਦੇ ਮਾਲਕ TARSEM CHAND ਹਨ।",
      "about.p2": "ਤੁਹਾਡੀ ਦਵਾਈ ਉਪਲਬਧ ਹੈ ਜਾਂ ਨਹੀਂ, ਇਹ ਜਾਣਨ ਲਈ ਦੁਕਾਨ 'ਤੇ ਆਓ ਜਾਂ ਵਟਸਐਪ 'ਤੇ ਸੁਨੇਹਾ ਭੇਜੋ। ਕਿਰਪਾ ਕਰਕੇ ਹਮੇਸ਼ਾ ਆਪਣੇ ਡਾਕਟਰ ਦੀ ਪਰਚੀ ਅਨੁਸਾਰ ਹੀ ਦਵਾਈ ਲਓ।",
      "about.f1.t": "ਆਸਾਨੀ ਨਾਲ ਲੱਭੋ",
      "about.f1.d": "ਗੁਰਦੁਆਰਾ ਬੇਰ ਸਾਹਿਬ ਦੇ ਨੇੜੇ, ਗੁਰੂਹਰਸਹਾਏ।",
      "about.f2.t": "ਆਉਣ ਤੋਂ ਪਹਿਲਾਂ ਪੁੱਛੋ",
      "about.f2.d": "ਉਪਲਬਧਤਾ ਜਾਣਨ ਲਈ ਕਾਲ ਜਾਂ ਵਟਸਐਪ ਕਰੋ।",
      "about.f3.t": "ਕੀਮਤਾਂ ਆਨਲਾਈਨ ਵੇਖੋ",
      "about.f3.d": "ਇਸ ਵੈੱਬਸਾਈਟ 'ਤੇ ਸੂਚੀਬੱਧ ਦਵਾਈਆਂ ਕੀਮਤਾਂ ਸਮੇਤ ਵੇਖੋ।",
      "cat.title": "ਉਤਪਾਦ ਸ਼੍ਰੇਣੀਆਂ",
      "cat.sub": "ਉਤਪਾਦਾਂ ਦੀਆਂ ਕਿਸਮਾਂ ਜਿਨ੍ਹਾਂ ਬਾਰੇ ਤੁਸੀਂ ਸਾਡੇ ਤੋਂ ਪੁੱਛ ਸਕਦੇ ਹੋ",
      "cat.view": "ਆਈਟਮ ਵੇਖੋ",
      "cat.medicines": "ਦਵਾਈਆਂ",
      "cat.vitamins": "ਵਿਟਾਮਿਨ ਅਤੇ ਸਪਲੀਮੈਂਟ",
      "cat.babycare": "ਬੱਚਿਆਂ ਦੀ ਦੇਖਭਾਲ",
      "cat.personal": "ਨਿੱਜੀ ਦੇਖਭਾਲ",
      "cat.devices": "ਸਿਹਤ ਉਪਕਰਣ",
      "cat.firstaid": "ਮੁਢਲੀ ਸਹਾਇਤਾ",
      "prod.title": "ਉਪਲਬਧ ਦਵਾਈਆਂ ਅਤੇ ਕੀਮਤਾਂ",
      "prod.sub": "ਦੁਕਾਨ ਮਾਲਕ ਵੱਲੋਂ ਅੱਪਡੇਟ ਕੀਤੀ ਗਈ।",
      "prod.search": "ਦਵਾਈ ਦਾ ਨਾਮ ਲੱਭੋ",
      "prod.all": "ਸਭ",
      "prod.instock": "ਉਪਲਬਧ",
      "prod.outstock": "ਸਟਾਕ ਵਿੱਚ ਨਹੀਂ",
      "prod.price": "ਕੀਮਤ",
      "prod.none": "ਕੋਈ ਆਈਟਮ ਨਹੀਂ ਮਿਲੀ।",
      "prod.empty": "ਸਾਡੀ ਦਵਾਈਆਂ ਦੀ ਸੂਚੀ ਜਲਦੀ ਜੋੜੀ ਜਾਵੇਗੀ। ਕਿਸੇ ਵੀ ਦਵਾਈ ਬਾਰੇ ਪੁੱਛਣ ਲਈ ਕਾਲ ਜਾਂ ਵਟਸਐਪ ਕਰੋ।",
      "prod.loaderr": "ਸੂਚੀ ਲੋਡ ਨਹੀਂ ਹੋ ਸਕੀ। ਕਿਰਪਾ ਕਰਕੇ ਬਾਅਦ ਵਿੱਚ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
      "prod.loading": "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ…",
      "prod.ask": "ਵਟਸਐਪ 'ਤੇ ਪੁੱਛੋ",
      "prod.note": "ਕੀਮਤਾਂ ਅਤੇ ਉਪਲਬਧਤਾ ਬਦਲ ਸਕਦੀਆਂ ਹਨ। ਆਉਣ ਤੋਂ ਪਹਿਲਾਂ ਪੁਸ਼ਟੀ ਲਈ ਕਾਲ ਕਰੋ।",
      "prod.wamsg": "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ, ਕਿਰਪਾ ਕਰਕੇ ਇਸ ਬਾਰੇ ਜਾਣਕਾਰੀ ਦਿਓ: {name}",
      "hours.title": "ਖੁੱਲ੍ਹਣ ਦਾ ਸਮਾਂ",
      "hours.value": "ਸਵੇਰੇ 8:00 ਵਜੇ ਤੋਂ ਰਾਤ 9:00 ਵਜੇ ਤੱਕ",
      "contact.title": "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
      "contact.owner": "ਮਾਲਕ",
      "contact.phone": "ਫ਼ੋਨ",
      "contact.wa": "ਵਟਸਐਪ",
      "contact.address": "ਪਤਾ",
      "contact.addressValue": "ਗੁਰਦੁਆਰਾ ਬੇਰ ਸਾਹਿਬ ਦੇ ਨੇੜੇ, ਗੁਰੂਹਰਸਹਾਏ",
      "contact.hours": "ਖੁੱਲ੍ਹਣ ਦਾ ਸਮਾਂ",
      "contact.map": "ਮੈਪ ਵਿੱਚ ਖੋਲ੍ਹੋ",
      "form.title": "ਪੁੱਛਗਿੱਛ ਭੇਜੋ",
      "form.name": "ਤੁਹਾਡਾ ਨਾਮ",
      "form.phone": "ਫ਼ੋਨ ਨੰਬਰ",
      "form.msg": "ਤੁਹਾਡਾ ਸੁਨੇਹਾ (ਦਵਾਈ ਦਾ ਨਾਮ, ਮਾਤਰਾ ਆਦਿ)",
      "form.send": "ਵਟਸਐਪ ਰਾਹੀਂ ਭੇਜੋ",
      "form.ok": "ਤੁਹਾਡੀ ਪੁੱਛਗਿੱਛ ਨਾਲ ਵਟਸਐਪ ਖੁੱਲ੍ਹ ਰਿਹਾ ਹੈ…",
      "form.privacy": "ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਸਿਰਫ਼ ਦੁਕਾਨ ਨਾਲ ਵਟਸਐਪ ਚੈਟ ਖੋਲ੍ਹਣ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ। ਇਹ ਵੈੱਬਸਾਈਟ ਇਸਨੂੰ ਸੇਵ ਨਹੀਂ ਕਰਦੀ ਅਤੇ ਨਾ ਹੀ ਕਿਸੇ ਸਰਵਰ 'ਤੇ ਭੇਜਦੀ ਹੈ।",
      "form.waGreeting": "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ NEW SHIV MEDICAL HALL,",
      "form.waName": "ਨਾਮ",
      "form.waPhone": "ਫ਼ੋਨ",
      "err.name": "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਨਾਮ ਲਿਖੋ।",
      "err.phone": "ਕਿਰਪਾ ਕਰਕੇ ਸਹੀ 10 ਅੰਕਾਂ ਦਾ ਮੋਬਾਈਲ ਨੰਬਰ ਲਿਖੋ।",
      "err.msg": "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਸੁਨੇਹਾ ਲਿਖੋ (ਘੱਟੋ-ਘੱਟ 5 ਅੱਖਰ)।",
      "float.call": "ਕਾਲ",
      "float.wa": "ਵਟਸਐਪ",
      "footer.rights": "© {year} NEW SHIV MEDICAL HALL. ਸਾਰੇ ਅਧਿਕਾਰ ਰਾਖਵੇਂ ਹਨ।",
      "footer.disc": "ਕੋਈ ਵੀ ਦਵਾਈ ਲੈਣ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੇ ਡਾਕਟਰ ਦੀ ਸਲਾਹ ਲਓ। ਡਾਕਟਰ ਦੀ ਪਰਚੀ ਵਾਲੀਆਂ ਦਵਾਈਆਂ ਲਈ ਜਾਇਜ਼ ਪਰਚੀ ਜ਼ਰੂਰੀ ਹੈ।",
      "footer.privacy": "ਗੋਪਨੀਯਤਾ: ਅਸੀਂ ਇਸ ਵੈੱਬਸਾਈਟ 'ਤੇ ਤੁਹਾਡਾ ਨਿੱਜੀ ਡੇਟਾ ਨਾ ਇਕੱਠਾ ਕਰਦੇ ਹਾਂ ਅਤੇ ਨਾ ਹੀ ਸੇਵ ਕਰਦੇ ਹਾਂ।",

      "admin.title": "ਮਾਲਕ ਪੈਨਲ – ਦਵਾਈਆਂ ਦਾ ਪ੍ਰਬੰਧ",
      "admin.back": "ਵੈੱਬਸਾਈਟ 'ਤੇ ਵਾਪਸ ਜਾਓ",
      "admin.setup": "ਇੱਕ ਵਾਰ ਦੀ ਸੈਟਿੰਗ",
      "admin.setupHelp": "ਆਪਣੀ GitHub ਜਾਣਕਾਰੀ ਭਰੋ। ਐਕਸੈਸ ਟੋਕਨ ਸਿਰਫ਼ ਇਸੇ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਸੇਵ ਰਹਿੰਦਾ ਹੈ, ਇਸ ਲਈ ਸੂਚੀ ਸਿਰਫ਼ ਤੁਸੀਂ ਹੀ ਬਦਲ ਸਕਦੇ ਹੋ।",
      "admin.owner": "GitHub ਯੂਜ਼ਰਨੇਮ",
      "admin.repo": "ਰਿਪੌਜ਼ਟਰੀ ਦਾ ਨਾਮ",
      "admin.branch": "ਬ੍ਰਾਂਚ",
      "admin.token": "ਐਕਸੈਸ ਟੋਕਨ",
      "admin.tokenHelp": "ਟੋਕਨ ਕਿਵੇਂ ਬਣਾਉਣਾ ਹੈ: GitHub → Settings → Developer settings → Fine-grained tokens → Generate। ਸਿਰਫ਼ ਇਹੀ ਰਿਪੌਜ਼ਟਰੀ ਚੁਣੋ ਅਤੇ “Contents: Read and write” ਇਜਾਜ਼ਤ ਦਿਓ।",
      "admin.connect": "ਸੇਵ ਕਰੋ ਅਤੇ ਜੋੜੋ",
      "admin.disconnect": "ਡਿਸਕਨੈਕਟ ਕਰੋ",
      "admin.connected": "GitHub ਨਾਲ ਜੁੜ ਗਿਆ।",
      "admin.add": "ਆਈਟਮ ਜੋੜੋ / ਬਦਲੋ",
      "admin.name": "ਦਵਾਈ ਦਾ ਨਾਮ",
      "admin.category": "ਸ਼੍ਰੇਣੀ",
      "admin.price": "ਕੀਮਤ (₹)",
      "admin.availability": "ਉਪਲਬਧਤਾ",
      "admin.desc": "ਵੇਰਵਾ (ਵਿਕਲਪਿਕ)",
      "admin.photo": "ਦਵਾਈ ਦੀ ਫ਼ੋਟੋ",
      "admin.save": "ਆਈਟਮ ਸੇਵ ਕਰੋ",
      "admin.cancel": "ਬਦਲਾਅ ਰੱਦ ਕਰੋ",
      "admin.list": "ਤੁਹਾਡੀਆਂ ਆਈਟਮਾਂ",
      "admin.edit": "ਬਦਲੋ",
      "admin.delete": "ਹਟਾਓ",
      "admin.toStock": "ਉਪਲਬਧ ਕਰੋ",
      "admin.toOut": "ਸਟਾਕ ਵਿੱਚ ਨਹੀਂ ਕਰੋ",
      "admin.confirmDelete": "ਕੀ ਇਹ ਆਈਟਮ ਹਟਾਉਣੀ ਹੈ?",
      "admin.saving": "ਸੇਵ ਹੋ ਰਿਹਾ ਹੈ… ਕਿਰਪਾ ਕਰਕੇ ਉਡੀਕ ਕਰੋ।",
      "admin.saved": "ਸੇਵ ਹੋ ਗਿਆ! ਵੈੱਬਸਾਈਟ 1–2 ਮਿੰਟ ਵਿੱਚ ਅੱਪਡੇਟ ਹੋ ਜਾਵੇਗੀ।",
      "admin.export": "ਬੈਕਅੱਪ ਡਾਊਨਲੋਡ ਕਰੋ",
      "admin.empty": "ਹਾਲੇ ਕੋਈ ਆਈਟਮ ਨਹੀਂ। ਉੱਪਰ ਆਪਣੀ ਪਹਿਲੀ ਦਵਾਈ ਜੋੜੋ।",
      "admin.loading": "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ…",
      "admin.errConnect": "ਜੁੜ ਨਹੀਂ ਸਕਿਆ। ਯੂਜ਼ਰਨੇਮ, ਰਿਪੌਜ਼ਟਰੀ ਦਾ ਨਾਮ, ਬ੍ਰਾਂਚ ਅਤੇ ਟੋਕਨ ਜਾਂਚੋ।",
      "admin.errRequired": "ਕਿਰਪਾ ਕਰਕੇ ਦਵਾਈ ਦਾ ਨਾਮ ਅਤੇ ਸਹੀ ਕੀਮਤ ਲਿਖੋ।",
      "admin.errImage": "ਕਿਰਪਾ ਕਰਕੇ ਇਮੇਜ ਫ਼ਾਈਲ (ਫ਼ੋਟੋ) ਚੁਣੋ।",
      "admin.errSave": "ਸੇਵ ਨਹੀਂ ਹੋ ਸਕਿਆ। ਕਿਰਪਾ ਕਰਕੇ ਇੰਟਰਨੈੱਟ ਜਾਂਚ ਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
      "admin.keepPhoto": "ਮੌਜੂਦਾ ਫ਼ੋਟੋ ਰੱਖਣ ਲਈ ਖਾਲੀ ਛੱਡੋ।"
    }
  };

  function getLang() {
    var l = null;
    try { l = localStorage.getItem(STORE_KEY); } catch (e) {}
    return LANGS[l] ? l : "en";
  }

  function t(key, vars) {
    var lang = getLang();
    var s = (D[lang] && D[lang][key]);
    if (s === undefined) s = D.en[key];
    if (s === undefined) return key;
    if (vars) {
      Object.keys(vars).forEach(function (k) {
        s = s.split("{" + k + "}").join(vars[k]);
      });
    }
    return s;
  }

  function apply(lang) {
    if (!LANGS[lang]) lang = "en";
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    var root = document.documentElement;
    root.setAttribute("lang", LANGS[lang].html);
    root.setAttribute("data-lang", lang);

    var year = new Date().getFullYear();
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"), { year: year });
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    var titleKey = document.body.getAttribute("data-title-key") || "meta.title";
    document.title = t(titleKey);
    var md = document.querySelector('meta[name="description"]');
    if (md && document.body.getAttribute("data-desc-key")) {
      md.setAttribute("content", t(document.body.getAttribute("data-desc-key")));
    }
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      var on = b.getAttribute("data-lang") === lang;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
  }

  function init() {
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
    });
    // keep language in sync if changed in another tab
    window.addEventListener("storage", function (e) {
      if (e.key === STORE_KEY) apply(getLang());
    });
    apply(getLang());
  }

  window.I18N = { t: t, getLang: getLang, apply: apply, dictionary: D, langs: LANGS };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
