const DATA_PATH = "assets/data/projects.json";
const PROJECT_STATUSES = new Set(["live", "concept", "prototype"]);

async function loadPortfolioData() {
  if (window.PORTFOLIO_DATA) {
    return window.PORTFOLIO_DATA;
  }

  try {
    const response = await fetch(DATA_PATH);
    if (!response.ok) {
      throw new Error(`Failed to load portfolio data: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    if (window.PORTFOLIO_DATA) {
      return window.PORTFOLIO_DATA;
    }
    throw error;
  }
}

function socialLabel(platform) {
  return platform.charAt(0).toUpperCase() + platform.slice(1);
}

function hasUrl(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function setOptionalLink(linkElement, url, fallbackLabel) {
  if (!linkElement) return;
  if (hasUrl(url)) {
    linkElement.href = url;
    linkElement.classList.remove("is-disabled");
    linkElement.removeAttribute("aria-disabled");
    return;
  }
  linkElement.removeAttribute("href");
  linkElement.classList.add("is-disabled");
  linkElement.setAttribute("aria-disabled", "true");
  if (fallbackLabel) {
    linkElement.textContent = fallbackLabel;
  }
}

function socialIcon(platform) {
  const bookIcon =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H20v17.5h-12A2.5 2.5 0 0 0 5.5 22H4V5.5a1 1 0 0 1 1-1Zm2.5-.5A1.5 1.5 0 0 0 6 5.5V20a3.5 3.5 0 0 1 2-.5H18V4H7.5Zm2 3h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5Zm0 3h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5Z"/></svg>';
  const icons = {
    linkedin:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.75V21H2.87V8.75h4.07Zm.27-3.8c0 1.16-.87 2.05-2.3 2.05h-.03c-1.37 0-2.26-.9-2.26-2.05C2.62 3.76 3.54 2.9 4.93 2.9s2.26.86 2.3 2.05ZM21.5 14.2V21h-4.06v-6.34c0-1.6-.58-2.69-2.01-2.69-1.1 0-1.75.74-2.04 1.45-.1.26-.14.62-.14.97V21H9.2s.05-10.86 0-11.99h4.06v1.7c.54-.83 1.52-2 3.7-2 2.7 0 4.54 1.76 4.54 5.5Z"/></svg>',
    instagram:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.18.05 1.98.24 2.44.42.6.24 1.04.53 1.49.98.45.45.74.89.98 1.49.18.46.37 1.26.42 2.44.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.18-.24 1.98-.42 2.44a4.06 4.06 0 0 1-.98 1.49c-.45.45-.89.74-1.49.98-.46.18-1.26.37-2.44.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.18-.05-1.98-.24-2.44-.42a4.06 4.06 0 0 1-1.49-.98 4.06 4.06 0 0 1-.98-1.49c-.18-.46-.37-1.26-.42-2.44A78.71 78.71 0 0 1 1.84 12c0-3.2.01-3.58.07-4.85.05-1.18.24-1.98.42-2.44.24-.6.53-1.04.98-1.49.45-.45.89-.74 1.49-.98.46-.18 1.26-.37 2.44-.42C8.42 2.17 8.8 2.16 12 2.16Zm0 4.7A5.14 5.14 0 1 0 12 17.14 5.14 5.14 0 0 0 12 6.86Zm0 8.48A3.34 3.34 0 1 1 12 8.66a3.34 3.34 0 0 1 0 6.68Zm6.54-8.67a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z"/></svg>',
    github:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.74-1.33-1.74-1.09-.73.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.08 1.84 2.82 1.31 3.5 1 .1-.78.42-1.31.75-1.61-2.67-.3-5.47-1.33-5.47-5.9 0-1.3.47-2.35 1.23-3.18-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.21A11.46 11.46 0 0 1 12 6.32a11.44 11.44 0 0 1 3 .41c2.3-1.53 3.3-1.21 3.3-1.21.65 1.66.24 2.88.12 3.18.77.83 1.23 1.88 1.23 3.18 0 4.58-2.8 5.6-5.48 5.9.43.37.81 1.1.81 2.22v3.3c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z"/></svg>',
    email:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2 1.04V7l7 4.66L19 7v-.46A.5.5 0 0 0 18.5 6h-13a.5.5 0 0 0-.5.54ZM19 9.4l-6.45 4.3a1 1 0 0 1-1.1 0L5 9.4v9.1c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V9.4Z"/></svg>',
    ethglobal: bookIcon,
    devfolio: bookIcon
  };
  return icons[platform] || `<span aria-hidden="true">${platform.slice(0, 2).toUpperCase()}</span>`;
}

function normalizedStatus(status) {
  if (!status) return "concept";
  const lowered = status.toLowerCase();
  return PROJECT_STATUSES.has(lowered) ? lowered : "concept";
}

function deckIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="4" y="4.5" width="16" height="10" rx="1.6"></rect>
      <path d="M12 14.5V19"></path>
      <path d="M8.5 19H15.5"></path>
    </svg>
  `;
}

function extractDateScore(value) {
  if (!value || typeof value !== "string") return 0;
  const text = value.trim().toLowerCase();
  if (text.includes("current")) return Number.MAX_SAFE_INTEGER;

  const parsed = Date.parse(value);
  if (!Number.isNaN(parsed)) return parsed;

  const monthMap = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12
  };

  const monthMatch = text.match(
    /(january|february|march|april|may|june|july|august|september|october|november|december)\s+(\d{4})/
  );
  if (monthMatch) {
    const month = monthMap[monthMatch[1]] || 1;
    const year = Number(monthMatch[2]);
    return year * 100 + month;
  }

  const yearMatches = [...text.matchAll(/\b(19|20)\d{2}\b/g)].map((match) => Number(match[0]));
  if (yearMatches.length > 0) {
    return Math.max(...yearMatches) * 100;
  }

  return 0;
}

function sortByNewest(items, dateKey) {
  return [...items].sort((a, b) => extractDateScore(b[dateKey]) - extractDateScore(a[dateKey]));
}

function applyProfile(profile) {
  const name = document.getElementById("profile-name");
  const tagline = document.getElementById("profile-tagline");
  const avatar = document.getElementById("profile-avatar");
  const focusList = document.getElementById("focus-list");
  const profileSocials = document.getElementById("profile-socials");

  if (name) name.textContent = profile.name;
  if (tagline) tagline.textContent = profile.tagline;
  if (avatar) {
    avatar.src = profile.profileImage;
    avatar.alt = `Portrait illustration of ${profile.name}`;
  }
  if (focusList && Array.isArray(profile.focusAreas)) {
    focusList.innerHTML = "";
    profile.focusAreas.forEach((area) => {
      const item = document.createElement("li");
      item.textContent = area;
      focusList.appendChild(item);
    });
  }
  if (profileSocials) {
    profileSocials.innerHTML = "";
    const socials = [...(profile.socials || [])];
    if (hasUrl(profile.email)) {
      socials.unshift({ platform: "email", url: `mailto:${profile.email}` });
    }
    socials.forEach((social) => {
      const link = document.createElement("a");
      link.className = "social-link";
      link.href = social.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("aria-label", socialLabel(social.platform));
      link.innerHTML = socialIcon(social.platform);
      profileSocials.appendChild(link);
    });
  }
}

function createProjectCard(project, template) {
  const clone = template.content.cloneNode(true);
  const root = clone.querySelector(".project-card");
  const detailHref = `project.html?slug=${encodeURIComponent(project.slug)}`;

  const bannerLink = clone.querySelector(".project-banner-link");
  const banner = clone.querySelector(".project-banner");
  const icon = clone.querySelector(".project-icon");
  const awardBadge = clone.querySelector('[data-role="award-badge"]');
  const title = clone.querySelector(".project-title");
  const date = clone.querySelector(".project-date");
  const oneLiner = clone.querySelector(".project-one-liner");
  const statusTag = clone.querySelector('[data-role="status-tag"]');
  const primary = clone.querySelector('[data-role="primary-link"]');
  const backup = clone.querySelector('[data-role="backup-link"]');
  const deck = clone.querySelector('[data-role="deck-link"]');
  const socialLinks = clone.querySelector('[data-role="social-links"]');

  bannerLink.href = detailHref;
  title.href = detailHref;
  title.textContent = project.title;

  banner.src = project.bannerImage;
  banner.alt = `${project.title} banner`;
  icon.src = project.iconImage;
  icon.alt = `${project.title} icon`;
  date.textContent = project.date;
  oneLiner.textContent = project.oneLiner;
  const status = normalizedStatus(project.status);
  statusTag.textContent = status;
  statusTag.dataset.status = status;

  const showPrimary = hasUrl(project.primaryUrl) && !project.hidePrimary;
  const showBackup = hasUrl(project.backupUrl) && !project.hideBackup;

  if (showPrimary) {
    setOptionalLink(primary, project.primaryUrl, "No live link");
  } else {
    primary.remove();
  }
  if (showBackup) {
    setOptionalLink(backup, project.backupUrl, "No backup link");
  } else {
    backup.remove();
  }
  if (hasUrl(project.pitchDeckUrl)) {
    setOptionalLink(deck, project.pitchDeckUrl, "No deck");
    deck.innerHTML = deckIcon();
  } else {
    deck.remove();
  }

  if (project.awardLabel) {
    awardBadge.hidden = false;
    const awardEmoji = project.awardEmoji || "🏆";
    awardBadge.textContent = `${awardEmoji} ${project.awardLabel}`;
    if (project.awardVariant) {
      awardBadge.dataset.variant = project.awardVariant;
    }
  } else {
    awardBadge.remove();
  }

  if (Array.isArray(project.socials) && project.socials.length > 0) {
    project.socials.forEach((social) => {
      const link = document.createElement("a");
      link.className = "social-link";
      link.href = social.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("aria-label", socialLabel(social.platform));
      link.innerHTML = socialIcon(social.platform);
      socialLinks.appendChild(link);
    });
  } else {
    socialLinks.remove();
  }

  root.dataset.slug = project.slug;
  root.setAttribute("role", "link");
  root.setAttribute("tabindex", "0");
  root.setAttribute("aria-label", `Open details for ${project.title}`);
  root.addEventListener("click", (event) => {
    const interactive = event.target.closest("a");
    if (interactive && interactive.dataset.role !== "detail-link") return;
    window.location.href = detailHref;
  });
  root.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    window.location.href = detailHref;
  });
  return clone;
}

