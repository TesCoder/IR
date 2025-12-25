import Link from "next/link";
export default function RelatedArticles({ articles = [] }) {
  if (!articles?.length) return null;
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Related Articles</h2>
      <div className="space-y-3">
        {articles.map(({ title, href, description }, idx) => (
          <div key={idx} className="rounded-xl border border-gray-200 p-4">
            <Link href={href} aria-label={`Related article: ${title}`} className="text-ivy-blue font-semibold hover:underline">{title}</Link>
            {description && <p className="mt-1 text-sm text-gray-700">{description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}



