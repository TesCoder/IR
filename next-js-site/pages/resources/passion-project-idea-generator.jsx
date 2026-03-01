import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourcePassionProjectIdeaGenerator() {
  const title = "Passion Project Ideas (A Simple \"Interest → Impact\" Method)";
  const description =
    "A step-by-step method to generate strong project ideas based on your interests, constraints, and a realistic impact pathway.";
  const url = "/resources/passion-project-idea-generator";

  const primaryCta = {
    location: "article_related",
    text: "Build a project plan",
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
      title: "Passion Project Launch Checklist (From Idea to Execution)",
      href: "/resources/passion-project-launch-checklist",
      description:
        "A practical launch checklist: scope, timeline, and accountability for your project.",
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
          Most students know they should have a passion project. Very few know how to pick one
          they can actually execute. The default advice — "do what you love" — sounds reasonable
          until you sit down to start. Then it's just vague.
        </p>

        <h2>Why "I'll Just Follow My Interests" Fails</h2>
        <p>
          Interest is a category. A project is a specific problem with a specific action and a
          specific output. "I'm interested in the environment" isn't a project. "I'm mapping
          which storm drains in my town connect directly to the river" is. The gap between
          those two is where most projects die before they begin: too broad to launch, nothing
          concrete to show up for.
        </p>
        <p>
          Admissions readers have seen hundreds of "I'm passionate about X" activity descriptions.
          What makes a project stand out isn't the topic — it's the specificity of the problem
          you identified and the initiative you took to address it.
        </p>

        <h2>The Interest → Impact Method</h2>
        <p>
          Start with a specific problem or gap you've personally noticed — not a topic category
          you find interesting. The method works in three steps:
        </p>
        <ol>
          <li>
            <strong>Name the gap.</strong> What exists in your community, school, or field that
            shouldn't exist — or what's missing that should be there?
          </li>
          <li>
            <strong>Identify who is affected.</strong> Even one person makes the problem real.
            If you can't name a real person, the gap might be abstract rather than actual.
          </li>
          <li>
            <strong>Describe the smallest useful output.</strong> What would "done" look like
            in 90 days? A guide, a program, a tool, a documented result?
          </li>
        </ol>

        <h2>Three Prompts to Generate Ideas</h2>
        <ul>
          <li>
            <strong>What frustrates you in your community?</strong> Frustration is usually a
            signal that something isn't working and you've already been thinking about it.
          </li>
          <li>
            <strong>What would you build if you had 3 months and $500?</strong> The budget
            constraint forces specificity. If your answer is still vague, narrow it further.
          </li>
          <li>
            <strong>What do you know more about than most people your age?</strong> Unusual
            knowledge is a starting point — you already have the foundation to teach, document,
            or build something around it.
          </li>
        </ul>

        <h2>How to Filter Ideas by Feasibility</h2>
        <p>
          Once you have a shortlist, apply one filter: can you make meaningful, visible progress
          before your application deadlines? A project that requires two years of institutional
          approval isn't wrong — it's just risky to start now. Prioritize ideas where the first
          milestone is achievable in 30 days and where there's something concrete to show within
          six months.
        </p>

        <h2>Authentic vs. Manufactured</h2>
        <p>
          Admissions readers are good at detecting projects that exist only for applications.
          The tell is usually that the project has no natural stakeholders — no one who actually
          needed it to exist. If the honest answer to "who does this serve?" is "my application,"
          rethink the framing. The goal is a project that would be worth doing even if you
          weren't applying to college. That authenticity shows up in your writing automatically.
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
