import { MDXRemote } from "next-mdx-remote";
import SEOHead from "@/components/SEOHead";
import { SchemaScript } from "@/components/Schema";
import {
  getAllPostSlugs,
  getPostForPage,
} from "@/lib/blog";
import { buildBlogPostingSchema } from "@/lib/schema-helpers";
import BlogPostLayout from "@/components/blog/BlogPostLayout";

export default function BlogPostPage({ post, mdxSource, schema }) {
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
