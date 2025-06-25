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


function Type2({ title, image, projectLink, techStack, description, index }: IProject) {
  return (
    <div className="flex flex-col justify-center gap-4 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-4 h-full md:max-w-[70vw] max-w-[60vw] md:gap-y-0">
      
      {/* Heading Block */}
      <div className="flex md:col-start-1 md:row-start-2 md:justify-center md:translate-x-[25%] translate-x-[0%] relative">
        <div className="relative hidden md:block h-[50%] w-[2px] bg-[#ffffffb3] mx-6 bottom-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full" />
        </div>

        <div className="flex self-center flex-col gap-2">
          <h1 className="md:text-5xl text-3xl text-[#ffffff89] font-bold capitalize">{index.toString().padStart(2, '0')}</h1>
        <h1 className="md:text-5xl text-3xl text-[#ffffff89] font-bold capitalize">{title}</h1>
        <a href={projectLink} target='_blank' className='text-[#ffffff89] font-semibold md:text-xl text-sm tracking-widest underline'>Link</a>
        
        </div>
      </div>

      {/* Image Block */}
      <div className="bg-[#353535] md:col-start-1 md:col-end-2 md:row-start-1 w-full h-30 md:h-full rounded-md relative overflow-hidden">
        <Image
          src={image}
          alt="Responsive Image"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Empty Placeholder for Top Right */}
      <div className="md:col-start-2 md:row-start-2 hidden md:flex flex-col"></div>

      {/* Description Block */}
      <div className="md:col-start-2 md:row-start-1 col-start-1 row-start-3 flex flex-col justify-end gap-2">
        <div className="flex gap-2 flex-wrap">
          {techStack.map((val, index) => (
            <span key={index} className="text-sm text-[#ffffffde] bg-[#ffffff23] font-bold px-2 rounded-xl">{val}</span>
          ))}
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
  <div className=" flex flex-col justify-center gap-4  md:grid  md:grid-cols-2 md:grid-rows-2  md:gap-x-4  h-full md:max-w-[70vw] max-w-[70vw] md:gap-y-0   ">
        

        {/* title block */}
        <div className="flex col-start-1 row-start-1 items-center md:justify-center md:translate-x-[25%]  translate-x-[0%] relative">
          
          <div className="relative hidden md:block  self-baseline-last h-[50%] w-[2px] bg-[#ffffffb3] mx-6 bottom-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#ffffff] rounded-full" />
          </div>

          {/* Heading */}
          <div className="flex flex-col ">
            <h1 className="md:text-5xl text-3xl text-[#ffffff89] font-bold capitalize mb-2">{index.toString().padStart(2, '0')}</h1>
            <h1 className="md:text-5xl text-3xl text-[#ffffff89] font-bold capitalize mb-0">{title}</h1>
            <a href={projectLink} target='_blank' className='text-[#ffffff89] font-semibold md:text-xl text-sm tracking-widest underline'>Link</a>
            
          </div>

        </div>

        {/* Image Block */}
        <div className="bg-[#353535] md:col-start-1 md:col-end-2 md:row-start-2 w-full h-30 md:h-full rounded-md  relative overflow-hidden">
          <Image
            src={image}
            alt="Responsive Image"
            fill
            className="object-cover object-center"
          />
        </div>

        

       

        {/* Empty Top Right (optional future use) */}
        <div className="md:col-start-2 md:row-start-1 hidden md:flex flex-col"></div>

        {/* Description */}
        <div className="md:col-start-2 md:row-start-2 col-start-1 row-start-3   flex flex-col justify-end gap-2">
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


