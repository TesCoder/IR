// components/Testimonials.js
// component to control testimonials display. Builds each component and sends it as Props to // pages/testimonials.js
// note testimonials is encoded/protected for rendering

import { Button, ButtonRow } from "@/components/Button";
import { OrbitGlowButton } from "@/components/OrbitGlowButton";
import SEOHead from "@/components/SEOHead";
import Section from "@/components/Section";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { trackCtaClick } from "@/lib/trackCta";

  export default function Testimonials({ typeFilter, testimonials = [], includeHidden = false }) { // admin toggle hidden to True to see all
  // STEP 1: Filter by type and visibility
  const filtered = useMemo(() => {
    let result = typeFilter
      ? testimonials.filter((t) => t.type === typeFilter)
      : testimonials;

    // Hide items with testimonial_visible === false unless includeHidden is true
    if (!includeHidden) {
      result = result.filter((t) => t?.testimonial_visible !== false);
    }

    return result;
  }, [typeFilter, testimonials, includeHidden]);

  // STEP 2: Maintain same randomization logic
  const [items, setItems] = useState(() => filtered.slice());
  useEffect(() => {
    const shuffled = filtered.slice().sort(() => Math.random() - 0.5);
    setItems(shuffled);
  }, [filtered]);

  const handleTestimonialsCtaClick = () => {
    trackCtaClick({ location: "testimonials", text: "Start Your Application Plan" });
  };


  return (

    <>
      <SEOHead
        title="Testimonials"
        description="Families love how Ivy Ready delivers clarity, structure, and results."
        url="/testimonials"
      />
      
      {/* Hero Section */}
      <div className="heroFrame bg-testimonial-hero relative overflow-hidden" style={{ backgroundPosition: 'center 5%' }}  >
        {/* Tint layer (between image and overlay) */}
        <div className="absolute inset-0 bg-[rgba(45,87,128,0.35)] mix-blend-multiply z-0 "></div>

        {/* Overlay layer (light black veil) */}
        <div className="absolute inset-0 ivy-blue/10 "></div>
          {/* Content layer */}
          <div className="relative z-10 m-auto text-center flex flex-col items-center justify-center h-full">
            <h1 className="bannerTitle" > Testimonials </h1>
          <div className="mb-10"></div>
        </div>
      </div>

      
      <Section
          title=""
          darkBg
          >
          {/* <h1 className="">Meet Our Team and Admission Backgrounds</h1> */}
           <div className="space-y-12">
               {items.map((t, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row text-lg border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 bg-white opacity-90"
                >

                  {/* elongated */}
                  {/* <div className="w-full md:w-1/4 flex justify-center mb-4 md:mb-0 relative rounded-full overflow-hidden">
                      <Image
                        src={t.imgSrc}
                        alt={`${t.fname} ${t.lname}`}
                        width={256}
                        height={256}
                        quality={90}
                        className="rounded-full object-cover" // critical to ensure crispness
                        priority
                      />
                  </div> */}
                  
                  {/* circular */}
                  <div className="relative size-48 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={t.imgSrc}
                      alt={`${t.fname} ${t.lname.charAt(0)}.`}
                      width={384}           // ≥ 2× of 192 (or 576 for extra cushion)
                      height={384}
                      sizes="192px"
                      quality={92}
                      className="rounded-full object-cover" // critical to ensure crispness
                      priority
                    />
                  </div>

                  {/* Controls testimonial_text and stars*/}
                  <div className="w-full md:w-3/4 md:pl-6">
                    {/* Stars (5 total) */}
                    <div className="flex space-x-5 pb-2">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#B91C1C]"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-10 h-10"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path
                              d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
                              fill="#ffffff"
                            />
                          </svg>
                        </span>
                      ))}
                    </div>

                    <p className="italic text-gray-700 mb-3">“{t.testimonial_text}”</p>
                    <h3 className="font-bold text-xl text-ivy-blue">
                      {t.fname} {t.lname ? t.lname.charAt(0) : ""}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t.high_school && `${t.high_school} → `}
                      <span className="font-medium">{t.college}</span>
                    </p>
                    <p className="text-gray-500 text-sm capitalize mt-1">
                      ({t.type})
                    </p>
                  </div>
                </div>
              ))}
            </div>
      </Section>

       <Section darkBg>
          <div className="rounded-3xl shadow-[0_0_5px_#ffffff80] border border-white/40 py-10 px-6 text-center hover:scale-[1.02]">
            <h2 className="text-white text-3xl mb-4 ">
              Ready to Begin?
            </h2>
            <p className="pCentered text-white mb-6 ">
              Take the first step toward your college success story with a free consultation from our expert admissions team.
            </p>
          <Button
              onClick={handleTestimonialsCtaClick}
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
            >
              Start Your Application Plan
            </Button>
          </div>
      </Section>

    </>
  );
}
