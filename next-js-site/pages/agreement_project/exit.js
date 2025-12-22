import Image from "next/image";
import Section from "@/components/Section";
import SEOHead from "@/components/SEOHead";

export async function getServerSideProps(context) {
  const { query } = context;

  // page access param
  const aue97340 = query.w;

  // Only allow correct query key to open page
  //** NOTE: IF UPDATING CODE, UPDATE LINKS!! */
  if (aue97340 !== "z3oCy9AZT0mubthZQ5iy-IpwC52hXsEqm6kpnSrvy") {
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
        title="Agreement Project Exit"
        description="Thank you for submitting your Ivy Ready project-specific agreement. Our team will follow up shortly."
        url="/agreement_project/exit"
      />
 
      <Section className="flex justify-center"> 
        <Image
          className="shadow-md"
          src="/images/agreement_project/agreement_project_exit.webp"
          width={810}
          height={645}
          alt="agreement_project_exit"
        /> 
      </Section> 


    </>
  );
}