function createPublicationItem(publication, template) {
  const clone = template.content.cloneNode(true);
  const titleLinks = clone.querySelectorAll('[data-role="publication-primary"]');
  const meta = clone.querySelector(".publication-meta");
  const oneLiner = clone.querySelector(".publication-one-liner");

  titleLinks.forEach((link) => {
    setOptionalLink(link, publication.primaryUrl, "No link");
    if (link.classList.contains("publication-title")) {
      link.textContent = publication.title;
    }
  });

  meta.textContent = `${publication.date} · ${publication.venue}`;
  oneLiner.textContent = publication.oneLiner;

  return clone;
}

function setupRevealAnimations() {
  const revealItems = document.querySelectorAll(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
  );
  revealItems.forEach((item) => observer.observe(item));
}

function parseSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get("slug");
}

function renderProjectDetail(project) {
  const container = document.getElementById("project-detail");
  if (!container) return;

  if (!project) {
    container.innerHTML =
      '<h1>Project not found</h1><p class="supporting-copy">That link is missing or invalid. Return to the portfolio to choose another project.</p>';
    return;
  }

  const showPrimary = hasUrl(project.primaryUrl) && !project.hidePrimary;
  const showBackup = hasUrl(project.backupUrl) && !project.hideBackup;
  const pitchDeckMarkup = hasUrl(project.pitchDeckUrl)
    ? `<a class="pill-link deck-link icon-only-link" href="${project.pitchDeckUrl}" target="_blank" rel="noopener noreferrer" aria-label="Open pitch deck" title="Open pitch deck">${deckIcon()}</a>`
    : "";

  const socialsMarkup = Array.isArray(project.socials) && project.socials.length
    ? `<div class="social-links">${project.socials
        .map(
          (social) =>
            `<a class="social-link" aria-label="${socialLabel(social.platform)}" href="${social.url}" target="_blank" rel="noopener noreferrer">${socialIcon(
              social.platform
            )}</a>`
        )
        .join("")}</div>`
    : "";

  container.innerHTML = `
    <img class="project-banner detail-banner" src="${project.bannerImage}" alt="${project.title} banner" />
    <div class="project-main">
      <img class="project-icon" src="${project.iconImage}" alt="${project.title} icon" width="56" height="56" />
      <div class="project-headline">
        <h1>${project.title}</h1>
        <div class="project-meta">
          <p class="project-date">${project.date}</p>
          <span class="status-tag" data-status="${normalizedStatus(project.status)}">${normalizedStatus(project.status)}</span>
        </div>
      </div>
    </div>
    <p class="project-one-liner">${project.oneLiner}</p>
    <p class="project-details">${project.details}</p>
    <div class="project-actions">
      ${showPrimary ? `<a class="pill-link" href="${project.primaryUrl}" target="_blank" rel="noopener noreferrer">Visit</a>` : ""}
      ${showBackup ? `<a class="pill-link subtle" href="${project.backupUrl}" target="_blank" rel="noopener noreferrer">Backup</a>` : ""}
      ${pitchDeckMarkup}
      ${socialsMarkup}
    </div>
  `;

  document.title = `${project.title} | Nova Heidt`;
}

