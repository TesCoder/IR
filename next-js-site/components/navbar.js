import Image from "next/image";
import Link from "next/link";
import LogoProjector from "./logoMaker";
import { useState } from "react";

export default function Navbar() {
  const [logoVisibility, setLogoVisibility] = useState(false);

  return (
    <div className="flex flex-col sm:justify-center bg-ivy-red">
      {!logoVisibility && (
        <div
          id="logoModifier1"
          className="container 
        sm:visible md:visible lg:hidden
        z-40 w-3/12 justify-center -mb-12 md:-mb-4 bg-ivy-red
        "
        >
          {LogoProjector()}
        </div>
      )}

      <nav
        className="z-0 navbar pb-3 navbar-expand-md  text-white 
        font-raleway font-medium p-0 navbar-dark uppercase"
        data-bs-theme="dark"
      >
        <div className="container-fluid bg-ivy-red">
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
              onClick={() => setLogoVisibility(!logoVisibility)}
            ></span>
          </button>

          <div
            className="collapse navbar-collapse flex justify-evenly flex-col md:flex-row"
            id="navbarNav"
          >
            <ul className="navbar-nav text-white md:space-x-5 mt-1 -mb-6 ">
              <li className="nav-item">
                <Link className="nav-link text-white hover:opacity-75" href="/">
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
                      href="/"
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
                  href="/#testimonials"
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
        {LogoProjector()}
      </div>
    </div>
  );
}
