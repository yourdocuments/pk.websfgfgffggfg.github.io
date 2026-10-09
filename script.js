/* =========================================================
   WEBSITESDEAL PAKISTAN — COMPLETE SCRIPT.JS
   Language: Urdu / English
   Currency: PKR
   Compatible with the current index.html
   ========================================================= */

"use strict";

/* =========================
   1. TRANSLATIONS
========================= */

const translations = {
  ur: {
    pageTitle: "WebsitesDeal پاکستان",
    navHome: "ہوم",
    navTemplates: "ویب سائٹ ٹیمپلیٹس",
    navBenefits: "فوائد",
    navProcess: "طریقۂ کار",
    navCta: "ویب سائٹ بنوائیں",

    announcement: "اپنے کاروبار کو آن لائن لے جائیں",
    explore: "ابھی دیکھیں",

    heroEyebrow: "آپ کے کاروبار کے لیے ڈیجیٹل حل",
    heroTitle: 'آپ کی ویب سائٹ،<br><span>آپ کی پہچان</span>',
    heroText: "اپنے کاروبار، اسٹور یا ذاتی برانڈ کے لیے ایک خوبصورت، جدید اور موبائل فرینڈلی ویب سائٹ منتخب کریں۔",
    heroCta: "ٹیمپلیٹس دیکھیں",
    heroSecondary: "ہم کیسے کام کرتے ہیں؟",
    trustTitle: "آپ کے کاروبار کے لیے تیار",
    trustText: "جدید ڈیزائن، موبائل فرینڈلی لے آؤٹ اور آسان حسبِ ضرورت تبدیلیاں",
    chipModern: "جدید ڈیزائن",
    chipReady: "موبائل فرینڈلی",
    categoryIntro: "اپنی ضرورت منتخب کریں",

    business: "کاروبار",
    portfolio: "پورٹ فولیو",
    store: "آن لائن اسٹور",
    education: "تعلیم",

    templateEyebrow: "منتخب ڈیزائن",
    templateTitle: 'اپنی پسند کا <span>ٹیمپلیٹ</span> منتخب کریں',
    templateText: "مختلف شعبوں کے لیے بنائے گئے ڈیزائن دیکھیں اور اپنے پسندیدہ ڈیزائن کے بارے میں معلومات حاصل کریں۔",
    designs: "ڈیزائن",
    searchPlaceholder: "ٹیمپلیٹ تلاش کریں...",
    sortLabel: "ترتیب:",
    sortFeatured: "نمایاں",
    sortLow: "کم قیمت پہلے",
    sortHigh: "زیادہ قیمت پہلے",
    sortName: "نام کے مطابق",

    filterAll: "تمام ڈیزائن",
    filterBusiness: "کاروبار",
    filterStore: "آن لائن اسٹور",
    filterPortfolio: "پورٹ فولیو",
    filterRestaurant: "ریسٹورنٹ",
    filterEducation: "تعلیم",

    emptyTitle: "کوئی ڈیزائن نہیں ملا",
    emptyText: "تلاش یا فلٹر تبدیل کرکے دوبارہ کوشش کریں۔",
    reset: "فلٹر ری سیٹ کریں",
    demoNote: "قیمتیں نمونہ جاتی ہیں۔ حتمی قیمت اور خصوصیات کی تصدیق سپورٹ سے کریں۔",

    benefitEyebrow: "ہمیں کیوں منتخب کریں؟",
    benefitTitle: 'آپ کے لیے <span>آسان ویب سائٹ حل</span>',
    benefitText: "ہم آپ کے کاروبار کے لیے مناسب ویب سائٹ منتخب کرنے کے عمل کو آسان بناتے ہیں۔",
    benefit1Title: "جدید ڈیزائن",
    benefit1Text: "پیشہ ورانہ اور خوبصورت ڈیزائن جو آپ کے برانڈ کی شناخت بہتر بنانے میں مدد دے۔",
    benefit2Title: "موبائل فرینڈلی",
    benefit2Text: "ایسا لے آؤٹ جو موبائل، ٹیبلٹ اور ڈیسک ٹاپ پر بہتر انداز میں نظر آئے۔",
    benefit3Title: "آسان رابطہ",
    benefit3Text: "اپنی ضرورت بتائیں اور مناسب ڈیزائن، قیمت اور اگلے مراحل کے بارے میں معلومات لیں۔",

    processEyebrow: "کام کرنے کا طریقہ",
    processTitle: 'صرف تین مراحل میں<br><span>اپنی ویب سائٹ کا آغاز کریں</span>',
    processText: "اپنی ضرورت بتائیں، ڈیزائن منتخب کریں اور اگلے مراحل کے لیے ہم سے رابطہ کریں۔",
    processCta: "سپورٹ سے رابطہ کریں",
    step1Title: "اپنی ضرورت بتائیں",
    step1Text: "اپنے کاروبار اور ویب سائٹ کے مقصد کے بارے میں بتائیں۔",
    step2Title: "ڈیزائن منتخب کریں",
    step2Text: "موجودہ ڈیزائن دیکھیں اور اپنی پسند کا ٹیمپلیٹ منتخب کریں۔",
    step3Title: "اگلے مراحل طے کریں",
    step3Text: "قیمت، خصوصیات اور ویب سائٹ کی تیاری کے بارے میں سپورٹ سے بات کریں۔",

    ctaEyebrow: "اپنا کاروبار آن لائن لائیں",
    ctaTitle: "کیا آپ اپنی ویب سائٹ شروع کرنے کے لیے تیار ہیں؟",
    ctaText: "اپنی ضرورت کے مطابق ویب سائٹ منتخب کرنے کے لیے ہماری ٹیم سے رابطہ کریں۔",
    ctaButton: "ابھی رابطہ کریں",

    footerText: "آپ کے کاروبار کے لیے جدید ویب سائٹ ڈیزائن اور ڈیجیٹل حل۔",
    support: "سپورٹ",
    backTop: "اوپر جائیں",

    modalNote: "یہ ایک نمونہ ٹیمپلیٹ ہے۔ حتمی قیمت، دستیابی اور فیچرز سپورٹ سے تصدیق کریں۔",
    modalContact: "سپورٹ سے رابطہ کریں",

    preview: "پری ویو",
    details: "تفصیلات",
    priceFrom: "قیمت",
    categoryLabel: "قسم",
    noPrice: "قیمت کی تصدیق کریں",
    toastLanguage: "زبان تبدیل ہوگئی",
    toastTheme: "تھیم تبدیل ہوگئی",
    toastReset: "فلٹر ری سیٹ ہوگئے",
    toastPreview: "ٹیمپلیٹ کی تفصیلات کھول دی گئی ہیں",
    toastError: "کچھ غلط ہوگیا۔ دوبارہ کوشش کریں۔",

    categoryBusiness: "کاروبار",
    categoryPortfolio: "پورٹ فولیو",
    categoryStore: "آن لائن اسٹور",
    categoryRestaurant: "ریسٹورنٹ",
    categoryEducation: "تعلیم"
  },

  en: {
    pageTitle: "WebsitesDeal Pakistan",
    navHome: "Home",
    navTemplates: "Templates",
    navBenefits: "Benefits",
    navProcess: "How It Works",
    navCta: "Get a Website",

    announcement: "Take your business online",
    explore: "Explore Now",

    heroEyebrow: "Digital solutions for your business",
    heroTitle: 'Your Website,<br><span>Your Identity</span>',
    heroText: "Choose a beautiful, modern and mobile-friendly website for your business, online store or personal brand.",
    heroCta: "Explore Templates",
    heroSecondary: "How It Works",
    trustTitle: "Built for Your Business",
    trustText: "Modern designs, mobile-friendly layouts and customization options",
    chipModern: "Modern Design",
    chipReady: "Mobile Friendly",
    categoryIntro: "Choose Your Category",

    business: "Business",
    portfolio: "Portfolio",
    store: "Online Store",
    education: "Education",

    templateEyebrow: "Curated Designs",
    templateTitle: 'Choose Your <span>Template</span>',
    templateText: "Explore website designs for different industries and discover the right starting point for your project.",
    designs: "designs",
    searchPlaceholder: "Search templates...",
    sortLabel: "Sort:",
    sortFeatured: "Featured",
    sortLow: "Price: Low to High",
    sortHigh: "Price: High to Low",
    sortName: "Name",

    filterAll: "All Designs",
    filterBusiness: "Business",
    filterStore: "Online Store",
    filterPortfolio: "Portfolio",
    filterRestaurant: "Restaurant",
    filterEducation: "Education",

    emptyTitle: "No templates found",
    emptyText: "Try changing your search or filters.",
    reset: "Reset Filters",
    demoNote: "Prices are illustrative. Confirm final pricing and features with support.",

    benefitEyebrow: "Why Choose Us?",
    benefitTitle: 'A Simpler <span>Website Solution</span>',
    benefitText: "We make it easier to find a suitable website design for your business.",
    benefit1Title: "Modern Designs",
    benefit1Text: "Professional, attractive designs that help strengthen your brand identity.",
    benefit2Title: "Mobile Friendly",
    benefit2Text: "Layouts designed to work across mobile phones, tablets and desktop screens.",
    benefit3Title: "Easy Support",
    benefit3Text: "Tell us what you need and get guidance on designs, pricing and next steps.",

    processEyebrow: "How It Works",
    processTitle: 'Start Your Website in<br><span>Just Three Steps</span>',
    processText: "Tell us what you need, choose a design and contact our team about the next steps.",
    processCta: "Contact Support",
    step1Title: "Tell Us Your Needs",
    step1Text: "Explain your business and the purpose of your website.",
    step2Title: "Choose a Design",
    step2Text: "Browse available designs and select the template you like.",
    step3Title: "Plan the Next Steps",
    step3Text: "Discuss pricing, features and website development with support.",

    ctaEyebrow: "Bring Your Business Online",
    ctaTitle: "Ready to Start Your Website?",
    ctaText: "Contact our team to find a website solution that fits your needs.",
    ctaButton: "Contact Us Today",

    footerText: "Modern website designs and digital solutions for your business.",
    support: "Support",
    backTop: "Back to top",

    modalNote: "This is a sample template. Confirm final pricing, availability and features with support.",
    modalContact: "Contact Support",

    preview: "Preview",
    details: "Details",
    priceFrom: "Price",
    categoryLabel: "Category",
    noPrice: "Contact for pricing",
    toastLanguage: "Language changed",
    toastTheme: "Theme changed",
    toastReset: "Filters have been reset",
    toastPreview: "Template details opened",
    toastError: "Something went wrong. Please try again.",

    categoryBusiness: "Business",
    categoryPortfolio: "Portfolio",
    categoryStore: "Online Store",
    categoryRestaurant: "Restaurant",
    categoryEducation: "Education"
  }
};


