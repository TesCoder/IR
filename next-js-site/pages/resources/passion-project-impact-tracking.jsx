import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourcePassionProjectImpactTracking() {
  const title = "Track Impact for a Passion Project (Metrics + Storytelling)";
  const description =
    "Track impact with simple metrics and reflection prompts, then translate it into credible application language without exaggeration.";
  const url = "/resources/passion-project-impact-tracking";

  const primaryCta = {
    location: "article_related",
    text: "Get application strategy help",
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
      title: "Passion Project Ideas (A Simple \"Interest → Impact\" Method)",
      href: "/resources/passion-project-idea-generator",
      description:
        "A step-by-step method to generate strong, feasible passion project ideas.",
    },
    {
      title: "Passion Project Launch Checklist (From Idea to Execution)",
      href: "/resources/passion-project-launch-checklist",
      description:
        "A practical launch checklist: scope, timeline, and accountability.",
    },
    {
      title: "Activities List Impact Metrics (Hours, Weeks, Role)",
      href: "/resources/activities-list-impact-metrics",
      description:
        "How to quantify your activities list so it reads credible and high-signal.",
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
          Vague impact claims are one of the most common weaknesses in college applications.
          "I raised awareness about mental health" is almost meaningless without specifics.
          Tracking your project as you go gives you the raw material for language that's both
          honest and compelling.
        </p>

        <h2>Why Tracking Matters</h2>
        <p>
          Application language needs specifics. "I organized a community event" is forgettable.
          "I organized a workshop attended by 34 students that resulted in the school adopting
          a new policy" is not. The difference isn't exaggeration — it's documentation. If you
          don't track as you go, you'll reconstruct from memory later and end up with round
          numbers and vague claims that admissions readers have seen before.
        </p>

        <h2>What to Track From the Start</h2>
        <p>
          You don't need a sophisticated system. You need a habit of recording five categories
          of information:
        </p>
        <ul>
          <li>
            <strong>People reached.</strong> Attendees, readers, participants, beneficiaries —
            anyone who encountered your work.
          </li>
          <li>
            <strong>Hours invested.</strong> Weekly hours and total hours. This feeds directly
            into the Common App activities section.
          </li>
          <li>
            <strong>Things created.</strong> Documents, tools, events, curricula, products,
            posts — anything that now exists because of your work.
          </li>
          <li>
            <strong>Decisions made or changed.</strong> Did someone do something differently
            because of your project? Did a policy change? Did a behavior shift?
          </li>
          <li>
            <strong>Money raised or saved.</strong> If applicable, track amounts. Even small
            numbers are credible and specific.
          </li>
        </ul>

        <h2>How to Track Simply</h2>
        <p>
          A notes doc updated once a month is enough. No app, no spreadsheet, no special
          system required. At the end of each month, write two or three sentences: what
          happened, who was involved, and what now exists that didn't exist before. That's it.
          After six months you'll have more material than you can use.
        </p>

        <h2>Three Reflection Prompts to Generate Application Language</h2>
        <p>
          When it's time to translate your tracking notes into application language, these
          three prompts generate the most useful responses:
        </p>
        <ol>
          <li>
            <strong>What exists now that didn't exist before?</strong> This points to outputs
            and outcomes — the most credible evidence of impact.
          </li>
          <li>
            <strong>Who did something differently because of this?</strong> This points to
            behavioral change, the strongest form of project impact.
          </li>
          <li>
            <strong>What did you learn that you didn't expect?</strong> This points to
            intellectual and personal growth — essential for essays and interviews.
          </li>
        </ol>

        <h2>Turning Honest Metrics Into Strong Application Language</h2>
        <p>
          The goal is accuracy at the highest level of specificity your data supports — not
          inflation. If 34 people attended your event, write 34. If you aren't sure, write
          "approximately 30." If the number is small, reframe around quality rather than
          quantity: a project that produced one genuinely useful tool used by a real
          organization is stronger than a vague claim about reaching hundreds of people.
        </p>
        <p>
          For your activities list, lead with the most concrete number you have, followed by
          the most concrete outcome. For essays, use your reflection prompts — what you learned
          you didn't expect is usually the most authentic and original angle available to you.
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
