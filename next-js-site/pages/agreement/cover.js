import Head from "next/head";
import Image from "next/image";
import Section from "@/components/Section";
import Link from "next/link";

export async function getServerSideProps(context) {
  const { query } = context;

  // page access param
  const ejau34ouap = query.w;

  // Only allow correct query key to open page
  //** NOTE: IF UPDATING CODE, UPDATE LINKS!! */
  if (ejau34ouap !== "BoLvj148ncEYlu00ADRJ-BoLvj148ncEYlu00ADRJ") {
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
        <meta
          name="description"
          content="Ivy Ready's team is made up of former admission officers and graduates from top schools who have extensive experience in supporting students with college planning and admission. Our mission is to provide a personalized admission strategy for each student."
        />
      </Head>
 
      <section>
        <Link href="/agreement/main?w=AxXdi1VS4pzmXTevH49A-qQe6kfrY0dvtzczO7cbj">
          <Image
            className="shadow-md cursor-pointer"
            src="/images/agreement/agreement_cover.png"
            width={900}
            height={717}
            alt="agreement_cover"
          />
        </Link>
      </section>


    </>
  );
}
