import Image from "next/image";
import Link from "next/link";
import LogoProjector from "./logoMaker";


export default function Navbar() {
  return (
     <div className=" flex sm:justify-center bg-ivy-red">
      <nav
        className="z-0 navbar navbar-expand-md  text-white font-raleway font-medium p-0 navbar-dark uppercase"
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
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div
            className="collapse navbar-collapse flex justify-evenly flex-col md:flex-row"
            id="navbarNav"
          >
              {!Navbar && <LogoProjector/>}
              
            <ul className="navbar-nav text-white space-x-5 mt-4 ">
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

              <div className="hidden sm:hidden lg:block
              ">{LogoProjector()}</div> 

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
                className="btn btn-light text-ivy-red uppercase font-semibold"
              >
                Contact Us
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="z-40 md:hidden ml-36 bg-ivy-red">{LogoProjector()}</div>

     </div>
  );
}
