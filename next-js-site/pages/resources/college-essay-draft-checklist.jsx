import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";
import { RAIL_ITEMS, FALLBACK_ITEMS } from "@/lib/railData";
import { filterByTags, selectRailItems } from "@/lib/railUtils";
import ArticlePageLayout from "@/components/ArticlePageLayout";

const PAGE_TAGS = ["college essays", "writing", "admissions strategy", "common app", "personal statement"];
const tagFiltered = filterByTags(RAIL_ITEMS, PAGE_TAGS);
const railItems = selectRailItems(
  "/resources/college-essay-draft-checklist",
  tagFiltered.length >= 2 ? tagFiltered : [...tagFiltered, ...FALLBACK_ITEMS],
  { maxItems: 3, minItems: 2 }
);

export default function ResourceCollegeEssayDraftChecklist() {
  const title = "College Essay Draft Checklist (Revise + Polish)";
  const description =
    "Use a practical revision checklist to improve structure, specificity, voice, and flow—before you submit your final draft.";

  const url = "/resources/college-essay-draft-checklist";

  const primaryCta = {
    location: "article_related",
    text: "Book a consult",
    destination: "/free-consultation",
  };

  const articleSchema = ArticleSchema({
    title,
    description,
    author: "Ivy Ready",
    datePublished: "2026-02-07",
    dateModified: "2026-02-07",
  });


  const handlePrimaryCtaClick = () => {
    trackCtaClick(primaryCta);
  };

  return (
    <>
      <SEOHead title={title} description={description} url={url} type="article" />
      <SchemaScript schema={articleSchema} />

      <ArticlePageLayout title={title} description={description} url={url}>
        <p>
          The best essays are revised — not “fixed.” Use this checklist to strengthen your story,
          sharpen your reflection, and make every paragraph earn its space.
        </p>

        <h2>Structure</h2>
        <ul>
          <li>Does the opening pull the reader into a specific moment?</li>
          <li>Is there one clear throughline (not 3–4 competing themes)?</li>
          <li>Does each paragraph move the story forward?</li>
          <li>Does the ending connect back to the start and add insight?</li>
        </ul>

        <h2>Specificity</h2>
        <ul>
          <li>Replace generic phrases with concrete details (scene, dialogue, actions).</li>
          <li>Cut “big claims” that aren&apos;t proven by the story.</li>
          <li>Highlight the <em>decision points</em>: what you chose, why, and what changed.</li>
        </ul>

        <h2>Voice</h2>
        <ul>
          <li>Read aloud: does it sound like you (not a brochure)?</li>
          <li>Remove buzzwords unless you explain them with evidence.</li>
          <li>Keep sentence lengths varied; aim for clarity over complexity.</li>
        </ul>

        <h2>Reflection (the “so what”)</h2>
        <ul>
          <li>After key moments, add one sentence of meaning: what you realized and why it matters.</li>
          <li>Show growth without exaggerating hardship.</li>
          <li>Make the insight transferable: values, habits, or mindset you&apos;ll bring forward.</li>
        </ul>

        <h2>Final polish</h2>
        <ul>
          <li>Trim filler: “In today&apos;s society…”, “I have always…”, “This taught me that…”</li>
          <li>Check transitions so the essay flows naturally.</li>
          <li>Proofread for names, timelines, and consistency.</li>
        </ul>

        <hr />
        <p className="not-prose mt-8">
          <Link
            href={primaryCta.destination}
            onClick={handlePrimaryCtaClick}
            className="inline-flex rounded-2xl px-5 py-3 bg-indigo-600 text-white font-medium hover:bg-indigo-700"
            aria-label={primaryCta.text}
          >
            <span>{primaryCta.text}</span>
            <span aria-hidden="true"> →</span>
          </Link>
        </p>
      </ArticlePageLayout>

      <div className="mx-auto max-w-3xl px-6 pb-14">
        <RelatedArticles
          title="Recommended next steps"
          slotId="article_related"
          items={railItems}
        />
      </div>
    </>
  );
}

