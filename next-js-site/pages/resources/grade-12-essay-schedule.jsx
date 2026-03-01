import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceGrade12EssaySchedule() {
  const title = "12th Grade Essay Schedule (Week-by-Week)";
  const description =
    "A practical essay schedule for seniors: brainstorming, drafting, feedback loops, and final polish without last-minute stress.";
  const url = "/resources/grade-12-essay-schedule";

  const primaryCta = {
    location: "resources_related",
    text: "Get help with essays",
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
      title: "12th Grade College Application Timeline",
      href: "/resources/grade-12-application-timeline",
      description:
        "A month-by-month senior-year timeline covering essays, recommendations, and deadlines.",
    },
    {
      title: "College Essay Outline (How to Structure a Draft)",
      href: "/resources/college-essay-outline",
      description:
        "A simple, repeatable outline for a standout personal statement.",
    },
    {
      title: "Personal Statement Structure",
      href: "/resources/personal-statement-structure",
      description:
        "How to structure your personal statement for maximum impact.",
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
          <strong>Summary:</strong> The seniors who write their best essays
          aren't naturally better writers — they started earlier and revised
          more. This week-by-week schedule builds in the time your essays
          actually need, from brainstorming through final proofread.
        </p>

        <h2>Summer Before Senior Year: Weeks 1–2 — Brainstorming</h2>
        <p>
          Do not start writing. Brainstorming is a distinct phase, and
          skipping it produces forgettable drafts.
        </p>
        <ul>
          <li>
            List 10–15 specific moments from your life: not themes or
            adjectives, but concrete scenes with sensory detail.
          </li>
          <li>
            For each moment, ask: What did this reveal about how I think,
            handle difficulty, or engage with the world?
          </li>
          <li>
            Read 3–5 strong example personal statements (Common App's website
            publishes them) to calibrate tone and structure.
          </li>
          <li>
            Choose your topic before Week 3 — the best topic is one you can
            write honestly and specifically, not one that sounds impressive.
          </li>
        </ul>

        <h2>Weeks 3–4: First Draft</h2>
        <p>
          Write a complete first draft in one sitting if possible. Aim for
          650–700 words — you'll cut later. Do not edit while writing. The
          goal is getting the full arc on paper: hook, development, reflection.
        </p>
        <ul>
          <li>
            <strong>Hook:</strong> Open in the middle of a scene. Avoid
            dictionary definitions, rhetorical questions, and broad
            philosophical statements.
          </li>
          <li>
            <strong>Development:</strong> Show the situation unfolding. Use
            specific details — names, places, what you did next.
          </li>
          <li>
            <strong>Reflection:</strong> End with what this experience
            revealed about you, not what you learned in a generic sense.
          </li>
        </ul>

        <h2>Weeks 5–6: Getting Feedback</h2>
        <p>
          Share your draft with two or three readers: an English teacher or
          counselor, and one parent or adult who knows you well. Give them
          specific questions, not open-ended requests.
        </p>
        <ul>
          <li>Ask: "Does the voice sound like me, or does it sound formal?"</li>
          <li>Ask: "Where did you feel the most engaged? Where did you skim?"</li>
          <li>
            Do not incorporate every suggestion — your job is to evaluate
            feedback, not execute it all. Conflicting advice is normal.
          </li>
        </ul>

        <h2>Weeks 7–8: Revision Cycles</h2>
        <p>
          The personal statement usually requires 3–5 meaningful revisions,
          not minor edits. Each revision cycle should address one primary
          problem: structure, voice, specificity, or length.
        </p>
        <ul>
          <li>
            Cut filler phrases: "Throughout my life," "I have always
            believed," "This experience taught me that."
          </li>
          <li>
            Replace adjectives with scenes: instead of "I was dedicated,"
            show the 5 a.m. practice or the third time you rewrote the code.
          </li>
          <li>
            Read the draft aloud — your ear catches what your eye misses.
          </li>
        </ul>

        <h2>Layering Supplemental Essays (Weeks 6–10)</h2>
        <p>
          Supplemental essays run in parallel with personal statement
          revisions. Most EA/ED schools have 1–4 supplements. Prioritize
          your ED school first, then EA schools, then RD.
        </p>
        <ul>
          <li>
            "Why us?" essays require genuine school-specific research: name
            professors, programs, or campus traditions — not marketing copy
            from the homepage.
          </li>
          <li>
            Activity essays (150–300 words) should add a new dimension to
            your application, not repeat what's in your activity list.
          </li>
          <li>
            Track every supplement in a spreadsheet: school, prompt, word
            limit, status (draft / revised / final).
          </li>
        </ul>

        <h2>Final Proofreading Pass (Week Before Each Deadline)</h2>
        <ul>
          <li>
            Check word counts in the submission portal — copying from Google
            Docs can alter formatting.
          </li>
          <li>
            Read backwards (last sentence first) to catch grammar errors your
            brain autocorrects.
          </li>
          <li>
            Confirm name, pronouns, and school names are consistent across
            every essay.
          </li>
          <li>
            Submit at least 48 hours before the deadline — portals crash on
            deadline night.
          </li>
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
      </article>

      <div className="mx-auto max-w-3xl px-6 pb-14">
        <RelatedArticles title="Recommended next steps" items={related} />
      </div>
    </>
  );
}
