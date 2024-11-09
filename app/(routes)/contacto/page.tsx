"use client";

import { useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

function ContactForm() {
  const [state, handleSubmit] = useForm("xzzpvooz");
  const router = useRouter();
  const [buttonText, setButtonText] = useState("Hablamos?");
  const [iconColor, setIconColor] = useState("text-white");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "email":
        setErrors({
          ...errors,
          email: /^\S+@\S+\.\S+$/.test(value) ? "" : "Invalid email address",
        });
        break;
      case "number":
        setErrors({
          ...errors,
          number: /^\d{10,15}$/.test(value)
            ? ""
            : "Invalid phone number (must be 10-15 digits)",
        });
        break;
      case "name":
        setErrors({
          ...errors,
          name: value.trim() ? "" : "Name is required",
        });
        break;
      case "message":
        setErrors({
          ...errors,
          message: value.trim() ? "" : "Message is required",
        });
        break;
      default:
        break;
    }
  };

  const isFormValid = () => {
    return (
      !Object.values(errors).some((error) => error !== "") &&
      formValues.name &&
      formValues.email &&
      formValues.number &&
      formValues.message
    );
  };

  if (state.succeeded) {
    router.push("/gracias");
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto p-4 text-center pt-32 pb-4 sm:py-32">
      <h1 className="text-5xl sm:text-6xl lg:text-8xl montserrat font-bold mb-8">
        Conviértete en cliente
      </h1>
      <p className="text-base font-normal sm:text-base text-start mb-10 sm:mb-20 montserrat text-slate-500">
        Nuestros clientes obtienen los mejores resultados cuando tienen nuestro
        equipo dedicado a su negocio durante largos períodos de tiempo. Es por
        eso que buscamos una colaboración continua en la que nuestros
        profesionales sean como los miembros de su equipo que, casualmente,
        están remotos. ¿Listo para seguir adelante?
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        <div className="py-2 sm:py-4">
          <input
            id="name"
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            placeholder="Nombre"
            className="w-full px-4 py-4 border bg-[#F2F2F2] rounded-lg focus:outline-none focus:ring-2 focus:text-slate-900"
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="py-2 sm:py-4">
          <input
            id="email"
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full px-4 py-4 border bg-[#F2F2F2] rounded-lg focus:outline-none focus:ring-2 focus:text-slate-900"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="py-2 sm:py-4">
          <input
            id="number"
            type="tel"
            name="number"
            value={formValues.number}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-4 py-4 border bg-[#F2F2F2] rounded-lg focus:outline-none focus:ring-2 focus:text-slate-900"
            required
          />
          {errors.number && (
            <p className="text-red-500 text-sm mt-1">{errors.number}</p>
          )}
        </div>

        <div className="py-2 sm:py-4">
          <textarea
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full px-4 py-4 border bg-[#F2F2F2] rounded-lg focus:outline-none focus:ring-2 focus:text-slate-900"
            rows={4}
            required
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <div>
          <p className="text-sm sm:text-base text-slate-500 open-sans">
            Al completar el formulario, acepta nuestra Política de privacidad,
            incluido nuestro uso de cookies.
          </p>
        </div>

        <div className="flex justify-center items-center py-4 sm:py-6">
          <motion.button
            type="submit"
            disabled={state.submitting || !isFormValid()}
            className={`w-full sm:w-80 h-14 sm:h-20 text-lg sm:text-2xl font-bold rounded-lg shadow-lg transition duration-300 overflow-hidden ${
              isFormValid() && !state.submitting
                ? "bg-slate-800 text-white"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
            whileHover={{
              backgroundColor:
                isFormValid() && !state.submitting ? "white" : "gray",
              color: isFormValid() && !state.submitting ? "black" : "gray",
              scale: 1,
            }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => {
              if (isFormValid() && !state.submitting) {
                setButtonText("Hablemos");
                setIconColor("text-black");
              }
            }}
            onMouseLeave={() => {
              if (isFormValid() && !state.submitting) {
                setButtonText("Hablamos?");
                setIconColor("text-white");
              }
            }}
          >
            <span className="transition-opacity duration-300 flex items-center justify-center gap-2">
              {state.submitting ? "Sending..." : buttonText}
              <FaArrowRight className={`${iconColor}`} />
            </span>
          </motion.button>
        </div>
      </form>

      <div className="py-6">
        <p className="text-sm sm:text-base">O contáctanos vía WhatsApp:</p>
        <a
          href="https://wa.me/51930134408"
          className="inline-block mt-4 text-green-500 hover:text-green-600 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8" />
        </a>
      </div>
    </div>
  );
}

export default ContactForm;
