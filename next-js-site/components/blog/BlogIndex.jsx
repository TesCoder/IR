import Link from "next/link";

export default function BlogIndex({ posts }) {
  const featuredPosts = Array.isArray(posts) ? posts.slice(0, 2) : [];

  if (!posts || posts.length === 0) {
    return (
      <main className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-semibold mb-4">Blog &amp; Resources</h1>
        <p className="text-gray-700">
          Our first articles from former admissions officers will appear here soon. In the meantime,
          explore our services or book a consultation.
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto py-12 px-4">
      <section className="relative overflow-hidden rounded-3xl border bg-white/80 shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white" />
        <div className="relative px-6 py-10 sm:px-10">
          <p className="text-sm font-semibold text-indigo-700">Blog &amp; Resources</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Insights from former admissions officers
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            Essays, strategy, timelines, and funding guidance — everything you need to plan and ship
            great applications with confidence.
          </p>

          {featuredPosts.length >= 2 && (
            <section className="mt-10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Featured Blogs
              </h2>
              <div
                className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6"
              >
                {featuredPosts.map(({ slug, title, description }) => (
                  <div
                    key={slug}
                    className="group h-full w-full rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] transition-transform transition-shadow duration-200 ease-out flex flex-col"
                  >
                    {/* <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 mb-1">
                      Editor&apos;s pick
                    </p> */}
                    <span className="inline-flex items-center gap-1 self-start rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      <span aria-hidden="true">★</span> Featured
                    </span>
                    <h3 className="mt-2 text-2xl font-semibold leading-snug text-ivy-blue">
                      <Link href={`/blog/${slug}`} className="hover:underline group-hover:underline">
                        {title}
                      </Link>
                    </h3>
                    <p className="text-gray-700 mt-2 mb-3 flex-1">{description}</p>
                    <Link
                      href={`/blog/${slug}`}
                      className="text-ivy-blue font-medium"
                      aria-label={`Read ${title}`}
                    >
                      Read article →
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>

      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => {
          const primaryTag =
            Array.isArray(post.tags) && post.tags.length > 0 ? post.tags[0] : null;
          return (
            <article
              key={post.slug}
              className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] transition-transform transition-shadow duration-200 ease-out"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-gray-500">
                <span>{formatDate(post.date)}</span>
                {post.readingTime ? (
                  <>
                    <span>&middot;</span>
                    <span>{post.readingTime} min read</span>
                  </>
                ) : null}
                {primaryTag ? (
                  <>
                    <span>&middot;</span>
                    <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-[11px] font-semibold text-indigo-700">
                      {primaryTag}
                    </span>
                  </>
                ) : null}
              </div>
              <h2 className="mt-3 text-xl font-semibold leading-snug">
                <Link href={`/blog/${post.slug}`} className="hover:underline group-hover:underline">
                  {post.title}
                </Link>
              </h2>
              {post.description ? (
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{post.description}</p>
              ) : null}
              <div className="mt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-indigo-600 font-medium hover:underline"
                  aria-label={`Read ${post.title}`}
                >
                  Read article →
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

function formatDate(value) {
  if (!value) return "";
  const parsed = new Date(value);

  // Fallback for legacy YYYY-MM-DD strings without timezone
  const date =
    Number.isNaN(parsed.valueOf()) && typeof value === "string" && value.includes("-")
      ? new Date(...value.split("-").map((part, idx) => (idx === 1 ? Number(part) - 1 : Number(part))))
      : parsed;

  return Number.isNaN(date.valueOf())
    ? ""
    : date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC", // stabilize SSR/CSR output across timezones
      });
}
