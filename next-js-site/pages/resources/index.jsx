import { useState } from "react";
import Link from "next/link";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BreadcrumbSchema, SchemaScript } from "@/components/Schema";
import { motion } from "framer-motion";
import { BookOpen, FileText, GraduationCap, Users, Compass, Star, Calendar, Sparkles } from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";

function ArticleCard({ href, title, excerpt, tag }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      className="group rounded-2xl border shadow-sm p-6 bg-white/80 backdrop-blur hover:shadow-md transition"
    >
      <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-gray-500">
        <span className="inline-flex items-center gap-1"><Star className="size-3" /> {tag}</span>
      </div>
      <h3 className="mt-3 text-xl font-semibold leading-snug group-hover:underline">
        <Link href={href}>{title}</Link>
      </h3>
      <p className="mt-2 text-gray-600 text-sm">{excerpt}</p>
      <div className="mt-4">
        <Link href={href} className="text-indigo-600 font-medium hover:underline">Read article &rarr;</Link>
      </div>
    </motion.div>
  );
}

const categories = [
  {
    label: "Planning & Timelines",
    icon: Calendar,
    articles: [
      { href: "/resources/timeline-by-grade", title: "Timeline by Grade: What Every High Schooler Should Do (9th\u201312th)", excerpt: "A clear 4-year roadmap so you're always ahead of deadlines and opportunities." },
      { href: "/resources/grade-9-course-planning", title: "9th Grade Course Planning (Honors/AP Foundations)", excerpt: "How to choose 9th-grade classes and set an AP/honors trajectory without overloading." },
      { href: "/resources/grade-9-extracurriculars-strategy", title: "9th Grade Extracurricular Strategy (Explore \u2192 Commit)", excerpt: "A practical plan for exploring activities in 9th grade and building consistency that becomes leadership later." },
      { href: "/resources/grade-10-activities-list-foundation", title: "10th Grade Activities List Foundation (What to Track)", excerpt: "What counts for an activities list and how to turn scattered involvement into a coherent profile." },
      { href: "/resources/grade-10-summer-planning", title: "Summer After 10th Grade (Programs + Internships)", excerpt: "How to choose a summer plan: depth vs breadth, how to evaluate programs, and how to avoid resume padding." },
      { href: "/resources/grade-11-testing-plan", title: "11th Grade Testing Plan (SAT/ACT)", excerpt: "A step-by-step junior-year testing plan: diagnostics, study schedule, and test dates." },
      { href: "/resources/grade-12-application-timeline", title: "12th Grade College Application Timeline", excerpt: "A month-by-month senior-year timeline covering essays, recommendations, deadlines, and decisions." },
      { href: "/resources/grade-12-essay-schedule", title: "12th Grade Essay Schedule (Week-by-Week)", excerpt: "A practical essay schedule for seniors: brainstorming, drafting, feedback loops, and final polish." },
      { href: "/resources/college-application-checklist", title: "College Application Checklist", excerpt: "A complete checklist of every document and step for submitting a strong college application." },
      { href: "/resources/college-application-timeline-11th-12th-grade", title: "College Application Timeline (11th\u201312th Grade)", excerpt: "A grade-by-grade action plan so nothing falls through the cracks in junior and senior year." },
    ],
  },
  {
    label: "Essays",
    icon: FileText,
    articles: [
      { href: "/resources/personal-statement-structure", title: "The Personal Statement Structure: From Brainstorm to Final Draft", excerpt: "A memorable story arc: Hook \u2192 Development \u2192 Reflection \u2192 Tie-back. With pitfalls to avoid." },
      { href: "/resources/college-essay-outline", title: "College Essay Outline (How to Structure a Draft)", excerpt: "A simple, repeatable outline for a standout personal statement without sounding generic." },
      { href: "/resources/college-essay-thesis", title: "College Essay Thesis (What It Is + Examples)", excerpt: "How to build a clear central throughline that supports your story and keeps admissions engaged." },
      { href: "/resources/college-essay-draft-checklist", title: "College Essay Draft Checklist (Revise + Polish)", excerpt: "A practical revision checklist to improve structure, specificity, voice, and flow before you submit." },
      { href: "/resources/supplemental-essay-why-school", title: "Why School Essay: A Clear Structure + Example Outline", excerpt: "A straightforward \"Why us?\" structure that proves fit with specifics \u2014 not generic enthusiasm." },
      { href: "/resources/supplemental-essay-community", title: "Community Essay: What Admissions Actually Looks For", excerpt: "How to write a community essay that shows belonging and contribution, not just membership." },
      { href: "/resources/supplemental-essay-leadership", title: "Leadership Essay: Show Impact Without Bragging", excerpt: "Turn leadership into evidence: scope, decisions, and results \u2014 in a voice that still sounds like you." },
    ],
  },
  {
    label: "Testing",
    icon: GraduationCap,
    articles: [
      { href: "/resources/when-to-take-act-vs-sat", title: "When to Take the ACT vs SAT", excerpt: "When to start testing and which test format fits your strengths and target schools." },
      { href: "/resources/testing-policy-sat-vs-act", title: "SAT vs ACT: How to Choose (and When to Switch)", excerpt: "How to choose between SAT and ACT using diagnostics, section strengths, and your timeline." },
      { href: "/resources/testing-policy-test-optional", title: "Test-Optional Colleges: When It Helps (and When It Hurts)", excerpt: "A practical framework: when to submit scores, when to withhold, and how to avoid strategy mistakes." },
      { href: "/resources/testing-policy-score-choice-superscoring", title: "Score Choice & Superscoring: What to Send (and Why)", excerpt: "Understand score choice, superscoring, and reporting rules to submit your strongest package." },
      { href: "/resources/test-prep-sat-reading", title: "SAT Reading Strategy (How to Improve Fast)", excerpt: "Practical SAT Reading approach: question types, pacing rules, and a study plan to improve accuracy." },
      { href: "/resources/test-prep-act-math", title: "ACT Math Strategy (Timing + Accuracy)", excerpt: "Highest-impact ACT Math tactics for time management, guessing strategy, and targeted practice." },
      { href: "/resources/test-prep-accommodations", title: "Testing Accommodations (SAT/ACT) \u2014 How to Apply", excerpt: "Step-by-step accommodations guide: documentation, timelines, and how to avoid common mistakes." },
    ],
  },
  {
    label: "Extracurriculars & Activities",
    icon: Users,
    articles: [
      { href: "/resources/extracurricular-strategy", title: "Activity Spikes & Extracurricular Strategy: What Counts and Why", excerpt: "Depth over breadth, leadership, and authentic impact \u2014 plus summer and capstone ideas." },
      { href: "/resources/activities-list-brainstorm", title: "Common App Activities List Brainstorm (Step-by-Step)", excerpt: "Brainstorm strong entries, pick the right 10, and avoid common pitfalls in how you frame roles." },
      { href: "/resources/activities-list-impact-metrics", title: "Activities List Impact Metrics (Hours, Weeks, Role)", excerpt: "How to quantify impact so your activities list reads credible and high-signal." },
      { href: "/resources/activities-list-writing-examples", title: "Activities List Writing Examples (Before/After)", excerpt: "Clear before/after examples showing initiative, impact, and specificity without inflation." },
      { href: "/resources/passion-project-idea-generator", title: "Passion Project Ideas (A Simple \u201cInterest \u2192 Impact\u201d Method)", excerpt: "Generate strong project ideas based on your interests, constraints, and a realistic impact pathway." },
      { href: "/resources/passion-project-launch-checklist", title: "Passion Project Launch Checklist (From Idea to Execution)", excerpt: "A practical launch checklist: scope, timeline, accountability, and avoiding \"never finished\" failure modes." },
      { href: "/resources/passion-project-impact-tracking", title: "Track Impact for a Passion Project (Metrics + Storytelling)", excerpt: "Track impact with simple metrics, then translate it into credible application language." },
    ],
  },
  {
    label: "College List Building",
    icon: Compass,
    articles: [
      { href: "/resources/building-a-college-list", title: "How to Build a Balanced College List (Grades 11\u201312)", excerpt: "Reach, match, and safety \u2014 how to calibrate your list with real fit criteria and your current profile." },
      { href: "/resources/college-list-safety-match-reach", title: "Safety, Match, Reach: Build a Balanced College List", excerpt: "Build a balanced list using admissions data, academic fit, and financial reality." },
      { href: "/resources/college-list-research-template", title: "How to Research Colleges (A Simple Scoring Template)", excerpt: "A practical research workflow with a simple scoring template to compare schools apples-to-apples." },
      { href: "/resources/college-list-campus-visit-questions", title: "Campus Visit Questions (What to Ask + What to Notice)", excerpt: "Ask better campus visit questions \u2014 academics, advising, housing \u2014 and what signals matter." },
    ],
  },
  {
    label: "Recommendations & Interviews",
    icon: Star,
    articles: [
      { href: "/resources/choosing-recommenders", title: "How to Choose and Ask for Letters of Recommendation", excerpt: "Who to ask, when to ask, and what to provide so your teachers can write with detail and conviction." },
      { href: "/resources/recommendation-letter-teacher-ask", title: "How to Ask a Teacher for a Recommendation Letter", excerpt: "A step-by-step ask script, ideal timing, and what to share so teachers can write specific letters." },
      { href: "/resources/recommendation-letter-brag-sheet", title: "Brag Sheet for Recommendation Letters (Student + Parent Templates)", excerpt: "What to include in a brag sheet and sample prompts so your recommenders can write specifics." },
      { href: "/resources/recommendation-letter-counselor", title: "Counselor Recommendation Letter: What Matters (and How to Help)", excerpt: "What counselors emphasize, how to provide context, and how school process differences affect your timeline." },
      { href: "/resources/college-interview-prep", title: "College Interview Prep (Answer Framework + Practice Plan)", excerpt: "A practical interview prep framework: how to structure answers and prepare stories that support your narrative." },
      { href: "/resources/college-interview-questions", title: "College Interview Questions (Common Prompts + How to Answer)", excerpt: "Common interview prompts with answer guidance, pitfalls, and a simple prep checklist." },
      { href: "/resources/college-interview-thank-you-email", title: "Interview Thank You Email (Template + Timing)", excerpt: "A short, effective thank-you email template \u2014 when to send it and what to include." },
    ],
  },
  {
    label: "Financial Aid",
    icon: BookOpen,
    articles: [
      { href: "/resources/fafsa-completion-checklist", title: "FAFSA Completion Checklist", excerpt: "A quick-reference checklist for every document and step in the FAFSA process." },
      { href: "/resources/fafsa-completion-guide", title: "FAFSA Completion Guide (Step-by-Step)", excerpt: "What you need, common mistakes, and timelines \u2014 plus what to do if you get stuck." },
      { href: "/resources/financial-aid-award-comparison-toolkit", title: "Financial Aid Award Comparison Toolkit", excerpt: "A side-by-side toolkit to compare financial aid packages from multiple schools." },
      { href: "/resources/financial-aid-award-comparison", title: "Compare Financial Aid Awards (How to Read Offers)", excerpt: "How to compare aid offers: net cost, grants vs loans, renewal rules, and negotiation steps." },
      { href: "/resources/financial-aid-merit-vs-need", title: "Merit Aid vs Need-Based Aid (What Families Should Know)", excerpt: "Understand merit vs need-based aid, how schools calculate need, and common planning pitfalls." },
      { href: "/resources/financial-aid-appeal-letter", title: "Financial Aid Appeal Letter (Template + What to Say)", excerpt: "A realistic appeal template, what documentation helps, and how to write a strong request." },
      { href: "/resources/financial-aid-negotiation-email", title: "Financial Aid Negotiation Email (How to Ask for More Aid)", excerpt: "How to negotiate aid offers: what to compare, what to ask for, and a clear email script." },
      { href: "/resources/financial-aid-scholarship-search-plan", title: "Scholarship Search Plan (Weekly System That Works)", excerpt: "A weekly scholarship system that is sustainable \u2014 and how to avoid low-ROI applications." },
    ],
  },
];

