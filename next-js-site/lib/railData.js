/**
 * Curated resource rail item pool — source of truth for RelatedArticles data.
 *
 * IMPORTANT — tag vocabulary:
 *   Tags must use the exact strings from blog post frontmatter so filterByTags() works.
 *   Top blog tag vocabulary (verified 2026-02-28):
 *   "admissions strategy", "college essays", "writing", "timelines", "financial aid",
 *   "supplements", "college costs", "testing", "extracurriculars", "admissions",
 *   "transfer admissions", "strategy", "sat", "act", "leadership", "application strategy",
 *   "activities", "scholarships", "interviews", "fafsa", "planning"
 *
 * All destinations verified against IR/next-js-site/pages/ as of 2026-02-28.
 * Append new items as resource/service pages go live; never remove verified items.
 * CTA payload `page_path` is populated at runtime by RelatedArticles.js — always "<auto>".
 */

export const RAIL_ITEMS = [
  // ── TIMELINES / APPLICATION PROCESS ──────────────────────────────────────
  {
    slug: "/resources/college-application-timeline-11th-12th-grade",
    title: "College Application Timeline (11th–12th Grade)",
    description: "Month-by-month tasks for testing, essays, recommendations, and submissions.",
    destination: "/resources/college-application-timeline-11th-12th-grade",
    type: "resource",
    tags: ["timelines", "admissions timeline", "application strategy", "planning"],
    cta_payload: {
      event: "cta_click",
      location: "article_related",
      text: "See the application timeline",
      destination: "/resources/college-application-timeline-11th-12th-grade",
      page_path: "<auto>",
      tags: ["timelines", "planning"],
    },
  },
  {
    slug: "/resources/grade-12-application-timeline",
    title: "Grade 12 Application Timeline",
    description: "Senior-year deadlines: applications, recommendations, and financial aid.",
    destination: "/resources/grade-12-application-timeline",
    type: "resource",
    tags: ["timelines", "admissions timeline", "application strategy"],
    cta_payload: {
      event: "cta_click",
      location: "article_related",
      text: "See senior-year timeline",
      destination: "/resources/grade-12-application-timeline",
      page_path: "<auto>",
      tags: ["timelines", "application strategy"],
    },
  },
  {
    slug: "/resources/grade-12-essay-schedule",
    title: "Grade 12 Essay Schedule",
    description: "A week-by-week essay drafting and revision schedule for senior year.",
    destination: "/resources/grade-12-essay-schedule",
    type: "resource",
    tags: ["timelines", "college essays", "writing", "admissions strategy"],
    cta_payload: {
      event: "cta_click",
      location: "article_related",
      text: "Get the essay schedule",
      destination: "/resources/grade-12-essay-schedule",
      page_path: "<auto>",
      tags: ["college essays", "timelines"],
    },
  },

  // ── TESTING ───────────────────────────────────────────────────────────────
  {
    slug: "/resources/when-to-take-act-vs-sat",
    title: "When to Take the ACT vs SAT",
    description: "Choose the right test and timing by GPA, course load, and deadlines.",
    destination: "/resources/when-to-take-act-vs-sat",
    type: "resource",
    tags: ["testing", "admissions strategy", "sat", "act"],
    cta_payload: {
      event: "cta_click",
      location: "article_related",
      text: "Plan your testing path",
      destination: "/resources/when-to-take-act-vs-sat",
      page_path: "<auto>",
      tags: ["testing", "sat", "act"],
    },
  },
  {
    slug: "/resources/grade-11-testing-plan",
    title: "Grade 11 Testing Plan",
    description: "Build a junior-year test prep timeline aligned to your target schools.",
    destination: "/resources/grade-11-testing-plan",
    type: "resource",
    tags: ["testing", "timelines", "admissions strategy", "planning"],
    cta_payload: {
      event: "cta_click",
      location: "article_related",
      text: "Build your testing plan",
      destination: "/resources/grade-11-testing-plan",
      page_path: "<auto>",
      tags: ["testing", "timelines"],
    },
  },

  // ── APPLICATION CHECKLIST / ESSAYS ───────────────────────────────────────
  {
    slug: "/resources/college-application-checklist",
    title: "College Application Checklist",
    description: "Every task from first draft to submit—organized by deadline and category.",
    destination: "/resources/college-application-checklist",
    type: "resource",
    tags: ["admissions", "application strategy", "planning", "timelines"],
    cta_payload: {
      event: "cta_click",
      location: "article_related",
      text: "Get the application checklist",
      destination: "/resources/college-application-checklist",
      page_path: "<auto>",
      tags: ["admissions", "planning"],
    },
  },
  {
    slug: "/resources/college-essay-outline",
    title: "College Essay Outline",
    description: "A structured outline to draft a compelling personal statement from scratch.",
    destination: "/resources/college-essay-outline",
    type: "resource",
    tags: ["college essays", "writing", "admissions strategy"],
    cta_payload: {
      event: "cta_click",
      location: "article_related",
      text: "Use the essay outline",
      destination: "/resources/college-essay-outline",
      page_path: "<auto>",
      tags: ["college essays", "writing"],
    },
  },

  // ── FINANCIAL AID ─────────────────────────────────────────────────────────
  {
    slug: "/resources/fafsa-completion-checklist",
    title: "FAFSA Completion Checklist",
    description: "Prep documents, IDs, and deadlines to file FAFSA accurately and early.",
    destination: "/resources/fafsa-completion-checklist",
    type: "resource",
    tags: ["financial aid", "fafsa", "college costs"],
    cta_payload: {
      event: "cta_click",
      location: "article_related",
      text: "Download FAFSA checklist",
      destination: "/resources/fafsa-completion-checklist",
      page_path: "<auto>",
      tags: ["financial aid", "fafsa"],
    },
  },
  {
    slug: "/resources/financial-aid-award-comparison-toolkit",
    title: "Financial Aid Award Comparison Toolkit",
    description: "Compare offers, calculate true cost, and plan appeals with a worksheet.",
    destination: "/resources/financial-aid-award-comparison-toolkit",
    type: "resource",
    tags: ["financial aid", "college costs", "scholarships"],
    cta_payload: {
      event: "cta_click",
      location: "article_related",
      text: "Get the comparison worksheet",
      destination: "/resources/financial-aid-award-comparison-toolkit",
      page_path: "<auto>",
      tags: ["financial aid", "college costs"],
    },
  },
];