/* =========================
   2. TEMPLATE DATA
   Prices are illustrative PKR amounts.
========================= */

const templates = [
  {
    id: 1,
    name: "Business Pro",
    nameUr: "بزنس پرو",
    category: "business",
    price: 549,
    featured: 1,
    icon: "▦",
    color: "blue",
    description: "A professional website concept for companies, service providers and small businesses.",
    descriptionUr: "کمپنیوں، سروس فراہم کرنے والوں اور چھوٹے کاروباروں کے لیے ایک پیشہ ورانہ ویب سائٹ ڈیزائن۔",
    tags: ["company", "corporate", "services", "business"]
  },
  {
    id: 2,
    name: "Creative Portfolio",
    nameUr: "کری ایٹو پورٹ فولیو",
    category: "portfolio",
    price: 799,
    featured: 2,
    icon: "✳",
    color: "purple",
    description: "A creative portfolio concept for designers, freelancers, photographers and personal brands.",
    descriptionUr: "ڈیزائنرز، فری لانسرز، فوٹوگرافرز اور ذاتی برانڈز کے لیے تخلیقی پورٹ فولیو۔",
    tags: ["designer", "freelancer", "portfolio", "personal"]
  },
  {
    id: 3,
    name: "Online Store",
    nameUr: "آن لائن اسٹور",
    category: "store",
    price: 1499,
    featured: 3,
    icon: "🛍",
    color: "green",
    description: "An e-commerce website concept for showcasing products and building an online shop.",
    descriptionUr: "مصنوعات دکھانے اور آن لائن اسٹور بنانے کے لیے ای کامرس ویب سائٹ ڈیزائن۔",
    tags: ["shop", "ecommerce", "products", "store"]
  },
  {
    id: 4,
    name: "Restaurant Menu",
    nameUr: "ریسٹورنٹ مینو",
    category: "restaurant",
    price: 999,
    featured: 4,
    icon: "✦",
    color: "orange",
    description: "A restaurant website concept for menus, food photography, contact details and reservations.",
    descriptionUr: "مینو، کھانوں کی تصاویر، رابطے اور بکنگ کے لیے ریسٹورنٹ ویب سائٹ ڈیزائن۔",
    tags: ["food", "cafe", "restaurant", "menu"]
  },
  {
    id: 5,
    name: "Education Hub",
    nameUr: "ایجوکیشن ہب",
    category: "education",
    price: 1299,
    featured: 5,
    icon: "⌘",
    color: "cyan",
    description: "An education website concept for institutes, online courses and learning programs.",
    descriptionUr: "اداروں، آن لائن کورسز اور تعلیمی پروگراموں کے لیے ویب سائٹ ڈیزائن۔",
    tags: ["school", "academy", "courses", "education"]
  },
  {
    id: 6,
    name: "Creative Agency",
    nameUr: "کری ایٹو ایجنسی",
    category: "business",
    price: 1199,
    featured: 6,
    icon: "◇",
    color: "pink",
    description: "A modern agency website concept for showcasing services, projects and team expertise.",
    descriptionUr: "سروسز، پروجیکٹس اور ٹیم کی مہارت دکھانے کے لیے جدید ایجنسی ویب سائٹ ڈیزائن۔",
    tags: ["agency", "marketing", "creative", "business"]
  }
];


