// /components/SupportPackagesPreview
"use client";

import { useEffect, useState } from "react";
import { Check, Clock, Star, Users, ClipboardList, Truck } from "lucide-react";
import Link from "next/link";

// Extract color management into utility classes for clarity and maintainability
const colorThemes = {
  red: {
    bgAccent: "bg-ivy-red/10",
    textAccent: "text-ivy-red",
    button: "bg-ivy-red focus:ring-ivy-red/40",
  },
  blue: {
    bgAccent: "bg-ivy-blue/10",
    textAccent: "text-ivy-blue",
    button: "bg-ivy-blue focus:ring-ivy-blue/40",
  },
  emerald: {
    bgAccent: "bg-emerald-600/10",
    textAccent: "text-emerald-700",
    button: "bg-emerald-700 focus:ring-emerald-700/40",
  },
};

const packages = [
  {
    slug: "essays-only",
    title: "Essays-only Support",
    pace: "Student-paced",
    highlight: "Unlimited essay editing",
    perks: [
      "Former admissions officer guidance",
      "Polished, compelling essays",
      "Admission Q&A access",
    ],
    icon: ClipboardList,
    color: "red",
    href: "/support-packages#essays-only",
    badge: "Simple",
  },
  {
    slug: "comprehensive",
    title: "Comprehensive Support",
    pace: "Student-paced",
    highlight: "End-to-end application strategy",
    perks: [
      "Personalized school list & timeline",
      "Unlimited essay support",
      "Interview prep & submission review",
    ],
    icon: Users,
    color: "blue",
    href: "/support-packages#comprehensive",
    badge: "Most Selected",

  },
  {
    slug: "comprehensive-logistics",
    title: "Comprehensive w/ Logistics",
    pace: "Consultant-paced",
    highlight: "We drive the process for you",
    perks: [
      "Hands-on project management",
      "Parent + student coordination",
      "Deadline tracking & follow-through",
    ],
    icon: Truck,
    color: "emerald",
    href: "/support-packages#comprehensive-with-logistics",
    badge: "Most Guided",
  },
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border  px-2 py-0.5 text-xs font-medium text-black backdrop-blur-sm">
      {children}
    </span>
  );
}

function PacePill({ pace }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-black/5 px-2 py-0.5 text-xs font-medium text-black/70 ">
      <Clock className="h-3.5 w-3.5" aria-hidden /> {pace}
    </span>
  );
}

function Perk({ children }) {
  return (
    <li className="flex items-start gap-2 text-sm text-black/80 ">
      <Check className="mt-0.5 h-4 w-4 flex-none" aria-hidden />
      <span>{children}</span>
    </li>
  );
}

