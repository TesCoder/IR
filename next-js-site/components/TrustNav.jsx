import Link from "next/link";

const pills = [
  { label: "Impact Data", href: "/impact" },
  { label: "Success Stories", href: "/success" },
  { label: "Testimonials", href: "/testimonials" },
];

export default function TrustNav() {
  return (
    <nav aria-label="Trust pages" className="flex flex-wrap items-center justify-center gap-2 py-4 px-4">
      {pills.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          className="inline-flex items-center rounded-full border border-ivy-blue/30 bg-white px-4 py-1.5 text-sm font-medium text-ivy-blue hover:bg-ivy-blue/5 transition-colors"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
