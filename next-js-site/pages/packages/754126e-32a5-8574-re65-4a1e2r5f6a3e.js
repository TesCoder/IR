import Head from "next/head";
import Image from "next/image";
import Section from "@/components/Section";

export async function getServerSideProps(context) {
  const { query } = context;

  // page access param
  const ejau34ouap = query.w;

  // Only allow correct query key
  if (ejau34ouap !== "pEi393-8a5er354-Yz83IW") {
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
      <Head>
        <title>
          Ivy Ready College Admission Consulting
        </title>
        <meta
          name="description"
          content="Ivy Ready's team is made up of former admission officers and graduates from top schools who have extensive experience in supporting students with college planning and admission. Our mission is to provide a personalized admission strategy for each student."
        />
      </Head>
 
      <Section title="Ivy Ready Application Support Fee Structure">
        <p>
          
          Once you sign up for a package and a set of schools, there is no limit to the hours of application support within that package. The student will have direct access to the coach to set up meetings and send essays for editing. Parents are also more than welcome to join meetings and be copied on correspondences. (On average, it takes 100-120 hours for a full admissions season.)
        </p>
        <p>
          Comprehensive Support and Full Application Support include additional 6 hours of face-to-face college counseling per year as well as unlimited email counseling. These are generally utilized by families to supplement the high school college counselor.
        </p>

        <p>
        <b>Discount Code: E8e53 </b> (Provide this at sign up. This discount is unique to you. Please do not share with anyone.)

        </p>

        <h2 className="text-xl font-bold mb-2">Packages</h2>
        <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Essays-Only Support up to 5 Schools:</strong> $3,000 <span className="text-gray-500">(Save $1,000 from $4,000)</span>
            </li>
            <li>
              <strong>Essays-Only Support up to 10 Schools:</strong> $4,000 <span className="text-gray-500">(Save $1,000 from $5,000)</span>
            </li>
            <li>
              <strong>Comprehensive Support up to 5 Schools:</strong> $4,000 <span className="text-gray-500">(Save $1,000 from $5,000)</span>
            </li>
            <li>
              <strong>Comprehensive Support up to 10 Schools:</strong> $5,000 <span className="text-gray-500">(Save $1,000 from $6,000)</span> <span className="text-green-600 font-semibold">[Most common]</span>
            </li>
            <li>
              <strong>Full Application Support up to 5 Schools:</strong> $5,000 <span className="text-gray-500">(Save $1,000 from $6,000)</span>
            </li>
            <li>
              <strong>Full Application Support up to 10 Schools:</strong> $6,000 <span className="text-gray-500">(Save $1,000 from $7,000)</span>
            </li>
        </ul>
          
        <h2 className="text-xl font-bold mb-2">Hourly Consultation Rate</h2>
        <ul className="list-disc pl-6">
          <li><strong>$250/hr</strong> for one hour</li>
          <li><strong>$200/hr</strong> for 5 hours or more</li>
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