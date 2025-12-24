import Footer from '@/components/Footer';
import Layout from '@/components/layout';
import '@/styles/globals.css';
import Head from "next/head";
import Script from "next/script";
import { useRouter } from 'next/router';
import SEOHead from "@/components/SEOHead";

function App({ Component, pageProps }) {
  const router = useRouter();
  const seo = pageProps?.seo;

  // pages that should NOT use the Layout
  const noLayoutPages = [
    '/agreement/cover',
    '/agreement/exit',
    '/agreement/main',

    '/agreement_project/cover',
    '/agreement_project/exit',
    '/agreement_project/main',
  ];

  const excludeLayout = noLayoutPages.includes(router.pathname);

  const PageContent = (
    <>
      {seo && <SEOHead {...seo} />}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W9GBBGKJ');
        `}
      </Script>

      {/* Google Analytics */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-8QK4L246C4"
      />
      <Script id="google-analytics-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8QK4L246C4', {
            page_location: window.location.href
          });
        `}
      </Script>

      {/* Bootstrap Bundle */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossOrigin="anonymous"
      />

      <Component {...pageProps} />
    </>
  );

  return excludeLayout ? PageContent : <Layout>{PageContent}</Layout>;
}

export default App;
