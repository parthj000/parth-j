'use client';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', '0.5 start'],
  });

  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [activeIndex, setActiveIndex] = useState(0);

  const labels = ['', 'developer', 'designer', 'prblm solver'];
  const index = useTransform(scrollYProgress, [0, 0.8], [0,labels.length-1]);

  useMotionValueEvent(index, 'change', (latest) => {
    const rounded = Math.floor(latest);
    if (rounded !== activeIndex) {
      setActiveIndex(rounded);
    }
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateY = ((x / width) - 0.5) * 80;
    const rotateX = ((y / height) - 0.5) * -80;

    setRotate({ x: rotateX, y: rotateY });
  };

  const resetRotation = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div ref={ref} className="md:h-[300vh] h-[200vh]  relative text-white">
      <div className="h-screen sticky top-0 flex px-4 justify-center gap-7 items-center">
        <div className="flex sm:flex-row flex-col justify-center gap-2 sm:gap-4">
          <motion.div
            className="sm:w-64 sm:h-64 max-w-full cursor-pointer h-40 relative rounded-2xl overflow-hidden shadow-lg"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetRotation}
            animate={{ rotateX: rotate.x, rotateY: rotate.y }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{ perspective: 1000 }}
          >
            <Image
              src="/image2.png"
              alt="Profile"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="flex flex-col ">
            <span className="text-white sm:text-8xl text-4xl font-extrabold">Parth Joshi</span>
            <div className="relative mb-5 mt-1 overflow-hidden">
              <span className='text-2xl sm:text-4xl text-[#ffffff] font-extrabold'>a&nbsp;</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={labels[activeIndex]}
                  className="absolute text-2xl sm:text-4xl text-[#7474ff] font-extrabold"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {labels[activeIndex]}
                </motion.span>
                
              </AnimatePresence>
            </div>
            
            <a href="/parth_resume.pdf" download>
  <button className="relative hover:cursor-pointer inline-block px-6 py-3 sm:w-2/3 w-full md:w-1/3 rounded-md font-bold text-white group transition-all  duration-300 hover:scale-105 bg-[#7474ff]  shadow-md hover:shadow-purple-500/50">
    <span className="absolute inset-0 rounded-md bg-gradient-to-r bg-[#7474ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
    <span className="relative z-10">Download CV</span>
  </button>
</a>
          </div>
        </div>
      </div>
    </div>
  );
}



