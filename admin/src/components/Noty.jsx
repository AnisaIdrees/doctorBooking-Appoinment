import React from "react";
import { motion } from "framer-motion";

function Noty({ count = 0 }) {
  return (
    <div>
       <div className="relative w-8 h-8">
      {/* Animated Bell */}
      <motion.div
        animate={{
          rotate: [0, -10, 10, -10, 0], // bell hilna
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-full h-full flex items-center justify-center"
      >
        {/* Bell Icon (SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-7 h-7 text-gray-600"
        >
          <path d="M12 24c1.104 0 2-.897 2-2h-4c0 1.103.896 2 2 2zM18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.64 5.36 6 7.92 6 11v5l-1.29 1.29A1 1 0 0 0 5 19h14a1 1 0 0 0 .71-1.71L18 16z" />
        </svg>
      </motion.div>

      {/* Red Dot */}
      {count > 0 && (
        <motion.span
          animate={{
            scale: [1, 1.2, 1], // red dot pulse
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full"
        >
          {count}
        </motion.span>
      )}
    </div>
    </div>
  )
}

export default Noty
