import React, { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Handshake,
  BookOpenCheck,
  ClipboardList,
  ListChecks,
  FileEdit,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Section from "@/components/Section";
import { OrbitGlowButton } from "@/components/OrbitGlowButton";

/**
 * SteppedRoadmapCarousel (High-Contrast, Sharp Edges)
 * ---------------------------------------------------
 * Compact slideshow with overlapping previews. This revision sharpens edges,
 * adds visible borders, and guarantees readable text by using a solid, high-
 * contrast surface for copy instead of placing text directly on dark gradients.
 *
 * Usage:
 *   <SteppedRoadmapCarousel onCtaClick={() => setIntroModalOpen(true)} />
 */

export default function SteppedRoadmapCarousel({
  onCtaClick,
  className = "",
  ctaLabel = "Schedule a Free Intro Call",
}) {
  const steps = useMemo(
    () => [
      {
        title: "Onboarding",
        bullets: ["Match with your coach", "Understand goals", "Set the foundation"],
        role: "Onboarding Specialist",
        icon: <Handshake className="h-6 w-6" />,
        from: "from-violet-700",
        to: "to-violet-500",
      },
      {
        title: "Academics",
        bullets: ["Course selection", "Study plan", "ACT/SAT strategy"],
        role: "Counselor + Tutor",
        icon: <BookOpenCheck className="h-6 w-6" />,
        from: "from-cyan-700",
        to: "to-cyan-500",
      },
      {
        title: "Major Exploration",
        bullets: ["Interests assessment", "Resume & ECs", "Activites Planning"],
        role: "Counselor",
        icon: <ClipboardList className="h-6 w-6" />,
        from: "from-rose-700",
        to: "to-rose-500",
      },
      {
        title: "List Development",
        bullets: ["Fit analysis", "Research & visits", "Relationships"],
        role: "Counselor",
        icon: <ListChecks className="h-6 w-6" />,
        from: "from-slate-800",
        to: "to-slate-600",
      },
      {
        title: "Applications",
        bullets: ["Packaging & strategy", "Essays coaching/editing", "Interviews"],
        role: "Counselor + Essay Coach",
        icon: <FileEdit className="h-6 w-6" />,
        from: "from-indigo-700",
        to: "to-indigo-500",
      },
      {
        title: "Decisions",
        bullets: ["Offer comparisons", "Fit check", "Next steps"],
        role: "Counselor",
        icon: <BadgeCheck className="h-6 w-6" />,
        from: "from-emerald-700",
        to: "to-emerald-500",
      },
    ],
    []
  );

  const [modalType, setModalType] = useState("INFO");

  const [index, setIndex] = useState(0);
  const total = steps.length;

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + total) % total),
    [total]
  );

  const goto = useCallback((i) => setIndex(i), []);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  // Animation variants for slide direction
  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 40 : -40, opacity: 0, scale: 0.98 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction) => ({ x: direction > 0 ? -40 : 40, opacity: 0, scale: 0.98 }),
  };

  const prev = (index - 1 + total) % total;
  const next = (index + 1) % total;

  // Utility: card shell with sharp edges + border
  const CardShell = ({ gradientFrom, gradientTo, children, className = "" }) => (
    <div
      className={`overflow-hidden rounded-md border-[2px] border-slate-900 bg-white`}
    >
      {/* Gradient band on top for identity color */}
      <div className={`h-2 w-full bg-gradient-to-r ${gradientFrom} ${gradientTo}`} />
      {children}
    </div>
  );

  // Utility: high-contrast content block
  const ContentBlock = ({ icon, title, role, bullets }) => (
    <div className="ml-10 px-5 py-4">
      <div className="flex items-start gap-3">
        <div className="shrink-0 text-slate-900">{icon}</div>
        <div>
          <div className="text-base font-semibold text-slate-900">{title}</div>
          <div className="text-xs text-slate-900">{role}</div>
        </div>
      </div>
      <ul className="mt-3 ml-8 list-disc list-inside text-[15px] leading-6 text-slate-800 dark:text-slate-200">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );

  // Ghost preview card (reduced opacity, sharp edges)
  const Ghost = ({ step }) => (
    <div className="overflow-hidden rounded-md border border-slate-300/70 dark:border-slate-600/70 opacity-60 backdrop-blur-sm bg-white/90">
      <div className={`h-2 w-full bg-gradient-to-r ${step.from} ${step.to}`} />
      <div className="px-4 py-3">
        <div className="text-sm font-medium text-slate-900 flex items-center gap-2">
          {step.icon}
          {step.title}
        </div>
        <div className="text-xs mt-1 text-slate-600">{step.bullets[0]}</div>
      </div>
    </div>
  );

  return (
    <section
      className={`relative  ${className}`}
      aria-label="Ivy Ready slideshow process"
    >
      {/* Header */}
      <div className="text-center mb-2 ">
        <h2 className="">Ivy Ready's Proven Process</h2>
        <p className="">
          Our college admission support process has been refined to get the best outcome for each student.
        </p>
      </div>

      {/* Carousel container */}
      <div className="relative">
        {/* Overlapping previews */}
        <div className="pointer-events-none select-none">
          {/* Prev ghost */}
          <div className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 w-[35%] hidden sm:block">
            <Ghost step={steps[prev]} />
          </div>
          {/* Next ghost */}
          <div className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 w-[35%] hidden sm:block">
            <Ghost step={steps[next]} />
          </div>
        </div>

        {/* Main slide (sharp, bordered, high-contrast content) */}
        <div className="relative mx-auto max-w-xl">
          <div className="relative">
            <AnimatePresence custom={1} mode="popLayout" initial={false}>
              <motion.div
                key={index}
                custom={1}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 140, damping: 18 }}
              >
                <CardShell gradientFrom={steps[index].from} gradientTo={steps[index].to}>
                  <ContentBlock
                    icon={steps[index].icon}
                    title={steps[index].title}
                    role={steps[index].role}
                    bullets={steps[index].bullets}
                  />
                </CardShell>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            {/* Left Control */}
            <div className="absolute inset-y-0 -left-3 flex items-center">
              <OrbitGlowButton
                type="button"
                aria-label="Previous step"
                onClick={() => go(-1)}
                className="inline-flex items-center justify-center rounded-md bg-white text-black shadow-sm border border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-black"
                  aria-hidden="true"
                >
                  <path d="M10.5 19.5a.75.75 0 0 1 1.06-1.06L4.84 11.72h15.41a.75.75 0 0 1 0-1.5H4.84l6.72-6.72a.75.75 0 1 1-1.06-1.06l-8 8a.75.75 0 0 1 0 1.06l8 8Z" />
                </svg>
              </OrbitGlowButton>
            </div>


            {/* Right Control */}
            <div className="absolute inset-y-0 -right-3 flex items-center">
              <OrbitGlowButton
                type="button"
                aria-label="Next step"
                onClick={() => go(1)}
                className="inline-flex items-center justify-center rounded-md bg-white text-black shadow-sm border border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-black"
                  aria-hidden="true"
                >
                  <path d="M13.5 4.5a.75.75 0 0 0-1.06 1.06l6.72 6.72H3.75a.75.75 0 0 0 0 1.5h15.41l-6.72 6.72a.75.75 0 1 0 1.06 1.06l8-8a.75.75 0 0 0 0-1.06l-8-8Z" />
                </svg>
              </OrbitGlowButton>
            </div>

          </div>
        </div>

        {/* Dots */}
        <div className="mt-5 flex items-center justify-center gap-2">
          {steps.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to step ${i + 1}`}
              onClick={() => goto(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-6 bg-slate-900 dark:bg-slate-100" : "w-2.5 bg-slate-300 dark:bg-slate-700"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 flex justify-center">

        <OrbitGlowButton
          onClick={() => setModalType('INFO')}
          data-bs-toggle="modal" // triggers Bootstrap modal (adds transparent black backdrop) (aka popup)
          data-bs-target="#contactModal"
          className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold shadow-sm border border-slate-300 dark:border-slate-700 hover:border-indigo-400  "
        >
          {ctaLabel}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M13.5 4.5a.75.75 0 0 0-1.06 1.06l6.72 6.72H3.75a.75.75 0 0 0 0 1.5h15.41l-6.72 6.72a.75.75 0 1 0 1.06 1.06l8-8a.75.75 0 0 0 0-1.06l-8-8Z" />
          </svg>
        </OrbitGlowButton>
      </div>

      <p className="sr-only">
        A slideshow of six steps from onboarding to decisions. Use left and right arrow keys to navigate. No financial-aid or scholarship advising is included.
      </p>
    </section>
  );
}
