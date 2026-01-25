import { useEffect } from "react";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function BlogPostLayout({ post, children }) {
  useEffect(() => {
    const articleEl = document.querySelector("main article");
    if (!articleEl) return;

    const ctaLinks = Array.from(articleEl.querySelectorAll('a[href="/free-consultation"]'));
    const listeners = [];

    const handleCtaClick = (event) => {
      const link = event.currentTarget;
      const destination = link.getAttribute("href") || "/free-consultation";
      const text = (link.textContent || link.getAttribute("aria-label") || "").trim() || "Free consultation";

      trackCtaClick({
        location: "article_related",
        text,
        destination,
      });

      event.stopPropagation?.();
      event.stopImmediatePropagation?.();
    };

    ctaLinks.forEach((link) => {
      const listener = (event) => handleCtaClick(event);
      link.addEventListener("click", listener, { capture: true });
      listeners.push([link, listener]);
    });

    return () => {
      listeners.forEach(([link, listener]) => {
        link.removeEventListener("click", listener, { capture: true });
      });
    };
  }, []);

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
