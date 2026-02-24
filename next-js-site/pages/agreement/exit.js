import Image from "next/image";
import Section from "@/components/Section";
import SEOHead from "@/components/SEOHead";
import Link from "next/link";

export async function getServerSideProps(context) {
  const { query } = context;

  // page access param
  const aue97340 = query.w;

  // Only allow correct query key to open page
  //** NOTE: IF UPDATING CODE, UPDATE LINKS!! */
  if (aue97340 !== "mFNZyw88mlMgm5Zj473z-VCHQDs4kZ06gtw3TdfJq") {
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
        title="Agreement Exit"
        description="Ivy Ready's team includes former admission officers with extensive experience guiding students through college planning and admissions."
        url="/agreement/exit"
      />
 
      <section className="flex justify-center items-center text-center">
      <Link href="/#">
        <Image
          className="shadow-md"
          src="/images/agreement/agreement_exit.webp"
          width={810}
          height={645}
          alt="agreement_exit"
        /> 
        </Link>
      </section> 


    </>
  );
}
