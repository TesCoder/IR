import Link from 'next/link';
import { BreadcrumbSchema, SchemaScript } from './Schema';

export default function Breadcrumbs({ items }) {
  const schema = BreadcrumbSchema({ items });

  return (
    <>
      <SchemaScript schema={schema} />
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {items.map((item, index) => (
            <li key={item.url} className="flex items-center">
              {index > 0 && <span className="mx-2 text-gray-400">/</span>}
              {index === items.length - 1 ? (
                <span className="text-gray-900 font-medium">{item.name}</span>
              ) : (
                <Link href={item.url} className="hover:text-ivy-blue transition">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

