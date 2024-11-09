"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
    {
      question: '¿Cómo elegir una agencia de desarrollo de aplicaciones web?',
      answer: 'Elige una agencia que demuestre un equilibrio entre diseño innovador y funcionalidad robusta, asegurando un producto que no solo se vea bien, sino que también funcione sin problemas. Revisa su portafolio, solicita referencias y asegúrate de que comprendan tus necesidades específicas.',
    },
    {
      question: '¿Cuánto cuesta el desarrollo de aplicaciones web?',
      answer: `El costo del desarrollo de aplicaciones web varía ampliamente dependiendo de varios factores:
      
      1. Complejidad de la aplicación: Funcionalidades avanzadas y diseño personalizado incrementan el costo.
      2. Tamaño del equipo de desarrollo: Equipos más grandes o con expertos especializados tienden a ser más caros.
      3. Tiempo de desarrollo: Plazos urgentes suelen aumentar el costo.
      4. Ubicación de la agencia: Agencias en regiones más costosas pueden tener tarifas más altas.
      5. Mantenimiento y soporte: Considera los costos a largo plazo para actualizaciones y soporte técnico.`,
    },
    {
      question: '¿Cuánto tiempo toma desarrollar una aplicación web?',
      answer: 'El tiempo de desarrollo depende de la complejidad del proyecto. Aplicaciones simples pueden tardar entre 2 a 3 meses, mientras que proyectos más complejos pueden extenderse de 6 meses a un año o más. Es importante tener un plan claro desde el principio para evitar retrasos.',
    },
    {
      question: '¿Qué tecnologías se utilizan en el desarrollo de aplicaciones web?',
      answer: 'Las tecnologías más comunes incluyen frameworks front-end como React, Angular, y Vue.js, y back-end como Node.js, Django, o Ruby on Rails. También se utilizan bases de datos como MongoDB, PostgreSQL, o MySQL, y herramientas de despliegue como Docker y plataformas cloud como AWS o Azure.',
    },
    {
      question: '¿Qué debo considerar antes de iniciar un proyecto de desarrollo de software?',
      answer: `Antes de comenzar, es crucial:
      
      1. Definir claramente los objetivos: Saber qué quieres lograr con la aplicación.
      2. Establecer un presupuesto: Tener una idea clara de cuánto estás dispuesto a invertir.
      3. Seleccionar la tecnología adecuada: Asegúrate de que las tecnologías seleccionadas se alineen con tus objetivos a largo plazo.
      4. Planificar el mantenimiento: Considera el soporte y las actualizaciones futuras.
      5. Elegir un equipo de desarrollo confiable: Busca una agencia o equipo con experiencia y buenas referencias.`,
    },
  ];
  

export default function FAQredes() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [buttonText, setButtonText] = useState("Hablamos?");
  const [iconColor, setIconColor] = useState("text-white");
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-center rounded-lg py-28 ">
      <h2 className="md:text-6xl text-3xl font-semibold text-[#1C3C3F] mb-6 montserrat">
        Preguntas Frecuentes
      </h2>
      <div className="space-y-4 bg-gradient-to-r bg-[#F1F5F9] p-6 rounded-lg shadow-lg">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              className="w-full text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-xl font-bold text-slate-800  open-sans">
                {faq.question}
              </h3>
            </button>
            <div
              className={`mt-2 text-slate-700 open-sans text-start transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "max-h-screen"
                  : "max-h-0 overflow-hidden"
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center py-16">
      <motion.button
        className="w-80 h-20 text-2xl font-bold text-white bg-slate-800 rounded-lg shadow-lg transition duration-300 overflow-hidden"
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
    </div>
  );
}
