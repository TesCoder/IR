import Image from "next/image";
import Link from "next/link";
import LogoProjector from "./logoMaker";
import { useState } from "react";
import Script from 'next/script'; // necessary for ads manager

export default function Navbar() {
  // hides logo in mobile when navbar-toggle is clicked
  const [logoVisibility, setLogoVisibility] = useState(false);

  return (
    // "fixed w-full z-20 top-0 left-0" persist navabar on scrolling
    <nav className="flex flex-col sm:justify-center bg-ivy-red fixed w-full z-20 top-0 left-0">
      {!logoVisibility && (
        <div
          id="logoModifier1"
          className="container 
        sm:visible md:visible lg:hidden
        z-40 w-3/12 justify-center -mb-12 md:-mb-4 bg-ivy-red 
        "
        >
          <LogoProjector />
        </div>
      )}

      <nav
        className="z-0 navbar pb-3 navbar-expand-md  text-white 
        font-raleway font-medium p-0 navbar-dark uppercase"
        data-bs-theme="dark"
      >
        <div className="container-fluid bg-ivy-red mt-4">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              onClick={() => setLogoVisibility(!logoVisibility)} // hides logo in mobile when navbar-toggle is clicked
            ></span>
          </button>

          <div
            className="collapse navbar-collapse flex justify-evenly flex-col md:flex-row mt-10"
            id="navbarNav"
          >
            <ul className="navbar-nav text-white md:space-x-5 -mt-20 md:-mb-6">
              <li className="nav-item">
                <Link className="nav-link text-white hover:opacity-75" href="/#chart">
                  Admission Support
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-white dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu bg-ivy-red">
                  <li>
                    <Link
                      className="dropdown-item text-white hover:bg-inherit hover:underline hover:underline-offset-4"
                      href="/#chart"
                    >
                      Admission Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item bg-ivy-red text-white hover:bg-inherit hover:underline hover:underline-offset-4"
                      href="/hourly-consultation"
                    >
                      Hourly Consultation
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-white hover:bg-inherit hover:underline hover:underline-offset-4"
                      href="/evaluation"
                    >
                      Application Evaluation
                    </Link>
                  </li>
                </ul>
              </li>

              <div
                className="hidden sm:hidden lg:block
              "
              >
                <LogoProjector />
              </div>

              <li className="nav-item">
                <Link
                  className="nav-link text-white hover:opacity-75"
                  href="/#testimonials-section"
                >
                  Testimonials
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white hover:opacity-75"
                  href="/about-us"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={"/#application-support-questions-section"}
                  className="btn btn-light text-ivy-red uppercase font-semibold rounded-full"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="logoModifier" className="z-40 md:hidden ml-20 bg-ivy-red">
        <LogoProjector />
      </div>

      <Script id="google-tag-manager">
      {`
        (function(w,d,s,l,i) {
          w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-W9GBBGKJ');
      `}
    </Script>

      {/* Google Analytics Script - Load gtag.js */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-8QK4L246C4"
      />

      {/* Google Analytics Script - Initialize gtag */}
      <Script id="google-analytics-config">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8QK4L246C4');
        `}
      </Script>
      
    </nav>
  );
}