/* =========================
   3. ELEMENTS AND STATE
========================= */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const elements = {
  body: document.body,
  header: $("#siteHeader"),
  navLinks: $("#navLinks"),
  languageBtn: $("#languageBtn"),
  themeBtn: $("#themeBtn"),
  menuBtn: $("#menuBtn"),
  searchInput: $("#searchInput"),
  sortSelect: $("#sortSelect"),
  filterButtons: $("#filterButtons"),
  templateGrid: $("#templateGrid"),
  resultCount: $("#resultCount"),
  emptyState: $("#emptyState"),
  resetFilters: $("#resetFilters"),
  modal: $("#previewModal"),
  modalPreview: $("#modalPreview"),
  modalCategory: $("#modalCategory"),
  modalTitle: $("#modalTitle"),
  modalDescription: $("#modalDescription"),
  modalPrice: $("#modalPrice"),
  closeModal: $("#closeModal"),
  toast: $("#toast"),
  currentYear: $("#currentYear")
};

let currentLanguage = "ur";
let activeCategory = "all";
let searchQuery = "";
let sortMode = "featured";
let lastFocusedElement = null;
let toastTimer = null;


/* =========================
   4. SAFE HELPERS
========================= */

function getTranslation(key) {
  return translations[currentLanguage]?.[key]
    ?? translations.en[key]
    ?? key;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function formatPrice(price) {
  return new Intl.NumberFormat(
    currentLanguage === "ur" ? "ur-PK" : "en-PK",
    {
      style: "currency",
      currency: "PKR",
      maximumFractionDigits: 0
    }
  ).format(price);
}

function getTemplateName(template) {
  return currentLanguage === "ur" ? template.nameUr : template.name;
}

function getTemplateDescription(template) {
  return currentLanguage === "ur"
    ? template.descriptionUr
    : template.description;
}

function getCategoryName(category) {
  const keyMap = {
    business: "categoryBusiness",
    portfolio: "categoryPortfolio",
    store: "categoryStore",
    restaurant: "categoryRestaurant",
    education: "categoryEducation"
  };

  return getTranslation(keyMap[category] || "business");
}

function showToast(message) {
  if (!elements.toast) return;

  if (toastTimer) {
    clearTimeout(toastTimer);
  }

  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  elements.toast.setAttribute("role", "status");

  toastTimer = setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2600);
}


