"use client";
import Link from "next/link";

const Footer = () => {
  const openMailClient = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=u19217724@gmail.com",
      "_blank"
    );
  };
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 sm:px-10 md:px-0 justify-center justify-items-center mx-auto py-10">
        <div>
          <h1 className="text-lg font-bold montserrat py-6 text-[#1C3C3F] text-center md:text-left">
            Portfolio
          </h1>
          <div className="flex flex-col gap-5 montserrat text-center md:text-left">
            <Link href="/https://avenda-o-two.vercel.app/">
              <p className="hover:text-[#1AD6B2]">Avendaño</p>
            </Link>
            <Link href="/">
              <p className="hover:text-[#1AD6B2]">Diseño</p>
            </Link>
            <Link href="/">
              <p className="hover:text-[#1AD6B2]">Redes</p>
            </Link>
            <Link href="/https://github.com/loth381">
              <p className="hover:text-[#1AD6B2]">Github</p>
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-bold montserrat py-6 text-[#1C3C3F] text-center md:text-left">
            Redes sociales
          </h1>
          <div className="flex flex-col gap-5 montserrat text-center md:text-left ">
            <Link href="/https://github.com/loth381" className="hover:text-[#1AD6B2]">
              <p>LinkedIn</p>
            </Link>
            <Link href="/https://github.com/loth381" className="hover:text-[#1AD6B2]">
              <p>Twitter</p>
            </Link>
            <Link href="/https://github.com/loth381" className="hover:text-[#1AD6B2]">
              <p>Instagram</p>
            </Link>
            <Link href="/https://github.com/loth381" className="hover:text-[#1AD6B2]">
              <p>Facebook</p>
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-bold montserrat py-6 text-[#1C3C3F] text-center md:text-left">
            locacion
          </h1>
          <p className="text-center md:text-left hover:text-[#1AD6B2]">Ayacucho</p>
        </div>
        <div>
          <h1 className="text-lg font-bold montserrat py-6 text-[#1C3C3F] text-center md:text-left">
            Contacto
          </h1>
          <div className="flex flex-col gap-5 montserrat text-center md:text-left">
            <p>
              <a
                href="https://wa.me/51930134408"
                className="underline  hover:text-[#1AD6B2]"
                target="_blank"
                rel="noopener noreferrer"
              >
                +51 930134408
              </a>
            </p>

            <p>
              <a
                href="javascript:void(0);"
                className="underline  hover:text-[#1AD6B2]"
                onClick={openMailClient}
                rel="noopener noreferrer"
              >
                u19217724@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center py-7 space-y-4 sm:space-y-0 sm:space-x-4 text-slate-500 montserrat text-center">
  <a href="/CookiePolicy" className="hover:underline" >Cookie Policy</a>
  <div className="border-l border-gray-300 h-6 hidden sm:block" />

  <p  className="hover:underline">Terms of Use</p>
  <div className="border-l border-gray-300 h-6 hidden sm:block" />

  <a href="/PrivacyPolicy" className="hover:underline">Privacy Policy</a>
  <div className="border-l border-gray-300 h-6 hidden sm:block" />

  <p className="hover:underline">Sitemap</p>
  <div className="border-l border-gray-300 h-6 hidden sm:block" />

  <p>2024, Ramotion Inc.</p>
</div>

    </div>
  );
};

export default Footer;
