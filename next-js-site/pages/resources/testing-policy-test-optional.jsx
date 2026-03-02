import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import ArticlePageLayout from "@/components/ArticlePageLayout";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";
import { RAIL_ITEMS, FALLBACK_ITEMS } from "@/lib/railData";
import { filterByTags, selectRailItems } from "@/lib/railUtils";

const PAGE_TAGS = ["testing", "admissions strategy", "sat", "act", "test-optional", "score reporting"];
const tagFiltered = filterByTags(RAIL_ITEMS, PAGE_TAGS);
const railItems = selectRailItems(
  "/resources/testing-policy-test-optional",
  tagFiltered.length >= 2 ? tagFiltered : [...tagFiltered, ...FALLBACK_ITEMS],
  { maxItems: 3, minItems: 2 }
);

export default function ResourceTestingPolicyTestOptional() {
  const title = "Test-Optional Colleges: When It Helps (and When It Hurts)";
  const description =
    "A practical test-optional decision framework: when to submit scores, when to withhold, and how to avoid common strategy mistakes.";
  const url = "/resources/testing-policy-test-optional";

  const primaryCta = {
    location: "article_related",
    text: "Build a testing plan",
    destination: "/free-consultation",
  };

  const articleSchema = ArticleSchema({
    title,
    description,
    author: "Ivy Ready",
    datePublished: "2026-02-28",
    dateModified: "2026-02-28",
  });

  const handlePrimaryCtaClick = () => trackCtaClick(primaryCta);

  return (
    <>
      <SEOHead title={title} description={description} url={url} type="article" />
      <SchemaScript schema={articleSchema} />
      <ArticlePageLayout title={title} description={description} url={url}>
        <p>
          <strong>The bottom line:</strong> test-optional does not mean test-irrelevant.
          When you submit a score, it is evaluated. When you don't, admissions officers
          know you made a deliberate choice — and they draw conclusions from it.
          Understanding exactly when to submit and when to withhold is one of the most
          consequential testing decisions you'll make.
        </p>

        <h2>What "Test-Optional" Actually Means</h2>
        <p>
          A test-optional policy means you are not required to submit SAT or ACT scores.
          It does <em>not</em> mean scores are ignored if submitted. Every score you send
          enters your academic review. Schools do not offer a neutral, consequence-free
          submission — a below-median score counts against you in the same way a
          below-average GPA would.
        </p>
        <p>
          Test-blind is different: those schools (a small number, including some UC
          campuses for in-state applicants) do not consider scores at all, even if you
          submit them. Know which policy each school on your list actually holds.
        </p>

        <h2>When Submitting Helps You</h2>
        <p>
          Submit your score when it is at or above the 50th percentile of admitted
          students at that school. Most schools publish middle-50% score ranges in their
          Common Data Set. If your score sits in the top half of that range — or above
          it — submitting adds a positive data point to your file.
        </p>
        <ul>
          <li>
            Your score is at or above the 25th percentile for that school and your GPA
            is strong — scores can reinforce academic ability.
          </li>
          <li>
            You are applying for merit scholarships or honors programs that still use
            standardized scores in their evaluation.
          </li>
          <li>
            Your high school has grade inflation concerns that a strong score can help
            contextualize.
          </li>
        </ul>

        <h2>When Withholding May Be the Smarter Move</h2>
        <p>
          If your score falls below the 50th percentile for admitted students at a given
          school, withholding is usually the right call at truly test-optional
          institutions. A weak score doesn't disappear — it actively lowers your academic
          profile.
        </p>
        <ul>
          <li>
            Your score is below the 25th percentile for that school's admitted class.
          </li>
          <li>
            Your GPA, course rigor, and extracurriculars are strong enough to stand
            without a score.
          </li>
          <li>
            You have not had adequate time to prepare — submitting a rushed attempt is
            rarely better than not submitting at all.
          </li>
        </ul>

        <h2>The Myth: "Not Submitting Is Always Neutral"</h2>
        <p>
          Many students believe that going test-optional carries zero downside. Research
          from admissions offices and independent analyses suggests otherwise: at
          highly selective schools, a larger share of admitted students submit scores
          than not. Withholding is not penalized, but it does mean your academic profile
          rests entirely on grades, rigor, and context — with no standardized benchmark
          to reinforce it.
        </p>
        <p>
          The practical rule: if you can score competitively, submit. If you cannot —
          and the school is genuinely test-optional — invest the time in strengthening
          every other part of your application instead of over-testing.
        </p>

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
        <RelatedArticles title="Recommended next steps" slotId="article_related" items={railItems} />
      </div>
    </>
  );
}