/* =========================
   5. LANGUAGE SWITCH
========================= */

function applyTranslations() {
  const dictionary = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "ur" ? "rtl" : "ltr";

  document.title = dictionary.pageTitle;

  $$("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (!(key in dictionary)) return;

    // These headings intentionally contain <br> and <span>.
    const htmlKeys = [
      "heroTitle",
      "templateTitle",
      "benefitTitle",
      "processTitle"
    ];

    if (htmlKeys.includes(key)) {
      element.innerHTML = dictionary[key];
    } else {
      element.textContent = dictionary[key];
    }
  });

  $$("[data-i18n-placeholder]").forEach(element => {
    const key = element.dataset.i18nPlaceholder;
    if (key in dictionary) {
      element.setAttribute("placeholder", dictionary[key]);
    }
  });

  $$("option[data-i18n]").forEach(option => {
    const key = option.dataset.i18n;
    if (key in dictionary) {
      option.textContent = dictionary[key];
    }
  });

  if (elements.languageBtn) {
    elements.languageBtn.textContent =
      currentLanguage === "ur" ? "EN" : "اردو";

    elements.languageBtn.setAttribute(
      "aria-label",
      currentLanguage === "ur"
        ? "Switch to English"
        : "اردو میں تبدیل کریں"
    );
  }

  if (elements.searchInput) {
    elements.searchInput.setAttribute(
      "aria-label",
      getTranslation("searchPlaceholder")
    );
  }

  updateThemeButton();
  updateFilterLabels();
  renderTemplates();
}

