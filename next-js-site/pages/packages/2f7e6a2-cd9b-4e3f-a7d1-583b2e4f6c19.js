import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SchemaScript, ServiceSchema } from "@/components/Schema";
import Image from "next/image";
import Section from "@/components/Section";

export async function getServerSideProps(context) {
  const { query } = context;

  // page access param
  const ejau34ouap = query.w;

  // Only allow correct query key
  if (ejau34ouap !== "9Zh3_dR-P0qX18uK") {
    return {
      notFound: true, // 404 if incorrect or missing
    };
  }

  return {
    props: {}, // allow rendering
  };
}
export default function page() {
  return (
    <>
      <SEOHead
        title="Ivy Ready College Admission Consulting"
        description="Ivy Ready's team is made up of former admission officers and graduates from top schools who have extensive experience in supporting students with college planning and admission. Our mission is to provide a personalized admission strategy for each student."
        url="/packages/2f7e6a2-cd9b-4e3f-a7d1-583b2e4f6c19"
      />
 
      <SchemaScript
        schema={ServiceSchema({
          serviceName: "Application Support Fee Structure",
          description:
            "Comprehensive application support packages with unlimited guidance, essay editing, and admissions coaching.",
          serviceUrl: "https://ivyready.com/packages/2f7e6a2-cd9b-4e3f-a7d1-583b2e4f6c19",
          areaServed: "United States",
        })}
      />

      <div className="max-w-6xl mx-auto px-4 pt-4">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "Packages", url: "/services/support-packages" },
            { name: "Application Support Fee Structure", url: "/packages/2f7e6a2-cd9b-4e3f-a7d1-583b2e4f6c19" },
          ]}
        />
      </div>

      <Section title="Ivy Ready Application Support Fee Structure">
        <p>
          
          Once you sign up for a package and a set of schools, there is no limit to the hours of application support within that package. The student will have direct access to the coach to set up meetings and send essays for editing. Parents are also more than welcome to join meetings and be copied on correspondences. (On average, it takes 100-120 hours for a full admissions season.)
        </p>
        <p>
          Comprehensive Support and Full Application Support include additional 6 hours of face-to-face college counseling per year as well as unlimited email counseling. These are generally utilized by families to supplement the high school college counselor.
        </p>

        <p>
        <b>Discount Code: A109 </b> (Provide this at sign up. This discount is unique to you. Please do not share with anyone.)

        </p>

        <h2 className="text-xl font-bold mb-2">Packages</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Essays-Only Support up to 5 Schools:</strong> $6,000 <span className="text-gray-500">(Save $1,000 from $7,000)</span>
          </li>
          <li>
            <strong>Essays-Only Support up to 10 Schools:</strong> $8,000 <span className="text-gray-500">(Save $1,000 from $9,000)</span>
          </li>
          <li>
            <strong>Comprehensive Support up to 5 Schools:</strong> $8,000 <span className="text-gray-500">(Save $1,000 from $9,000)</span>
          </li>
          <li>
            <strong>Comprehensive Support up to 10 Schools:</strong> $10,000 <span className="text-gray-500">(Save $1,000 from $11,000)</span> <span className="text-green-600 font-semibold">[Most common]</span>
          </li>
          <li>
            <strong>Full Application Support up to 5 Schools:</strong> $10,000 <span className="text-gray-500">(Save $1,000 from $11,000)</span>
          </li>
          <li>
            <strong>Full Application Support up to 10 Schools:</strong> $12,000 <span className="text-gray-500">(Save $1,000 from $13,000)</span>
          </li>
        </ul>
          
        <h2 className="text-xl font-bold mb-2">Hourly Consultation Rate</h2>
        <ul className="list-disc pl-6">
          <li><strong>$350/hr</strong> for one hour</li>
          <li><strong>$300/hr</strong> for 10 hours or more</li>
        </ul>


        <Image
          className="shadow-md"
          src="/images/services/table-2000w.webp"
          width={1000}
          height={717}
          alt="Services Table"
        /> 
      </Section> 


    </>
  );
}