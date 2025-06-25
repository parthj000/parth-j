"use client";

import { motion } from "framer-motion";
import React from "react";

export default function AppDeveloperCard() {
  const points = [
    "Designed and developed a cross-platform app to enhance student cognitive performance and reduce test anxiety",
    "Boosted study efficiency and engagement by over 70% via smart reminders (FCM), visual planners (BigCalendar, GiftedCharts)",
    "Built modular REST-based backend microservices using Next.js",
    "Used CRON Jobs for automated push cycles",
    
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
          SDE Intern
        </span>

        <span className="text-blue-600 mb-4 font-bold md:text-2xl text-lg">
          @ TakeTwoTechnologies
        </span>

        <ul className="list-none md:text-sm text-xs mb-4 font-semibold space-y-2">
          {points.map((point, idx) => (
            <li key={idx}>✔ {point}</li>
          ))}
        </ul>

        <div className="flex gap-4 text-sm">
          <a
            href="https://play.google.com/store/apps/details?id=com.brainflowapp.app&hl=en"
            target="_blank"
            className="text-blue-600 underline font-bold "
          >
            Google Play
          </a>
          <a
            href="https://apps.apple.com/sa/app/brainflow-academic-companion/id6670271642?uo=2"
            target="_blank"
            className="text-blue-600 underline font-bold tracking-wider"
          >
            App Store
          </a>
        </div>
      </div>
    </motion.div>
  );
}
