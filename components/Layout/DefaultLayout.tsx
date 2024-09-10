import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "../Footer";

interface DefaultLayoutProps {
  children?: React.ReactNode;
}
export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(true);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (!isHome) return;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        setIsNavbarOpen(false);
      } else {
        setIsNavbarOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // remove on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <Navbar isHome={isHome} isOpen={isNavbarOpen} isSticky={isHome} />
      {children}
      <Footer />
    </>
  );
};
