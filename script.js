```javascript
/* =========================================================
   WebsitesDeal — Interactive Experience
   File: script.js
   ========================================================= */

(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) =>
    Array.from(root.querySelectorAll(selector));

  const STORAGE = {
    language: "wd_language",
    theme: "wd_theme"
  };

  const CURRENCY = "₨";

  const translations = {
    en: {
      searchPlaceholder: "Search templates...",
      results: "templates found",
      noResults: "No templates found",
      reset: "Reset filters",
      preview: "Preview",
      getStarted: "Contact to get started",
      startingAt: "Starting at",
      popular: "Popular",
      featured: "Featured",
      business: "Business",
      store: "Online Store",
      portfolio: "Portfolio",
      restaurant: "Restaurant",
      education: "Education",
      all: "All Templates",
      custom: "Custom",
      contact: "Contact our team",
      supportNotice: "Opening WebsitesDeal support...",
      currencyNote: "Price",
      light: "Switch to light theme",
      dark: "Switch to dark theme",
      close: "Close preview"
    },
    ur: {
      searchPlaceholder: "ٹیمپلیٹس تلاش کریں...",
      results: "ٹیمپلیٹس ملے",
      noResults: "کوئی ٹیمپلیٹ نہیں ملا",
      reset: "فلٹرز ری سیٹ کریں",
      preview: "پیش نظارہ",
      getStarted: "شروع کرنے کے لیے رابطہ کریں",
      startingAt: "ابتدائی قیمت",
      popular: "مقبول",
      featured: "نمایاں",
      business: "کاروبار",
      store: "آن لائن اسٹور",
      portfolio: "پورٹ فولیو",
      restaurant: "ریسٹورنٹ",
      education: "تعلیم",
      all: "تمام ٹیمپلیٹس",
      custom: "کسٹم",
      contact: "ہماری ٹیم سے رابطہ کریں",
      supportNotice: "WebsitesDeal سپورٹ کھولی جا رہی ہے...",
      currencyNote: "قیمت",
      light: "لائٹ تھیم منتخب کریں",
      dark: "ڈارک تھیم منتخب کریں",
      close: "پیش نظارہ بند کریں"
    }
  };

  const seedTemplates = [
    {
      id: "business-pro",
      title: "Business Pro",
      titleUr: "بزنس پرو",
      category: "business",
      price: 549,
      badge: "Popular",
      desc: "A polished business website for companies, agencies and growing brands.",
      descUr: "کمپنیوں، ایجنسیوں اور ترقی کرتے برانڈز کے لیے جدید کاروباری ویب سائٹ۔",
      tags: ["Business", "Corporate", "Responsive"],
      tagsUr: ["کاروبار", "کارپوریٹ", "ریسپانسیو"],
      art: "art-business",
      featured: true
    },
    {
      id: "online-store",
      title: "Online Store",
      titleUr: "آن لائن اسٹور",
      category: "store",
      price: 999,
      badge: "Popular",
      desc: "A stylish storefront concept for showcasing products and growing your brand.",
      descUr: "مصنوعات دکھانے اور اپنے برانڈ کو بڑھانے کے لیے خوبصورت آن لائن اسٹور۔",
      tags: ["E-commerce", "Products", "Modern"],
      tagsUr: ["ای کامرس", "مصنوعات", "جدید"],
      art: "art-store",
      featured: true
    },
    {
      id: "creative-portfolio",
      title: "Creative Portfolio",
      titleUr: "تخلیقی پورٹ فولیو",
      category: "portfolio",
      price: 549,
      badge: "Featured",
      desc: "A creative portfolio layout for designers, photographers and freelancers.",
      descUr: "ڈیزائنرز، فوٹوگرافرز اور فری لانسرز کے لیے تخلیقی پورٹ فولیو۔",
      tags: ["Portfolio", "Creative", "Minimal"],
      tagsUr: ["پورٹ فولیو", "تخلیقی", "سادہ"],
      art: "art-portfolio",
      featured: true
    },
    {
      id: "restaurant-luxe",
      title: "Restaurant Luxe",
      titleUr: "ریسٹورنٹ لکژ",
      category: "restaurant",
      price: 999,
      badge: "New",
      desc: "An elegant restaurant concept for presenting menus, dining and your brand.",
      descUr: "مینو، کھانے اور آپ کے برانڈ کو پیش کرنے کے لیے نفیس ریسٹورنٹ ڈیزائن۔",
      tags: ["Restaurant", "Menu", "Elegant"],
      tagsUr: ["ریسٹورنٹ", "مینو", "خوبصورت"],
      art: "art-restaurant",
      featured: false
    },
    {
      id: "learning-academy",
      title: "Learning Academy",
      titleUr: "لرننگ اکیڈمی",
      category: "education",
      price: 1999,
      badge: "Premium",
      desc: "A learning platform concept for courses, training institutes and educators.",
      descUr: "کورسز، ٹریننگ انسٹی ٹیوٹس اور اساتذہ کے لیے تعلیمی ویب سائٹ ڈیزائن۔",
      tags: ["Education", "Courses", "Learning"],
      tagsUr: ["تعلیم", "کورسز", "سیکھنا"],
      art: "art-education",
      featured: false
    },
    {
      id: "property-prime",
      title: "Property Prime",
      titleUr: "پراپرٹی پرائم",
      category: "business",
      price: 1999,
      badge: "Premium",
      desc: "A refined property listing concept for real estate agents and property firms.",
      descUr: "رئیل اسٹیٹ ایجنٹس اور پراپرٹی کمپنیوں کے لیے جدید پراپرٹی ویب سائٹ۔",
      tags: ["Real Estate", "Listings", "Premium"],
      tagsUr: ["رئیل اسٹیٹ", "لسٹنگز", "پریمیم"],
      art: "art-business",
      featured: false
    }
  ];

  let language = readStorage(STORAGE.language, "ur");
  if (!["en", "ur"].includes(language)) language = "ur";

  let theme = readStorage(STORAGE.theme, "dark");
  if (!["dark", "light"].includes(theme)) theme = "dark";

  let activeCategory = "all";
  let searchQuery = "";
  let sortMode = "featured";
  let toastTimer = null;
  let previousFocus = null;
  let currentPreviewId = null;

  function readStorage(key, fallback) {
    try {
      return localStorage.getItem(key) || fallback;
    } catch {
      return fallback;
    }
  }

  function writeStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // The page still works when browser storage is unavailable.
    }
  }

  function t(key) {
    return translations[language]?.[key] ??
      translations.en[key] ??
      key;
  }

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  function localized(template, field) {
    if (language === "ur") {
      const localizedField = template[field + "Ur"];
      if (localizedField !== undefined && localizedField !== null) {
        return localizedField;
      }
    }

    return template[field] ?? "";
  }

  function categoryName(category) {
    return t(category) || category;
  }

  function formatPrice(price) {
    const amount = Number(price);
    if (!Number.isFinite(amount) || amount < 0) return "—";

    return CURRENCY + " " + new Intl.NumberFormat(
      language === "ur" ? "ur-PK" : "en-PK",
      { maximumFractionDigits: 0 }
    ).format(amount);
  }

  function getTemplates() {
    return seedTemplates.map(template => ({ ...template }));
  }

  function artHTML(template) {
    const badge = template.badge
      ? `<span class="art-badge">${escapeHTML(
          language === "ur"
            ? ({ Popular: "مقبول", Featured: "نمایاں", New: "نیا", Premium: "پریمیم" }[template.badge] || template.badge)
            : template.badge
        )}</span>`
      : "";

    return `
      ${badge}
      <div class="art-mockup" aria-hidden="true">
        <div class="art-browser">
          <i></i><i></i><i></i><span></span>
        </div>
        <div class="art-screen">
          <div class="art-screen-top">
            <div class="art-screen-logo"></div>
            <div class="art-screen-nav"><i></i><i></i><i></i></div>
          </div>
          <div class="art-screen-content">
            <div class="art-screen-lines">
              <i></i><i></i><i></i>
              <div class="art-screen-button"></div>
            </div>
            <div class="art-screen-image"></div>
          </div>
        </div>
      </div>`;
  }

  function templateCardHTML(template, index) {
    const title = localized(template, "title");
    const description = localized(template, "desc");
    const tags = localized(template, "tags");
    const safeTags = Array.isArray(tags) ? tags : [];

    return `
      <article class="template-card reveal"
        data-template-id="${escapeHTML(template.id)}"
        style="animation-delay:${Math.min(index, 5) * 70}ms">

        <div class="template-art ${escapeHTML(template.art || "art-business")}">
          ${artHTML(template)}
        </div>

        <div class="template-card-body">
          <div class="template-card-top">
            <div>
              <div class="template-category">
                ${escapeHTML(categoryName(template.category))}
              </div>
              <h3>${escapeHTML(title)}</h3>
            </div>

            <div class="template-price">
              ${escapeHTML(formatPrice(template.price))}
              <small>${escapeHTML(t("startingAt"))}</small>
            </div>
          </div>

          <p class="template-description">
            ${escapeHTML(description)}
          </p>

          <div class="template-tags">
            ${safeTags.map(tag =>
              `<span class="template-tag">${escapeHTML(tag)}</span>`
            ).join("")}
          </div>

          <div class="template-card-actions">
            <button class="button button-primary"
              type="button"
              data-preview="${escapeHTML(template.id)}">
              ${escapeHTML(t("preview"))}
              <span aria-hidden="true">↗</span>
            </button>

            <button class="button button-outline"
              type="button"
              data-contact="${escapeHTML(template.id)}"
              aria-label="${escapeHTML(t("getStarted"))}: ${escapeHTML(title)}">
              ${escapeHTML(t("getStarted"))}
            </button>
          </div>
        </div>
      </article>`;
  }

  function matchesSearch(template, query) {
    if (!query) return true;

    const fields = [
      template.title,
      template.titleUr,
      template.desc,
      template.descUr,
      template.category,
      categoryName(template.category),
      ...(template.tags || []),
      ...(template.tagsUr || [])
    ];

    return fields.some(field =>
      String(field || "").toLocaleLowerCase().includes(query)
    );
  }

  function renderTemplates() {
    const grid = $("#templateGrid");
    if (!grid) return;

    const templates = getTemplates()
      .filter(template => {
        const categoryMatches =
          activeCategory === "all" ||
          template.category === activeCategory;

        return categoryMatches && matchesSearch(
          template,
          searchQuery.trim().toLocaleLowerCase()
        );
      });

    if (sortMode === "price-low") {
      templates.sort((a, b) => a.price - b.price);
    } else if (sortMode === "price-high") {
      templates.sort((a, b) => b.price - a.price);
    } else if (sortMode === "name") {
      templates.sort((a, b) =>
        localized(a, "title").localeCompare(
          localized(b, "title"),
          language === "ur" ? "ur" : "en"
        )
      );
    } else {
      templates.sort((a, b) =>
        Number(b.featured) - Number(a.featured)
      );
    }

    grid.innerHTML = templates
      .map(templateCardHTML)
      .join("");

    const empty = $("#emptyState");
    if (empty) empty.hidden = templates.length !== 0;

    const resultCount = $("#resultCount");
    if (resultCount) {
      resultCount.textContent =
        `${templates.length} ${t("results")}`;
    }

    if (templates.length) {
      observeReveals(grid);
    }
  }

  function updateLanguage() {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ur" ? "rtl" : "ltr";

    $$("[data-en][data-ur]").forEach(element => {
      const value = element.dataset[language];
      if (value !== undefined) element.textContent = value;
    });

    const languageButton = $("#languageBtn");
    if (languageButton) {
      languageButton.textContent = language === "ur" ? "EN" : "اردو";
      languageButton.setAttribute(
        "aria-label",
        language === "ur" ? "Switch to English" : "اردو منتخب کریں"
      );
    }

    const searchInput = $("#searchInput");
    if (searchInput) {
      searchInput.placeholder = t("searchPlaceholder");
      searchInput.setAttribute("aria-label", t("searchPlaceholder"));
    }

    const sortSelect = $("#sortSelect");
    if (sortSelect) {
      Array.from(sortSelect.options).forEach(option => {
        const key = language === "ur" ? "ur" : "en";
        if (option.dataset[key]) option.textContent = option.dataset[key];
      });
    }

    document.title = language === "ur"
      ? "WebsitesDeal — پریمیم ویب سائٹ ٹیمپلیٹس"
      : "WebsitesDeal — Premium Website Templates";

    const description = $('meta[name="description"]');
    if (description) {
      description.setAttribute(
        "content",
        language === "ur"
          ? "اپنے کاروبار کے لیے خوبصورت اور جدید ویب سائٹ ٹیمپلیٹس دریافت کریں۔"
          : "Discover premium website templates for business, stores, portfolios and more."
      );
    }

    writeStorage(STORAGE.language, language);
    renderTemplates();
    updateOpenModal();
  }

  function updateTheme() {
    const light = theme === "light";
    document.body.classList.toggle("light-theme", light);

    const themeButton = $("#themeBtn");
    if (themeButton) {
      themeButton.textContent = light ? "☾" : "☼";
      themeButton.setAttribute(
        "aria-label",
        light ? t("dark") : t("light")
      );
      themeButton.title = light ? t("dark") : t("light");
    }

    writeStorage(STORAGE.theme, theme);
  }

  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  function getTemplateById(id) {
    return getTemplates().find(template => template.id === id);
  }

  function openPreview(id) {
    const template = getTemplateById(id);
    const modal = $("#previewModal");

    if (!template || !modal) return;

    previousFocus = document.activeElement;
    currentPreviewId = id;

    const preview = $("#modalPreview");
    if (preview) {
      preview.innerHTML = `
        <div class="template-art ${escapeHTML(template.art || "art-business")}"
          style="width:100%;max-width:420px;border-radius:15px">
          ${artHTML(template)}
        </div>`;
    }

    $("#modalCategory").textContent = categoryName(template.category);
    $("#modalTitle").textContent = localized(template, "title");
    $("#modalDescription").textContent = localized(template, "desc");
    $("#modalPrice").textContent = formatPrice(template.price);

    const contact = $("#modalContact");
    if (contact) {
      contact.href = makeSupportURL(template);
      contact.setAttribute(
        "aria-label",
        `${t("getStarted")}: ${localized(template, "title")}`
      );
    }

    const closeButton = $("#closeModal");
    if (closeButton) closeButton.setAttribute("aria-label", t("close"));

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      $("#closeModal")?.focus();
    });
  }

  function updateOpenModal() {
    if (currentPreviewId && $("#previewModal")?.classList.contains("open")) {
      const id = currentPreviewId;
      const modal = $("#previewModal");
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      openPreview(id);
    }
  }

  function closePreview() {
    const modal = $("#previewModal");
    if (!modal) return;

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    currentPreviewId = null;

    if (previousFocus && typeof previousFocus.focus === "function") {
      previousFocus.focus();
    }
  }

  function makeSupportURL(template) {
    const base = "https://support.websitesdeal.com/";
    const params = new URLSearchParams({
      template: template.title,
      template_id: template.id,
      price: String(template.price),
      currency: CURRENCY
    });

    return `${base}?${params.toString()}`;
  }

  function openSupport(id) {
    const template = getTemplateById(id);
    if (!template) return;

    const url = makeSupportURL(template);
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");

    if (!newWindow) {
      showToast(
        language === "ur"
          ? "سپورٹ لنک کھولنے کے لیے براہ کرم پاپ اپ کی اجازت دیں۔"
          : "Please allow pop-ups to open the support page."
      );
    }
  }

  function setCategory(category) {
    activeCategory = category;

    $$(".filter-button").forEach(button => {
      const isActive = button.dataset.category === category;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    renderTemplates();
  }

  function resetFilters() {
    activeCategory = "all";
    searchQuery = "";
    sortMode = "featured";

    if ($("#searchInput")) $("#searchInput").value = "";
    if ($("#sortSelect")) $("#sortSelect").value = "featured";

    setCategory("all");
  }

  function closeMobileMenu() {
    const nav = $("#navLinks");
    const button = $("#menuBtn");
    if (!nav || !button) return;

    nav.classList.remove("open");
    button.classList.remove("active");
    button.setAttribute("aria-expanded", "false");
  }

  function setupNavigation() {
    const menuButton = $("#menuBtn");
    const nav = $("#navLinks");

    menuButton?.addEventListener("click", () => {
      const open = nav?.classList.toggle("open") ?? false;
      menuButton.classList.toggle("active", open);
      menuButton.setAttribute("aria-expanded", String(open));
    });

    $$("#navLinks a").forEach(link => {
      link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("click", event => {
      if (
        nav?.classList.contains("open") &&
        !nav.contains(event.target) &&
        !menuButton?.contains(event.target)
      ) {
        closeMobileMenu();
      }
    });

    const header = $("#siteHeader");

    const updateHeader = () => {
      header?.classList.toggle("scrolled", window.scrollY > 15);
    };

    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();

    const sections = $$("main section[id]");
    if ("IntersectionObserver" in window) {
      const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          const link = $(`#navLinks a[href="#${entry.target.id}"]`);
          $$("#navLinks a").forEach(item => item.classList.remove("active"));
          link?.classList.add("active");
        });
      }, { rootMargin: "-30% 0px -60% 0px" });

      sections.forEach(section => sectionObserver.observe(section));
    }
  }

  let revealObserver = null;

  function observeReveals(root = document) {
    const elements = $$(".reveal:not(.is-visible)", root);

    if (!("IntersectionObserver" in window)) {
      elements.forEach(element => element.classList.add("is-visible"));
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
      });
    }

    elements.forEach(element => revealObserver.observe(element));
  }

  function setupMotion() {
    document.documentElement.classList.add("js-motion");
    observeReveals();

    const hero = $("#heroVisual");
    if (!hero) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const finePointer = window.matchMedia(
      "(pointer: fine)"
    ).matches;

    if (reduceMotion || !finePointer) return;

    const browser = $(".main-browser", hero);
    if (!browser) return;

    hero.addEventListener("pointermove", event => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      browser.style.animation = "none";
      browser.style.transform =
        `translateY(-4px) rotateY(${-7 + x * 8}deg) rotateX(${3 - y * 6}deg)`;
    });

    hero.addEventListener("pointerleave", () => {
      browser.style.animation = "";
      browser.style.transform = "";
    });
  }

  function setupTemplateControls() {
    $("#searchInput")?.addEventListener("input", event => {
      searchQuery = event.target.value || "";
      renderTemplates();
    });

    $("#sortSelect")?.addEventListener("change", event => {
      sortMode = event.target.value || "featured";
      renderTemplates();
    });

    $("#filterButtons")?.addEventListener("click", event => {
      const button = event.target.closest("[data-category]");
      if (!button) return;
      setCategory(button.dataset.category);
    });

    $("#resetFilters")?.addEventListener("click", resetFilters);

    $("#templateGrid")?.addEventListener("click", event => {
      const previewButton = event.target.closest("[data-preview]");
      const contactButton = event.target.closest("[data-contact]");

      if (previewButton) {
        openPreview(previewButton.dataset.preview);
      } else if (contactButton) {
        openSupport(contactButton.dataset.contact);
      }
    });

    $("#closeModal")?.addEventListener("click", closePreview);

    $("#previewModal")?.addEventListener("click", event => {
      if (event.target.closest("[data-close-modal]")) {
        closePreview();
      }
    });

    document.addEventListener("keydown", event => {
      const modal = $("#previewModal");
      if (!modal?.classList.contains("open")) return;

      if (event.key === "Escape") {
        closePreview();
      }

      if (event.key === "Tab") {
        const focusable = $$(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
          modal
        ).filter(element => element.offsetParent !== null);

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
  }

  function setupPreferences() {
    $("#languageBtn")?.addEventListener("click", () => {
      language = language === "ur" ? "en" : "ur";
      updateLanguage();
    });

    $("#themeBtn")?.addEventListener("click", () => {
      theme = theme === "dark" ? "light" : "dark";
      updateTheme();
    });

    document.addEventListener("keydown", event => {
      const target = event.target;
      const typing = target instanceof HTMLElement &&
        (target.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

      if (typing || event.ctrlKey || event.metaKey || event.altKey) return;

      if (event.key === "/" && !$("#previewModal")?.classList.contains("open")) {
        event.preventDefault();
        $("#searchInput")?.focus();
      }
    });
  }

  function setupFooter() {
    const year = $("#currentYear");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  function init() {
    updateTheme();
    setupNavigation();
    setupTemplateControls();
    setupPreferences();
    setupFooter();
    renderTemplates();
    updateLanguage();
    setupMotion();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
```
