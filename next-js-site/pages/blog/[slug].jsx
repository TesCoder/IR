import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import SEOHead from "@/components/SEOHead";
import { SchemaScript } from "@/components/Schema";
import { getAllPostSlugs, getAllPostsMeta, getPostForPage } from "@/lib/blog";
import { buildBlogPostingSchema, formatIsoWithTimezone } from "@/lib/schema-helpers";
import BlogPostLayout from "@/components/blog/BlogPostLayout";
import { isAllowlistedDestination } from "@/lib/railAllowlist";

export default function BlogPostPage({ post, mdxSource, schema, postsMeta }) {
  const relatedItems = selectRelatedPosts(post.slug, postsMeta);
  const railLinks = relatedItems;
  const publishedTime = formatIsoWithTimezone(post.date) || post.date;
  const modifiedTime = formatIsoWithTimezone(post.updated || post.date) || publishedTime;

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.description}
        url={`/blog/${post.slug}`}
        image={post.thumbnail || "/images/logo-circle.png"}
        type="article"
        article={{
          publishedTime,
          modifiedTime,
          author: post.author,
          authorUrl: post.authorUrl,
          tags: post.tags,
        }}
      />
      <SchemaScript schema={schema} />
      <BlogPostLayout post={post} railLinks={railLinks}>
        <MDXRemote {...mdxSource} components={{ SEOHead }} />
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
  const postsMeta = getAllPostsMeta();

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
      postsMeta,
    },
  };
}

function selectRelatedPosts(currentSlug, postsMeta = []) {
  const current = postsMeta.find((p) => p.slug === currentSlug);
  const currentTags = new Set((current?.tags || []).map((t) => String(t).toLowerCase()));

  const scored = postsMeta
    .filter((p) => p.slug !== currentSlug)
    .map((p) => {
      const tags = (p.tags || []).map((t) => String(t).toLowerCase());
      const sharedTags = tags.filter((t) => currentTags.has(t)).length;
      const dateScore = Number(new Date(p.date || 0)) || 0;
      const destination = `/blog/${p.slug}`;
      const allowlisted = isAllowlistedDestination(destination);
      return { post: p, sharedTags, dateScore, allowlisted };
    })
    .filter(({ allowlisted }) => allowlisted)
    .sort((a, b) => {
      if (b.sharedTags !== a.sharedTags) return b.sharedTags - a.sharedTags;
      if (b.dateScore !== a.dateScore) return b.dateScore - a.dateScore;
      return (a.post.title || "").localeCompare(b.post.title || "");
    })
    .slice(0, 4);

  return scored.map(({ post }) => {
    const path = `/blog/${post.slug}`;
    return {
      slug: path,
      title: post.title,
      text: post.title,
      description: post.description || post.excerpt || "",
      ctaText: "Read this guide",
      destination: path,
    };
  });
}
