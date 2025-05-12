'use client';
import Marquee from 'react-fast-marquee';

const techStack = [
  'React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion',
  'Node.js', 'Express', 'MongoDB', 'Firebase', 'Docker',
  'AWS Lambda', 'Socket.io', 'JWT', 'React Native', 'CRON Jobs'
];

export default function TechMarquee() {
  return (
    
      <Marquee
        gradient={false}
        speed={60}
        pauseOnHover={true}
        className="text-white text-xl font-semibold  border-b-5 py-4 border-white gap-12"
      >
        {techStack.map((tech, index) => (
          <span key={index} className="mx-6">
            {tech}
          </span>
        ))}
      </Marquee>
    
  );
}
