import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./navbar";

const noNavPages = ["/contact"];

export default function Layout({ children }) {
  // Get the pathname
  const { pathname } = useRouter();

  // // Check if the current route matches a public page
  const hideNav = noNavPages.includes(pathname);

  return (
    <>
      {!hideNav && <Navbar />}
      <main className="min-h-screen font-raleway">{children}</main>
      {!hideNav && <Footer />}
    </>
  );
}
