import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./navbar";

const noNavPages = ["/contact"];

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const hide = noNavPages.includes(pathname);

  return (
    <>
      {!hide && <Navbar />}
      <main className="min-h-screen font-raleway">{children}</main>
      {!hide && <Footer />}
    </>
  );
}