const ALL_LABEL = "All Topics";

export default function ResourcesIndex() {
  const [activeFilter, setActiveFilter] = useState(ALL_LABEL);

  const visibleCategories =
    activeFilter === ALL_LABEL
      ? categories
      : categories.filter((c) => c.label === activeFilter);

  const relatedArticles = [
    { title: "11th Grade Testing Plan (SAT/ACT)", href: "/resources/grade-11-testing-plan", description: "A junior-year testing plan: diagnostics, study schedule, and test dates." },
    { title: "College Essay Outline (How to Structure a Draft)", href: "/resources/college-essay-outline", description: "A simple, repeatable outline for a standout personal statement." },
    { title: "FAFSA Completion Guide (Step-by-Step)", href: "/resources/fafsa-completion-guide", description: "What you need, common mistakes, and timelines for completing the FAFSA." },
    { title: "12th Grade College Application Timeline", href: "/resources/grade-12-application-timeline", description: "A month-by-month senior-year timeline covering essays, deadlines, and decisions." },
  ];

  return (
    <>
      <SEOHead
        title="Resources | Ivy Ready College Admissions Coaching"
        description="50+ free guides on college essays, testing, financial aid, extracurriculars, and planning from former admissions officers at Ivy Ready."
        url="/resources"
      />

      <SchemaScript schema={BreadcrumbSchema({ items: [{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }] })} />
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }]} />
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white" />
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-center gap-3 text-sm text-indigo-700">
            <BookOpen className="size-5" />
            <span>Resources Hub</span>
          </div>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight">Resources for a Smarter College Journey</h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            Free guides, expert tips, and actionable tools from former admissions officers and Ivy Ready strategists.
            Pick a topic below to jump straight to what you need.
          </p>

          {/* Topic filter bar */}
          <div className="mt-8 -mx-1 flex flex-wrap gap-2">
            {[ALL_LABEL, ...categories.map((c) => c.label)].map((label) => {
              const isActive = activeFilter === label;
              const cat = categories.find((c) => c.label === label);
              const Icon = cat ? cat.icon : BookOpen;
              return (
                <button
                  key={label}
                  onClick={() => setActiveFilter(label)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors border ${
                    isActive
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                      : "bg-white text-gray-700 border-gray-200 hover:border-indigo-400 hover:text-indigo-700"
                  }`}
                >
                  {label !== ALL_LABEL && <Icon className="size-3.5" />}
                  {label}
                  {label !== ALL_LABEL && cat && (
                    <span className={`ml-0.5 text-xs ${isActive ? "text-indigo-200" : "text-gray-400"}`}>
                      {cat.articles.length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Article grid — filtered */}
          {visibleCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.label} className="mt-12">
                <div className="flex items-center gap-2 mb-5">
                  <Icon className="size-5 text-indigo-600" />
                  <h2 className="text-xl font-semibold">{cat.label}</h2>
                  <span className="text-sm text-gray-400 ml-1">{cat.articles.length} guides</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.articles.map((a) => (
                    <ArticleCard key={a.href} {...a} tag={cat.label} />
                  ))}
                </div>
              </div>
            );
          })}

          <div className="mt-14 rounded-2xl border p-6 sm:p-8 bg-white/70">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <Sparkles className="size-6 text-indigo-600" />
                <div>
                  <h3 className="text-lg font-semibold">Prefer personal guidance?</h3>
                  <p className="text-gray-600 text-sm">Get a free 15&#8209;minute call with a former Ivy&#8209;League admissions coach.</p>
                </div>
              </div>
              <Link
                href="/free-consultation"
                className="inline-flex justify-center rounded-2xl px-5 py-3 bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700"
              >
                Schedule a free intro call
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <RelatedArticles title="Recommended next steps" items={relatedArticles} />
          </div>
        </div>
      </section>
    </>
  );
}
