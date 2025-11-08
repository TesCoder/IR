import Testimonial from "@/components/Testimonial";

export default function TestimonialsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-10">Testimonials</h1>

      {/* All testimonials */}
      <Testimonial />

      {/* OR filter by type */}
      {/* <Testimonial typeFilter="student" /> */}
    </div>
  );
}
