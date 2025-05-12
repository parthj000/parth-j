"use client";
import Atom from "@/components/Atom";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  return (
    <>

    <motion.div 
    initial={{ clipPath: "circle(0% at 50% 50%)" }}
  animate={{ clipPath: "circle(75% at 50% 50%)" }}
  transition={{ duration: 1 }}
    
    className="grid grid-rows-2 relative grid-cols-2 w-[100vw] h-[100vh] bg-black overflow-hidden">
      <div className="absolute z-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-5xl text-white">Loading...</h1>

      </div>
      <motion.div
        initial={{ x: "-100%", y: "-100%" }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className=" col-start-1 row-start-1 flex justify-center items-center overflow-hidden"
      >
        <Image
          src="/left.png"
          alt="left hand"
          height={500}
          width={500}
          className="object-contain rotate-[15deg]"
        />
      </motion.div>
    
     
      <motion.div
        initial={{ x: "100%", y: "100%" }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className=" col-start-2 row-start-2 flex justify-center items-center overflow-hidden"
      >
        <Image
          src="/right.png"
          alt="right hand"
          height={500}
          width={500}
          className="object-contain rotate-[35deg]"
        />
      </motion.div>
    </motion.div>
    </>
  );
}
