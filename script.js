/* =========================================
   WEBSITESDEAL — TEMPLATE DISPLAY FIX
   ========================================= */

const seedTemplates = [
  {
    id: 1,
    title: "Business Pro",
    category: "business",
    price: 549,
    description: "A professional website for modern businesses.",
    tags: ["Business", "Corporate", "Responsive"]
  },
  {
    id: 2,
    title: "Creative Portfolio",
    category: "portfolio",
    price: 799,
    description: "Showcase your creative work with style.",
    tags: ["Portfolio", "Designer", "Creative"]
  },
  {
    id: 3,
    title: "Online Store",
    category: "store",
    price: 1499,
    description: "A modern storefront for your online business.",
    tags: ["E-commerce", "Shopping", "Store"]
  },
  {
    id: 4,
    title: "Restaurant Menu",
    category: "restaurant",
    price: 999,
    description: "Present your restaurant and menu beautifully.",
    tags: ["Restaurant", "Food", "Menu"]
  },
  {
    id: 5,
    title: "Education Hub",
    category: "education",
    price: 1299,
    description: "A clean website for courses and education.",
    tags: ["Education", "Courses", "Learning"]
  },
  {
    id: 6,
    title: "Startup Landing",
    category: "business",
    price: 549,
    description: "A modern landing page for your new startup.",
    tags: ["Startup", "Landing Page", "Modern"]
  }
];

function renderTemplates() {
  const grid = document.getElementById("templateGrid");
  if (!grid) {
    console.error("WebsitesDeal: #templateGrid element not found.");
    return;
  }

  const searchInput = document.getElementById("searchInput");
  const search = searchInput ? searchInput.value.trim().toLowerCase() : "";

  const activeButton = document.querySelector(
    "#filterButtons .filter-button.active"
  );

  const category = activeButton
    ? activeButton.dataset.filter || "all"
    : "all";

  const filtered = seedTemplates.filter(template => {
    const searchable = [
      template.title,
      template.category,
      template.description,
      ...template.tags
    ].join(" ").toLowerCase();

    const matchesSearch = searchable.includes(search);
    const matchesCategory =
      category === "all" || template.category === category;

    return matchesSearch && matchesCategory;
  });

  const resultCount = document.getElementById("resultCount");
  if (resultCount) resultCount.textContent = filtered.length;

  const emptyState = document.getElementById("emptyState");
  if (emptyState) {
    emptyState.hidden = filtered.length > 0;
  }

  grid.innerHTML = filtered.map(template => `
    <article class="template-card">
      <div class="template-art">
        <div class="art-mockup">
          <div class="art-browser">
            <span></span><span></span><span></span>
          </div>
          <div class="art-screen art-${template.category}">
            <span class="art-badge">${template.category}</span>
            <div class="art-preview-content">
              <div class="art-preview-line"></div>
              <div class="art-preview-line short"></div>
              <div class="art-preview-block"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="template-card-body">
        <div class="template-card-top">
          <span class="template-category">
            ${escapeHTML(template.category)}
          </span>
          <span class="template-price">
            PKR ${template.price.toLocaleString("en-PK")}
          </span>
        </div>

        <h3>${escapeHTML(template.title)}</h3>
        <p class="template-description">
          ${escapeHTML(template.description)}
        </p>

        <div class="template-tags">
          ${template.tags.map(tag =>
            `<span class="template-tag">${escapeHTML(tag)}</span>`
          ).join("")}
        </div>

        <div class="template-card-actions">
          <button class="button button-primary"
            type="button" data-preview="${template.id}">
            Preview
          </button>
          <button class="button button-outline"
            type="button" data-order="${template.id}">
            Get Website
          </button>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll("[data-preview]").forEach(button => {
    button.addEventListener("click", () => {
      const item = seedTemplates.find(
        t => t.id === Number(button.dataset.preview)
      );
      if (item) {
        alert(item.title + "\n" + item.description);
      }
    });
  });

  grid.querySelectorAll("[data-order]").forEach(button => {
    button.addEventListener("click", () => {
      const item = seedTemplates.find(
        t => t.id === Number(button.dataset.order)
      );
      if (item) {
        const message = `Hello WebsitesDeal! I am interested in ${item.title}. Price: PKR ${item.price}.`;
        window.open(
          "https://wa.me/?text=" + encodeURIComponent(message),
          "_blank",
          "noopener"
        );
      }
    });
  });
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

document.addEventListener("DOMContentLoaded", () => {
  renderTemplates();

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", renderTemplates);
  }

  document.querySelectorAll(
    "#filterButtons .filter-button"
  ).forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(
        "#filterButtons .filter-button"
      ).forEach(item => item.classList.remove("active"));

      button.classList.add("active");
      renderTemplates();
    });
  });
});
