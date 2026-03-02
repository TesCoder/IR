import Link from "next/link";

/**
 * Push a rail CTA event to dataLayer.
 * Only runs client-side; page_path is auto-populated from window.location.pathname.
 */
function pushRailEvent(payload) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    ...payload,
    page_path: window.location.pathname,
  });
}

/**
 * RelatedArticles — renders a rail slot.
 *
 * Props:
 *   title     — section heading (default "Related Articles")
 *   items     — array of rail item objects (from railData + selectRailItems)
 *               Accepts full data contract OR legacy { href, title, description }
 *   slotId    — slot identifier (e.g. "blog_related") — unconditionally set as
 *               cta_payload.location for every rendered item (overrides item value)
 *   className — optional extra classes on the container
 *   articles  — legacy alias for items (backward compat)
 *
 * Behavior:
 *   - Items WITH cta_payload render as tracked links (fires dataLayer on click)
 *   - Items WITHOUT cta_payload render as plain navigational links (no event)
 *   - Returns null if items array is empty
 */
export default function RelatedArticles({
  title = "Related Articles",
  items = [],
  slotId,
  className = "",
  articles,
}) {
  const links = items?.length ? items : (articles || []);
  if (!links.length) return null;

  const containerClass = [
    "mt-12 rounded-2xl border border-gray-200 bg-white/80 p-6",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section aria-label={title} className={containerClass}>
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((item, idx) => {
          const dest = item.destination || item.href || item.slug;
          const hasCta = !!item.cta_payload;
          const ctaPayload = hasCta
            ? {
                ...item.cta_payload,
                location: slotId,
              }
            : null;

          return (
            <li
              key={dest || item.title || idx}
              className="group rounded-xl border border-gray-200 bg-white p-4 transition hover:shadow-sm"
            >
              <Link
                href={dest}
                className="text-indigo-700 font-semibold hover:underline"
                onClick={hasCta ? () => pushRailEvent(ctaPayload) : undefined}
              >
                {item.title}
              </Link>
              {item.description && (
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
