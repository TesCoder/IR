import React, { useState } from "react";
import SEOHead from '@/components/SEOHead';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import { ServiceSchema, SchemaScript } from '@/components/Schema';
import { motion } from "framer-motion";
import Section from "@/components/Section";
import Link from "next/link";
import { Button } from "@/components/Button";
import { OrbitGlowButton } from "@/components/OrbitGlowButton";
import { trackCtaClick } from "@/lib/trackCta";
import {
  CalendarDays,
  GraduationCap,
  Target,
  ClipboardCheck,
  Sparkles,
  BookOpenCheck,
  School,
  LineChart,
} from "lucide-react";


// NOTE: Drop this as pages/early-planning.js (or /services/early-planning.js)
// It follows your project's conventions (Section, Link, Tailwind, shadcn Button, lucide icons).
// Replace any missing imports with your local equivalents.
//

export default function EarlyPlanning() {
  const [modalType, setModalType] = useState("INFO");
  const handleHeroServiceCtaClick = () => {
    setModalType("INFO");
    trackCtaClick({ location: "services", text: "Schedule an Intro Call" });
  };

  const deliverables = [
    {
      icon: <ClipboardCheck className="h-5 w-5" />, 
      title: "Four-Year Academic Map",
      text: "Personalized course sequencing (Honors/AP/IB) to balance rigor and success, updated each term.",
    },
    {
      icon: <Target className="h-5 w-5" />, 
      title: "Extracurricular ‘Spike’ Plan",
      text: "Focus area identification + annual impact targets (leadership, competitions, research, or passion project).",
    },
    {
      icon: <CalendarDays className="h-5 w-5" />, 
      title: "Testing & Milestones Timeline",
      text: "SAT/ACT landscape briefing, PSAT planning, and right-sized practice windows (no one-size-fits-all).",
    },
    {
      icon: <BookOpenCheck className="h-5 w-5" />, 
      title: "Study Systems & Executive Function",
      text: "Study cadence, note-taking, and task systems to build sustainable A-level performance.",
    },
    {
      icon: <School className="h-5 w-5" />, 
      title: "Summer & Enrichment Strategy",
      text: "Tiered options for programs, internships, service, or self-driven projects that compound yearly.",
    },
    {
      icon: <LineChart className="h-5 w-5" />, 
      title: "Quarterly Progress Reviews",
      text: "Data-backed check-ins with adjustments to courses, activities, and goals each quarter.",
    },
  ];

  const timeline = [
    {
      grade: "9th Grade",
      bullets: [
        "Establish study systems and class foundations; target A-/A trajectory.",
        "Sample activities, then narrow to 1–2 lanes for potential ‘spike’.",
        "Plan summer #1: exploratory but aligned (entry competitions, intro research, coding, arts portfolio, or service).",
      ],
    },
    {
      grade: "10th Grade",
      bullets: [
        "Increase course rigor where appropriate (H/AP/IB) while preserving GPA.",
        "Level up in chosen lane (leadership role, mentorship, or first independent project).",
        "PSAT calibration; determine whether SAT/ACT testing path is advantageous.",
        "Plan summer #2: depth move (selective program, research assistantship, venture/nonprofit build, or capstone).",
      ],
    },
  ];

  const faqs = [
    {
      question: "Is this only for Ivy-bound students?",
      answer: "No. The framework scales for any selective target. We anchor to each student’s goals, school context, and bandwidth.",
    },
    {
      question: "Do we need test prep in 9th/10th?",
      answer: "Usually not heavy prep. We right-size exposure (PSAT awareness, light diagnostics) and revisit a formal plan in 10th–11th depending on targets.",
    },
    {
      question: "How often do we meet?",
      answer: "Most families meet monthly during the school year with quick check-ins around exams and deadlines. Quarterly reviews drive bigger plan updates.",
    },
    {
      question: "Can you help launch a project or find research?",
      answer: "Yes. We ideate, scope, and build a realistic roadmap, plus outreach scripts and accountability to move from idea → impact.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Early Planning (Grades 9–10) — Ivy Ready"
        description="Structured 9th–10th grade planning: four-year academic map, extracurricular spike, testing timeline, and summer strategy. Built for balance, rigor, and real growth."
        url="/services/early-planning"
      />

      <SchemaScript schema={ServiceSchema({ serviceName: 'Early Planning', description: 'Four-year planning and extracurricular strategy for 9th–10th graders.' })} />
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Early Planning', url: '/services/early-planning' }]} />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-semibold tracking-tight md:text-5xl"
              >
                Early Planning (Grades 9–10)
              </motion.h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Build momentum early. We design a four-year plan that balances course rigor, GPA, and a meaningful extracurricular spike—so 11th and 12th feel like execution, not catch-up.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <OrbitGlowButton
                    onClick={handleHeroServiceCtaClick}
                    data-bs-toggle="modal" // triggers Bootstrap modal (adds transparent black backdrop) (aka popup)
                    data-bs-target="#contactModal"
                >
                    Schedule an Intro Call
                </OrbitGlowButton>

                <Link href="/services/support-packages" className="underline">
                  Explore Packages
                </Link>
              </div>
              <ul className="mt-6 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
                <li className="flex items-center gap-2"><GraduationCap className="h-4 w-4" /> Former Admissions backgrounds</li>
                <li className="flex items-center gap-2"><CalendarDays className="h-4 w-4" /> Quarterly reviews + on-demand check-ins</li>
                <li className="flex items-center gap-2"><Target className="h-4 w-4" /> Personalized ‘spike’ development</li>
                <li className="flex items-center gap-2"><ClipboardCheck className="h-4 w-4" /> Four-year academic map</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-gradient-to-br from-white to-muted p-6 shadow">
              <div className="grid grid-cols-2 gap-4">
                <Stat label="GPA Guardrails" value=">= 3.8" />
                <Stat label="Rigor Fit" value="Right-Sized" />
                <Stat label="Quarterly Reviews" value="4x/year" />
                <Stat label="Summer Plans" value="Tiered" />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                We pick the right battles: classes that stretch, activities that compound, timelines that protect wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <Section darkBg title="What You Get" centerContent>
        <div className="text-white mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border p-5 shadow-sm"
            >
              <div className="text-white mb-2 inline-flex items-center justify-center rounded-full border p-2">
                {d.icon}
              </div>
              <h3 className="text-white text-lg font-semibold">{d.title}</h3>
              <p className="text-white mt-1 text-sm text-muted-foreground">{d.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* TIMELINE */}
      <Section title="Grade-by-Grade Roadmap" centerContent>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
          {timeline.map((t, i) => (
            <div key={i} className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{t.grade}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {t.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-foreground/70" /> {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section title="How It Works" centerContent>
        <div className="mx-auto max-w-4xl px-6">
          <ol className="grid gap-4 md:grid-cols-3">
            <li className="rounded-2xl border p-5 shadow-sm">
              <p className="text-sm font-semibold">1) Diagnostic & Alignment</p>
              <p className="mt-1 text-sm text-muted-foreground">School context, goals, constraints. Light diagnostics for study systems and activity inventory.</p>
            </li>
            <li className="rounded-2xl border p-5 shadow-sm">
              <p className="text-sm font-semibold">2) Custom Plan</p>
              <p className="mt-1 text-sm text-muted-foreground">Four-year map, spike plan, testing timeline, and summer strategy. Shared tracker with milestones.</p>
            </li>
            <li className="rounded-2xl border p-5 shadow-sm">
              <p className="text-sm font-semibold">3) Review & Adjust</p>
              <p className="mt-1 text-sm text-muted-foreground">Quarterly reviews and just-in-time tweaks around grades, leadership moves, and opportunities.</p>
            </li>
          </ol>
          <div className="mt-6 flex items-center justify-center gap-3">

            <OrbitGlowButton
                onClick={() => setModalType("INFO")}
                data-bs-toggle="modal"
                data-bs-target="#contactModal"
                >
                Book an Intro Call
                </OrbitGlowButton>

            <Link href="services/application-evaluation" className="underline">Start with an Evaluation</Link>
          </div>
        </div>
      </Section>

      <Section title="FAQs" centerContent>
        <FAQ faqs={faqs} />
      </Section>
    </>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border p-4 text-center">
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
