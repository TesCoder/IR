import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceSupplementalEssayLeadership() {
  const title = "Leadership Essay: Show Impact Without Bragging";
  const description =
    "Turn leadership into evidence: scope, decisions, and results—plus how to write a specific essay that still sounds like you.";
  const url = "/resources/supplemental-essay-leadership";

  const primaryCta = {
    location: "article_related",
    text: "See support packages",
    destination: "/services/support-packages",
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
      title: "Why School Essay: A Clear Structure + Example Outline",
      href: "/resources/supplemental-essay-why-school",
      description:
        "A structure for the 'Why us?' essay that uses specifics, not enthusiasm.",
    },
    {
      title: "Community Essay: What Admissions Actually Looks For",
      href: "/resources/supplemental-essay-community",
      description:
        "How to write a community essay that shows belonging and contribution.",
    },
    {
      title: "Extracurricular Strategy",
      href: "/resources/extracurricular-strategy",
      description:
        "How to build a compelling extracurricular profile for college applications.",
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
          Leadership essays fail most often not because the writer lacks
          accomplishments — but because they list titles instead of showing
          decisions. Admissions readers have seen hundreds of "club president"
          essays. What they remember are the ones where something was actually
          at stake.
        </p>

        <h2>The Bragging Trap (and Why It Backfires)</h2>
        <p>
          The instinct is to enumerate: captain, founder, lead, chair. But
          listing roles tells admissions nothing about how you think or what you
          built. The trap is confusing scope of title with evidence of leadership.
          A vice president who reorganized a failing club did more than a
          president who coasted. Show the work, not the credential.
        </p>

        <h2>What Admissions Actually Wants to See</h2>
        <p>
          Strong leadership essays answer three questions implicitly:
        </p>
        <ul>
          <li>
            <strong>What was the actual problem or decision?</strong> Not "I
            led the team" — what specifically needed to change, and why did it
            fall to you?
          </li>
          <li>
            <strong>What did you choose to do, and why?</strong> The decision
            itself reveals how you think. Include the tension: what you gave up,
            who pushed back, what you were uncertain about.
          </li>
          <li>
            <strong>What happened as a result?</strong> Results don&apos;t need
            to be dramatic — they need to be honest and specific. A smaller group
            that actually ran better is more compelling than vague "improved morale."
          </li>
        </ul>

        <h2>Three-Part Evidence Structure</h2>
        <ol>
          <li>
            <strong>Context:</strong> Briefly establish the situation — what
            the group was, what challenge existed, what your role was. Keep this
            under 20% of the essay.
          </li>
          <li>
            <strong>Decision:</strong> The heart of the essay. One specific
            decision you made, what you considered, and what made it yours to
            make. This is where voice comes in.
          </li>
          <li>
            <strong>Outcome:</strong> What changed — for the group, the
            project, or others involved. Then a single sentence on what this
            experience tells you about how you work or what you value.
          </li>
        </ol>

        <h2>How to Write About Informal Leadership</h2>
        <p>
          You don&apos;t need a title to write a leadership essay. Some of the
          strongest examples involve:
        </p>
        <ul>
          <li>
            Peer mentoring or tutoring where you changed someone&apos;s approach
          </li>
          <li>
            Self-started projects where you recruited others, set direction, or
            solved a problem no one else owned
          </li>
          <li>
            A moment where you disagreed with the group and made a case —
            whether or not you &quot;won&quot;
          </li>
        </ul>
        <p>
          What makes these compelling is specificity and honesty. Admissions
          readers can tell when a student is performing leadership vs. actually
          reflecting on it.
        </p>

        <h2>Staying Specific Without Losing Your Voice</h2>
        <p>
          The most common edit on leadership essays: replace every adjective
          with a scene. Instead of "I took initiative," describe the moment you
          decided to act before being asked. Instead of "my team trusted me,"
          show the conversation where trust was actually built. Specific language
          sounds like you — generic language sounds like a resume.
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
