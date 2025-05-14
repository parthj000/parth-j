"use client";

import { motion } from "framer-motion";
import React from "react";

export default function FrontendEngineerCard() {
  const points = [
    "Led the end-to-end frontend development of the company website",
    "Focused on performance and polished visual experience",
    "Crafted custom animations using vanilla CSS and SVG",
    "Eliminated dependency bloat for optimized performance",
    "Ensured fast, fluid user interactions across platforms",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto px-4 py-8"
      style={{ borderRadius: "1rem" }}
    >
      <div className="flex flex-col">
        <span className="mb-2 text-5xl md:text-7xl font-extrabold">
          Frontend Engineer
        </span>

        <span className="text-[#a2ff00] mb-4 font-bold md:text-2xl text-lg">
          @ MLVTEC
        </span>

        <ul className="list-none md:text-sm text-xs mb-4 font-semibold space-y-2">
          {points.map((point, idx) => (
            <li key={idx}>✔ {point}</li>
          ))}
        </ul>
        <div className="flex gap-4 text-sm">
          <a
            href="https://mlvti.ac.in/"
            target="_blank"
            className="text-[#a2ff00] underline font-bold "
          >
            Website link
          </a>
         
        </div>
      </div>
    </motion.div>
  );
}
