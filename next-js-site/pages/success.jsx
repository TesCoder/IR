// ============================================
// FILE: /pages/success.jsx
// Success Stories page using shared JSON + OutcomesGallery
// ============================================

import SEOHead from "@/components/SEOHead";
import { useMemo, useState, useEffect } from "react";
import OutcomesGallery from "@/components/OutcomesGallery";
import Section from "@/components/Section";
import { OrbitGlowButton } from "@/components/OrbitGlowButton";
import rawData from "@/data/b4ro1e4h9etc2jv1qaov.json";
import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";

const TABS = [
  { key: "all", label: "All" },
  { key: "student", label: "Students" },
  { key: "parent", label: "Parents" },
];

export default function SuccessPage() {
  // Normalize JSON (handles default export edge cases)
  const data = useMemo(() => {
    if (Array.isArray(rawData)) return rawData;
    if (Array.isArray(rawData?.default)) return rawData.default;
    return [];
  }, []);

  const [activeTab, setActiveTab] = useState("all");
  const [query, setQuery] = useState("");
  const [modalType, setModalType] = useState("INFO");

  // Visible outcomes (hide only when explicitly false)
  const visibleOutcomes = useMemo(
    () => data.filter((t) => t && t.outcomes_visible !== false),
    [data]
  );

  // Randomized list (SSR-safe initial state, client-only shuffle)
  const [items, setItems] = useState(() => visibleOutcomes.slice());
  useEffect(() => {
    const shuffled = visibleOutcomes.slice().sort(() => Math.random() - 0.5);
    setItems(shuffled);
  }, [visibleOutcomes]);

  // Tabs → types passed to OutcomesGallery
  const filteredTypes = useMemo(() => {
    if (activeTab === "student") return ["student"];
    if (activeTab === "parent") return ["parent"];
    return ["student", "parent"]; // all
  }, [activeTab]);

  // Search filter applied on randomized list
  const filteredItems = useMemo(() => {
    let base = items;
    if (query.trim()) {
      const q = query.toLowerCase();
      base = base.filter(
        (t) =>
          t.college?.toLowerCase().includes(q) ||
          t.high_school?.toLowerCase().includes(q) ||
          `${t.fname} ${t.lname || ""}`.toLowerCase().includes(q)
      );
    }
    return base;
  }, [items, query]);

  // Header stats
  const counts = useMemo(() => {
    const total = visibleOutcomes.length;
    const students = visibleOutcomes.filter((t) => t.type === "student").length;
    const parents = visibleOutcomes.filter((t) => t.type === "parent").length;
    return { total, students, parents };
  }, [visibleOutcomes]);

  // Build chips from what's actually on screen
  const collegeChips = useMemo(() => {
    return [...new Set(filteredItems.map((t) => t.college).filter(Boolean))].sort();
  }, [filteredItems]);

  return (
    <>
      <SEOHead
        title="Success Stories | Ivy Ready"
        description="Real outcomes from Ivy Ready — students accepted to top universities and proud parents celebrating the journey."
        url="/success"
      />

      {/* Contact Modal (same wiring as Home) */}
      <Modal
        id="contactModal"
        title={modalType === "INFO" ? "Tell us how we can best serve you." : "Enter your info for a quick call."}
      >
        <ContactForm type={modalType} />
      </Modal>

      {/* Coach Modal (optional) */}
      <Modal id="coachModal" title="Schedule your intro call">
        <ContactForm type="INFO" showProfile={true} />
      </Modal>

      {/* HERO */}
      <div className="heroFrame bg-success-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 m-auto text-center flex flex-col items-center justify-center h-full">
          <h1 className="bannerTitle">Success Stories</h1>
          <p className="bannerSubtitle max-w-2xl">
            When students thrive, families do too. Explore acceptances and stories from the Ivy Ready community.
          </p>
        </div>
      </div>

      {/* FILTERS + STATS */}
      <Section centerContent>
        <div className="w-full max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  activeTab === t.key
                    ? "bg-ivy-blue text-white border-ivy-blue"
                    : "bg-white text-ivy-blue border-ivy-blue/30 hover:bg-ivy-blue/5"
                }`}
                aria-pressed={activeTab === t.key}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="mt-4 flex items-center justify-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by college, high school, or name…"
              className="w-full max-w-xl rounded-xl border px-4 py-2 shadow-sm"
              aria-label="Search outcomes"
            />
          </div>

          {/* Stat pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border shadow-sm">
              <strong>{counts.total}</strong> total outcomes
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border shadow-sm">
              <strong>{counts.students}</strong> students
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border shadow-sm">
              <strong>{counts.parents}</strong> parents
            </span>
          </div>
        </div>
      </Section>

      {/* GALLERY */}
      <Section redBg>
        {/* OutcomesGallery will filter by types prop and ignore hidden entries */}
        <OutcomesGallery items={filteredItems} types={filteredTypes} />
      </Section>

      {/* COLLEGE TAGS */}
      {collegeChips.length > 0 && (
        <Section>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-semibold mb-3">Colleges in this gallery</h2>
            <div className="flex flex-wrap gap-2">
              {collegeChips.map((c) => (
                <button
                  key={c}
                  onClick={() => setQuery(c)}
                  className="rounded-full border px-3 py-1 text-sm bg-white text-gray-800 hover:bg-gray-50"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section darkBg>
        <div className="rounded-3xl shadow-[0_0_5px_#ffffff80] border border-white/40 py-10 px-6 text-center hover:scale-[1.02]">
          <h2 className="text-white text-3xl mb-4">Ready to Begin?</h2>
          <p className="pCentered text-white mb-6">
            Take the first step toward your college success story with a free consultation from our expert admissions team.
          </p>
          <OrbitGlowButton
            onClick={() => setModalType("INFO")}
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
            Start Your Application Plan
          </OrbitGlowButton>
        </div>
      </Section>
    </>
  );
}