// Quick Glance modal (no extra deps)
function QuickGlanceModal({ pkgKey, dataset, onClose }) {
  if (!pkgKey || !dataset) return null;

  const { meta, rows } = dataset; // same shape used by PackagesComparison
  // Find the column metadata for the selected package
  const col = (meta?.columns || []).find((c) => c.key === pkgKey);

  // Rows where this package includes the feature
  const included = (rows || []).filter((r) => !!r[pkgKey]);
  const includedCount = included.length;

  function handleKey(e) {
    if (e.key === "Escape") onClose();
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quickglance-title"
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
      onKeyDown={handleKey}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-xl "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-zinc-200 p-4 ">
          <h3 id="quickglance-title" className="text-lg font-semibold">
            {col?.label || "Package"} — Quick glance
          </h3>
          {col?.pace ? (
            <p className="mt-1 text-sm text-zinc-600 ">
              Pace: {col.pace}
            </p>
          ) : null}
          <p className="mt-1 text-xs text-zinc-500 ">
            {includedCount} included features from the full comparison.
          </p>
        </div>

        {/* List */}
        <ul className="max-h-[60vh] overflow-auto divide-y divide-zinc-200 ">
          {included.map((r) => (
            <li key={r.id} className="flex items-start gap-3 px-4 py-3 text-sm">
              <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded bg-emerald-600/10 text-emerald-700 0">
                ✓
              </span>
              <div>
                <span className="font-medium">{r.label}</span>
                {r.note ? <em className="ml-1 opacity-80">{r.note}</em> : null}
              </div>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 border-t border-zinc-200 p-3 00">
          <button
            autoFocus
            onClick={onClose}
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-50 "
          >
            Close
          </button>
          <Link
            href="/support-packages"
            className="rounded-full bg-[#B91C1C] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#B91C1C]/40"
          >
            Full comparison
          </Link>
        </div>
      </div>
    </div>
  );
}

// Accept optional dataUrl / data so the modal can show features from the same JSON as the table
export default function SupportPackagesPreview({ data, dataUrl }) {
  const [dataset, setDataset] = useState(data || null);
  const [openKey, setOpenKey] = useState(null); // 'essays' | 'comp' | 'compLog' | null

  useEffect(() => {
    if (dataset || !dataUrl) return;
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(dataUrl);
        const json = await res.json();
        if (!cancelled) setDataset(json);
      } catch (e) {
        console.error("Failed to fetch packages JSON", e);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [dataUrl, dataset]);

  // Map package cards to keys used in the JSON columns
  const keyMap = {
    "essays-only": "essays",
    "comprehensive": "comp",
    "comprehensive-logistics": "compLog",
  };

  return (
    <section aria-labelledby="packages-preview-heading" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Badge, pace section */}

      <div className="mb-2 items-baseline">
        <h1 className="bannerTitle text-start sm:text-3xl">Compare Support Options at a Glance</h1>
        <h2 className="pCentered text-start text-white">
          From essays-only guidance to fully managed application logistics, Ivy Ready offers tailored support for every applicant and family. 
          We also offer{" "}
          <Link href="/hourly-consultation" className="underline text-ivy-gold hover:text-white transition-colors">
            Hourly Consultation
          </Link>{" "}
          and{" "}
          <Link href="/application-evaluation" className="underline text-ivy-gold hover:text-white transition-colors">
            Application Evaluation
          </Link>.
        </h2>

        {/* <Link href="/support-packages" className="text-white text-sm font-medium underline underline-offset-4 hover:opacity-80">
          See full comparison
        </Link> */}
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map(({ title, pace, highlight, perks, icon: Icon, color, href, badge, slug }) => {
          const theme = colorThemes[color];
          return (
            <div key={slug} className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg " >
            {/* Above div controls outer box containing packages like backg white, padding, etc. */}

            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl ${theme.bgAccent} ${theme.textAccent}`} />
                </div>

                {/* Badge, pace section */}
                <div className="mb-4 flex items-center justify-between">
                    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${theme.bgAccent} ${theme.textAccent}`}>
                    <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div className="flex items-center gap-2">
                    {badge ? <Badge>{badge}</Badge> : null}
                    <PacePill pace={pace} />
                    </div>
                </div>

                {/* Title and highlight */}
                <h3 className="text-ivy-blue text-lg font-semibold leading-tight">{title}</h3>
                <p className="mt-1 text-sm text-black/70 ">{highlight}</p>

                {/* Perks checkmarks  */}
                <ul className="mt-4 space-y-2 text-start">
                    {perks.map((p, i) => (
                    <Perk key={i}>{p}</Perk>
                    ))}
                </ul>

                <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-black/60 ">
                    <Star className="h-4 w-4" aria-hidden /> Unlimited essay editing & support
                    </div>
                    
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={() => setOpenKey(keyMap[slug])}
                            className={`rounded-full mx-1 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 ${theme.button}`}
                            aria-label={`Quick glance: ${title}`}
                        >
                            Quick glance
                        </button>
                    </div>
                </div>
            </div>
          );
        })}
      </div>

      <p className="pCentered text-white m-2 text-xs ">
        Prefer details? Head to the full comparison table to see every included service.
      </p>

      {/* Modal rendered here to avoid clipping in parent grids */}
      {openKey && <QuickGlanceModal pkgKey={openKey} dataset={dataset} onClose={() => setOpenKey(null)} />}
    </section>
  );
}
