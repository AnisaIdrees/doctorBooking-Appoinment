import React from "react";
import { motion } from "framer-motion";

function HeaderBanner({ heading1, paragraph ,bgImg}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center text-white"
      // ✅ Single background image + gradient
      style={{
        backgroundImage:`url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ⚫ Black Overlay (slight opacity) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🌟 Animated Text */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10">
        <motion.h2
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white leading-tight"

        >
          {heading1}
        </motion.h2>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="mt-2 sm:mt-4 text-indigo-100 text-sm sm:text-base md:text-lg max-w-xl mx-auto"
        >
          {paragraph}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default HeaderBanner;