function toggleLanguage() {
  currentLanguage = currentLanguage === "ur" ? "en" : "ur";

  try {
    localStorage.setItem("wd-language", currentLanguage);
  } catch (error) {
    // The page continues to work when storage is unavailable.
  }

  applyTranslations();
  showToast(getTranslation("toastLanguage"));
}


/* =========================
   6. THEME SWITCH
========================= */

function applyTheme(theme) {
  const isLight = theme === "light";

  elements.body.classList.toggle("light-theme", isLight);
  elements.body.classList.toggle("dark-theme", !isLight);

  updateThemeButton();

  try {
    localStorage.setItem("wd-theme", theme);
  } catch (error) {
    // Ignore unavailable browser storage.
  }
}

function updateThemeButton() {
  if (!elements.themeBtn) return;

  const isLight = elements.body.classList.contains("light-theme");

  elements.themeBtn.textContent = isLight ? "☾" : "☼";
  elements.themeBtn.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );
  elements.themeBtn.setAttribute("title", elements.themeBtn.getAttribute("aria-label"));
}

function toggleTheme() {
  const isLight = elements.body.classList.contains("light-theme");
  applyTheme(isLight ? "dark" : "light");
  showToast(getTranslation("toastTheme"));
}


/* =========================
   7. FILTER BUTTON LABELS
========================= */

