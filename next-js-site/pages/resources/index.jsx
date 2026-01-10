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
        <Link href={href} className="text-indigo-600 font-medium hover:underline">Read article →</Link>
      </div>
    </motion.div>
  );
}

export default function ResourcesIndex() {
  const articles = [
    {
      href: "/resources/building-a-college-list",
      title: "How to Build a Balanced College List (Grades 11–12)",
      excerpt:
        "Reach, match, and safety — how to calibrate your list with real fit criteria and your current profile.",
      tag: "College List & Fit",
    },
    {
      href: "/resources/personal-statement-structure",
      title: "The Personal Statement Structure: From Brainstorm to Final Draft",
      excerpt:
        "A memorable story arc: Hook → Development → Reflection → Tie‑back. With pitfalls to avoid.",
      tag: "Essays & Applications",
    },
    {
      href: "/resources/extracurricular-strategy",
      title: "Activity Spikes & Extracurricular Strategy: What Counts and Why",
      excerpt:
        "Depth over breadth, leadership, and authentic impact — plus summer/capstone ideas.",
      tag: "Extracurriculars & Impact",
    },
    {
      href: "/resources/choosing-recommenders",
      title: "How to Choose and Ask for Letters of Recommendation",
      excerpt:
        "Who to ask, when to ask, and what to provide so your teachers can write with detail and conviction.",
      tag: "Recommendations",
    },
    {
      href: "/resources/timeline-by-grade",
      title: "Timeline by Grade: What Every High School Student Should Do (9th–12th)",
      excerpt:
        "A clear 4‑year roadmap so you’re always ahead of deadlines and opportunities.",
      tag: "Planning & Timelines",
    },
  ];
  const relatedArticles = [
    {
      title: "How to Build a Balanced College List",
      href: "/resources/building-a-college-list",
      description: "Calibrate reach, match, and safety choices with real fit criteria.",
    },
    {
      title: "The Personal Statement Structure",
      href: "/resources/personal-statement-structure",
      description: "Hook, development, and reflection — avoid common drafting traps.",
    },
    {
      title: "Activity Spikes & Extracurricular Strategy",
      href: "/resources/extracurricular-strategy",
      description: "Depth over breadth: build a standout impact spike.",
    },
    {
      title: "How to Choose and Ask Recommenders",
      href: "/resources/choosing-recommenders",
      description: "Pick the right teachers and equip them with specifics.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Resources | Ivy Ready College Admissions Coaching"
        description="Free expert articles and guides on college applications, essays, extracurricular strategy, and planning from Ivy Ready."
        url="/resources"
      />

      {/* Breadcrumb schema + visual breadcrumb */}
      <SchemaScript schema={BreadcrumbSchema({ items: [{ name: 'Home', url: '/' }, { name: 'Resources', url: '/resources' }] })} />
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Resources', url: '/resources' }]} />
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
            Bookmark this section and revisit each year.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <ArticleCard key={a.href} {...a} />
            ))}
          </div>

          <div className="mt-12 rounded-2xl border p-6 sm:p-8 bg-white/70">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <Sparkles className="size-6 text-indigo-600" />
                <div>
                  <h3 className="text-lg font-semibold">Prefer personal guidance?</h3>
                  <p className="text-gray-600 text-sm">Get a free 15‑minute call with a former Ivy‑League admissions coach.</p>
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

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600"><FileText className="size-4"/> Essays & Applications</div>
            <div className="flex items-center gap-2 text-gray-600"><Compass className="size-4"/> College List & Fit</div>
            <div className="flex items-center gap-2 text-gray-600"><Users className="size-4"/> Extracurriculars & Impact</div>
            <div className="flex items-center gap-2 text-gray-600"><GraduationCap className="size-4"/> International / Transfer / Graduate</div>
            <div className="flex items-center gap-2 text-gray-600"><Calendar className="size-4"/> Planning & Timelines</div>
          </div>
          <div className="mt-12">
            <RelatedArticles
              title="Recommended next steps"
              items={relatedArticles}
            />
          </div>
        </div>
      </section>
    </>
  );
}