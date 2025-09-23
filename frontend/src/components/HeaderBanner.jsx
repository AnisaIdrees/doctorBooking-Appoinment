import React from "react";
import { motion } from "framer-motion";

function HeaderBanner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full min-h-[220px] sm:min-h-[280px] md:min-h-[350px] flex items-center justify-center text-center"
    >
      {/* 🔹 Background Image + Indigo Gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(rgba(79,70,229,0.6), rgba(67,56,202,0.6)),
            url('https://coloradopaincare.com/wp-content/uploads/2021/06/shutterstock_429583954.jpg')`
        }}
      ></div>

      {/* ⚫ Blackish Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* 🌟 Animated Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10">
        <motion.h2
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight"
        >
          My Appointments
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="mt-2 sm:mt-4 text-indigo-100 text-sm sm:text-base md:text-lg max-w-xl mx-auto"
        >
          Manage your upcoming visits with doctors easily and securely
        </motion.p>
      </div>
    </motion.div>
  );
}

export default HeaderBanner;
