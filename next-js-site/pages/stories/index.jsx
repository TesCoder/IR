"use client";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { SchemaScript } from "@/components/Schema";
import SuccessStoryCard from "@/components/SuccessStoryCard";
import Link from "next/link";
import { studentSuccessStories } from "@/data/studentSuccessStories";
import { trackCtaClick } from "@/lib/trackCta";

const ALL_TAGS = [
  "All",
  "Narrative Strategy",
  "Early Decision Optimization",
  "Grade Recovery Positioning",
  "Transfer Strategy",
  "Scholarship Optimization",
  "STEM Positioning",
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Student Success Stories | Ivy Ready",
  description: "How strategic positioning translates into selective admissions outcomes.",
  url: "https://ivyready.com/stories",
};

export default function StoriesIndex() {
  const [activeTag, setActiveTag] = useState("All");

  const published = studentSuccessStories.filter((s) => s.published);
  const filtered =
    activeTag === "All"
      ? published
      : published.filter((s) => s.tags.includes(activeTag));

  return (
    <>
      <SEOHead
        title="Student Success Stories | Ivy Ready"
        description="How strategic positioning translates into selective admissions outcomes."
        url="/stories"
        type="website"
      />
      <SchemaScript schema={collectionSchema} />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-indigo-50 to-white border-b border-indigo-100">
        <div className="mx-auto max-w-3xl px-6 pt-10 pb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
            Student Success Stories
          </h1>
          <p className="mt-3 text-gray-600">
            How strategic positioning translates into selective admissions outcomes.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-10">

        {/* Intro */}
        <p className="text-gray-600 leading-relaxed mb-8">
          Every case here represents a specific positioning challenge — a narrative gap, an inconsistent record, or an unconventional profile — and a deliberate strategy for addressing it. The outcomes reflect what well-structured preparation produces, not what any single factor guarantees.
        </p>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                activeTag === tag
                  ? "bg-indigo-700 text-white border-indigo-700"
                  : "bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:text-indigo-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Story Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {filtered.map((story) => (
              <SuccessStoryCard key={story.id} story={story} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 mb-12">No stories match this filter.</p>
        )}

        {/* CTA */}
        <div className="border-t border-gray-100 pt-10">
          <p className="text-gray-600 mb-4">
            Ready for a strategy built around your student?
          </p>
          <Link
            href="/free-consultation"
            onClick={() => trackCtaClick({ location: "stories_index", text: "Schedule a Consultation", destination: "/free-consultation" })}
            className="inline-flex items-center gap-2 bg-indigo-700 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-indigo-800 transition-colors"
          >
            Schedule a Consultation
            <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </>
  );
}
