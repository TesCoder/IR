import Link from 'next/link';
import { BreadcrumbSchema, SchemaScript } from './Schema';

export default function Breadcrumbs({ items }) {
  const schema = BreadcrumbSchema({ items });

  return (
    <>
      <SchemaScript schema={schema} />
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex items-center text-sm text-gray-600 flex-nowrap min-w-0">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.url} className={`flex items-center${isLast ? " min-w-0" : " shrink-0"}`}>
                {index > 0 && <span className="mx-2 text-gray-400 shrink-0">/</span>}
                {isLast ? (
                  <span className="text-gray-900 font-medium truncate" title={item.name}>
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.url} className="hover:text-ivy-blue transition shrink-0">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

