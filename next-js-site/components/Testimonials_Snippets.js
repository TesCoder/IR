// components/Testimonials_Snippets.js
// displayed on home page
"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Image from "next/image";
import Section from "@/components/Section";

export default function Testimonials({ testimonials = [] }) {
    // now shuffles testimonials
    // start deterministic (so SSR and client match)
    const [items, setItems] = useState(() => testimonials.slice());
    const [index, setIndex] = useState(0);

    // after mount: shuffle + pick random starting slide
    useEffect(() => {
    const shuffled = testimonials.slice().sort(() => Math.random() - 0.5);
    setItems(shuffled);
    setIndex(Math.floor(Math.random() * shuffled.length));
    }, [testimonials]);

    const count = items.length || 1;

    // carousel controls
    const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);
    const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

    // keyboard navigation
    useEffect(() => {
    const onKey = (e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    }, [prev, next]);

    if (!count) return null;


  // how many “ghost” cards we’ll stack behind the active one
  const STACK_SIZE = Math.min(3, count - 1);

  return (
    <section className="relative isolate overflow-hidden bg-ivy-blue">
      {/* page header */}
      <div className=" max-w-6xl px-2 pt-8 sm:mx-8 text-center text-white"> {/* max-w-6xl px-4 pt-16 text-center text-white */}
        
        {/* <button
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/20 transition"
          onClick={next}
          aria-label="View all customer stories"
        >
          View all Customer Stories →
        </button> */}
      </div>

      {/* carousel region */}
      <div className="sm:mx-8"> {/* max-w-6xl px-4 pb-16 pt-8 */}
        <div className="relative min-h-[420px] md:min-h-[460px]">
          {/* stacked background cards */}
          {Array.from({ length: STACK_SIZE }).map((_, k) => {
            // k=0 is the closest behind layer
            const depth = k + 1;
            const scale = 1 - depth * 0.04;
            const translateY = depth * 10; // px
            const opacity = 0.6 - depth * 0.12;

            return (
              <div
                key={`stack-${k}`}
                aria-hidden="true"
                className="absolute inset-0 mx-auto w-full rounded-2xl"
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  opacity,
                }}
              >
                <div className="h-full rounded-2xl bg-gradient-to-br from-[#155e75] to-[#0b5a7a] shadow-xl ring-1 ring-black/5" />
              </div>
            );
          })}

          {/* active card */}
          <TestimonialCard item={items[index]} />

          {/* arrows */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 md:px-4">
            <button
              className="pointer-events-auto grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20 transition"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </button>
            <button
              className="pointer-events-auto grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20 transition"
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </button>
          </div>

          {/* below slideshow, dots indicating which it's on */}
          <div className="mt-6 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 w-2 rounded-full transition ${
                  i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item }) {
  if (!item) return null;

  return (
    <article className="relative mx-auto w-full rounded-2xl bg-gradient-to-br from-[#167391] to-[#0b6b8e] shadow-2xl ring-1 ring-black/5 text-white">
      <div className="flex flex-col md:flex-row gap-8 p-8 md:p-10 ">
        {/* left: quote */}
        <div className="md:w-3/4">
          <QuoteMark />
          <p className="text-white ml-10 mt-4 text-lg md:text-xl leading-relaxed">
            “{item.testimonial_text}”
          </p>

          <div className="ml-10 mt-6 text-sm md:text-base">
            <div className="font-semibold">
              {item.fname} {item.lname.charAt(0)}.
              {item.type ? `, ${capitalize(item.type)}` : ""}
            </div>
            <div className="text-white/80">
              {item.high_school ? `${item.high_school} → ` : ""}
              <span className="font-medium">{item.college}</span>
            </div>
          </div>

          {/* CTA (optional deep link, wire up if you add stories) */}
          {/* <div className="mt-8">
            <a
              href="/testimonials?w=jmd1720ly0rpo2xf20pz-x2f16iqi923ybhl1anjs#"
              className="inline-flex items-center gap-2 rounded-full bg-white text-[#0a3a52] px-4 py-2 text-sm font-semibold hover:bg-white/90"
            >
              Read customer story →
            </a>
          </div> */}
        </div>

        {/* right: portrait */}
        <div className="md:w-1/4 mx-auto md:mx-0 flex items-center justify-center">
          <div className="relative h-40 w-40 md:h-48 md:w-48">

            <div className="absolute -inset-1 rounded-full bg-white/10 blur-xl" />
              <div className="relative size-48 rounded-full overflow-hidden shrink-0">
                <Image
                src={item.imgSrc}
                alt={`${item.fname} ${item.lname}`}
                width={384}           // ≥ 2× of 192 (or 576 for extra cushion)
                height={384}
                sizes="192px"
                quality={92}
                className="rounded-full object-cover" // critical to ensure crispness
                priority
                />
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      <path d="M15 19l-7-7 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function QuoteMark() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden="true" className="opacity-60">
      <path d="M7.2 6C5.4 6 4 7.4 4 9.2c0 1.7 1.4 3.1 3.2 3.1.3 0 .6 0 .8-.1-.3 1.9-1.8 3.3-3.8 3.6v2.2c3.6-.3 6.2-3 6.2-6.6C10.4 7.6 9 6 7.2 6Zm9.6 0C15 6 13.6 7.4 13.6 9.2c0 1.7 1.4 3.1 3.2 3.1.3 0 .6 0 .8-.1-.3 1.9-1.8 3.3-3.8 3.6v2.2c3.6-.3 6.2-3 6.2-6.6 0-3.8-1.4-5.4-3.2-5.4Z" fill="currentColor"/>
    </svg>
  );
}
function capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }
