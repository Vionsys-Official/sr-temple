import Image from 'next/image';
import React from 'react';
import Front from '../../../../public/assets/home/Front.jpg';

function Hero() {
  return (
    <div className="relative">
      <div className="bg-[#000]">
        <Image src={Front} alt="" className="md:h-full w-full opacity-50 h-[40vh]" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="md:text-6xl text-3xl font-extrabold text-white">We are building for tomorrow.</h1>
      </div>
    </div>
  );
}

export default Hero;
