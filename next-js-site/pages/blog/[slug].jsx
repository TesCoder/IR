import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import SEOHead from "@/components/SEOHead";
import { SchemaScript } from "@/components/Schema";
import {
  getAllPostSlugs,
  getPostForPage,
} from "@/lib/blog";
import { buildBlogPostingSchema } from "@/lib/schema-helpers";
import BlogPostLayout from "@/components/blog/BlogPostLayout";
import { RELATED_POSTS } from "@/lib/relatedPostsConfig";
import { RELATED_POSTS_BATCH1 } from "./relatedPostsBatch1";

export default function BlogPostPage({ post, mdxSource, schema }) {
  const relatedItems = selectRelatedPosts(post.slug);

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.description}
        url={`/blog/${post.slug}`}
        image={post.thumbnail || "/images/logo-circle.png"}
        type="article"
        article={{
          publishedTime: post.date,
          modifiedTime: post.updated || post.date,
          author: post.author,
          tags: post.tags,
        }}
      />
      <SchemaScript schema={schema} />
      <BlogPostLayout post={post}>
        <MDXRemote {...mdxSource} />
      </BlogPostLayout>
      {relatedItems.length >= 2 && (
        <section className="max-w-3xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-semibold mb-4">Related Posts</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedItems.map(({ slug, title, description, ctaText, destination }) => (
              <div
                key={slug}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">
                  <Link
                    className="text-ivy-blue underline hover:no-underline"
                    href={slug}
                    aria-label={title}
                  >
                    {title}
                  </Link>
                </h3>
                <p className="text-gray-700 mb-3">{description}</p>
                <Link
                  className="text-ivy-blue font-medium"
                  href={destination}
                  aria-label={`${ctaText} — ${title}`}
                >
                  {ctaText} →
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getAllPostSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { frontmatter, mdxSource } = await getPostForPage(params.slug);

  const site = {
    baseUrl: "https://ivyready.com",
    orgName: "IvyReady",
    logoUrl: "https://ivyready.com/images/logo-circle.png",
  };

  const schema = buildBlogPostingSchema({
    post: frontmatter,
    site,
  });

  return {
    props: {
      post: frontmatter,
      mdxSource,
      schema,
    },
  };
}

function selectRelatedPosts(currentSlug) {
  const currentPath = `/blog/${currentSlug}`;
  const seen = new Set();
  const items = [];

  const scoped = RELATED_POSTS_BATCH1[currentPath];
  const pools = [];

  if (Array.isArray(scoped)) {
    pools.push(scoped);
  }

  pools.push(RELATED_POSTS);

  for (const pool of pools) {
    for (const item of pool) {
      if (item.slug === currentPath) continue; // no self-link
      if (seen.has(item.slug)) continue; // dedupe
      if (!isAllowedDestination(item.destination)) continue; // guard destinations
      seen.add(item.slug);
      items.push(item);
      if (items.length === 4) break;
    }
    if (items.length === 4) break;
  }

  return items;
}

function isAllowedDestination(destination) {
  if (!destination) return false;
  if (destination.startsWith("/blog/")) return true;
  if (destination.startsWith("/resources/")) return true;
  return destination === "/free-consultation";
}
