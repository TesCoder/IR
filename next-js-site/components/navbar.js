import Image from "next/image";
import Link from "next/link";
import LogoProjector from "./logoMaker";
import { useEffect, useRef, useState } from "react";
import Script from 'next/script'; // necessary for ads manager
import { Button, ButtonRow, ButtonRow2 } from "@/components/Button";
import { OrbitGlowButton } from "./OrbitGlowButton";
import { trackCtaClick } from "@/lib/trackCta";

export default function Navbar() {
  // hides logo in mobile when navbar-toggle is clicked
  const [logoVisibility, setLogoVisibility] = useState(false);
  const [modalType, setModalType] = useState("INFO");
  const collapseRef = useRef(null);
  const collapseInstanceRef = useRef(null);

  // Keep for navbar collapse functionality
  useEffect(() => {
    let isMounted = true;

    import("bootstrap/dist/js/bootstrap.bundle.min.js").then(() => {
      // bootstrap attaches to window; use getOrCreateInstance for reliability across export shapes
      const Collapse = window?.bootstrap?.Collapse;
      if (isMounted && Collapse && collapseRef.current) {
        collapseInstanceRef.current = Collapse.getOrCreateInstance(collapseRef.current, {
          toggle: false,
        });
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleHeaderCtaClick = () => {
    setModalType("INFO");
    trackCtaClick({ location: "header", text: "Get Started" });
  };

  return (
    <nav className="flex flex-col sm:justify-center bg-ivy-red fixed w-full z-20 top-0 left-0">
      {!logoVisibility && (
        <div
          id="logoModifier1" className="mt-2 container sm:visible md:visible lg:hidden z-40 w-3/12 justify-center -mb-20 md:-mb-4 bg-ivy-red md:hidden lg:block"
        >
          <LogoProjector />
        </div>
      )}

      <nav
        className="z-0 navbar navbar-expand-md  text-white 
        font-raleway font-medium navbar-dark "
        data-bs-theme="dark"
      >
        <div className="container-fluid bg-ivy-red mt-4">
          <button
            className="navbar-toggler relative z-50"
            type="button"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          onClick={() => {
            setLogoVisibility(false); // hides logo in mobile when navbar-toggle is clicked
            collapseInstanceRef.current?.toggle();
          }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            ref={collapseRef}
            className="collapse navbar-collapse justify-evenly flex-col md:flex md:flex-row mt-10"
            id="navbarNav"
          >
            <ul className="navbar-nav text-white 
            sm:[&_a]:text-[80%] lg:[&_a]:text-[90%]
            flex flex-col flex-nowrap md:items-center md:justify-center items-center text-center w-full md:flex-row md:space-x-2 -mt-20 md:-mb-6">

              <li className="nav-item">
                <Link className="nav-link text-white hover:opacity-75" href="/#">
                  Home
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
                  {/* <li>
                    <Link
                      className="dropdown-item bg-ivy-red text-white hover:bg-inherit hover:underline hover:underline-offset-4"
                      href="services/early-planning"
                    >
                      Early Planning
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link text-white hover:opacity-75" href="services/support-packages">
                      Packages
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item bg-ivy-red text-white hover:bg-inherit hover:underline hover:underline-offset-4"
                      href="services/hourly-consultation"
                    >
                      Hourly Consultation
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-white hover:bg-inherit hover:underline hover:underline-offset-4"
                      href="services/application-evaluation"
                    >
                      Application Evaluation
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white hover:opacity-75"
                  href="/testimonials?w=jmd1720ly0rpo2xf20pz-x2f16iqi923ybhl1anjs"
                >
                  Testimonials
                </Link>
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
                  href="/about-us"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white hover:opacity-75"
                  href="/resources"
                >
                  Resources
                </Link>
              </li>
              <li className="nav-item w-full md:w-auto">
                <div className="flex flex-col items-center gap-2 md:gap-2 md:ml-auto md:flex-row-reverse md:flex-nowrap">
                  <OrbitGlowButton
                    className="btn btn-light text-ivy-red uppercase font-semibold rounded-full px-4 py-2 text-sm md:text-sm lg:text-base md:px-4 lg:px-5"
                    onClick={handleHeaderCtaClick}
                    data-bs-toggle="modal"
                    data-bs-target="#contactModal"
                  >
                    Get Started
                  </OrbitGlowButton>
                  <a
                    className="flex items-center gap-2 rounded-full border border-white/70 px-3 py-2 text-white font-semibold hover:bg-white/10 text-sm md:text-sm lg:text-base"
                    href="tel:+16503830352"
                  >
                    (650) 383-0352
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="logoModifier" className="z-50 md:hidden ml-20 bg-ivy-red pointer-events-none">
        <LogoProjector />
      </div>

    </nav>
  );
}


