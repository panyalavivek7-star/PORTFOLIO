
/* =========================================================
   VIVEK PANYALA — PORTFOLIO INTERACTIONS
   Plain JavaScript · No libraries · No backend
   ========================================================= */

"use strict";

/*
 * Evidence policy:
 * Only verified profile URLs are linked.
 * Missing repositories, screenshots, demos, and write-ups
 * are explicitly labelled as pending.
 */

const projects = {
  cloudsafe: {
    number: "PROJECT / 01",
    year: "2026",
    category: "CLOUD SECURITY",
    title: "CloudSafe",
    subtitle: "Automated Security Analysis Tool for Cloud Computing",
    summary:
      "A Python-based cloud security assessment tool designed to identify configuration risks, examine IAM permissions, and produce prioritized security findings.",
    tags: [
      "Python",
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "IAM",
      "CIS Benchmarks",
      "NIST"
    ],
    sections: [
      {
        title: "01 / What was the project?",
        text:
          "CloudSafe was developed as a security analysis tool for cloud environments. It focuses on configuration weaknesses and identity-related risks that can increase exposure when cloud resources are not configured securely."
      },
      {
        title: "02 / Why did I build it?",
        text:
          "Cloud misconfigurations and excessive permissions can expose sensitive resources. The project explores how repeatable security checks and clearly prioritized findings can help make cloud assessments easier to review."
      },
      {
        title: "03 / Objective",
        text:
          "The objective was to assess AWS, Azure, and GCP environments using read-only APIs, identify selected security issues, assign severity levels, and provide remediation-oriented reports."
      },
      {
        title: "04 / What did I implement?",
        bullets: [
          "Developed a Python-based assessment tool using read-only cloud API access.",
          "Included checks for public storage buckets, open SSH/RDP ports, and unencrypted data.",
          "Analyzed IAM policies for excessive privileges, unused credentials, and missing MFA.",
          "Mapped findings to relevant CIS Benchmarks and NIST controls.",
          "Implemented Critical, High, Medium, and Low risk categories.",
          "Designed PDF, JSON, and HTML reporting with remediation guidance and scheduled scans.",
          "Tested the tool against a deliberately vulnerable lab environment."
        ]
      },
      {
        title: "05 / Tools and technologies",
        bullets: [
          "Python for assessment logic and automation.",
          "Cloud provider APIs for read-only security checks.",
          "IAM policy analysis for identity and permission risks.",
          "CIS Benchmarks and NIST controls for security mapping.",
          "PDF, JSON, and HTML report formats."
        ]
      },
      {
        title: "06 / Skills developed",
        bullets: [
          "Cloud security assessment concepts.",
          "Configuration risk identification and prioritization.",
          "Identity and access management analysis.",
          "Security control mapping.",
          "Automation, reporting, and remediation communication."
        ]
      },
      {
        title: "07 / Outcome",
        text:
          "The project implemented a workflow for identifying selected cloud risks and organizing findings into severity-based reports. Independent performance metrics, scan coverage figures, and false-positive measurements have not been published."
      },
      {
        title: "08 / Real-world relevance",
        text:
          "Cloud security teams can use similar assessment workflows to identify exposed resources, review permissions, and prioritize remediation. Production use would require appropriate authorization, secure credential handling, provider-specific validation, and thorough testing."
      }
    ],
    evidence: [
      "GitHub repository — pending",
      "Architecture diagram — pending",
      "Screenshots / sample findings — pending",
      "Technical write-up — pending",
      "Demo — pending"
    ],
    disclaimer:
      "Repository, screenshots, and independently verifiable test results have not yet been supplied. Add the actual evidence before presenting it as publicly verified work."
  },

  "order-tracking": {
    number: "PROJECT / 02",
    year: "NOVEMBER 2025",
    category: "APPLICATION DEVELOPMENT",
    title: "Order Tracking System",
    subtitle: "Order management from placement through delivery",
    summary:
      "A Python application project designed to manage order entry, status changes, and order progress while considering data integrity and customer information.",
    tags: [
      "Python",
      "Application Logic",
      "Order Management",
      "Data Integrity"
    ],
    sections: [
      {
        title: "01 / What was the project?",
        text:
          "The Order Tracking System was designed to manage and monitor the progress of an order from the point it is placed until delivery."
      },
      {
        title: "02 / Why did I build it?",
        text:
          "Order workflows need clear status information and consistent updates. This project provided an opportunity to work with application logic and consider how customer-related data should be handled."
      },
      {
        title: "03 / Objective",
        text:
          "Build an application with core order entry, status update, and tracking functionality, with attention to data integrity and the handling of customer information."
      },
      {
        title: "04 / What did I implement?",
        bullets: [
          "Designed the order tracking workflow.",
          "Implemented core order entry functionality.",
          "Added order status update logic.",
          "Developed order progress tracking.",
          "Considered data integrity and secure handling of order and customer information."
        ]
      },
      {
        title: "05 / Tools and technologies",
        bullets: [
          "Python for application development.",
          "Application logic for order entry and status changes."
        ]
      },
      {
        title: "06 / Skills developed",
        bullets: [
          "Application workflow design.",
          "Programming and logical problem solving.",
          "Data integrity awareness.",
          "Considering security and privacy requirements in application development."
        ]
      },
      {
        title: "07 / Outcome",
        text:
          "The project covered the core workflow for placing orders, updating their status, and tracking progress. Deployment details, performance measurements, and formal security testing results have not been provided."
      },
      {
        title: "08 / Real-world relevance",
        text:
          "Order management systems are used in retail, logistics, and e-commerce. Such applications need reliable status updates, appropriate access controls, validation, and protection of customer information."
      }
    ],
    evidence: [
      "GitHub repository — pending",
      "Application screenshots — pending",
      "Workflow diagram — pending",
      "Demo — pending",
      "Technical documentation — pending"
    ],
    disclaimer:
      "Do not describe the application as production-ready or security-tested until deployment and testing evidence is available."
  },

  "new-lens": {
    number: "PROJECT / 03",
    year: "2025",
    category: "NLP / MACHINE LEARNING",
    title: "New Lens",
    subtitle: "Fake News Detection System",
    summary:
      "A text-classification project exploring natural language processing and machine learning to classify news articles as real or fake.",
    tags: [
      "Python",
      "Natural Language Processing",
      "Feature Extraction",
      "Machine Learning",
      "Text Classification"
    ],
    sections: [
      {
        title: "01 / What was the project?",
        text:
          "New Lens was developed as a fake news detection system. It analyzes news article text and classifies it as real or fake using natural language processing and machine learning techniques."
      },
      {
        title: "02 / Why did I build it?",
        text:
          "Misinformation can affect public understanding and trust in digital content. The project explored how automated text analysis can support the identification of potentially misleading news."
      },
      {
        title: "03 / Objective",
        text:
          "Build a text-classification workflow using preprocessing, feature extraction, and machine learning, then train and test models to evaluate prediction performance."
      },
      {
        title: "04 / What did I implement?",
        bullets: [
          "Developed a workflow for analyzing news article text.",
          "Applied NLP techniques for text preprocessing.",
          "Used feature extraction to represent text for classification.",
          "Trained and tested machine learning models.",
          "Focused on prediction reliability and the problem of misinformation."
        ]
      },
      {
        title: "05 / Tools and technologies",
        bullets: [
          "Python.",
          "Natural language processing.",
          "Text preprocessing and feature extraction.",
          "Machine learning classification."
        ]
      },
      {
        title: "06 / Skills developed",
        bullets: [
          "Text data preparation.",
          "NLP workflow design.",
          "Machine learning model training and testing.",
          "Classification problem solving.",
          "Understanding the limitations of automated predictions."
        ]
      },
      {
        title: "07 / Outcome",
        text:
          "The project implemented a workflow for classifying news articles. A verified accuracy score, evaluation dataset, model comparison, and independent test results have not been supplied, so no numerical performance claim is made."
      },
      {
        title: "08 / Real-world relevance",
        text:
          "Text classification can help prioritize content for further review. A model prediction is not proof that a news article is true or false; real-world use requires representative data, careful evaluation, and human review."
      }
    ],
    evidence: [
      "GitHub repository — pending",
      "Dataset details — pending",
      "Model evaluation — pending",
      "Confusion matrix / metrics — pending",
      "Demo and technical write-up — pending"
    ],
    disclaimer:
      "Add real evaluation metrics and explain the test dataset before making claims about prediction accuracy."
  }
};

