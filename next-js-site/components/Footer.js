import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-ivy-blue font-medium py-10 flex flex-col items-center m-0">
      <div className="flex flex-row gap-4">
        <Link className="hover:opacity-75" href="/#application-support-questions-section">CONTACT US</Link>
        <Link className="hover:opacity-75" href="/#">HOME</Link>
      </div>

      <div className="my-3">
        <Link className="hover:opacity-75" target="_blank" rel="noreferrer" href="https://facebook.com/ivyready">
          <Image src="/images/f_logo_RGB-Blue_58.png" width={40} height={40}  alt="facebook logo" />
        </Link>
      </div>

      <div className="flex flex-row gap-2">
        <Link className="underline hover:opacity-75" href="/tos">TERMS OF SERVICE</Link> |
        <Link className="underline hover:opacity-75" href="/">PRIVACY POLICY</Link> |
        <span>IVY READY LLC © {new Date().getFullYear()}</span>
      </div>

      <p className="font-medium mt-3">IVY READY® IS A REGISTERED TRADEMARK. IVY READY IS NOT AFFILIATED WITH THE IVY LEAGUE OR ITS MEMBER UNIVERSITIES.</p>
    </footer>
  )
}