"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import DesignPage from "./components/DesignPage";
import DevelopmentPage from "./components/DevelopmentPage";
import NetworkAdminPage from "./components/NetworkAdminPage";

const Page: React.FC = () => {
  const [activePage, setActivePage] = useState<string>("development");

  const renderPage = () => {
    switch (activePage) {
      case "design":
        return <DesignPage />;
      case "development":
        return <DevelopmentPage />;
      case "networkAdmin":
        return <NetworkAdminPage />;
      default:
        return <DevelopmentPage />;
    }
  };

  return (
    <>
    <Head>
        <title>Lleva Tus Productos y Marcas al Siguiente Nivel | Trabajos</title> 
        <meta
          name="description"
          content="Ofrecemos soluciones profesionales de desarrollo, diseño y administración de redes para llevar tus productos y marcas al siguiente nivel."
        /> {/* Añadido */}
        <meta
          name="keywords"
          content="desarrollo web, diseño creativo, administración de redes, soluciones tecnológicas, mejora de marcas"
        /> {/* Añadido */}
      </Head>
    
    <div className="min-h-screen flex flex-col items-center pt-28 md:py-52 xl:w-[1300px] mx-auto px-2">
      <h1 className="text-center text-3xl xl:text-8xl font-bold py-2 montserrat md:pb-32 text-[#1C3C3F]">
        Lleva Tus Productos y Marcas al Siguiente Nivel
      </h1>
      <div className="flex md:space-x-4 gap-2 my-5 font-semibold md:pb-10 montserrat px-2 md:text-[18px] text-slate-800">
        {["design", "development", "networkAdmin"].map((page) => (
          <motion.button
            key={page}
            id={`button-${page}`}
            onClick={() => setActivePage(page)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`relative px-4 py-2 rounded-3xl monts overflow-hidden ${
              activePage === page ? "text-white" : "text-[#1C3C3F] bg-gray-200"
            }`}
          >
            {/* Efecto de llenado de agua */}
            {activePage === page && (
              <motion.div
                className="absolute inset-0 bg-[#1AD6B2]"
                initial={{ translateY: "100%" }}
                animate={{ translateY: "0%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            )}
            <span className="relative z-10">
              {page === "design" && "Diseños"}
              {page === "development" && "Desarrollo"}
              {page === "networkAdmin" && "Redes"}
            </span>
          </motion.button>
        ))}
      </div>

      <motion.div
        key={activePage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="mx-auto py-6 xl:w-[1300px]"
      >
        {renderPage()}
      </motion.div>
    </div>
    </>
  );
};

export default Page;
