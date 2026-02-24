import Image from "next/image";
import Section from "@/components/Section";
import Link from "next/link";
import SEOHead from "@/components/SEOHead";

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
      <SEOHead
        title="Agreement Project Cover"
        description="Ivy Ready's team includes former admission officers with extensive experience guiding students through college planning and admission projects."
        url="/agreement_project/cover"
      />
 
      <section className="flex justify-center">
        <Link href="/agreement_project/main_02242026?w=27ZRss5XCskcryfXxDCz-AxllzZMa9ra8BoxGoNUc">
          <Image
            className="shadow-md cursor-pointer"
            src="/images/agreement_project/agreement_project_cover.webp"
            width={810}
            height={645}
            alt="agreement_cover"
          />
        </Link>
      </section>


    </>
  );
}
