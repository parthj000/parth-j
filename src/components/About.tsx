'use client';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [activeIndex, setActiveIndex] = useState(0);

  const labels = ['', 'developer', 'designer', 'prblm solver', 'singer'];
  const index = useTransform(scrollYProgress, [0, 1], [1, labels.length]);

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

    const rotateY = ((x / width) - 0.5) * 40;
    const rotateX = ((y / height) - 0.5) * -40;

    setRotate({ x: rotateX, y: rotateY });
  };

  const resetRotation = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div ref={ref} className="h-[450vh] relative text-white">
      <div className="h-screen sticky top-0 flex px-4 justify-center gap-7 items-center">
        <div className="flex sm:flex-row flex-col justify-center gap-2 sm:gap-4">
          <motion.div
            className="sm:w-64 sm:h-64 max-w-full h-40 relative rounded-2xl overflow-hidden shadow-lg"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetRotation}
            animate={{ rotateX: rotate.x, rotateY: rotate.y }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{ perspective: 1000 }}
          >
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="flex flex-col ">
            <span className="text-white sm:text-8xl text-4xl font-extrabold">Parth Joshi</span>
            <div className="relative h-20 mt-1 overflow-hidden">
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
          </div>
        </div>
      </div>
    </div>
  );
}



