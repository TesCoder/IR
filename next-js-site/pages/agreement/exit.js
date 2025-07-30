import Head from "next/head";
import Image from "next/image";
import Section from "@/components/Section";

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
          src="/images/agreement/agreement_exit.png"
          width={900}
          height={717}
          alt="agreement_exit"
        /> 
      </Section> 


    </>
  );
}
