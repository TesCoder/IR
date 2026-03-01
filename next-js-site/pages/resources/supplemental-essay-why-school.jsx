import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceSupplementalEssayWhySchool() {
  const title = "Why School Essay: A Clear Structure + Example Outline";
  const description =
    "A straightforward \"Why us\" structure that proves fit with specifics—without sounding generic or like you copied the website.";
  const url = "/resources/supplemental-essay-why-school";

  const primaryCta = {
    location: "article_related",
    text: "Get essay feedback",
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
      title: "Community Essay: What Admissions Actually Looks For",
      href: "/resources/supplemental-essay-community",
      description:
        "How to write a community essay that shows belonging and contribution.",
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
          The "Why us?" supplemental is one of the most commonly botched essays
          in a college application. Not because students don't care—but because
          almost everyone defaults to the same approach: scan the website, lift a
          few program names, add an enthusiastic closer. Admissions officers read
          thousands of those. They don't move the needle.
        </p>

        <h2>Why Most "Why Us?" Essays Fail</h2>
        <p>There are three failure modes that show up again and again:</p>
        <ul>
          <li>
            <strong>Generic enthusiasm.</strong> Phrases like "world-class
            faculty," "vibrant campus community," and "endless opportunities" say
            nothing. Every school could claim them.
          </li>
          <li>
            <strong>Website copy.</strong> Naming a program you found in the
            first Google result doesn't demonstrate fit—it demonstrates that you
            know how to search.
          </li>
          <li>
            <strong>Vague future tense.</strong> "I hope to explore…" and "I
            look forward to…" signal that you haven't done the work of connecting
            your past to their offerings.
          </li>
        </ul>

        <h2>A 3-Part Structure That Works</h2>
        <p>
          A strong "Why us?" essay answers three questions in roughly equal
          weight:
        </p>
        <ol>
          <li>
            <strong>Academic fit.</strong> Which specific program, professor,
            research lab, or curricular approach connects to something you've
            already done or are actively pursuing? Name it. Explain the
            connection.
          </li>
          <li>
            <strong>Community fit.</strong> Which student organization, living
            community, publication, or campus tradition aligns with how you
            already spend your time? Be specific enough that it couldn't appear
            in an essay about a different school.
          </li>
          <li>
            <strong>Why now.</strong> Why is this the right moment in your
            education to be at this school? This is where you tie your academic
            trajectory to what they uniquely offer.
          </li>
        </ol>

        <h2>What Counts as Specific</h2>
        <p>
          Specific means it can only describe this school. Good examples:
          professor names tied to their actual research, a named interdisciplinary
          program, a student-run organization you found outside the main
          admissions page, a curricular structure (like a core curriculum or
          senior capstone) that shapes how the school teaches.
        </p>
        <p>
          Not specific: rankings, a "beautiful campus," prestige, size, or
          location. These are observations, not reasons.
        </p>

        <h2>Before and After: One Opener</h2>
        <p>
          <strong>Generic:</strong> "I've always been drawn to Duke's commitment
          to research and its vibrant campus culture."
        </p>
        <p>
          <strong>Specific:</strong> "My independent research project on urban
          heat islands last summer led me to Dr. Miya Gentry's work on green
          infrastructure policy—and to Duke's Nicholas School, which is one of
          the few programs where environmental science and public policy are
          taught as a single discipline."
        </p>
        <p>
          The second version shows homework, shows fit, and connects the
          applicant's past to the school's specific offering. That's the
          difference between an essay that gets read and one that gets skimmed.
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
