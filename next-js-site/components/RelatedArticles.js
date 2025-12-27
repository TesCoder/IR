import Link from "next/link";

export default function RelatedArticles({ title = "Related Articles", items, articles = [], className = "" }) {
  const links = items?.length ? items : articles;
  if (!links?.length) return null;

  const containerClassName = ["mt-12 rounded-2xl border border-gray-200 bg-white/80 p-6", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section aria-label={title} className={containerClassName}>
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map(({ title: itemTitle, href, description }, idx) => (
          <li
            key={href || itemTitle || idx}
            className="group rounded-xl border border-gray-200 bg-white p-4 transition hover:shadow-sm"
          >
            <Link href={href} className="text-indigo-700 font-semibold hover:underline">
              {itemTitle}
            </Link>
            {description && <p className="mt-2 text-sm text-gray-600">{description}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}






