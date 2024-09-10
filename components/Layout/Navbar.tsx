import Image from "next/image";
import Logo from "../../assets/logo.png";
import MobileLogo from "../../assets/logo-mobile.png";
import { FiGlobe } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { MobileSearchBox } from "../SearchBox/MobileSearchBox";
import { LuListFilter } from "react-icons/lu";
import { DesktopSearchBox } from "../SearchBox/DesktopSearchBox";
import Link from "next/link";

interface NavbarProps {
  isOpen: boolean;
  isHome: boolean;
  isSticky: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isOpen, isHome, isSticky }) => {
  return (
    <nav
      className={`${
        isSticky ? "top-0 sticky" : ""
      } bg-white px-4 md:px-10 lg:px-20 z-30`}
    >
      <div className="md:flex hidden flex-col">
        <div className="flex flex-row justify-between items-center z-20">
          <Link href="/">
            <div className="flex h-8 cursor-pointer my-6">
              <Image
                className="w-auto object-cover lg:block hidden"
                alt="logo-desktop"
                src={Logo}
              />
              <Image
                className="w-auto object-cover lg:hidden block"
                alt="logo-mobile"
                src={MobileLogo}
              />
            </div>
          </Link>
          <div className="flex flex-row items-center gap-4">
            <button className="text-sm">Airbnb your home</button>
            <FiGlobe className="text-lg cursor-pointer" />
            <div className="flex flex-row gap-2 items-center px-3 py-2 border-gray-300 border-2 rounded-3xl">
              <RxHamburgerMenu className="text-[24px] text-gray-500" />
              <FaCircleUser className="text-[28px] text-gray-500" />
            </div>
          </div>
        </div>
        <div
          className={`relative w-full max-w-[900px] self-center
              ${isOpen ? "mt-[-80px]" : "mt-[-160px]"}`}
        >
          <div className="flex flex-col items-center justify-center">
            {isHome && (
              <ul className={`flex gap-7 h-[80px]`}>
                <li className="leading-[80px] text-gray-500 font-bold cursor-pointer">
                  Stays
                </li>
                <li className="leading-[80px] text-gray-500 cursor-pointer">
                  Experiences
                </li>
              </ul>
            )}
            <DesktopSearchBox open={isHome && isOpen} />
          </div>
        </div>
      </div>
      <div className="md:hidden flex items-center justify-center gap-3 mt-2">
        {isHome && (
          <>
            <MobileSearchBox />
            <div className="border-[2px] border-gray-300 rounded-full p-2">
              <LuListFilter className="text-lg" />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
