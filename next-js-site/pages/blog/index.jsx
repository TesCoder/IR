import SEOHead from "@/components/SEOHead";
import { SchemaScript } from "@/components/Schema";
import { getAllPostsMeta } from "@/lib/blog";
import { buildBlogCollectionSchema } from "@/lib/schema-helpers";
import BlogIndex from "@/components/blog/BlogIndex";

const BLOG_TITLE = "Blog & Resources";
const BLOG_DESCRIPTION =
  "Guides and tips from former admissions officers on essays, strategy, testing, and application milestones.";

export default function BlogPage({ posts, schema }) {
  return (
    <>
      <SEOHead
        title={BLOG_TITLE}
        description={BLOG_DESCRIPTION}
        url="/blog"
        image="/images/logo-circle.png"
      />
      <SchemaScript schema={schema} />
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
