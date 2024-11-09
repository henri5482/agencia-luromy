import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const DevelopmentPage: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
   <div className="py-10">
  <h1 className="text-4xl text-center font-bold mb-10 montserrat text-slate-800">DXN AYACUCHO</h1>
  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-4 py-20">
    <div className="w-full lg:w-[60%]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
          className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}  // Animación simple al pasar el ratón sobre la imagen
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/dxnhome01.webp"
            alt="DXN Ayacucho"
            layout="responsive"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
          />
        </motion.div>
        <h1 className="pt-5 text-lg lg:text-2xl text-slate-800 text-start font-semibold cursor-pointer montserrat">Catálogo de Productos</h1>
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: hoveredIndex === 0 ? 1 : 0,
            height: hoveredIndex === 0 ? "1rem" : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <p className="text-xs lg:text-sm text-gray-500 text-start montserrat font-medium">
            Un catálogo de todos los productos de la empresa, además de un buscador.
          </p>
        </motion.div>
      </motion.div>
    </div>

    <div className="w-full lg:w-[40%] space-y-6 lg:space-y-28">
      {[
        {
          src: "/dxnproduct.webp",
          alt: "Descripción del Producto",
          title: "Descripción del Producto",
          description: "Detalles del producto como el precio y su descripción.",
        },
        {
          src: "/dxncarta.webp",
          alt: "Carrito de compra",
          title: "Carrito de compra",
          description: "Un carrito de compra que detalla el precio de cada producto.",
        },
      ].map((item, index) => (
        <motion.div key={index}>
          <motion.div
            onMouseEnter={() => handleMouseEnter(index + 1)}
            onMouseLeave={handleMouseLeave}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.02 }}  // Animación simple al pasar el ratón sobre la imagen
            transition={{ duration: 0.3 }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              layout="responsive"
              width={800}
              height={400}
              className="w-full h-auto object-contain"
            />
          </motion.div>
          <h1 className="pt-5 text-lg lg:text-2xl font-bold text-start cursor-pointer montserrat">{item.title}</h1>
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: hoveredIndex === index + 1 ? 1 : 0,
              height: hoveredIndex === index + 1 ? "1rem" : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <p className="text-xs lg:text-sm text-start text-gray-500 montserrat font-medium">{item.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</div>







<div className="py-10">
  <h1 className="text-4xl text-center font-bold mb-10 montserrat text-slate-800">Eventos Ayacucho</h1>
  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-4 py-20">
    <div className="w-full lg:w-[60%]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
          className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}  // Animación simple al pasar el ratón sobre la imagen
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/evento01.webp"
            alt="evento ayacucho"
            layout="responsive"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
          />
        </motion.div>
        <h1 className="pt-5 text-lg lg:text-2xl text-slate-800 text-start font-semibold cursor-pointer montserrat">Catálogo de Eventos</h1>
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: hoveredIndex === 0 ? 1 : 0,
            height: hoveredIndex === 0 ? "1rem" : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <p className="text-xs lg:text-sm text-gray-500 text-start montserrat font-medium">
            Catálogo de los eventos disponibles en la ciudad.
          </p>
        </motion.div>
      </motion.div>
    </div>

    <div className="w-full lg:w-[40%] space-y-6 lg:space-y-28">
      {[
        {
          src: "/evento02.webp",
          alt: "Descripción detallada",
          title: "Descripción detallada",
          description: "Descripción detallada del evento como el precio, fecha, hora y lugar.",
        },
        {
          src: "/evento03.webp",
          alt: "Eventos relacionados",
          title: "Eventos relacionados",
          description: "Funcionalidad de eventos relacionados con el evento escogido.",
        },
      ].map((item, index) => (
        <motion.div key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              onMouseEnter={() => handleMouseEnter(index + 1)}
              onMouseLeave={handleMouseLeave}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}  // Animación simple al pasar el ratón sobre la imagen
              transition={{ duration: 0.3 }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                layout="responsive"
                width={800}
                height={400}
                className="w-full h-auto object-contain"
              />
            </motion.div>
            <h1 className="pt-5 text-lg lg:text-2xl font-bold text-start cursor-pointer montserrat">{item.title}</h1>
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: hoveredIndex === index + 1 ? 1 : 0,
                height: hoveredIndex === index + 1 ? "1rem" : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <p className="text-xs lg:text-sm text-start text-gray-500 montserrat font-medium">{item.description}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</div>




<div className="py-10">
  <h1 className="text-4xl text-center font-bold mb-10 montserrat text-slate-800">Luromy</h1>
  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-4 py-20">
    <div className="w-full lg:w-[60%]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
          className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.03 }}  // Animación simple al pasar el ratón sobre la imagen
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/luromy01.webp"
            alt="Luromy"
            layout="responsive"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
          />
        </motion.div>
        <h1 className="pt-5 text-lg lg:text-2xl text-slate-800 text-start font-semibold cursor-pointer montserrat">Descripción para el delivery</h1>
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: hoveredIndex === 0 ? 1 : 0,
            height: hoveredIndex === 0 ? "1rem" : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <p className="text-xs lg:text-sm text-gray-500 text-start montserrat font-medium">
            Página informativa para el delivery y lugar del restaurante.
          </p>
        </motion.div>
      </motion.div>
    </div>

    <div className="w-full lg:w-[40%] space-y-6 lg:space-y-28">
      {[
        {
          src: "/luromy02.webp",
          alt: "Promociones",
          title: "Promociones",
          description: "Carrusel de promociones del restaurante.",
        },
        {
          src: "/luromy03.webp",
          alt: "Carta del restaurante",
          title: "Carta del restaurante",
          description: "Detalles de la carta del restaurante como bebidas, cafés y comida.",
        },
      ].map((item, index) => (
        <motion.div key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              onMouseEnter={() => handleMouseEnter(index + 1)}
              onMouseLeave={handleMouseLeave}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}  // Animación simple al pasar el ratón sobre la imagen
              transition={{ duration: 0.3 }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                layout="responsive"
                width={800}
                height={400}
                className="w-full h-auto object-contain"
              />
            </motion.div>
            <h1 className="pt-5 text-lg lg:text-2xl font-bold text-start cursor-pointer montserrat">{item.title}</h1>
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: hoveredIndex === index + 1 ? 1 : 0,
                height: hoveredIndex === index + 1 ? "1rem" : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <p className="text-xs lg:text-sm text-start text-gray-500 montserrat font-medium">{item.description}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</div>



<div className="py-10">
  <h1 className="text-4xl text-center font-bold mb-10 montserrat text-slate-800">GMACONS LLJ EIRL</h1>
  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-4 py-20">
    <div className="w-full lg:w-[60%]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
          className="rounded-lg overflow-hidden"
          whileHover={{ scale: 1.03 }}  
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/gmacons.webp"
            alt="GMACONS LLJ EIRL"
            layout="responsive"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
          />
        </motion.div>
        <h1 className="pt-5 text-lg lg:text-2xl text-slate-800 text-start font-semibold cursor-pointer montserrat">Servicios de la empresa</h1>
        <motion.div
          className="overflow-hidden h-16"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: hoveredIndex === 0 ? 1 : 0,
            height: hoveredIndex === 0 ? "1rem" : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-xs lg:text-sm text-gray-500 text-start montserrat font-medium">
            Catálogo de los servicios que ofrece la empresa.
          </p>
        </motion.div>
      </motion.div>
    </div>

    <div className="w-full lg:w-[40%] space-y-6 lg:space-y-28">
      {[
        {
          src: "/gmacons02.webp",
          alt: "Proyectos de la empresa",
          title: "Proyectos de la empresa",
          description: "Catálogo completo de los proyectos realizados por la empresa.",
        },
        {
          src: "/gmacons03.webp",
          alt: "Contacto detallado",
          title: "Contacto detallado",
          description: "Página para formulario de contacto con la empresa, incluyendo ubicación.",
        },
      ].map((item, index) => (
        <motion.div key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              onMouseEnter={() => handleMouseEnter(index + 1)}
              onMouseLeave={handleMouseLeave}
              className="rounded-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}  
              transition={{ duration: 0.3 }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                layout="responsive"
                width={800}
                height={400}
                className="w-full h-auto object-contain"
              />
            </motion.div>
            <h1 className="pt-5 text-lg lg:text-2xl font-bold text-start cursor-pointer montserrat">{item.title}</h1>
            <motion.div
              className="overflow-hidden h-16"
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: hoveredIndex === index + 1 ? 1 : 0,
                height: hoveredIndex === index + 1 ? "1rem" : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-xs lg:text-sm text-start text-gray-500 montserrat font-medium">{item.description}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</div>


  
    </>
  );
};

export default DevelopmentPage;
