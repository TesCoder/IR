import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";
import { filterAllowlistedLinks } from "@/lib/railAllowlist";

export default function Rail({ links = [] }) {
  const normalized = (links || []).map((link, idx) => {
    const href = link?.href || link?.destination || link?.slug;
    const text = link?.text || link?.ctaText || link?.title;
    return {
      key: href || idx,
      href,
      text,
      description: link?.description,
    };
  });

  const allowlisted = filterAllowlistedLinks(normalized).filter(
    (link) => Boolean(link.href) && Boolean(link.text)
  );

  if (allowlisted.length < 2) return null;

  const handleClick = (link) => {
    trackCtaClick({
      location: "article_related",
      text: link.text,
      destination: link.href,
    });
  };

  return (
    <aside
      aria-label="Related resources"
      className="hidden lg:block mt-8 lg:mt-0 rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm"
    >
      <h2 className="text-xl font-semibold mb-3">Related resources</h2>
      <ul className="space-y-3">
        {allowlisted.map((link) => (
          <li key={link.key} className="group">
            <Link
              href={link.href}
              className="text-indigo-700 font-semibold hover:underline"
              onClick={() => handleClick(link)}
            >
              {link.text}
            </Link>
            {link.description && (
              <p className="mt-1 text-sm text-gray-600">{link.description}</p>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
