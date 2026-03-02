import Breadcrumbs from "@/components/Breadcrumbs";

/**
 * Shared layout for individual resource article pages.
 * Provides: gradient hero header, breadcrumbs (Home → Resources → page),
 * branded h1 title, optional description, and prose content area.
 * Matches the visual language of /resources index.
 */
export default function ArticlePageLayout({ title, description, url, children }) {
  return (
    <>
      {/* Gradient page header — matches /resources index hero style */}
      <section className="relative bg-gradient-to-b from-indigo-50 to-white border-b border-indigo-100">
        <div className="mx-auto max-w-3xl px-6 pt-6 pb-8">
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Resources", url: "/resources" },
              { name: title, url: url || "#" },
            ]}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-ivy-blue leading-snug">
            {title}
          </h1>
          {description && (
            <p className="mt-3 text-gray-600 leading-relaxed max-w-2xl">{description}</p>
          )}
        </div>
      </section>
      {/* Article content */}
      <article className="mx-auto max-w-3xl px-6 pt-8 pb-14 prose prose-indigo">
        {children}
      </article>
    </>
  );
}
