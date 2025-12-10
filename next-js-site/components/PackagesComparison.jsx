// /public/data/packages-comparison.json
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


/** Small inline SVGs so you don't need any icon deps */
const CheckIcon = (props) => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden {...props}>
    <path d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.5 7.5a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414l2.293 2.293 6.793-6.793a1 1 0 0 1 1.414 0z" />
  </svg>
);

const DotIcon = (props) => (
  <svg viewBox="0 0 8 8" aria-hidden {...props}>
    <circle cx="4" cy="4" r="3" fill="currentColor" />
  </svg>
);

/** Cell that renders a check or empty */
function BoolCell({ value }) {
  return (
    <td className="px-3 py-3 text-center align-middle">
      {value ? (
        <span className="inline-flex items-center justify-center rounded-md bg-emerald-600/10 p-1 text-emerald-700 dark:text-emerald-400">
          <CheckIcon className="h-4 w-4" />
        </span>
      ) : (
        <span className="inline-flex items-center justify-center p-1 text-zinc-400">
          <DotIcon className="h-1.5 w-1.5" />
        </span>
      )}
    </td>
  );
}

function HeaderCell({ children }) {
  return (
    <th scope="col" className="sticky top-0 z-10 bg-[#7a0b0b] px-3 py-3 text-center text-sm font-semibold text-white">
      {children}
    </th>
  );
}

function FeatureCell({ label, note, highlight }) {
  return (
    <th scope="row" className={`px-3 py-3 text-left text-sm font-medium text-white/95 bg-[#7a0b0b] ${highlight ? "ring-2 ring-amber-400 rounded-md" : ""}`}>
      <div className="leading-snug">
        {label}
        {note ? <em className="ml-1 opacity-90">{" "}{note}</em> : null}
      </div>
    </th>
  );
}

/**
 * Responsive, accessible comparison table
 * - Desktop: table
 * - Mobile: stacked cards for each package
 */
export default function PackagesComparison({ dataUrl, data }) {
  const [dataset, setDataset] = useState(data ?? null);

  useEffect(() => {
    if (!dataUrl || dataset) return; // don't refetch if data already loaded
    (async () => {
      try {
        const res = await fetch(dataUrl);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setDataset(json);
      } catch (e) {
        console.error("Failed to fetch comparison JSON:", e);
      }
    })();
  }, [dataUrl, dataset]);

  // Guard until JSON is loaded
  if (!dataset) return null; // or return a loader component

  const { meta, rows } = dataset;
  
  const [c1, c2, c3] = meta.columns;

  return (
    <section aria-labelledby="packages-compare-title" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2 id="packages-compare-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {meta.title}
        </h2>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          We offer Essays-only Support, Comprehensive Support, and Full Application Support. All packages come with unlimited hours of essay editing and admission support. (In addition, we offer hourly consultationand Application Evaluation.)
        </p>
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto rounded-xl border border-zinc-200 shadow-sm dark:border-zinc-800 md:block">
        <table className="min-w-full border-separate" style={{ borderSpacing: 0 }}>
          <thead>
            <tr>
              <HeaderCell>Included Services</HeaderCell>
              <HeaderCell>
                <div>{c1.label}</div>
                <div className="text-xs font-normal opacity-80">{c1.pace}</div>
              </HeaderCell>
              <HeaderCell>
                <div>{c2.label}</div>
                <div className="text-xs font-normal opacity-80">{c2.pace}</div>
              </HeaderCell>
              <HeaderCell>
                <div>{c3.label}</div>
                <div className="text-xs font-normal opacity-80">{c3.pace}</div>
              </HeaderCell>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.id} className={i % 2 ? "bg-white dark:bg-zinc-900" : "bg-zinc-50 dark:bg-zinc-950"}>
                <FeatureCell label={r.label} note={r.note} highlight={r.highlight} />
                <BoolCell value={!!r.essays} />
                <BoolCell value={!!r.comp} />
                <BoolCell value={!!r.compLog} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden">
        {[c1, c2, c3].map((col) => (
          <div key={col.key} className="mb-4 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="bg-[#7a0b0b] p-4 text-white">
              <div className="text-base font-semibold">{col.label}</div>
              <div className="text-xs opacity-80">{col.pace}</div>
            </div>
            <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {rows.map((r) => (
                <li key={`${col.key}-${r.id}`} className="flex items-center justify-between px-4 py-3">
                  <div className="text-sm">
                    <span className="font-medium">{r.label}</span>
                    {r.note ? <em className="ml-1 text-zinc-500">{r.note}</em> : null}
                  </div>
                  <div className="pl-2">
                    <BoolCell value={!!r[col.key]} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-4 text-right">
        <Link href="/support-packages" className="text-sm font-medium underline underline-offset-4 hover:opacity-80">
          See full comparison
        </Link>
      </div>
    </section>
  );
}
