'use client';

import { motion } from 'framer-motion';
import React from 'react';

function ExperienceCard({
  style,
  title,
  description,
}: {
  style: any;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="text-black max-w-3xl mx-auto px-4 py-8"
      style={style}
    >
      <div className="flex flex-col gap-4">
        <span className="md:text-7xl text-5xl font-extrabold">{title}</span>
        <span className="md:text-sm text-xs font-semibold block">{description}</span>
      </div>
    </motion.div>
  );
}

export default function ExperimentSection() {
  return (
    <div className="h-[300vh] relative ">
      
        {/* First Card */}
        <motion.div
          className="sticky top-0 h-screen flex justify-center items-center bg-white"
         
        >
          <ExperienceCard
            style={{  borderRadius: '1rem' }}
            title="BrainFlow"
            description="Designed and developed a cross-platform app to enhance student cognitive performance and reduce test anxiety through personalized schedules and wellness tools. Boosted study efficiency and engagement by over 70% via smart reminders (FCM), visual planners (BigCalendar, GiftedCharts), and REST-based microservices. Tech: React Native, Firebase (FCM), Next.js (API backend), React Native, CRON Jobs, Vercel, Figma."
          />
        </motion.div>

        {/* Second Card */}
        <div
          className="sticky top-0 h-screen flex justify-center items-center bg-[#ffc9c9]"
          
        >
          <ExperienceCard
            style={{ borderRadius: '1rem' }}
            title="Polycode Arena"
            description="Developed a coding arena platform with marketplace, contests, wallet, certificate system, and real-time collaboration. Tech: React, TypeScript, Express, MongoDB, WebSockets, JWT."
          />
        </div>

        
      
    </div>
  );
}
