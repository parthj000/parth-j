"use client";

import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "./Projects";
import ZoomExperience from "@/components/ZoomExperience";
import ExperimentSection from "@/components/ExperienceCard";
import About from "@/components/About";
import PerspectiveMarquee from "@/components/Marquee";
import Loading from "./Loading";
import TechStack from "./TechStack";
import Contact from "@/components/Contact";
import ScrollDown from "@/components/ScrollDown";
import ClippingLoader from "./Loading";

export default function Home() {
  return (
    <>
    
      <Nav />
      
      
      
      <div
        className="
      bg-[black] 
  bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] 
  bg-[length:100px_100px] 
  bg-[position:4vw_4vw]
  
  
  
  
      "
      >
        
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        
          
        
        <section id="experience">
            <ZoomExperience />
          <ExperimentSection />
          <TechStack />
        </section>
        
          
       
        <section id="contact" >
          <Contact />
        </section>
        
      </div>
      
    </>
  );
}
