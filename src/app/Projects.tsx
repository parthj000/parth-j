'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Project, { IProject } from '@/components/Project';

const projects:IProject[] = [

  {
    title:"Polycode Arena",
    description:`Built a scalable coding platform with a custom code execution engine, platform currency wallet, marketplace, live contests, one-click certificate generation, real-time leaderboards, secure JWT authentication, and recruitment features.`,
    index:1,
    image:"/polycode.png",
    techStack:[
      "AWS",
      "Docker",
      "TypeScript",
      "React",
      "MongoDB",
      "Python",
      "CRON",
      
    ],
    projectLink:"https://github.com/parthj000/PolycodeArena",
    projType:1
  },
  {
    title:"Mapnest",
    description:`an AI-driven mind-mapping platform that converts user prompts into interactive visual maps
with intelligent node structuring, map sharing and collaboration.`,
    index:2,
    image:"/p1.png",
    techStack:[ "NextJS","Gemini API",  "BFS traversal", "OAuth", "TailwindCSS", "shadcn"],
    projectLink:"https://map-nest-pied.vercel.app/",
    projType:2
  },
  {
    title:"MLVTEC website",
    description:`Designed and developed a fully custom website for the MLVTEC educational institution with personalized UI/UX, handcrafted animations, and a performance-focused frontend, powered by a lightweight in-house framework for content creation and deployment.`,
    index:3,
    image:"/mlvtec.png",
    techStack:[
    "Js(Vanilla)",
    "CSS",
    "Custom Animations",
    "Custom Content Framework"
  ],
    projectLink:"https://mlvti.ac.in/web/index.html",
    projType:1
  },
  
  {
    title:"ScribesCollab",
    description:`Built a real-time collaborative blogging platform supporting multi-user live editing, blog CRUD, image uploads, bookmarking, user auth, and an admin-curated feed, enhancing content quality and teamwork for 100+ users.`,
    index:4,
    image:"/scribes.png",
    techStack:[
      "Socket.io",
      "JWT",
      "Multer",
      "Cloudinary",
      "Cookies"
    ],
    projectLink:"https://scribes-collab.onrender.com/",
    projType:2
  },
  


]

export default function Projects() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['0.3 end', '0.93 end'], // Scroll starts after 20% of section
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${(projects.length - 1) * 100}%`]);

  return (
    <section ref={targetRef} className="h-[500vh] relative">
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden md:gap-y-15 gap-y-7">
        <h1 className="text-5xl font-extrabold text-white z-10 p-4">Projects</h1>

        <motion.div
          style={{ x }}
          className="flex flex-1"
        >
          {projects.map((mat, index) => (
            <div
              key={index}
              className="w-screen h-full py-2 md:h-[60vh] flex flex-shrink-0 justify-center items-center "
            >
              <div className="h-full">
                <Project {...mat}   />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
