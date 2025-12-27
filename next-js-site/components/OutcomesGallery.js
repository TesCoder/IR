// components/OutcomesGallery.js
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function OutcomesGallery({ items = [], types = ["student"] }) {
  const outcomes = items.filter(
    (t) => t?.outcomes_visible && types.includes(t?.type)
  );

  // Initial deterministic slice for server + first client render
  const [limitedOutcomes, setLimitedOutcomes] = useState(() =>
    outcomes.slice(0, 4)
  );

  // After hydration, randomize ONCE on the client
  useEffect(() => {
    if (!outcomes.length) {
      setLimitedOutcomes([]);
      return;
    }

    if (outcomes.length <= 4) {
      // Nothing to randomize, just show all
      setLimitedOutcomes(outcomes);
      return;
    }

    const shuffled = [...outcomes].sort(() => Math.random() - 0.5);
    setLimitedOutcomes(shuffled.slice(0, 4));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run only once on mount

  if (!limitedOutcomes.length) return null;

  return (
    <section>
      {/* Tailored Header */}
      <div className="text-center mb-6">
        {(() => {
          const hasStudents = outcomes.some((t) => t.type === "student");
          const hasParents = outcomes.some((t) => t.type === "parent");

          if (hasStudents && !hasParents) {
            return (
              <>
                <p className="pCentered italic text-lg text-white/90">
                  With Ivy Ready’s Guidance, They Got In.
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                  You Can Too.
                </h2>
              </>
            );
          } else if (hasParents && !hasStudents) {
            return (
              <>
                <p className="pCentered italic text-lg text-white/90">
                  Behind Every Acceptance Is a Confident Parent.
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                  Ivy Ready Makes the Journey Smoother.
                </h2>
              </>
            );
          } else if (hasStudents && hasParents) {
            return (
              <>
                <p className="pCentered italic text-lg text-white/90">
                  When Students Thrive, Families Do Too.
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                  Ivy Ready Helps Parents and Students Succeed Together.
                </h2>
              </>
            );
          } else {
            return (
              <>
                <p className="pCentered italic text-lg text-white/90">
                  With Ivy Ready’s Support, They Reached New Heights.
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                  You Can Too.
                </h2>
              </>
            );
          }
        })()}
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full ">
        {limitedOutcomes.map((t) => (
          <OutcomeCard key={t.id} item={t} />
        ))}
      </div>
    </section>
  );
}

function OutcomeCard({ item }) {
  const { college, fname, lname, high_school, imgSrc, imgSrc_outcome } = item;
  const img = imgSrc_outcome || imgSrc;

  return (
    <article className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden ring-1 ring-black/5">
      {/* Title Changes between Student and Parent*/}
      <div className="text-center pt-6">
        {item.type === "student" ? (
          <>
            <p className="text-gray-600 text-lg">Accepted to</p>
            <h3 className="text-2xl font-extrabold text-[#B91C1C] -mt-1">
              {college}
            </h3>
          </>
        ) : (
          <>
            <p className="text-gray-600 text-lg">Proud Parent</p>
            <h3 className="text-2xl font-extrabold text-[#B91C1C] -mt-1">
              {college}
            </h3>
          </>
        )}
      </div>

      {/* Photo */}
      <div className="px-6 mt-4">
        <div className="aspect-[2/3] md:aspect-[3/4] w-full overflow-hidden rounded-lg">
          <Image
            src={img}
            alt={`${fname} ${lname ? lname.charAt(0) + "." : ""} accepted to ${college}`}
            width={900}
            height={675}
            className="object-cover"
            priority={false}
            loading="lazy"
          />
        </div>
      </div>

      {/* “Polaroid” footer */}
      <div className="px-6 pb-6 pt-4">
        <dl className="space-y-3 font-handwrite">
          <div className="flex items-center justify-between border-t pt-3">
            <dt className="text-gray-600">Name</dt>
            <dd className="text-gray-900 font-semibold">
              {fname} {lname ? `${lname.charAt(0)}.` : ""}
            </dd>
          </div>
          <div className="flex items-center justify-between border-t pt-3">
            <dt className="text-gray-600">High School</dt>
            <dd className="text-gray-900">{high_school || "—"}</dd>
          </div>
          {item.intended_major && (
            <div className="flex items-center justify-between border-t pt-3">
              <dt className="text-gray-600">Major</dt>
              <dd className="text-gray-900">{item.intended_major}</dd>
            </div>
          )}
        </dl>
      </div>
    </article>
  );
}
