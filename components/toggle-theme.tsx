"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const ToggleTheme = () => {
  const [buttonText, setButtonText] = useState("Contacto");
  const [iconColor, setIconColor] = useState("text-black");

  return (
    <Link href="/contacto">
    
    <div className="flex justify-center items-center">
      <motion.button
        className="w-32 h-10 text-sm font-bold text-[#1C3C3F] bg-transparent border-[1px] border-slate-900 rounded-2xl shadow-lg transition duration-300 overflow-hidden sm:block hidden"
        whileHover={{
          backgroundColor: "#1C3C3F",
          color: "white",
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => {
          setIconColor("text-white"); // Cambia el color del ícono a blanco al pasar el mouse
        }}
        onMouseLeave={() => {
          setIconColor("text-black"); // Cambia el color del ícono a negro al dejar el mouse
        }}
      >
        <span className="transition-opacity duration-300 flex items-center justify-center gap-2">
          {buttonText} <FaArrowRight className={`${iconColor}`} />
        </span>
      </motion.button>
    </div>
    </Link>
  );
};

export default ToggleTheme;
