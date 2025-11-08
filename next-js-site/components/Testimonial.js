import Image from "next/image";
import testimonials from "@/data/testimonials.json"; // adjust path if needed

export default function Testimonial({ typeFilter }) {
  // Optional filter (e.g., "student" or "parent")
  const filteredTestimonials = typeFilter
    ? testimonials.filter((t) => t.type === typeFilter)
    : testimonials;

  return (
    <div className="space-y-12">
      {filteredTestimonials.map((t, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row text-lg border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 bg-white"
        >
          {/* Left - Image */}
          <div className="w-full md:w-1/4 flex justify-center mb-4 md:mb-0">
            <Image
              className="rounded-full shadow-md"
              src={t.imgSrc}
              width={128}
              height={128}
              alt={`${t.fname} ${t.lname}`}
            />
          </div>

          {/* Right - Text Content */}
          <div className="w-full md:w-3/4 md:pl-6">
            <p className="italic text-gray-700 mb-3">“{t.testimonial_text}”</p>
            <h3 className="font-bold text-xl text-ivy-blue">
              {t.fname} {t.lname}
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
  );
}
