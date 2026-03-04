import React from "react";

/**
 * CredentialBar — horizontal strip of counselor credentials for the About Us page.
 * Props: { stats } — array from data/credentialStats.js
 * Design rules: no animated counters, no exclamation points, no celebratory framing.
 */
export default function CredentialBar({ stats }) {
  if (!stats || stats.length === 0) return null;

  return (
    <div className="w-full bg-[#0b3d60] text-white py-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-6 sm:gap-4 text-center">
        {stats.map(({ value, label, note }, i) => (
          <div key={i} className="flex flex-col items-center px-4">
            <span className="text-xl sm:text-2xl font-bold text-white leading-tight">
              {value}
            </span>
            <span className="text-sm sm:text-base text-white/80 mt-1 max-w-[180px]">
              {label}
            </span>
            {note ? (
              <span className="text-xs text-white/50 mt-1">{note}</span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
