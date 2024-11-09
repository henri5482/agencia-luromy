"use client";

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

const BoxComponent: React.FC = () => {
  const [activeBox, setActiveBox] = useState<number>(-1);

  const images = [
    '/redessociales.webp', // Red Social
    '/programacion.webp', // Programador
    '/desarrollo.webp', // Desarrollador
    '/diseñografico.webp', // Diseñador
    '/aplicacionesmobilies.webp', // App Móvil
  ];

  const titles = [
    'Redes Sociales',
    'Programacion',
    'Desarrollo',
    'Diseñado Grafico',
    'Aplicaciónes móviles',
  ];

  const totalBoxes = images.length; 

  const activateTab = (index: number) => {
    setActiveBox(index);
  };

  return (
    <div className="w-full max-w-[1300px] mx-auto py-16 px-3">
      <div className="flex flex-col sm:flex-row justify-between py-6 md:gap-8 w-full max-w-[1300px] mx-auto">
        <h1 className="  text-4xl md:text-5xl font-bold py-5 text-start montserrat text-[#1C3C3F]">
        Competencias y áreas especializadas
        </h1>
        <p className="pt-5 sm:pt-32 pl-0 sm:pl-20">
        Con más de 2 años de experiencia en la industria, nuestras ofertas han evolucionado hasta convertirse en un conjunto de servicios que se complementan entre sí y nos permiten diseñar, desarrollar, implementar, mantener y extender una experiencia consistente en todos los puntos de contacto.        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:py-32 py-10">
        {Array.from({ length: totalBoxes }, (_, index) => (
          <motion.div
            key={index}
            className="relative xl:w-[380px] h-[200px] md:h-[250px] lg:h-[240px] cursor-pointer"
            onMouseEnter={() => activateTab(index)}
            onMouseLeave={() => activateTab(-1)}
            onClick={() => activateTab(index)}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}  // Animación inicial: desplazamiento hacia abajo y escala reducida
            animate={{ opacity: 1, y: 0, scale: 1 }}  // Animación al estar en el viewport: sin desplazamiento y escala normal
            transition={{ duration: 0.5, ease: 'easeOut' }}  // Transición suave
          >
            <motion.div
              className="relative w-full h-full transition-colors duration-500"
              style={{
                clipPath: 'polygon(0 50%, 50% 100%, 100% 50%, 50% 0)',
              }}
              initial={{ backgroundColor: '#1C3C3F' }}
              whileHover={{ scale: 1.1, rotate: 5, backgroundColor: 'black' }} // Añadido rotación leve y escala mayor
              transition={{ duration: 0.3, ease: 'easeInOut' }}  // Transición suave en la animación hover
            >
              <div className="absolute top-0 left-0 w-full h-full z-10 opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-lg md:text-xl font-semibold text-[#1AD6B2] montserrat">
                  {titles[index]}
                </span>
              </div>
            </motion.div>
            <AnimatePresence>
              {activeBox === index && (
                <motion.img
                  src={images[index]}
                  alt={titles[index]}
                  className="absolute w-48 h-auto bottom-44 transform -translate-y-1/2 transition-opacity duration-300 rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BoxComponent;
