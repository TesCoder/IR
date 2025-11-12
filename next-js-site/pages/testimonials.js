// pages/testimonials.js
// actual page called, runs getServerSideProps to gather props, then renders each testimonial on page

import fs from "node:fs/promises";
import path from "node:path";
import Testimonials from "@/components/Testimonials"; // calls component
// import Testimonials from "@/components/Testimonials_Snippets"; // calls component

// note two functions below are connected by NextJS automatically

// before rending page getServerSideProps
export async function getServerSideProps(context) {
  const { query } = context;
  const key = query.w;

  if (key !== "jmd1720ly0rpo2xf20pz-x2f16iqi923ybhl1anjs") {
    return { notFound: true };
  }

  const filePath = path.join(process.cwd(), "data", "b4ro1e4h9etc2jv1qaov.json");
  const json = await fs.readFile(filePath, "utf8");
  const testimonialsRaw = JSON.parse(json); // matches your JSON structure. :contentReference[oaicite:0]{index=0}

  const testimonials = testimonialsRaw.map((t) => {
    // e.g. "/images/testimonials_images/james.png" OR "public/images/testimonials_images/james.png"
    const raw = String(t.imgSrc || "");
    const rel = raw
      .replace(/^\/+/, "")        // remove leading "/"
      .replace(/^public\//, "");  // remove accidental "public/" prefix

    return {
      ...t, // load fields like fname, lname, testimonial_text, etc.
      imgSrc: `/api/testimonials-image?file=${encodeURIComponent(rel)}&w=${encodeURIComponent(key)}`
    };
  });

  return { props: { testimonials } };
}

// once getServerSideProps finishes, passes props to TestimonialsPage
export default function TestimonialsPage({ testimonials }) {
  return <Testimonials testimonials={testimonials} />; // component uses t.imgSrc prop. :contentReference[oaicite:1]{index=1}
}