function updateFilterLabels() {
  $$("#filterButtons [data-filter]").forEach(button => {
    const category = button.dataset.filter;

    const keyMap = {
      all: "filterAll",
      business: "filterBusiness",
      store: "filterStore",
      portfolio: "filterPortfolio",
      restaurant: "filterRestaurant",
      education: "filterEducation"
    };

    const key = keyMap[category];

    if (key) {
      button.textContent = getTranslation(key);
    }

    const isActive = category === activeCategory;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setActiveCategory(category) {
  const validCategories = [
    "all",
    "business",
    "store",
    "portfolio",
    "restaurant",
    "education"
  ];

  activeCategory = validCategories.includes(category) ? category : "all";

  updateFilterLabels();
  renderTemplates();

  const templatesSection = $("#templates");

  if (templatesSection) {
    templatesSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}


/* =========================
   8. SEARCH AND SORT
========================= */

function getFilteredTemplates() {
  let results = templates.filter(template => {
    const matchesCategory =
      activeCategory === "all" ||
      template.category === activeCategory;

    const searchableText = [
      template.name,
      template.nameUr,
      template.description,
      template.descriptionUr,
      template.category,
      getCategoryName(template.category),
      ...template.tags
    ].join(" ").toLowerCase();

    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = !query || searchableText.includes(query);

    return matchesCategory && matchesSearch;
  });

  switch (sortMode) {
    case "price-low":
      results.sort((a, b) => a.price - b.price);
      break;

    case "price-high":
      results.sort((a, b) => b.price - a.price);
      break;

    case "name":
      results.sort((a, b) =>
        getTemplateName(a).localeCompare(
          getTemplateName(b),
          currentLanguage
        )
      );
      break;

    default:
      results.sort((a, b) => a.featured - b.featured);
  }

  return results;
}


/* =========================
   9. TEMPLATE CARD RENDERING
========================= */

function renderTemplateCard(template) {
  const name = escapeHTML(getTemplateName(template));
  const description = escapeHTML(getTemplateDescription(template));
  const category = escapeHTML(getCategoryName(template.category));
  const price = escapeHTML(formatPrice(template.price));

  return `
    <article class="template-card" data-template-id="${template.id}">
      <div class="template-card-visual visual-${template.color}">
        <div class="template-browser">
          <div class="browser-dots">
            <span></span><span></span><span></span>
          </div>

          <div class="template-artwork">
            <div class="artwork-icon">${template.icon}</div>
            <div class="artwork-line artwork-line-long"></div>
            <div class="artwork-line artwork-line-short"></div>
            <div class="artwork-block"></div>
            <div class="artwork-block artwork-block-small"></div>
          </div>
        </div>

        <span class="template-category">${category}</span>
      </div>

      <div class="template-card-content">
        <div class="template-card-heading">
          <h3>${name}</h3>
          <span class="template-price">${price}</span>
        </div>

        <p class="template-description">${description}</p>

        <div class="template-card-actions">
          <button
            type="button"
            class="template-preview-btn"
            data-preview-id="${template.id}"
          >${escapeHTML(getTranslation("preview"))}</button>

          <button
            type="button"
            class="template-details-btn"
            data-preview-id="${template.id}"
            aria-label="${escapeHTML(getTranslation("details"))}: ${name}"
            title="${escapeHTML(getTranslation("details"))}"
          >↗</button>
        </div>
      </div>
    </article>
  `;
}

function renderTemplates() {
  if (!elements.templateGrid) return;

  const results = getFilteredTemplates();

  elements.templateGrid.innerHTML = results
    .map(renderTemplateCard)
    .join("");

  if (elements.resultCount) {
    elements.resultCount.textContent = String(results.length);
  }

  if (elements.emptyState) {
    elements.emptyState.hidden = results.length !== 0;
  }

  elements.templateGrid.hidden = results.length === 0;

  updateFilterLabels();
}


/* =========================
   10. TEMPLATE PREVIEW MODAL
========================= */

function openPreview(templateId, triggerElement) {
  const template = templates.find(
    item => item.id === Number(templateId)
  );

  if (!template || !elements.modal) return;

  lastFocusedElement = triggerElement || document.activeElement;

  if (elements.modalTitle) {
    elements.modalTitle.textContent = getTemplateName(template);
  }

  if (elements.modalDescription) {
    elements.modalDescription.textContent =
      getTemplateDescription(template);
  }

  if (elements.modalPrice) {
    elements.modalPrice.textContent = formatPrice(template.price);
  }

  if (elements.modalCategory) {
    elements.modalCategory.textContent =
      getCategoryName(template.category);
  }

  if (elements.modalPreview) {
    const color = template.color;

    elements.modalPreview.className = "modal-preview visual-" + color;

    elements.modalPreview.innerHTML = `
      <div class="modal-demo-browser">
        <div class="browser-dots">
          <span></span><span></span><span></span>
        </div>
        <div class="modal-demo-content">
          <div class="modal-demo-icon">${template.icon}</div>
          <h3>${escapeHTML(getTemplateName(template))}</h3>
          <p>${escapeHTML(getCategoryName(template.category))}</p>
          <div class="artwork-line artwork-line-long"></div>
          <div class="artwork-line artwork-line-short"></div>
          <div class="artwork-block"></div>
        </div>
      </div>
    `;
  }

  // Remove hidden first; CSS cannot display an element with [hidden].
  elements.modal.hidden = false;
  elements.modal.classList.add("show");
  elements.body.classList.add("modal-open");

  const closeButton = elements.closeModal;

  if (closeButton) {
    closeButton.focus();
  }

  showToast(getTranslation("toastPreview"));
}

function closePreview() {
  if (!elements.modal || elements.modal.hidden) return;

  elements.modal.classList.remove("show");
  elements.modal.hidden = true;
  elements.body.classList.remove("modal-open");

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}


/* =========================
   11. MOBILE NAVIGATION
========================= */

function closeMobileMenu() {
  if (!elements.navLinks || !elements.menuBtn) return;

  elements.navLinks.classList.remove("active", "open");
  elements.menuBtn.classList.remove("active");
  elements.menuBtn.setAttribute("aria-expanded", "false");
}

function toggleMobileMenu() {
  if (!elements.navLinks || !elements.menuBtn) return;

  const isOpen = !elements.navLinks.classList.contains("active");

  elements.navLinks.classList.toggle("active", isOpen);
  elements.navLinks.classList.toggle("open", isOpen);
  elements.menuBtn.classList.toggle("active", isOpen);
  elements.menuBtn.setAttribute("aria-expanded", String(isOpen));
}


/* =========================
   12. HEADER SCROLL EFFECT
========================= */

function handleScroll() {
  if (!elements.header) return;

  elements.header.classList.toggle(
    "scrolled",
    window.scrollY > 20
  );
}


/* =========================
   13. SCROLL REVEAL
========================= */

function setupRevealAnimations() {
  const selectors = [
    ".benefit-card",
    ".process-step",
    ".template-card",
    ".section-heading",
    ".cta-content"
  ];

  const nodes = $$(selectors.join(","));

  if (!("IntersectionObserver" in window)) {
    nodes.forEach(node => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  nodes.forEach(node => observer.observe(node));
}


/* =========================
   14. RESET FILTERS
========================= */

function resetFilters() {
  activeCategory = "all";
  searchQuery = "";
  sortMode = "featured";

  if (elements.searchInput) {
    elements.searchInput.value = "";
  }

  if (elements.sortSelect) {
    elements.sortSelect.value = "featured";
  }

  renderTemplates();
  showToast(getTranslation("toastReset"));
}


/* =========================
   15. EVENT LISTENERS
========================= */

function bindEvents() {
  // Language toggle
  elements.languageBtn?.addEventListener("click", toggleLanguage);

  // Theme toggle
  elements.themeBtn?.addEventListener("click", toggleTheme);

  // Mobile menu
  elements.menuBtn?.addEventListener("click", toggleMobileMenu);

  // Close mobile menu when a nav link is selected
  elements.navLinks?.addEventListener("click", event => {
    const link = event.target.closest("a");

    if (link) {
      closeMobileMenu();
    }
  });

  // Category filters
  elements.filterButtons?.addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;

    setActiveCategory(button.dataset.filter);
  });

  // Hero category links
  $$("[data-category-link]").forEach(link => {
    link.addEventListener("click", () => {
      setActiveCategory(link.dataset.categoryLink);
    });
  });

  // Template search
  elements.searchInput?.addEventListener("input", event => {
    searchQuery = event.target.value || "";
    renderTemplates();
  });

  // Sorting
  elements.sortSelect?.addEventListener("change", event => {
    sortMode = event.target.value || "featured";
    renderTemplates();
  });

  // Open template preview using event delegation
  elements.templateGrid?.addEventListener("click", event => {
    const trigger = event.target.closest("[data-preview-id]");
    if (!trigger) return;

    openPreview(trigger.dataset.previewId, trigger);
  });

  // Close modal button
  elements.closeModal?.addEventListener("click", closePreview);

  // Close modal by clicking the backdrop
  elements.modal?.addEventListener("click", event => {
    if (event.target === elements.modal) {
      closePreview();
    }
  });

  // Reset search and filters
  elements.resetFilters?.addEventListener("click", resetFilters);

  // Header scroll state
  window.addEventListener("scroll", handleScroll, { passive: true });

  // Keyboard shortcuts
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closePreview();
      closeMobileMenu();
    }

    // "/" focuses search unless typing in an input.
    const tag = document.activeElement?.tagName;
    const isTyping = ["INPUT", "TEXTAREA", "SELECT"].includes(tag)
      || document.activeElement?.isContentEditable;

    if (
      event.key === "/" &&
      !isTyping &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.altKey
    ) {
      event.preventDefault();
      elements.searchInput?.focus();
    }
  });

  // Close mobile navigation when viewport returns to desktop.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMobileMenu();
    }
  });
}


/* =========================
   16. LOAD SAVED PREFERENCES
========================= */

function loadPreferences() {
  try {
    const savedLanguage = localStorage.getItem("wd-language");
    const savedTheme = localStorage.getItem("wd-theme");

    if (savedLanguage && translations[savedLanguage]) {
      currentLanguage = savedLanguage;
    }

    if (savedTheme === "dark" || savedTheme === "light") {
      applyTheme(savedTheme);
    }
  } catch (error) {
    // Default settings are used if storage is unavailable.
  }
}


/* =========================
   17. INITIALIZE WEBSITE
========================= */

function initializeWebsite() {
  loadPreferences();

  if (elements.currentYear) {
    elements.currentYear.textContent = String(new Date().getFullYear());
  }

  if (elements.sortSelect) {
    sortMode = elements.sortSelect.value || "featured";
  }

  if (elements.searchInput) {
    searchQuery = elements.searchInput.value || "";
  }

  bindEvents();
  applyTranslations();
  handleScroll();
  setupRevealAnimations();

  console.info("WebsitesDeal Pakistan initialized successfully.");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeWebsite, {
    once: true
  });
} else {
  initializeWebsite();
}
