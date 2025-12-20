import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getAllPostSlugs() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug) {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Blog post file not found for slug: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const frontmatter = {
    ...data,
    slug: data.slug || slug,
  };

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
