import Link from "next/link";
import Image from "next/image";
import NavHamburger from "../reusables/navHamburger";
import Logo from "/public/logo.svg";
import { FaAngleDown } from "react-icons/fa6";
import DropDownMenu from "../reusables/dropDownMenu";

export default function NavBarServer() {
  return (
    <nav className="flex justify-between items-center z-50 h-16 fixed w-[100%] px-5">
      <Link href="/" aria-label="Go to Plumbing homepage">
        <div className="relative w-20 h-20 flex sm:w-24 sm:h-24 ">
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
      <div
        className="hidden sm:flex items-center px-2 darkColor dm-sans"
        style={{ "--font-weight": "600" }}
      >
        <ul className="flex items-center">
          <Link href="/services">
            <li className="ml-10 hover:border-b text-xl  lg:text-2xl">
              Services
            </li>
          </Link>
          <Link href="/contact">
            <li className="ml-10 hover:border-b text-xl  lg:text-2xl">
              Contact
            </li>
          </Link>

          <DropDownMenu />
          
        </ul>
      </div>
    </nav>
  );
}
