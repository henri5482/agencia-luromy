/* eslint-disable @next/next/no-img-element */
"use client";

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const logos = [
  { 
    name: 'DXN', 
    url: 'dxn.png', 
    description: 'Empresa líder en productos de bienestar', 
    link: 'https://dxnayacucho.vercel.app/' 
  },
  { 
    name: 'Eventos', 
    url: 'evento.webp', 
    description: 'Organización de eventos corporativos y sociales', 
    link: 'https://ayacucho-eventos.vercel.app/' 
  },
  { 
    name: 'Gmacons', 
    url: 'ganaderia.png', 
    description: 'Servicios de ganadería y agroindustria', 
    link: 'https://gmacons.vercel.app/' 
  },
  { 
    name: 'Lutecci', 
    url: 'lutecci.webp', 
    description: 'Soluciones tecnológicas innovadoras', 
    link: 'https://grupolutecci.com/' 
  },
  { 
    name: 'Restaurante Luremy', 
    url: 'restaurante.png', 
    description: 'Experiencia culinaria única', 
    link: 'https://luromy.vercel.app/' 
  },
];

const LogoRotator: React.FC = () => {
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredLogo(index);
  };

  const handleMouseLeave = () => {
    setHoveredLogo(null);
  };

  return (
    <div className="logo-container justify-start w-full max-w-[1300px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 py-5">
      {logos.map((logo, index) => (
        <a 
          key={index} 
          href={logo.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative flex items-start justify-start flex-col"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className={`relative flex items-center justify-start sm:w-48 sm:h-48 p-2 rounded-lg transition-all duration-300 ${hoveredLogo !== null && hoveredLogo !== index ? 'opacity-10 bg-white' : 'bg-white'}`}
          >
            <img
              src={logo.url}
              alt={logo.name}
              className="w-full h-auto object-contain cursor-pointer transition-transform hover:scale-105"
            />
            <AnimatePresence>
              {hoveredLogo === index && window.innerWidth >= 640 && ( // Muestra la descripción solo en pantallas más grandes
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 20 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-36 right-5 text-center  montserrat text-stone-800 text-[15px] w-48 p-2 white-space-normal" 
                >
                  {logo.description}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </a>
      ))}
    </div>
  );
};

const Tecnologia = () => {
  return (
    <div className=' md:py-28 px-3'>
      <div className="flex flex-col sm:flex-row justify-between md:gap-8 w-full max-w-[1300px] mx-auto">
        <h1 className=" text-4xl md:text-5xl font-bold py-5 text-[#1C3C3F]  text-start montserrat w-full">
        Negocios y empresas con impulso tecnológico 
        <Link  href={"/work"}>
        
          <span className="flex  gap-3 py-4 text-[17px] font-normal montserrat hover:text-[#1AD6B2] text-slate-500">
            Proyectos<FaArrowRight />
          </span>
        </Link>
        </h1>
        <p className="pt-5 sm:pt-20 pl-0 sm:pl-20">
        Nos especializamos en trabajar con marcas y productos digitales, independientemente del tamaño y la etapa del ciclo de vida, desde negocios emergentes hasta empresas establecidas que se esfuerzan por lograr un apalancamiento tecnológico significativo.
        </p>
      </div>
      <LogoRotator />
    </div>
  );
};

export default Tecnologia;