/* ---------- Project modal ---------- */

const modal = document.getElementById("project-modal");
const modalPanel = modal?.querySelector(".modal-panel");
const modalContent = document.getElementById("modal-content");
const modalCloseButton = modal?.querySelector(".modal-close");

let lastFocusedElement = null;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const replacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };

    return replacements[character];
  });
}

function renderList(items) {
  return `
    <ul>
      ${items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
    </ul>
  `;
}

function renderCaseStudy(project) {
  const tags = project.tags
    .map((tag) => `<span>${escapeHTML(tag)}</span>`)
    .join("");

  const sections = project.sections.map((section) => {
    const content = section.bullets
      ? renderList(section.bullets)
      : `<p>${escapeHTML(section.text)}</p>`;

    return `
      <section class="case-section">
        <h3>${escapeHTML(section.title)}</h3>
        ${content}
      </section>
    `;
  }).join("");

  const evidence = project.evidence.map((item) => `
    <div class="evidence-item">
      ${escapeHTML(item)}
    </div>
  `).join("");

  return `
    <div class="case-header">
      <span class="case-kicker">
        ${escapeHTML(project.number)} · ${escapeHTML(project.year)}
      </span>

      <h2 class="case-title" id="modal-title">
        ${escapeHTML(project.title)}
      </h2>

      <p class="case-summary">
        ${escapeHTML(project.subtitle)}
      </p>

      <p class="case-summary">
        ${escapeHTML(project.summary)}
      </p>

      <div class="case-tags">${tags}</div>
    </div>

    <div class="case-grid">${sections}</div>

    <section class="case-section">
      <h3>09 / Evidence &amp; technical resources</h3>
      <p>
        The following evidence items are placeholders until the actual
        resources are published and verified.
      </p>

      <div class="evidence-list">${evidence}</div>

      <p class="case-disclaimer">
        ${escapeHTML(project.disclaimer)}
      </p>
    </section>
  `;
}

