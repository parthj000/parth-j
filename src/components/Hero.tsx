import React from 'react'


import Image from 'next/image';
import Atom from './Atom';
import GlitchText from './GlitchText';



export default function Hero() {
  return (
   <>
   <div className="h-[100vh] flex justify-center items-center relative">
    <GlitchText text='Parth Joshi' />
        
    <Image className='rotate-180 absolute right-0 bottom-0' src={"/left.png"} alt='hello' height={500} width={500} />
    
    </div>

    
    
    
   
   </>
  )
}
