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
  if (ejau34ouap !== "Mx9l75Z48wTPjawXqhL1-MAeu3nQaMXl4JkRb9yLy") {
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
 
      <section className="flex justify-center">
        <Link href="/agreement_project/main?w=27ZRss5XCskcryfXxDCz-AxllzZMa9ra8BoxGoNUc">
          <Image
            className="shadow-md cursor-pointer"
            src="/images/agreement_project/agreement_project_cover.png"
            width={810}
            height={645}
            alt="agreement_cover"
          />
        </Link>
      </section>


    </>
  );
}
