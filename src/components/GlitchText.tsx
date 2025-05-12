'use client';

import { motion } from 'framer-motion';
import { Press_Start_2P } from 'next/font/google';

const kapa = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-press-start',
});

export default function GlitchText({ text }: { text: string }) {
  return (
    <motion.h1
      whileHover={{
        x: [0, 0.5, -0.5, 0], // minimal motion
        textShadow: [
          '0 1px 1px black', 
          '14px 0 red',
          '-15px 0 blue',
          '7px -7px green',
          '-2px 2px red',
          '4px 0 blue',
          '-4px 0 green',
        ],
        transition: {
          duration: 0.1,
          ease: 'linear',
          repeat: Infinity,
        },
      }}
      className={`text-[60px] text-white uppercase tracking-wider select-none ${kapa.className}`}
    >
      {text}
    </motion.h1>
  );
}
