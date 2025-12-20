import Link from "next/link";

export default function BlogIndex({ posts }) {
  if (!posts || posts.length === 0) {
    return (
      <main className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-semibold mb-4">Blog &amp; Resources</h1>
        <p className="text-gray-700">
          Our first articles from former admissions officers will appear here
          soon. In the meantime, explore our services or book a consultation.
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Blog &amp; Resources</h1>
        <p className="text-gray-700">
          Guides and tips from former admissions officers on essays, strategy,
          testing, and application milestones.
        </p>
      </header>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="border border-gray-200 rounded-lg p-5 hover:shadow-sm transition-shadow"
          >
            <Link href={`/blog/${post.slug}`} className="no-underline">
              <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
            </Link>
            <div className="text-sm text-gray-500 mb-2">
              <span>{formatDate(post.date)}</span>
              {post.readingTime ? (
                <>
                  <span className="mx-1">&middot;</span>
                  <span>{post.readingTime} min read</span>
                </>
              ) : null}
            </div>
            {post.description && (
              <p className="text-gray-700">{post.description}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}

function formatDate(value) {
  if (!value) return "";
  // YYYY-MM-DD -> Month D, YYYY
  const [year, month, day] = value.split("-");
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
