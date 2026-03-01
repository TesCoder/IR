import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourcePassionProjectLaunchChecklist() {
  const title = "Passion Project Launch Checklist (From Idea to Execution)";
  const description =
    "A practical launch checklist: scope, timeline, accountability, and how to avoid common \"never finished\" failure modes.";
  const url = "/resources/passion-project-launch-checklist";

  const primaryCta = {
    location: "article_related",
    text: "Book a consult",
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
      title: "Track Impact for a Passion Project (Metrics + Storytelling)",
      href: "/resources/passion-project-impact-tracking",
      description:
        "Track impact with simple metrics and turn it into credible application language.",
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
          The most common failure mode for passion projects isn't a bad idea — it's an idea
          that never becomes an action. Students spend weeks refining the concept and never
          take a first step. Then application season arrives and there's nothing real to
          describe.
        </p>

        <h2>Why Projects Stay Ideas</h2>
        <p>
          Three patterns repeat: no defined scope (so it's impossible to know when you've
          started), no concrete first milestone (so there's nothing to show up for), and no
          one outside your own head who knows the project exists. Remove all three and most
          projects can launch in under a week.
        </p>

        <h2>The Five-Step Launch Checklist</h2>
        <ol>
          <li>
            <strong>Write a one-sentence scope statement.</strong> Format: "I am going to
            [specific action] for [specific audience or problem] by [specific date]." If you
            can't complete that sentence, the project isn't scoped yet.
          </li>
          <li>
            <strong>Name one person who will help or be affected.</strong> This makes the
            project real. It's no longer just an idea in your head — someone else is connected
            to it, even loosely. That changes how seriously you treat it.
          </li>
          <li>
            <strong>Set a 30-day milestone with a concrete deliverable.</strong> Not a goal
            like "make progress." A deliverable: a document, a conversation that happened, a
            thing you built, an event that occurred. If you can't photograph or name it, it's
            not concrete enough.
          </li>
          <li>
            <strong>Block time in your calendar before you announce anything.</strong> Recurring
            time is the single biggest predictor of whether a project survives the first month.
            Block it before you tell anyone — otherwise the announcement substitutes for the
            work.
          </li>
          <li>
            <strong>Tell one person outside your family about it.</strong> Not to get
            approval — to create accountability. A friend, a teacher, a mentor. Someone who
            will eventually ask "how's that project going?"
          </li>
        </ol>

        <h2>When Is a Project "Ready" to Include in Applications?</h2>
        <p>
          It doesn't need to be complete. It needs to be real. Real means: it has happened,
          something exists because of it, and someone other than you knows about it. A project
          you've been running for four months with a documented outcome is stronger than a
          polished concept that never launched.
        </p>
        <p>
          If you're a junior and your project is two months old with one clear result, include
          it. Describe what it is, what you've done, and what you're building toward. Admissions
          readers understand projects are ongoing — they're evaluating initiative, not completion.
        </p>

        <h2>Red Flags That a Project Is Performative</h2>
        <p>
          A project may be performative if: it exists primarily to fill a line on your
          activities list, there are no real stakeholders who needed it to exist, or you
          couldn't describe it to a stranger without mentioning college admissions. These
          aren't disqualifying, but they're signals to either deepen the work or reframe
          what you're doing and why.
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
