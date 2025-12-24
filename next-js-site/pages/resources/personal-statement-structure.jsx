import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import Link from "next/link";

export default function ArticlePersonalStatement() {
  const articleSchema = ArticleSchema({
    title: "The Personal Statement Structure: From Brainstorm to Final Draft",
    description: "A clear, memorable essay shape: Hook → Development → Reflection → Tie‑back. Pitfalls and editing checklist included.",
    author: "Ivy Ready",
    datePublished: "2024-01-15",
    dateModified: "2024-01-15"
  });

  return (
    <>
      <SEOHead
        title="The Personal Statement Structure"
        description="A clear, memorable essay shape: Hook → Development → Reflection → Tie‑back. Pitfalls and editing checklist included."
        url="/resources/personal-statement-structure"
        type="article"
      />
      <SchemaScript schema={articleSchema} />
      <article className="mx-auto max-w-3xl px-6 py-14 prose prose-indigo">
        <h1>The Personal Statement Structure: From Brainstorm to Final Draft</h1>
        <p>The personal statement is your application’s narrative centerpiece. Use this structure to make your story memorable to admissions readers.</p>
        <h2>1) Brainstorm Themes</h2>
        <ul>
          <li>Experiences that changed your perspective</li>
          <li>Challenges overcome and what they taught you</li>
          <li>Impact on others and your community</li>
        </ul>
        <h2>2) Choose the Story Arc</h2>
        <p><strong>Hook → Development → Reflection → Tie‑back</strong>. Each section should move the reader closer to understanding who you are becoming.</p>
        <h2>3) Avoid Common Pitfalls</h2>
        <ul>
          <li>Too many themes; pick one and go deep</li>
          <li>Listing achievements instead of telling a story</li>
          <li>Underpowered reflection; show the “so what”</li>
        </ul>
        <h2>4) Edit with a Checklist</h2>
        <ul>
          <li>Specificity and imagery (show, don’t tell)</li>
          <li>Voice and clarity (read aloud test)</li>
          <li>Trim words that don’t move the story</li>
        </ul>
        <hr />
        <p className="not-prose mt-8">
          <Link href="/contact" className="inline-flex rounded-2xl px-5 py-3 bg-indigo-600 text-white font-medium hover:bg-indigo-700">Get expert essay feedback →</Link>
        </p>
      </article>
    </>
  );
}