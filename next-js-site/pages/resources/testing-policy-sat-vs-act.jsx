import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceTestingPolicySatVsAct() {
  const title = "SAT vs ACT: How to Choose (and When to Switch)";
  const description =
    "How to choose between the SAT and ACT using diagnostics, section strengths, and timeline—plus when switching tests makes sense.";
  const url = "/resources/testing-policy-sat-vs-act";

  const primaryCta = {
    location: "article_related",
    text: "Choose your test path",
    destination: "/free-consultation",
  };

  const articleSchema = ArticleSchema({
    title,
    description,
    author: "Ivy Ready",
    datePublished: "2026-02-28",
    dateModified: "2026-02-28",
  });

  const related = [
    {
      title: "Test-Optional Colleges: When It Helps (and When It Hurts)",
      href: "/resources/testing-policy-test-optional",
      description:
        "A practical decision framework: when to submit scores and when to withhold.",
    },
    {
      title: "Score Choice & Superscoring: What to Send (and Why)",
      href: "/resources/testing-policy-score-choice-superscoring",
      description:
        "Understand score choice, superscoring, and reporting rules.",
    },
    {
      title: "SAT vs ACT: When to Take Which Test",
      href: "/resources/when-to-take-act-vs-sat",
      description:
        "When to start testing and which test format fits your strengths.",
    },
  ];

  const handlePrimaryCtaClick = () => trackCtaClick(primaryCta);

  return (
    <>
      <SEOHead title={title} description={description} url={url} type="article" />
      <SchemaScript schema={articleSchema} />
      <article className="mx-auto max-w-3xl px-6 py-14 prose prose-indigo">
        <h1>{title}</h1>
        <p>
          <strong>The bottom line:</strong> every major college accepts the SAT and ACT
          equally. Your job is not to find the "right" test — it's to find the test
          where your performance is strongest, then commit to it with enough lead time to
          improve.
        </p>

        <h2>Key Structural Differences</h2>
        <table>
          <thead>
            <tr>
              <th>Factor</th>
              <th>SAT</th>
              <th>ACT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total time</td>
              <td>2 hr 14 min</td>
              <td>2 hr 55 min (+ 40 min optional Writing)</td>
            </tr>
            <tr>
              <td>Sections</td>
              <td>Reading & Writing, Math</td>
              <td>English, Math, Reading, Science</td>
            </tr>
            <tr>
              <td>Science section</td>
              <td>No</td>
              <td>Yes — data interpretation, not rote facts</td>
            </tr>
            <tr>
              <td>Math calculator policy</td>
              <td>Some no-calculator questions</td>
              <td>Calculator allowed throughout</td>
            </tr>
            <tr>
              <td>Pacing pressure</td>
              <td>Moderate — longer per-question time</td>
              <td>High — faster pace across all sections</td>
            </tr>
            <tr>
              <td>Score scale</td>
              <td>400–1600</td>
              <td>1–36 composite</td>
            </tr>
          </tbody>
        </table>

        <h2>The Right Diagnostic Process</h2>
        <p>
          The only reliable way to choose is to take a full-length, timed practice test
          for both. College Board and ACT both offer free official practice materials.
          Sit for each test under real testing conditions — no breaks beyond what the
          test allows, no pausing — and convert your raw scores to percentiles using
          official concordance tables.
        </p>
        <p>
          Compare percentile results, not point totals. A 1280 on the SAT and a 26 on
          the ACT are roughly equivalent nationally — but which score came more naturally
          to you, and which sections dragged your composite down, tells you which test
          you should focus on.
        </p>

        <h2>What the Score Gap Means</h2>
        <p>
          A meaningful gap (5+ percentile points in your favor on one test) is a clear
          signal. Lean toward the test where your performance is stronger. A small gap
          (1–3 percentile points) means the two tests are roughly equal for you — in
          that case, choose based on which preparation approach fits your schedule and
          learning style.
        </p>
        <ul>
          <li>
            <strong>SAT tends to suit:</strong> students who read carefully, handle
            evidence-based questions well, and are strong in algebra and advanced math.
          </li>
          <li>
            <strong>ACT tends to suit:</strong> students who work quickly, have solid
            STEM coursework, and are comfortable with data-heavy science reasoning
            passages.
          </li>
        </ul>

        <h2>When Switching Tests Makes Sense</h2>
        <p>
          Switching is worth considering if you have taken two or more official SAT (or
          ACT) sittings and your score has plateaued below your target range. Hitting a
          ceiling on one test sometimes reflects format mismatch rather than ability — a
          diagnostic on the other test can reveal meaningful headroom.
        </p>
        <p>
          What switching is not: a workaround for insufficient preparation. If you
          haven't genuinely studied for the first test, changing formats adds cost and
          time without changing the underlying problem. The real cost of testing both
          tests extensively — registration fees, prep materials, and test-day
          bandwidth — adds up quickly. Pick a test, commit to it, and improve.
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
      </article>
      <div className="mx-auto max-w-3xl px-6 pb-14">
        <RelatedArticles title="Recommended next steps" items={related} />
      </div>
    </>
  );
}
