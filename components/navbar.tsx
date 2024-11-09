"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ItemsMenuMobile from "./items-menu-mobile";
import MenuList from "./menu-list";
import ToggleTheme from "./toggle-theme";
const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <div
    role="banner"
    className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-around p-4 mx-auto cursor-pointer transition-all duration-500 ease-in-out ${
      isScrolled
        ? "bg-white text-black shadow-md transform translate-y-0"
        : "bg-transparent text-slate-800 transform translate-y-0"
    }`}
  >
      <h1
        className={`text-2xl ${
          isScrolled ? "text-black" : "text-slate-800"
        }`}
        onClick={() => router.push("/")}
      >
       <Image src="/logoluromy.webp" alt="Logo de Luromy Agencia Digital - Desarrollo Web, Diseño Gráfico y Marketing Digital" width={200} height={200} className=" h-auto  max-md:w-[150px]" />

      </h1>
      <nav className="items-center justify-between hidden sm:flex" aria-label="Menú de navegación principal">
        <MenuList isScrolled={isScrolled} />
      </nav>
      <div className="flex sm:hidden " aria-label="Menú móvil de Luromy"> 
        <ItemsMenuMobile />
      </div>
      <div className="flex items-center gap-4 sm:gap-6" aria-label="Conctato">
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Navbar;
