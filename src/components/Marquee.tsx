'use client';
import Marquee from 'react-fast-marquee';
import {
  FaReact, FaNodeJs, FaDocker,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiExpress,
  SiMongodb, SiFirebase, SiAmazon, SiSocketdotio, SiJsonwebtokens, SiReact
} from 'react-icons/si';

const techStack = [
  { tech: 'React', icon: <FaReact /> },
  { tech: 'Next.js', icon: <SiNextdotjs /> },
  { tech: 'TypeScript', icon: <SiTypescript /> },
  { tech: 'TailwindCSS', icon: <SiTailwindcss /> },
  { tech: 'Framer Motion', icon: <SiFramer /> },
  { tech: 'Node.js', icon: <FaNodeJs /> },
  { tech: 'Express', icon: <SiExpress /> },
  { tech: 'MongoDB', icon: <SiMongodb /> },
  { tech: 'Firebase', icon: <SiFirebase /> },
  { tech: 'Docker', icon: <FaDocker /> },
  { tech: 'AWS Lambda', icon: <SiAmazon /> },
  { tech: 'Socket.io', icon: <SiSocketdotio /> },
  { tech: 'JWT', icon: <SiJsonwebtokens /> },
  { tech: 'React Native', icon: <SiReact /> },
 
];

export default function TechMarquee() {
  return (
    <Marquee
      gradient={false}
      speed={60}
      pauseOnHover={true}
      className="text-white text-xl font-semibold border-b-5 py-4 border-white gap-12"
    >
      {techStack.map(({ tech, icon }, index) => (
        <span key={index} className="mx-6 flex items-center gap-2">
          {icon && <span className="text-2xl ">{icon}</span>}
          {tech}
        </span>
      ))}
    </Marquee>
  );
}
