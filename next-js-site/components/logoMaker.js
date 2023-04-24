import Image from "next/image";
import Link from "next/link";

export default function LogoProjector() {
  return (
    <Link href="/">
      <Image
        src="/images/logo-white.png"
        alt="Logo"
        width={150}
        height={97}
        priority
      />
    </Link>
  );
}
