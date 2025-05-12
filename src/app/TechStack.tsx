'use client';
import TechMarquee from '@/components/Marquee';
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TechStack() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotation = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <>
    
      <div ref={ref} className="h-[200vh] flex flex-col text-white relative">

        <div className='h-[100vh] w-full sticky top-0 flex justify-center items-center flex-col'>
        <TechMarquee />

        <div className="flex-1 relative flex justify-center items-center text-center self-center">
          <div className="relative md:text-7xl md:max-w-[70vw] sm:text-5xl text-4xl font-extrabold mb-2 p-4">
            <motion.div
              className="absolute top-0 left-0 md:translate-x-[50%] -translate-x-[0%] -translate-y-[100%] -z-0"
              style={{ rotate: rotation }}
            >
              <Image src="/arrow.png" alt="" width={250} height={300} />
            </motion.div>

            Technologies I’ve Worked With
          </div>
        </div>
        </div>
      </div>

      
    </>
  );
}
