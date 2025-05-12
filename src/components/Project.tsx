'use client';


import Image from 'next/image';
import React from 'react';



export interface IProject {

  title:string;
  description:string;
  image:string;
  techStack:string[];
  projectLink:string;
  projType?: number;
  index:number;

}




export default function Project(props: IProject) {
  if(props.projType===1){
    return <Type1 {...props} />
  }
  else{
    return <Type2 {...props} />
  }
  
}


function Type2({ title,image,projectLink,techStack,description,index}: IProject){

  return (
  <div className="grid grid-rows-3 grid-cols-2 md:grid-rows-2 gap-y-0 md:gap-x-4  h-full md:max-w-[70vw] max-w-[90vw] gap-x-2   ">
        
        <div className="flex col-start-1 row-start-2  justify-center md:translate-x-[25%]  translate-x-[10%] relative">
          
          <div className="relative  h-[50%] w-[1px] bg-white mx-6 bottom-0">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full" />
          </div>

          {/* Heading */}
          <div className="flex self-center flex-col gap-2">
            <h1 className="md:text-5xl text-4xl text-[#ffffff89] font-bold capitalize">{index.toString().padStart(2, '0')}</h1>
            <h1 className="md:text-5xl text-4xl text-[#ffffff89] font-bold capitalize">{title}</h1>
          </div>
        </div>

        {/* Image Block */}
        <div className="bg-red-400 col-start-1 col-end-2 row-start-1  relative overflow-hidden">
          <Image
            src={image}
            alt="Responsive Image"
            fill
            className="object-cover object-center"
          />
        </div>

        

       

        {/* Empty Top Right (optional future use) */}
        <div className="col-start-2 row-start-2 flex flex-col"></div>

        {/* Description */}
        <div className="col-start-2 md:row-start-1 row-start-3  flex flex-col justify-end gap-2">
          <div className='flex gap-2 flex-wrap'>
          {techStack.map((val,index)=>{
            return (
              <>
              <span className='text-[#ffffffde] text-sm bg-[#ffffff23] font-bold px-2   rounded-xl'>{val}</span>
              </>
            )
          })}
          </div>
          <p className="text-[#ffffffd7] md:text-sm text-xs font-bold">
            {description}
          </p>
        </div>
      </div>
  )
}




function Type1({ title,image,projectLink,techStack,description,index}: IProject){

  return (
  <div className="grid grid-rows-3 grid-cols-2 md:grid-rows-2 gap-y-0 md:gap-x-4  h-full md:max-w-[70vw] max-w-[90vw] gap-x-2   ">
        
        <div className="flex col-start-1 row-start-1 items-center justify-center md:translate-x-[25%]  translate-x-[10%] relative">
          
          <div className="relative self-baseline-last h-[50%] w-[1px] bg-white mx-6 bottom-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full" />
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-2">
            <h1 className="md:text-5xl text-4xl text-[#ffffff89] font-bold capitalize">{index.toString().padStart(2, '0')}</h1>
            <h1 className="md:text-5xl text-4xl text-[#ffffff89] font-bold capitalize">{title}</h1>
          </div>
        </div>

        {/* Image Block */}
        <div className="bg-red-400 col-start-1 col-end-2 row-start-2  relative overflow-hidden">
          <Image
            src={image}
            alt="Responsive Image"
            fill
            className="object-cover object-center"
          />
        </div>

        

       

        {/* Empty Top Right (optional future use) */}
        <div className="col-start-2 row-start-1 flex flex-col"></div>

        {/* Description */}
        <div className="col-start-2 md:row-start-2 row-start-3  flex flex-col justify-end gap-2">
          <div className='flex gap-2 flex-wrap'>
          {techStack.map((val,index)=>{
            return (
              <>
              <span className=' text-sm  text-[#ffffffde] bg-[#ffffff23] font-bold px-2   rounded-xl'>{val}</span>
              </>
            )
          })}
          </div>
          <p className="text-[#ffffffd7] md:text-sm text-xs font-bold">
            {description}
          </p>
        </div>
      </div>
  )
}


