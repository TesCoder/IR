import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function normalizeFrontmatter(frontmatter) {
  // Default: publish unless explicitly disabled; downloads default to false.
  const ready = frontmatter.ready_to_publish;
  return {
    requires_downloadable: Boolean(frontmatter.requires_downloadable),
    ready_to_publish: ready === undefined ? true : Boolean(ready),
    ...frontmatter,
  };
}

export function getAllPostSlugs() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
    .filter((slug) => {
      const { frontmatter } = getPostBySlug(slug, { allowUnpublished: true });
      const normalized = normalizeFrontmatter(frontmatter);
      return normalized.ready_to_publish !== false;
    });
}

export function getPostBySlug(slug, { allowUnpublished = false } = {}) {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Blog post file not found for slug: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const frontmatter = normalizeFrontmatter({
    ...data,
    slug: data.slug || slug,
  });

  if (!allowUnpublished && frontmatter.ready_to_publish === false) {
    throw new Error(`Blog post not ready_to_publish: ${slug}`);
  }

  return { frontmatter, content };
}

export async function getPostForPage(slug) {
  const { frontmatter, content } = getPostBySlug(slug);
  const mdxSource = await serialize(content);
  return { frontmatter, mdxSource };
}

export function getAllPostsMeta() {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug).frontmatter)
    .filter((post) => post.date)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
