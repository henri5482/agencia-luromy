"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
const comments = [
  {
    id: 1,
    logo: "/dxn.png",
    text: "ETDA colaboró en el desarrollo del ecommerce para DXN, una empresa de proteínas. La plataforma de compra creada ha sido fundamental para mejorar nuestras ventas y la satisfacción del cliente.",
  },
  {
    id: 2,
    logo: "/evento.webp",
    text: "En el proyecto de Ayacucho Eventos, ETDA diseñó una página web con funcionalidades avanzadas como inicio de sesión y compra de entradas, facilitando una gestión de eventos más eficiente y segura.",
  },
  {
    id: 3,
    logo: "/ganaderia.png",
    text: "ETDA desarrolló una página informativa para Ganadería que ha transformado nuestra presencia en línea. El diseño profesional y la atención al detalle han sido esenciales para atraer a nuevos clientes y destacar nuestros servicios.",
  },
  {
    id: 4,
    logo: "/lutecci.webp",
    text: "Para Lutecci, ETDA diseñó una página informativa que claramente refleja nuestros servicios y proyectos. La interacción de nuestros clientes con la empresa ha mejorado significativamente gracias al enfoque detallado en el diseño.",
  },
  {
    id: 5,
    logo: "/restaurante.png",
    text: "La página web creada por ETDA para Restaurante Luremy ha optimizado el proceso de compra con delivery. El diseño informativo y las funcionalidades implementadas han mejorado notablemente la experiencia del cliente.",
  },
  
];

const Comentarios: React.FC = () => {
  const [buttonText, setButtonText] = useState("Hablamos?");
  const [iconColor, setIconColor] = useState("text-white");
  const [currentComment, setCurrentComment] = useState(0);

  const handleNext = () => {
    setCurrentComment((prev) => (prev + 1) % comments.length);
  };

  const handlePrev = () => {
    setCurrentComment((prev) => (prev === 0 ? comments.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-[1300px] mx-auto py-28 gap-10 md:gap-20 px-3">
        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-xs montserrat text-[#1C3C3F]">
          Lo que dicen nuestros socios
        </h1>

        {/* Sección de comentarios */}
        <div className="relative w-full max-w-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={comments[currentComment].id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-start text-left bg-white p-8 shadow-lg rounded-lg"
            >
              <div className="flex items-center justify-between mb-4 w-full">
                <img
                  src={comments[currentComment].logo}
                  alt="Logo"
                  className="w-40 h-16 object-contain"
                />
                <span className="text-gray-500">
                  Comentario {comments[currentComment].id} de {comments.length}
                </span>
              </div>
              <p className="text-lg md:text-xl font-medium text-[#1C3C3F]">
                {comments[currentComment].text}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Botones de navegación fuera del fondo blanco */}
          <div className="flex justify-between mt-4">
            <motion.button
              onClick={handlePrev}
              className="p-3 text-sm text-white bg-[#1C3C3F] hover:bg-[#1AD6B2] transition rounded-full shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              &lt; Anterior
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="p-3 text-sm text-white bg-slate-800 hover:bg-[#1AD6B2] transition rounded-full shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Siguiente &gt;
            </motion.button>
          </div>
        </div>
      </div>
        <Link href={"/contacto"}>
      <div className="flex justify-center items-center py-20">
        <motion.button
          className="w-80 h-20 text-2xl font-bold text-white bg-[#1C3C3F] rounded-lg shadow-lg transition duration-300 overflow-hidden"
          whileHover={{
            backgroundColor: "white",
            color: "black",
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
          
          <span className="transition-opacity duration-300 flex items-center  justify-center gap-2">
            {buttonText} <FaArrowRight className={`${iconColor}`} />
          </span>
        </motion.button>
      </div>
          </Link>
    </>
  );
};

export default Comentarios;
