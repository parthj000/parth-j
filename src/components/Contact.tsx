'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';

const socials = [
  {
    name: 'GitHub',
    icon: <FaGithub size={30} />,
    link: 'https://github.com/parthj000',
    color: 'hover:text-[#4078c0]',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin size={30} />,
    link: 'https://www.linkedin.com/in/parth-joshi-a65a62286/',
    color: 'hover:text-[#0077b5]',
  },
  {
    name: 'Discord',
    icon: <FaDiscord size={30} />,
    link: 'https://discordapp.com/users/pars0942',
    color: 'hover:text-[#5865F2]',
  },
  {
    name: 'Email',
    icon: <FaEnvelope size={30} />,
    link: 'mailto:jparth582@gmail.com',
    color: 'hover:text-[#c71610]',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const subY = useTransform(scrollYProgress, [0.3, 0.5], [100, 0]);
  const subOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  const iconsY = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);
  const iconsOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  return (
    <div ref={ref} className="h-[300vh]   text-white relative">
      <div className="sticky top-0 h-screen flex  items-center justify-center">
        <div className='flex flex-col  '>
        <div className='flex flex-col justify-center items-start '>
        <motion.h1
          style={{ y: titleY, opacity: titleOpacity }}
          className="text-6xl md:text-8xl font-extrabold text-center"
        >
          Let’s
        </motion.h1>

        <motion.h1
          style={{ y: subY, opacity: subOpacity }}
          className="text-6xl md:text-8xl font-extrabold text-center"
        >
          Connect
        </motion.h1>
        </div>

        <motion.div
          style={{ y: iconsY, opacity: iconsOpacity }}
          className="flex flex-wrap "
        >
          {socials.map((item) => (
            <motion.a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
             
              className={`flex flex-col items-center gap-2 text-gray-300 ${item.color}`}
            >
              <div className="bg-white/10 px-4 py-2 ">
                {item.icon}
              </div>
              <span className="text-sm font-medium">{item.name}</span>
            </motion.a>
          ))}
        </motion.div>


      </div>
      </div>
      <div className="absolute bottom-0 w-full py-4 px-4 text-center text-white text-sm">
  <span>© {new Date().getFullYear()}. Parth Joshi. jparth582@gmail.com. All rights reserved.</span>
</div>
    </div>
  );
}