/**
 * Evergreen fallback pool — service/consult CTAs.
 *
 * These are UNIVERSAL and do not need tag-matching.
 * Used to fill the 3rd slot (or all slots when RAIL_ITEMS tag filtering returns < 2 hits).
 *
 * Service tags ("packages", "consultation") intentionally do not appear in blog
 * frontmatter — that is by design. Service CTAs are always next-step nudges,
 * not topic-similarity links.
 */
export const FALLBACK_ITEMS = [
  {
    slug: "/free-consultation",
    title: "Book a Free Consultation",
    description: "Talk through your timeline and target schools with an advisor.",
    destination: "/free-consultation",
    type: "service",
    tags: ["consultation"],
    cta_payload: {
      event: "cta_click",
      location: "blog_related",
      text: "Talk to an advisor",
      destination: "/free-consultation",
      page_path: "<auto>",
      tags: ["consultation"],
    },
  },
  {
    slug: "/services/support-packages",
    title: "Ivy Ready Support Packages",
    description: "Compare support tiers and book the right consultation path.",
    destination: "/services/support-packages",
    type: "service",
    tags: ["consultation"],
    cta_payload: {
      event: "package_cta_click",
      location: "services_related",
      text: "Explore support packages",
      destination: "/services/support-packages",
      page_path: "<auto>",
      tags: ["consultation"],
    },
  },
  {
    slug: "/resources/college-application-timeline-11th-12th-grade",
    title: "College Application Timeline (11th–12th Grade)",
    description: "Month-by-month tasks for testing, essays, recommendations, and submissions.",
    destination: "/resources/college-application-timeline-11th-12th-grade",
    type: "resource",
    tags: ["timelines", "planning"],
    cta_payload: {
      event: "cta_click",
      location: "article_related",
      text: "See the application timeline",
      destination: "/resources/college-application-timeline-11th-12th-grade",
      page_path: "<auto>",
      tags: ["timelines", "planning"],
    },
  },
];
