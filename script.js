/* =========================================================
   WebsitesDeal Pakistan — Main JavaScript
   File: script.js
   Features: Urdu/English, templates, search, filters,
   sorting, preview modal, theme, mobile menu, animations.
   ========================================================= */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) =>
    Array.from(root.querySelectorAll(selector));

  const body = document.body;

  /* ======================================================
     1. TEMPLATE DATA
     These are demo listings and sample prices in PKR.
     ====================================================== */

  const templates = [
    {
      id: 1,
      title: "Business Pro",
      category: "business",
      price: 549,
      description: "A professional website template for businesses, consultants and service providers.",
      descriptionUr: "کاروبار، کنسلٹنٹس اور سروس فراہم کرنے والوں کے لیے پروفیشنل ویب سائٹ ٹیمپلیٹ۔",
      tags: ["Business", "Responsive", "Modern"],
      style: "linear-gradient(135deg,#e5f0d7,#a9ce8a)",
      accent: "#b7ff00",
      label: "POPULAR"
    },
    {
      id: 2,
      title: "Creative Portfolio",
      category: "portfolio",
      price: 799,
      description: "Showcase your projects, skills and creative work with a modern portfolio.",
      descriptionUr: "اپنے پروجیکٹس، مہارتوں اور تخلیقی کام کو جدید پورٹ فولیو میں دکھائیں۔",
      tags: ["Portfolio", "Designer", "Creative"],
      style: "linear-gradient(135deg,#e9d9ff,#a9a4ff)",
      accent: "#7d67f7",
      label: "CREATIVE"
    },
    {
      id: 3,
      title: "Online Store",
      category: "ecommerce",
      price: 1499,
      description: "A stylish storefront concept for product collections and online shopping.",
      descriptionUr: "مصنوعات اور آن لائن شاپنگ کے لیے جدید ای کامرس اسٹور ڈیزائن۔",
      tags: ["E-commerce", "Products", "Shop"],
      style: "linear-gradient(135deg,#ffe3c3,#ffb56b)",
      accent: "#e98a39",
      label: "STORE"
    },
    {
      id: 4,
      title: "Restaurant Menu",
      category: "restaurant",
      price: 999,
      description: "Present your menu, restaurant story and customer favourites beautifully.",
      descriptionUr: "اپنا مینو، ریسٹورنٹ کی معلومات اور پسندیدہ کھانے خوبصورتی سے پیش کریں۔",
      tags: ["Restaurant", "Food", "Menu"],
      style: "linear-gradient(135deg,#ffd6d2,#f28e80)",
      accent: "#e95b49",
      label: "FOOD"
    },
    {
      id: 5,
      title: "Education Hub",
      category: "education",
      price: 1299,
      description: "A clean education website concept for courses, institutes and learning.",
      descriptionUr: "کورسز، تعلیمی اداروں اور آن لائن تعلیم کے لیے جدید ویب سائٹ ڈیزائن۔",
      tags: ["Education", "Courses", "Learning"],
      style: "linear-gradient(135deg,#cceaff,#7eb8e9)",
      accent: "#3886c5",
      label: "LEARNING"
    },
    {
      id: 6,
      title: "Creative Agency",
      category: "business",
      price: 1199,
      description: "A bold agency layout for showcasing services, case studies and results.",
      descriptionUr: "سروسز، کیس اسٹڈیز اور کامیابیوں کو نمایاں کرنے کے لیے ایجنسی ویب سائٹ۔",
      tags: ["Agency", "Services", "Branding"],
      style: "linear-gradient(135deg,#d0f2dc,#78c6a0)",
      accent: "#299568",
      label: "AGENCY"
    }
  ];

  const categoryLabels = {
    all: { en: "All Templates", ur: "تمام ٹیمپلیٹس" },
    business: { en: "Business", ur: "کاروبار" },
    portfolio: { en: "Portfolio", ur: "پورٹ فولیو" },
    ecommerce: { en: "E-commerce", ur: "ای کامرس" },
    restaurant: { en: "Restaurant", ur: "ریسٹورنٹ" },
    education: { en: "Education", ur: "تعلیم" }
  };

  /* ======================================================
     2. TRANSLATIONS
     ====================================================== */

  const translations = {
    en: {
      announcement: "Launch your online presence with WebsitesDeal Pakistan",
      home: "Home",
      templates: "Templates",
      benefits: "Why Us",
      process: "How It Works",
      contact: "Contact",
      getStarted: "Get Started",
      heroEyebrow: "SMART WEBSITE SOLUTIONS",
      heroTitle: "Your next website starts <span>here.</span>",
      heroDescription: "Discover modern website templates for your business, portfolio, online store and more. Find a design that fits your vision.",
      exploreTemplates: "Explore Templates",
      howItWorks: "How It Works",
      trustOne: "Modern designs",
      trustTwo: "Mobile friendly",
      trustThree: "PKR pricing",
      chipOne: "Easy to explore",
      chipTwo: "Made for your goals",
      quickCategories: "Explore categories",
      collectionEyebrow: "OUR COLLECTION",
      collectionTitle: "Find your perfect template",
      collectionDescription: "Explore our sample website designs and choose a starting point for your next project.",
      searchPlaceholder: "Search templates...",
      sortDefault: "Sort: Featured",
      sortLow: "Price: Low to High",
      sortHigh: "Price: High to Low",
      sortAZ: "Name: A to Z",
      allTemplates: "All Templates",
      noResultsTitle: "No templates found",
      noResultsText: "Try another keyword or choose a different category.",
      resetFilters: "Reset Filters",
      demoNote: "Demo collection with sample prices in PKR. Final pricing depends on the agreed scope.",
      preview: "Preview",
      details: "View Details",
      samplePrice: "Sample price",
      benefitEyebrow: "WHY WEBSITESDEAL",
      benefitTitle: "A smarter way to start online",
      benefitDescription: "Explore website concepts designed to make your next step easier.",
      benefitOneTitle: "Modern Design",
      benefitOneText: "Explore clean layouts and contemporary visual styles.",
      benefitTwoTitle: "Responsive Layouts",
      benefitTwoText: "Discover designs intended to adapt to different screen sizes.",
      benefitThreeTitle: "Clear Pricing",
      benefitThreeText: "Browse sample prices in Pakistani rupees.",
      benefitFourTitle: "Multiple Categories",
      benefitFourText: "Find concepts for business, education, food and more.",
      benefitFiveTitle: "Explore Easily",
      benefitFiveText: "Search, filter and sort the sample collection in seconds.",
      benefitSixTitle: "Project Flexibility",
      benefitSixText: "Discuss your requirements before confirming a final scope.",
      processEyebrow: "SIMPLE PROCESS",
      processTitle: "From idea to website",
      processDescription: "Start with a design direction, discuss your needs and agree on the work before moving forward.",
      stepOneTitle: "Choose a Template",
      stepOneText: "Explore the collection and shortlist a design you like.",
      stepTwoTitle: "Discuss Your Project",
      stepTwoText: "Share your requirements, pages, features and content.",
      stepThreeTitle: "Confirm the Scope",
      stepThreeText: "Agree on deliverables, timeline and final price before work begins.",
      stepFourTitle: "Start Building",
      stepFourText: "Proceed with the project once the details are confirmed.",
      ctaEyebrow: "READY TO GET STARTED?",
      ctaTitle: "Have a website idea in mind?",
      ctaDescription: "Tell us what you want to build and discuss the best next step for your project.",
      ctaButton: "Discuss Your Project",
      footerDescription: "Website design concepts and digital solutions for businesses, creators and growing brands.",
      footerExplore: "Explore",
      footerSupport: "Information",
      footerHome: "Home",
      footerTemplates: "Templates",
      footerBenefits: "Why Us",
      footerProcess: "How It Works",
      footerContact: "Contact",
      footerNotice: "Prices and template listings shown here are examples, not a confirmed checkout offer.",
      modalContact: "Discuss This Template",
      modalNote: "This is a sample design listing. Confirm the final features, delivery and price before ordering.",
      copied: "Template details copied.",
      searchCleared: "Filters reset.",
      themeLight: "Switch to light mode",
      themeDark: "Switch to dark mode",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      close: "Close",
      toastLanguage: "Language changed.",
      noContact: "Add your official contact or order link in script.js before accepting enquiries."
    },
    ur: {
      announcement: "ویب سائٹس ڈیل پاکستان کے ساتھ اپنی آن لائن موجودگی شروع کریں",
      home: "ہوم",
      templates: "ٹیمپلیٹس",
      benefits: "ہمیں کیوں چنیں",
      process: "طریقۂ کار",
      contact: "رابطہ",
      getStarted: "شروع کریں",
      heroEyebrow: "اسمارٹ ویب سائٹ سلوشنز",
      heroTitle: "آپ کی اگلی ویب سائٹ <span>یہاں سے۔</span>",
      heroDescription: "کاروبار، پورٹ فولیو، آن لائن اسٹور اور دیگر ضروریات کے لیے جدید ویب سائٹ ڈیزائن دیکھیں۔ اپنی پسند کا ڈیزائن منتخب کریں۔",
      exploreTemplates: "ٹیمپلیٹس دیکھیں",
      howItWorks: "طریقۂ کار",
      trustOne: "جدید ڈیزائن",
      trustTwo: "موبائل فرینڈلی",
      trustThree: "پاکستانی روپے میں قیمت",
      chipOne: "آسان انتخاب",
      chipTwo: "آپ کے مقصد کے لیے",
      quickCategories: "کیٹیگریز دیکھیں",
      collectionEyebrow: "ہمارا کلیکشن",
      collectionTitle: "اپنی پسند کا ٹیمپلیٹ تلاش کریں",
      collectionDescription: "نمونہ ویب سائٹ ڈیزائن دیکھیں اور اپنے اگلے پروجیکٹ کے لیے ایک مناسب آغاز منتخب کریں۔",
      searchPlaceholder: "ٹیمپلیٹس تلاش کریں...",
      sortDefault: "ترتیب: نمایاں",
      sortLow: "قیمت: کم سے زیادہ",
      sortHigh: "قیمت: زیادہ سے کم",
      sortAZ: "نام: الف سے ی",
      allTemplates: "تمام ٹیمپلیٹس",
      noResultsTitle: "کوئی ٹیمپلیٹ نہیں ملا",
      noResultsText: "دوسرا لفظ لکھیں یا مختلف کیٹیگری منتخب کریں۔",
      resetFilters: "فلٹر ختم کریں",
      demoNote: "یہ نمونہ کلیکشن ہے۔ قیمتیں پاکستانی روپے میں مثال کے طور پر دی گئی ہیں۔ حتمی قیمت کام کے دائرۂ کار پر منحصر ہوگی۔",
      preview: "پیش نظارہ",
      details: "تفصیلات دیکھیں",
      samplePrice: "نمونہ قیمت",
      benefitEyebrow: "ویب سائٹس ڈیل کیوں؟",
      benefitTitle: "آن لائن آغاز کا بہتر طریقہ",
      benefitDescription: "اپنے اگلے قدم کو آسان بنانے کے لیے ویب سائٹ ڈیزائن کے نمونے دیکھیں۔",
      benefitOneTitle: "جدید ڈیزائن",
      benefitOneText: "صاف ستھرے لے آؤٹس اور جدید بصری انداز دیکھیں۔",
      benefitTwoTitle: "ریسپانسیو لے آؤٹس",
      benefitTwoText: "مختلف اسکرین سائز کے لیے بنائے گئے ڈیزائن دیکھیں۔",
      benefitThreeTitle: "واضح قیمتیں",
      benefitThreeText: "پاکستانی روپے میں نمونہ قیمتیں دیکھیں۔",
      benefitFourTitle: "مختلف کیٹیگریز",
      benefitFourText: "کاروبار، تعلیم، کھانے اور دیگر شعبوں کے ڈیزائن دیکھیں۔",
      benefitFiveTitle: "آسان تلاش",
      benefitFiveText: "چند سیکنڈ میں ٹیمپلیٹس تلاش، فلٹر اور ترتیب دیں۔",
      benefitSixTitle: "پروجیکٹ میں لچک",
      benefitSixText: "حتمی فیصلہ کرنے سے پہلے اپنی ضروریات پر بات کریں۔",
      processEyebrow: "آسان طریقۂ کار",
      processTitle: "خیال سے ویب سائٹ تک",
      processDescription: "ڈیزائن منتخب کریں، اپنی ضروریات بتائیں اور کام شروع ہونے سے پہلے تفصیلات طے کریں۔",
      stepOneTitle: "ٹیمپلیٹ منتخب کریں",
      stepOneText: "کلیکشن دیکھیں اور اپنی پسند کا ڈیزائن منتخب کریں۔",
      stepTwoTitle: "پروجیکٹ پر بات کریں",
      stepTwoText: "اپنی ضروریات، صفحات، فیچرز اور مواد کی تفصیل بتائیں۔",
      stepThreeTitle: "کام کی تفصیلات طے کریں",
      stepThreeText: "کام، مدت اور حتمی قیمت پر اتفاق کریں۔",
      stepFourTitle: "کام شروع کریں",
      stepFourText: "تمام تفصیلات کی تصدیق کے بعد پروجیکٹ شروع کریں۔",
      ctaEyebrow: "کیا آپ تیار ہیں؟",
      ctaTitle: "کیا آپ کے ذہن میں ویب سائٹ کا کوئی خیال ہے؟",
      ctaDescription: "اپنا آئیڈیا بتائیں اور اپنے پروجیکٹ کے اگلے قدم پر بات کریں۔",
      ctaButton: "پروجیکٹ پر بات کریں",
      footerDescription: "کاروبار، تخلیق کاروں اور ترقی کرتی برانڈز کے لیے ویب ڈیزائن اور ڈیجیٹل سلوشنز۔",
      footerExplore: "دیکھیں",
      footerSupport: "معلومات",
      footerHome: "ہوم",
      footerTemplates: "ٹیمپلیٹس",
      footerBenefits: "ہمیں کیوں چنیں",
      footerProcess: "طریقۂ کار",
      footerContact: "رابطہ",
      footerNotice: "یہاں دکھائی گئی قیمتیں اور ٹیمپلیٹس مثالیں ہیں، تصدیق شدہ چیک آؤٹ آفر نہیں۔",
      modalContact: "اس ٹیمپلیٹ پر بات کریں",
      modalNote: "یہ ایک نمونہ ڈیزائن ہے۔ آرڈر سے پہلے فیچرز، ڈیلیوری اور حتمی قیمت کی تصدیق کریں۔",
      copied: "ٹیمپلیٹ کی تفصیلات کاپی ہوگئیں۔",
      searchCleared: "فلٹر ختم کردیئے گئے۔",
      themeLight: "لائٹ موڈ منتخب کریں",
      themeDark: "ڈارک موڈ منتخب کریں",
      menuOpen: "مینو کھولیں",
      menuClose: "مینو بند کریں",
      close: "بند کریں",
      toastLanguage: "زبان تبدیل ہوگئی۔",
      noContact: "انکوائری لینے سے پہلے script.js میں اپنا آفیشل رابطہ یا آرڈر لنک شامل کریں۔"
    }
  };

  let currentLanguage = body.dataset.language || "ur";
  if (!translations[currentLanguage]) currentLanguage = "ur";

  let activeCategory = "all";
  let searchTerm = "";
  let sortMode = "featured";
  let activeTemplateId = null;
  let toastTimer = null;
  let lastFocusedElement = null;

  /* ======================================================
     3. HELPERS
     ====================================================== */

  function t(key) {
    return translations[currentLanguage][key]
      || translations.en[key]
      || key;
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

  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }

  function closeMobileMenu() {
    const nav = $("#navLinks");
    const menuButton = $("#menuBtn");

    nav?.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");

    if (menuButton) {
      menuButton.setAttribute("aria-label", t("menuOpen"));
    }
  }

  /* ======================================================
     4. LANGUAGE SWITCH
     ====================================================== */

  function setLanguage(language, showMessage = false) {
    if (!translations[language]) return;

    currentLanguage = language;

    const isUrdu = language === "ur";
    body.dataset.language = language;
    body.setAttribute("lang", language);
    body.setAttribute("dir", isUrdu ? "rtl" : "ltr");

    $$("[data-i18n]").forEach(element => {
      const key = element.dataset.i18n;
      const value = t(key);

      // Only use HTML for the controlled hero heading,
      // where translations intentionally include a span.
      if (key === "heroTitle") {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    });

    $$("[data-i18n-placeholder]").forEach(element => {
      element.setAttribute(
        "placeholder",
        t(element.dataset.i18nPlaceholder)
      );
    });

    $$("[data-i18n-aria-label]").forEach(element => {
      element.setAttribute(
        "aria-label",
        t(element.dataset.i18nAriaLabel)
      );
    });

    const languageButton = $("#languageBtn");
    if (languageButton) {
      languageButton.textContent = isUrdu ? "EN" : "اردو";
      languageButton.setAttribute(
        "aria-label",
        isUrdu ? "Switch to English" : "اردو میں تبدیل کریں"
      );
    }

    const sortSelect = $("#sortSelect");
    if (sortSelect) {
      Array.from(sortSelect.options).forEach(option => {
        const key = option.dataset.i18n;
        if (key) option.textContent = t(key);
      });
    }

    renderFilters();
    renderTemplates();
    updateThemeButton();
    closeMobileMenu();

    if (showMessage) showToast(t("toastLanguage"));
  }

  $("#languageBtn")?.addEventListener("click", () => {
    setLanguage(currentLanguage === "ur" ? "en" : "ur", true);
  });

  /* ======================================================
     5. TEMPLATE CARD PREVIEW ART
     ====================================================== */

  function createPreviewArt(template, large = false) {
    const style = escapeHTML(template.style);
    const accent = escapeHTML(template.accent);

    return `
      <div class="art-mockup" style="background:#f5f7ef">
        <div class="art-browser"></div>
        <div class="art-screen">
          <div style="
            height:7px;width:35%;border-radius:8px;
            background:${accent};margin-bottom:14px
          "></div>
          <div class="art-preview-content">
            <div>
              <div class="art-preview-line long"></div>
              <div class="art-preview-line"></div>
              <div class="art-preview-line short"></div>
              <div style="
                height:17px;width:58%;border-radius:5px;
                background:#1c2c1e;margin-top:13px
              "></div>
            </div>
            <div class="art-preview-block" style="background:${style}"></div>
          </div>
          <div style="
            display:flex;gap:7px;margin-top:7px
          ">
            <span style="height:25px;flex:1;border-radius:5px;background:#e5eadd"></span>
            <span style="height:25px;flex:1;border-radius:5px;background:#e5eadd"></span>
            <span style="height:25px;flex:1;border-radius:5px;background:#e5eadd"></span>
          </div>
        </div>
      </div>
    `;
  }

  function getCategoryLabel(category) {
    return categoryLabels[category]?.[currentLanguage]
      || categoryLabels[category]?.en
      || category;
  }

  /* ======================================================
     6. CATEGORY FILTER BUTTONS
     ====================================================== */

  function renderFilters() {
    const container = $("#filterButtons");
    if (!container) return;

    const usedCategories = [
      "all",
      ...new Set(templates.map(template => template.category))
    ];

    container.innerHTML = usedCategories.map(category => {
      const label = category === "all"
        ? t("allTemplates")
        : getCategoryLabel(category);

      return `
        <button
          type="button"
          class="filter-button ${activeCategory === category ? "active" : ""}"
          data-category="${escapeHTML(category)}"
          aria-pressed="${activeCategory === category}"
        >${escapeHTML(label)}</button>
      `;
    }).join("");
  }

  $("#filterButtons")?.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    activeCategory = button.dataset.category || "all";
    renderFilters();
    renderTemplates();
  });

  $$("[data-category-link]").forEach(link => {
    link.addEventListener("click", () => {
      const category = link.dataset.categoryLink;

      if (categoryLabels[category]) {
        activeCategory = category;
        renderFilters();
        renderTemplates();
      }
    });
  });

  /* ======================================================
     7. TEMPLATE SEARCH AND SORT
     ====================================================== */

  function getFilteredTemplates() {
    let results = templates.filter(template => {
      const matchesCategory =
        activeCategory === "all" ||
        template.category === activeCategory;

      const searchableText = [
        template.title,
        template.category,
        template.description,
        template.descriptionUr,
        ...template.tags
      ].join(" ").toLowerCase();

      const matchesSearch = searchableText.includes(
        searchTerm.trim().toLowerCase()
      );

      return matchesCategory && matchesSearch;
    });

    if (sortMode === "price-low") {
      results.sort((a, b) => a.price - b.price);
    } else if (sortMode === "price-high") {
      results.sort((a, b) => b.price - a.price);
    } else if (sortMode === "name") {
      results.sort((a, b) => a.title.localeCompare(b.title));
    }

    return results;
  }

  function renderTemplates() {
    const grid = $("#templateGrid");
    if (!grid) return;

    const results = getFilteredTemplates();
    const count = $("#resultCount");
    const emptyState = $("#emptyState");

    if (count) {
      count.textContent = currentLanguage === "ur"
        ? `${results.length} ٹیمپلیٹس`
        : `${results.length} template${results.length === 1 ? "" : "s"}`;
    }

    if (emptyState) {
      emptyState.hidden = results.length > 0;
    }

    grid.hidden = results.length === 0;

    grid.innerHTML = results.map(template => {
      const title = escapeHTML(template.title);
      const category = escapeHTML(getCategoryLabel(template.category));
      const description = escapeHTML(
        currentLanguage === "ur"
          ? template.descriptionUr
          : template.description
      );
      const tags = template.tags.slice(0, 3).map(tag =>
        `<span class="template-tag">${escapeHTML(tag)}</span>`
      ).join("");

      return `
        <article class="template-card reveal is-visible"
          data-template-id="${template.id}">
          <div class="template-art" style="background:${escapeHTML(template.style)}">
            <span class="art-badge">${escapeHTML(template.label)}</span>
            ${createPreviewArt(template)}
          </div>

          <div class="template-card-body">
            <div class="template-card-top">
              <span class="template-category">${category}</span>
              <span class="template-price">${formatPrice(template.price)}</span>
            </div>

            <h3>${title}</h3>
            <p class="template-description">${description}</p>

            <div class="template-tags">${tags}</div>

            <div class="template-card-actions">
              <button type="button"
                class="button button-outline"
                data-preview="${template.id}">
                ${escapeHTML(t("preview"))}
              </button>
              <button type="button"
                class="button button-primary"
                data-details="${template.id}">
                ${escapeHTML(t("details"))}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  $("#searchInput")?.addEventListener("input", event => {
    searchTerm = event.target.value || "";
    renderTemplates();
  });

  $("#sortSelect")?.addEventListener("change", event => {
    sortMode = event.target.value || "featured";
    renderTemplates();
  });

  $("#resetFilters")?.addEventListener("click", () => {
    activeCategory = "all";
    searchTerm = "";
    sortMode = "featured";

    const search = $("#searchInput");
    const sort = $("#sortSelect");

    if (search) search.value = "";
    if (sort) sort.value = "featured";

    renderFilters();
    renderTemplates();
    showToast(t("searchCleared"));
  });

  /* ======================================================
     8. TEMPLATE PREVIEW MODAL
     ====================================================== */

  function openModal(templateId) {
    const template = templates.find(item => item.id === Number(templateId));
    const modal = $("#previewModal");

    if (!template || !modal) {
      showToast("Template preview is unavailable.");
      return;
    }

    activeTemplateId = template.id;
    lastFocusedElement = document.activeElement;

    const modalTitle = $("#modalTitle");
    const modalCategory = $("#modalCategory");
    const modalDescription = $("#modalDescription");
    const modalPrice = $("#modalPrice");
    const modalPreview = $("#modalPreview");

    if (modalTitle) modalTitle.textContent = template.title;
    if (modalCategory) {
      modalCategory.textContent = getCategoryLabel(template.category);
    }
    if (modalDescription) {
      modalDescription.textContent = currentLanguage === "ur"
        ? template.descriptionUr
        : template.description;
    }
    if (modalPrice) modalPrice.textContent = formatPrice(template.price);

    if (modalPreview) {
      modalPreview.innerHTML = createPreviewArt(template, true);
      modalPreview.style.background = template.style;
    }

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    body.style.overflow = "hidden";

    $("#closeModal")?.focus();
  }

  function closeModal() {
    const modal = $("#previewModal");
    if (!modal) return;

    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    body.style.overflow = "";

    activeTemplateId = null;

    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  $("#templateGrid")?.addEventListener("click", event => {
    const previewButton = event.target.closest("[data-preview]");
    const detailsButton = event.target.closest("[data-details]");

    if (previewButton) {
      openModal(previewButton.dataset.preview);
    } else if (detailsButton) {
      openModal(detailsButton.dataset.details);
    }
  });

  $("#closeModal")?.addEventListener("click", closeModal);

  $("#previewModal")?.addEventListener("click", event => {
    if (event.target.id === "previewModal") closeModal();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeModal();
      closeMobileMenu();
    }

    // Basic focus containment while the preview dialog is open.
    const modal = $("#previewModal");
    if (
      event.key === "Tab" &&
      modal?.classList.contains("show")
    ) {
      const focusable = $$(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled])',
        modal
      );

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  /* ======================================================
     9. CONTACT / ORDER ACTION
     ====================================================== */

  // IMPORTANT:
  // Set this to your verified official WhatsApp or enquiry URL
  // before accepting real customer enquiries.
  // Example format:
  // const CONTACT_URL = "https://wa.me/923001234567";
  const CONTACT_URL = "";

  function contactAboutTemplate(templateId = activeTemplateId) {
    const template = templates.find(item => item.id === Number(templateId));

    if (!template) {
      showToast("Please select a template first.");
      return;
    }

    if (!CONTACT_URL) {
      const details = [
        `Template: ${template.title}`,
        `Category: ${getCategoryLabel(template.category)}`,
        `Sample price: ${formatPrice(template.price)}`,
        template.description
      ].join("\n");

      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(details)
          .then(() => showToast(t("copied")))
          .catch(() => showToast(t("noContact")));
      } else {
        showToast(t("noContact"));
      }

      return;
    }

    const message = [
      "Hello WebsitesDeal Pakistan,",
      `I am interested in: ${template.title}`,
      `Category: ${getCategoryLabel(template.category)}`,
      `Listed sample price: ${formatPrice(template.price)}`,
      "Please confirm the final scope and price."
    ].join("\n");

    const separator = CONTACT_URL.includes("?") ? "&" : "?";
    const url = CONTACT_URL + separator + "text=" + encodeURIComponent(message);

    window.open(url, "_blank", "noopener,noreferrer");
  }

  $("#modalContact")?.addEventListener("click", () => {
    contactAboutTemplate();
  });

  /* ======================================================
     10. DARK / LIGHT THEME
     ====================================================== */

  function updateThemeButton() {
    const button = $("#themeBtn");
    if (!button) return;

    const isLight = body.classList.contains("light-theme");

    button.textContent = isLight ? "☾" : "☀";
    button.setAttribute(
      "aria-label",
      isLight ? t("themeDark") : t("themeLight")
    );
    button.setAttribute("aria-pressed", String(isLight));
    button.title = isLight ? t("themeDark") : t("themeLight");
  }

  function setTheme(theme) {
    const isLight = theme === "light";

    body.classList.toggle("light-theme", isLight);
    body.classList.toggle("dark-theme", !isLight);

    try {
      localStorage.setItem("wd-theme", isLight ? "light" : "dark");
    } catch (_) {
      // The theme still works if browser storage is unavailable.
    }

    updateThemeButton();
  }

  let savedTheme = null;

  try {
    savedTheme = localStorage.getItem("wd-theme");
  } catch (_) {
    savedTheme = null;
  }

  setTheme(savedTheme === "light" ? "light" : "dark");

  $("#themeBtn")?.addEventListener("click", () => {
    const currentlyLight = body.classList.contains("light-theme");
    setTheme(currentlyLight ? "dark" : "light");
  });

  /* ======================================================
     11. MOBILE NAVIGATION
     ====================================================== */

  $("#menuBtn")?.addEventListener("click", () => {
    const nav = $("#navLinks");
    const button = $("#menuBtn");

    if (!nav || !button) return;

    const isOpen = nav.classList.toggle("open");

    button.setAttribute("aria-expanded", String(isOpen));
    button.setAttribute(
      "aria-label",
      isOpen ? t("menuClose") : t("menuOpen")
    );

    button.textContent = isOpen ? "✕" : "☰";
  });

  $$("#navLinks a").forEach(link => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("click", event => {
    const nav = $("#navLinks");
    const button = $("#menuBtn");

    if (!nav || !button || !nav.classList.contains("open")) return;

    if (!nav.contains(event.target) && !button.contains(event.target)) {
      closeMobileMenu();
      button.textContent = "☰";
    }
  });

  /* ======================================================
     12. HEADER SCROLL EFFECT
     ====================================================== */

  const header = $("#siteHeader");

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 12);
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  /* ======================================================
     13. SCROLL REVEAL ANIMATIONS
     ====================================================== */

  const revealElements = $$(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -30px 0px"
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach(element => {
      element.classList.add("is-visible");
    });
  }

  /* ======================================================
     14. FOOTER YEAR
     ====================================================== */

  const yearElement = $("#currentYear");
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }

  /* ======================================================
     15. INITIALIZE
     ====================================================== */

  renderFilters();
  renderTemplates();
  setLanguage(currentLanguage);
  updateThemeButton();

  // Make sure the modal begins closed.
  const modal = $("#previewModal");
  if (modal) {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }

  console.info("WebsitesDeal Pakistan initialized successfully.");
});
