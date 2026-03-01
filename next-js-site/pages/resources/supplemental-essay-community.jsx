import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceSupplementalEssayCommunity() {
  const title = "Community Essay: What Admissions Actually Looks For";
  const description =
    "How to write a community essay that shows belonging and contribution, with a simple planning framework and common pitfalls to avoid.";
  const url = "/resources/supplemental-essay-community";

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
      title: "Why School Essay: A Clear Structure + Example Outline",
      href: "/resources/supplemental-essay-why-school",
      description:
        "A straightforward structure for the 'Why us?' essay—with specifics, not generics.",
    },
    {
      title: "Leadership Essay: Show Impact Without Bragging",
      href: "/resources/supplemental-essay-leadership",
      description: "Turn leadership into evidence: scope, decisions, and results.",
    },
    {
      title: "College Essay Outline (How to Structure a Draft)",
      href: "/resources/college-essay-outline",
      description:
        "A simple, repeatable outline for a standout personal statement.",
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
          The community essay prompt sounds straightforward: describe a community
          you belong to and your role in it. But most students answer the wrong
          question. They describe where they've been. Admissions wants to know
          what they've added.
        </p>

        <h2>Belonging vs. Contributing: The Core Distinction</h2>
        <p>
          Belonging tells the reader you were there. Contributing tells them what
          changed because you were. Admissions officers aren't building a census
          of affiliations—they're trying to understand what kind of community
          member you'll be on their campus.
        </p>
        <p>
          A strong community essay answers: <em>What did you build, change, or
          make possible that wouldn't have happened without you?</em> That's the
          standard, whether the community is a robotics team, a faith group, a
          Discord server, or a neighborhood.
        </p>

        <h2>Online and Non-Traditional Communities Count</h2>
        <p>
          Don't discount a community because it doesn't have a physical address
          or an advisor. Online communities, informal peer networks, and
          self-organized groups are all valid—sometimes more compelling than
          school clubs—because they require initiative to join and sustain. If
          you built something in that space, say so clearly.
        </p>
        <p>
          The key is showing the same things any community essay needs: a
          defined group, a role you played, and a tangible contribution or
          change.
        </p>

        <h2>A Simple Planning Framework</h2>
        <p>Before you write, answer these three questions in a sentence each:</p>
        <ol>
          <li>
            <strong>Which community?</strong> Be specific enough that it
            couldn't describe five other applicants. "my school's robotics team"
            is a start; "the first all-girls robotics team in our county" is
            better.
          </li>
          <li>
            <strong>What was your role?</strong> Not your title—your actual
            function. What did you do that others didn't or couldn't?
          </li>
          <li>
            <strong>What did you build or change?</strong> Something measurable
            or observable: a new program, a culture shift, a resource that
            outlasted your involvement.
          </li>
        </ol>
        <p>
          These three answers become the spine of the essay. Everything else
          serves them.
        </p>

        <h2>Common Pitfalls</h2>
        <ul>
          <li>
            <strong>Vague belonging.</strong> "I have always felt at home in this
            community" is a statement about your feelings, not your contribution.
            Cut it or convert it into evidence.
          </li>
          <li>
            <strong>Listing groups without focus.</strong> Naming three
            communities in one essay dilutes all three. Pick the one where your
            contribution is sharpest and commit to it.
          </li>
          <li>
            <strong>Passive voice about impact.</strong> "The club grew during my
            time there" obscures your role. "I restructured our recruitment
            process, which doubled membership in one semester" shows it.
          </li>
        </ul>
        <p>
          If you can describe your community essay in one sentence—who you were,
          what you did, what changed—you're ready to write it. If you can't, that
          clarity problem will follow you onto the page.
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