function openProject(projectId) {
  const project = projects[projectId];

  if (!project || !modal || !modalContent || !modalPanel) {
    return;
  }

  lastFocusedElement = document.activeElement;
  modalContent.innerHTML = renderCaseStudy(project);

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  modalPanel.scrollTop = 0;
  modalPanel.focus();
}

function closeProject() {
  if (!modal || !modal.classList.contains("is-open")) {
    return;
  }

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

document.querySelectorAll(".project-open").forEach((button) => {
  button.addEventListener("click", () => {
    openProject(button.dataset.project);
  });
});

modal?.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeProject);
});

document.addEventListener("keydown", (event) => {
  if (!modal?.classList.contains("is-open")) {
    return;
  }

  if (event.key === "Escape") {
    closeProject();
    return;
  }

  // Keep keyboard focus inside the open dialog.
  if (event.key === "Tab") {
    const focusable = Array.from(
      modalPanel.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex="0"]'
      )
    );

    if (!focusable.length) {
      event.preventDefault();
      modalPanel.focus();
      return;
    }

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

/* ---------- Project filters ---------- */

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    projectCards.forEach((card) => {
      const category = card.dataset.category;
      const matches =
        selectedFilter === "all" || category === selectedFilter;

      card.hidden = !matches;
    });
  });
});

/* ---------- Mobile navigation ---------- */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

function closeNavigation() {
  if (!menuToggle || !navLinks) {
    return;
  }

  navLinks.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNavigation);
});

document.addEventListener("click", (event) => {
  if (
    navLinks?.classList.contains("is-open") &&
    !navLinks.contains(event.target) &&
    !menuToggle?.contains(event.target)
  ) {
    closeNavigation();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 720) {
    closeNavigation();
  }
});

/* ---------- Footer year-free static initialization ---------- */

console.info(
  "Vivek Panyala Security Lab initialized. Project evidence should be verified before publication."
);
