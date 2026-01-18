import Link from "next/link";

export default function BlogPostLayout({ post, children }) {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <nav className="mb-6 text-sm">
        <Link href="/" className="text-blue-600 hover:underline">
          Home
        </Link>
        <span className="mx-1 text-gray-500">/</span>
        <Link href="/blog" className="text-blue-600 hover:underline">
          Blog &amp; Resources
        </Link>
      </nav>

      <article>
        <header className="mb-6">
          <h1 className="text-3xl font-semibold mb-2">{post.title}</h1>
          <div className="text-sm text-gray-500">
            <span>{formatDate(post.date)}</span>
            {post.readingTime ? (
              <>
                <span className="mx-1">&middot;</span>
                <span>{post.readingTime} min read</span>
              </>
            ) : null}
          </div>
        </header>

        <div className="prose prose-lg max-w-none">{children}</div>
      </article>
    </main>
  );
}

function formatDate(value) {
  if (!value) return "";
  const parsed = new Date(value);

  // Fallback for legacy YYYY-MM-DD strings without timezone
  const date =
    Number.isNaN(parsed.valueOf()) && value.includes("-")
      ? new Date(...value.split("-").map((part, idx) => (idx === 1 ? Number(part) - 1 : Number(part))))
      : parsed;

  return Number.isNaN(date.valueOf())
    ? ""
    : date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
}
