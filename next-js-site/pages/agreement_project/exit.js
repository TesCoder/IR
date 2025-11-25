import Head from "next/head";
import Image from "next/image";
import Section from "@/components/Section";

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
      <Head>
        <title>
          Ivy Ready College Admission Consulting
        </title>
        <meta
          name="description"
          content="Ivy Ready's team is made up of former admission officers and graduates from top schools who have extensive experience in supporting students with college planning and admission. Our mission is to provide a personalized admission strategy for each student."
        />
      </Head>
 
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
