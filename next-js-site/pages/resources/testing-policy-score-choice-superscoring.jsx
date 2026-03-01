import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceTestingPolicyScoreChoiceSuperscoring() {
  const title = "Score Choice & Superscoring: What to Send (and Why)";
  const description =
    "Understand score choice, superscoring, and reporting rules—so you submit the strongest score package without over-testing.";
  const url = "/resources/testing-policy-score-choice-superscoring";

  const primaryCta = {
    location: "article_related",
    text: "Optimize your score strategy",
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
        "When to submit scores and when withholding is the smarter move.",
    },
    {
      title: "SAT vs ACT: How to Choose (and When to Switch)",
      href: "/resources/testing-policy-sat-vs-act",
      description:
        "How to choose between SAT and ACT using diagnostics and section strengths.",
    },
    {
      title: "SAT vs ACT: When to Take Which Test",
      href: "/resources/when-to-take-act-vs-sat",
      description:
        "When to start testing and how to build a smart testing timeline.",
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
          <strong>The bottom line:</strong> score reporting rules vary by test and by
          school. Understanding how score choice and superscoring work — and where they
          don't apply — lets you plan your testing calendar to maximize the score you
          present without taking more tests than necessary.
        </p>

        <h2>What Score Choice Means for the SAT</h2>
        <p>
          College Board's Score Choice policy lets you select which test dates to send
          to colleges. If you sat for the SAT in March, June, and October, you can
          choose to send only the October scores. Schools receive only the dates you
          authorize — not your full testing history.
        </p>
        <p>
          The important caveat: some schools opt out of Score Choice and require you to
          submit all SAT scores from every sitting. This is stated in each school's
          testing policy. Before you test, check whether your target schools require all
          scores — that changes how you think about low-stakes practice attempts.
        </p>

        <h2>What Score Choice Means for the ACT</h2>
        <p>
          The ACT works differently. By default, when you send ACT scores, colleges
          receive the scores from the specific test date you choose. However, if a school
          requires all scores, ACT's policy requires you to send them. Additionally,
          schools that accept ACT superscoring may request multiple dates in order to
          construct your superscore. Know each school's requirement before registering
          for additional ACT sittings.
        </p>

        <h2>How Superscoring Works</h2>
        <p>
          A superscore is the highest composite built from your best section scores
          across multiple test dates. For the SAT, a school that superscores will take
          your highest Evidence-Based Reading and Writing score from one date and your
          highest Math score from another, then combine them into a new composite.
        </p>
        <p>
          Example: SAT sitting 1 — Reading/Writing 680, Math 640 (composite 1320). SAT
          sitting 2 — Reading/Writing 650, Math 690 (composite 1340). Superscore:
          680 + 690 = 1370.
        </p>
        <p>
          ACT superscoring works the same way — best English, Math, Reading, and Science
          scores from different dates are averaged into a new composite. Not every school
          superscores both tests. Check each school's Common Data Set or testing policy
          page explicitly.
        </p>

        <h2>What Score Choice Does NOT Protect You From</h2>
        <p>
          A significant number of highly selective schools — including several Ivy League
          institutions — require all scores regardless of College Board's or ACT's
          Score Choice policy. At these schools, you are expected to self-report every
          sitting, and the application honor code requires you to disclose your full
          testing history. Withholding scores at a school that requires all scores is a
          policy violation, not a strategy.
        </p>

        <h2>When to Retest — and When to Stop</h2>
        <p>
          Retest when: you have a concrete, realistic improvement path (a specific weak
          section you can address with targeted prep), and the improvement would
          meaningfully change your position relative to a school's admitted student
          profile.
        </p>
        <p>
          Stop testing when: your scores have plateaued across two or more sittings,
          your target schools superscore so additional tests are unlikely to raise your
          composite substantially, or the time cost of another test prep cycle comes at
          the expense of essays, extracurriculars, or grades. More test dates do not
          automatically produce a better outcome — deliberate preparation between sittings
          does.
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
