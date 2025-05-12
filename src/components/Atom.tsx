import dynamic from 'next/dynamic'
import React from 'react'
import * as rawJson from "@/components/preloader.json";
import { useLottie } from 'lottie-react';



export default function Atom() {

    const animationData = JSON.parse(JSON.stringify(rawJson));

      const options:any = {
    animationData,
    loop: true,
    autoplay: true,
  };
  const {View} = useLottie(options);

  return (
    <>
    <div className=" flex flex-row items-center justify-center w-75 h-75">
      {View}
       
    </div>
    </>
  )
}
