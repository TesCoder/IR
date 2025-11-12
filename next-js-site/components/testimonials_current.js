// components/testimonials_current.js
import Image from "next/image";

export default function Testimonials_Prev() {
  return (
    <div
        id="testimonials-carousel"
        className="carousel carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000"
        data-bs-pause="hover"
    >
        <div className="carousel-inner mb-2">
        {[
            { src: "/images/testimonials/A.png", alt: "Amazing evaluation feedback" },
            { src: "/images/testimonials/B.png", alt: "Great firm recognition" },
            { src: "/images/testimonials/C.png", alt: "Spoke with former Ivy League counselor" },
            { src: "/images/testimonials/D.png", alt: "Inspired to apply to Harvard" },
            { src: "/images/testimonials/E.png", alt: "Thankful for Ivy Ready and Princeton" },
            { src: "/images/testimonials/F.png", alt: "Admitted to UPenn, class of 2020" },
            { src: "/images/testimonials/H.png", alt: "Tutor recommends Ivy Ready to students" },
            { src: "/images/testimonials/I.png", alt: "Guidance office support for applicants" },
            { src: "/images/testimonials/J.png", alt: "Regret not finding Ivy Ready sooner" },
        ].map((item, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
            <Image
                src={item.src}
                width={600}
                height={420}
                className="d-block mx-auto rounded-md shadow-lg"
                alt={item.alt}
                loading="lazy"
            />
            {/* ✅ Keep your pCentered style but use <div> or <span> */}
            <div className="pCentered mt-4 text-base text-gray-600 text-center italic opacity-90 max-w-xl mx-auto">
                {item.alt}
            </div>
            </div>
        ))}
        </div>
    </div>
  );
}
