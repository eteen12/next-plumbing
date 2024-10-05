"use client";
import Link from "next/link";
import Image from "next/image";
import NavHamburger from "../client/navHamburger";
import Logo from "/public/logo.svg";

export default function NavBarServer() {
  return (
    <nav className="flex justify-between items-center z-50 h-16 fixed w-[100%] px-5">
      <Link href="/" aria-label="Go to Plumbing homepage">
        <div className="relative w-16 h-16 right-4 md:w-48 md:h-48 md:right-6 lg:w-60 lg:h-60 lg:right-7 xl:w-72 xl:h-72 xl:right-12 flex ">
          <Image
            src={Logo}
            alt="Plumbing logo linking to homepage"
            className="object-contain"
            priority
            fill
          />
        </div>
      </Link>
      <div className="sm:hidden">
        <NavHamburger />
      </div>
    </nav>
  );
}