async function renderHome() {
  const data = await loadPortfolioData();
  applyProfile(data.profile);

  const projectList = document.getElementById("project-list");
  const projectTemplate = document.getElementById("project-card-template");
  const publicationList = document.getElementById("publication-list");
  const articleList = document.getElementById("article-list");
  const publicationTemplate = document.getElementById("publication-item-template");
  if (!projectList || !projectTemplate || !publicationList || !articleList || !publicationTemplate) return;

  sortByNewest(data.projects || [], "date").forEach((project) => {
    projectList.appendChild(createProjectCard(project, projectTemplate));
  });

  sortByNewest(data.publications || [], "date").forEach((publication) => {
    publicationList.appendChild(createPublicationItem(publication, publicationTemplate));
  });

  sortByNewest(data.articles || [], "date").forEach((article) => {
    articleList.appendChild(createPublicationItem(article, publicationTemplate));
  });
}

async function renderProjectPage() {
  const slug = parseSlug();
  const data = await loadPortfolioData();
  const project = data.projects.find((item) => item.slug === slug);
  renderProjectDetail(project);
}

async function init() {
  try {
    if (document.body.dataset.page === "home") {
      await renderHome();
    }
    if (document.body.dataset.page === "project") {
      await renderProjectPage();
    }
  } catch (error) {
    const containers = [document.getElementById("project-list"), document.getElementById("project-detail")];
    containers.forEach((container) => {
      if (!container) return;
      container.innerHTML =
        '<p class="supporting-copy">Unable to load content right now. Please refresh in a moment.</p>';
    });
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    setupRevealAnimations();
  }
}

init();
