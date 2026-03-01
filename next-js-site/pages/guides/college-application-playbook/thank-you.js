import Head from "next/head";
import Link from "next/link";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { trackCtaClick } from "@/lib/trackCta";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Guides", url: "/guides" },
  { name: "College Application Playbook", url: "/guides/college-application-playbook" },
  { name: "Thank You", url: "/guides/college-application-playbook/thank-you" },
];

const tips = [
  "Start with the chapter that matches your current grade year",
  "Use the Companion Tools linked at the end of each chapter",
  "Share it with your parents — the financial aid chapter is especially useful for families",
  "Come back to it each year — the junior and senior chapters will matter most when the time comes",
];

export default function PlaybookThankYou() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <SEOHead
        title="Your Playbook Is Ready — Ivy Ready"
        description="Download your free Ivy Ready College Application Playbook and book your free consultation."
        url="/guides/college-application-playbook/thank-you"
        image="/images/logo-circle.png"
      />

      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <div className="text-center max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4 text-ivy-blue">
          You&apos;re all set — your playbook is ready.
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Click the button below to download your free Ivy Ready College
          Application Playbook.
        </p>

        <a
          href="/guides/college-application-playbook.pdf"
          download
          className="inline-block bg-ivy-blue text-white px-10 py-4 rounded font-semibold text-lg hover:bg-opacity-90 mb-8"
          onClick={() =>
            trackCtaClick({
              location: "thank_you_download_button",
              text: "Download Your Free Playbook",
              destination: "/guides/college-application-playbook.pdf",
            })
          }
        >
          Download Your Free Playbook →
        </a>

        <div className="mt-12 border-t pt-10 text-center">
          <h2 className="text-2xl font-semibold text-ivy-blue mb-4">
            Want a personalized plan instead of a template?
          </h2>
          <p className="text-gray-700 mb-6">
            The playbook gives you the framework. Ivy Ready gives you the expert
            guidance to execute it — personalized to your profile, school list,
            and timeline.
          </p>
          <Link
            href="/free-consultation"
            className="inline-block border-2 border-ivy-blue text-ivy-blue px-8 py-3 rounded font-semibold hover:bg-ivy-blue hover:text-white transition-colors"
            onClick={() =>
              trackCtaClick({
                location: "thank_you_consult_cta",
                text: "Book Your Free 15-Minute Consultation",
                destination: "/free-consultation",
              })
            }
          >
            Book Your Free 15-Minute Consultation →
          </Link>
        </div>

        <div className="max-w-2xl mx-auto mt-8 bg-gray-50 p-6 rounded-lg text-left">
          <h3 className="text-lg font-semibold mb-3">
            A few tips to make the most of your playbook:
          </h3>
          <ul className="space-y-3">
            {tips.map((tip) => (
              <li key={tip} className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">✓</span>
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
