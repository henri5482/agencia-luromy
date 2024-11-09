"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Empresas from "./empresas";
import Negocios from "./negocios";

const Clientes: React.FC = () => {
  const [activePage, setActivePage] = useState<string>("development");
  const [buttonText, setButtonText] = useState("Hablamos?");
  const [iconColor, setIconColor] = useState("text-white");

  const renderPage = () => {
    switch (activePage) {
      case "design":
        return <Negocios />;
      case "development":
        return <Empresas />;
      default:
        return <Negocios />;
    }
  };

  return (
    <> 
    <div className="min-h-3.5 flex flex-col items-center md:pt-28 pb-20 pt-16 xl:w-[1300px] mx-auto px-2">
      <h1 className="text-center text-[#1C3C3F] text-3xl xl:text-7xl font-bold py-2 montserrat  ">
      Clientes
      </h1>
      <p className="text-center text-[18px] py-4  font-medium pb-14 open-sans  text-slate-500">Explore nuestra diversa cartera de socios, que van desde nuevos negocios  hasta empresas</p>
      <div className="flex md:space-x-4 gap-2 my-5 font-semibold montserrat px-2 md:text-[18px] text-[#1C3C3F]">
        {["design", "development", ].map((page) => (
          <motion.button
            key={page}
            onClick={() => setActivePage(page)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`relative px-4 py-2 rounded-3xl monts overflow-hidden ${
              activePage === page ? "text-white" : "text-slate-800 bg-gray-200"
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
              {page === "development" && "Empresas"}
              {page === "design" && "Negocios"}
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
    <div className="flex justify-center items-center py-16">
      <motion.button
        className="w-80 h-20 text-2xl font-bold text-white bg-[#1C3C3F] rounded-lg shadow-lg transition duration-300 overflow-hidden"
        whileHover={{
          backgroundColor: "white",
          color: "#1C3C3F",
          scale: 1,
        }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => {
          setButtonText("Hablemos");
          setIconColor("text-black"); // Cambia el color del ícono a negro al pasar el mouse
        }}
        onMouseLeave={() => {
          setButtonText("Hablamos?");
          setIconColor("text-white"); // Cambia el color del ícono a blanco al dejar el mouse
        }}
      >
        <span className="transition-opacity duration-300 flex items-center   justify-center gap-2">
          {buttonText} <FaArrowRight className={`${iconColor}`} />
        </span>
      </motion.button>
    </div>
    </>
  );
};

export default Clientes;
