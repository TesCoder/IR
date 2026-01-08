import Link from "next/link";

import SEOHead from "@/components/SEOHead";
import { SchemaScript } from "@/components/Schema";
import { getAllPostsMeta } from "@/lib/blog";
import { buildBlogCollectionSchema } from "@/lib/schema-helpers";
import BlogIndex from "@/components/blog/BlogIndex";

const BLOG_TITLE = "Blog & Resources";
const BLOG_DESCRIPTION =
  "Guides and tips from former admissions officers on essays, strategy, testing, and application milestones.";

const featuredClusters = [
  {
    slug: "/blog/supplemental-essays-strategy",
    title: "Supplemental Essays Strategy by School Type",
    description: "Prompt families by reach/target/safety with reuse guidance.",
    ctaText: "Map your supplement plan",
    ctaDestination: "/free-consultation",
  },
  {
    slug: "/blog/ed-vs-ea-vs-rd-admissions-calendar",
    title: "ED vs EA vs RD Admissions Calendar",
    description: "Timeline for ED/EA/RD milestones and testing windows.",
    ctaText: "Download ED/EA/RD calendar",
    ctaDestination: "/blog/ed-vs-ea-vs-rd-admissions-calendar#calendar",
  },
  {
    slug: "/blog/compare-financial-aid-awards",
    title: "Compare Financial Aid Awards (Template)",
    description: "Evaluate grants, loans, and work-study offers with a template.",
    ctaText: "Get the award comparison template",
    ctaDestination: "/blog/compare-financial-aid-awards#template",
  },
];

const isAllowedDestination = (destination) =>
  typeof destination === "string" &&
  (destination.startsWith("/blog/") ||
    destination.startsWith("/resources/") ||
    destination === "/free-consultation");

export default function BlogPage({ posts, schema }) {
  const seen = new Set();
  const visibleClusters = featuredClusters.reduce((acc, item) => {
    if (
      !item ||
      !item.slug ||
      !item.title ||
      !item.description ||
      !item.ctaText ||
      !isAllowedDestination(item.ctaDestination) ||
      seen.has(item.slug)
    ) {
      return acc;
    }
    seen.add(item.slug);
    acc.push(item);
    return acc;
  }, []);

  return (
    <>
      <SEOHead
        title={BLOG_TITLE}
        description={BLOG_DESCRIPTION}
        url="/blog"
        image="/images/logo-circle.png"
      />
      <SchemaScript schema={schema} />
      {visibleClusters.length >= 2 && (
        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Featured Clusters
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {visibleClusters.slice(0, 3).map(({ slug, title, description, ctaText, ctaDestination }) => (
              <div
                key={slug}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-ivy-blue">
                  <Link href={slug} className="hover:underline">
                    {title}
                  </Link>
                </h3>
                <p className="text-gray-700 mt-2 mb-3">{description}</p>
                <Link
                  href={ctaDestination}
                  className="text-ivy-blue font-medium"
                  aria-label={`${ctaText} — ${title}`}
                >
                  {ctaText} →
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
      <BlogIndex posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPostsMeta();

  const site = {
    baseUrl: "https://ivyready.com",
    siteName: "IvyReady",
  };

  const [collection, breadcrumbs] = buildBlogCollectionSchema({
    site,
    page: {
      title: BLOG_TITLE,
      description: BLOG_DESCRIPTION,
    },
  });

  return {
    props: {
      posts,
      schema: [collection, breadcrumbs],
    },
  };
}
