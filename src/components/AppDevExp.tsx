"use client";

import { motion } from "framer-motion";
import React from "react";

export default function AppDeveloperCard() {
  const points = [
  "Lead Developer for Proctorlink: architected and shipped a real-time biometric face recognition pipeline using InsightFace, Dlib, and OpenCV, enabling eye-status detection, EAR-based liveness checks, and embedding-driven identity verification at scale",
  "Owned end-to-end backend performance: built modular Flask microservices with Redis caching, Dockerized deployments, and thread-safe inference to achieve low-latency, high-throughput APIs under live exam traffic",
  "Designed and operated scalable AWS autoscaling infrastructure, including EC2 AMIs, Auto Scaling Groups,Scaling policies, ALB routing, NGINX reverse proxies, and environment-aware production setups",
  "Integrated LiveKit-based real-time streaming and event-driven systems to power live proctoring, monitoring, and participant control with minimal latency and high reliability"
]
;

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
          SD Engineer
        </span>

        <span className="text-blue-600 mb-4 font-bold md:text-2xl text-lg">
          @ Take2Technologies
        </span>

        <span className="text-[black] mb-4 font-extrabold md:text-xl text-md">
          Proctorlink&nbsp;
          <a
            href="https://proctorlink.com/"
            target="_blank"
            className="text-blue-600  text-sm underline tracking-wider"
          >
            Link 
          </a>
        </span>

        <ul className="list-none md:text-sm text-xs mb-4 font-semibold space-y-2">
          {points.map((point, idx) => (
            <li key={idx}>✔ {point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
