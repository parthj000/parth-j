'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';




export default function ZoomExperience() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4, 0.6, 1],
    [1, 5, 10, 200,400],
  );

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1, 1]);
  const backgroundColor = useTransform(scrollYProgress, [0,0.5, 1], ['transparent','transparent' ,'white']);
  const textColor = useTransform(scrollYProgress, [0.8, 0.9], ['#ffffff', '#000000']);

  const y = useTransform(scrollYProgress, [0,0.5,0.7], ['0%','0%', '0%']);
  return (
    <motion.section
      ref={ref}
      style={{ backgroundColor }}
      className="h-[200vh] relative"
    >
      <div className=" sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.h1
          style={{ scale, }}
          className="md:text-6xl text-4xl font-extrabold text-[white]"
          transition={{
            ease: [0.1, 0.4, 0.36, 1],
            duration: 0.8,
          }}
        >
          Experience
        </motion.h1>
      </div>

      <motion.div className=" sticky top-0  flex flex-col justify-center items-center" >
      

        

      </motion.div>
      
      
    </motion.section>
  );
}
