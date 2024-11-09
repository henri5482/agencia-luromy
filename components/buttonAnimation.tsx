import { motion } from "framer-motion";
import React, { useState } from "react";

const ButtonAnimation: React.FC = () => {
  const [buttonText, setButtonText] = useState("Empezar");

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.button
        className="px-6 py-3 text-2xl font-bold text-white bg-black rounded-lg shadow-lg transition duration-300"
        whileHover={{
          backgroundColor: "white",
          color: "black",
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setButtonText("Vamos")}
        onMouseLeave={() => setButtonText("Empezar")}
      >
        {buttonText}
      </motion.button>
    </div>
  );
};

export default ButtonAnimation;
