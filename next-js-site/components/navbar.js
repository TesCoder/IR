import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (

    <nav className="navbar navbar-expand-md bg-body-tertiary text-white font-raleway font-medium p-0 navbar-dark uppercase" data-bs-theme="dark">
      <div className="container-fluid bg-ivy-red">
        <Link className="navbar-brand" href="/">
          <Image src="/images/logo-white.png" alt="Logo" width={100} height={110} priority />
        </Link>
        {/* <Link className="navbar-brand" href="/">
          Navbar
        </Link> */}

        <button className="navbar-toggler fill-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse flex justify-between flex-col md:flex-row" id="navbarNav">
          <ul className="navbar-nav text-white font-bold">
            <li className="nav-item">
              <Link className="nav-link text-white hover:opacity-75" href="/">Admissions Support</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white hover:opacity-75" href="/">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white hover:opacity-75" href="/">Testimonials</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white hover:opacity-75" href="/">About Us</Link>
            </li>
          </ul>
          <div className="">
            <button className="btn btn-light text-ivy-red uppercase font-semibold">Contact Us</button>
          </div>
        </div>
      </div>
    </nav >
  )
}