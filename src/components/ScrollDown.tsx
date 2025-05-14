"use client";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function ScrollDown() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
      className="fixed left-2 bottom-10 z-50 flex flex-col items-center gap-2"
    >
      {/* Vertical Line */}
      <div className="w-px md:h-10 h-5 bg-white mb-2" />

      {/* Vertical Scroll Text */}
      <div className="text-white text-xs font-semibold tracking-widest">
        <div className="flex flex-col items-center gap-1">
          {"SCROLL DOWN".split("").map((char, idx) => (
            <span key={idx}>{char}</span>
          ))}
        </div>
      </div>

      {/* Arrow Icon */}
      <FaChevronDown className="text-white mt-2 animate-bounce" size={18} />
    </motion.div>
  );
}
