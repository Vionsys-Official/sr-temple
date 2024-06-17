import React from 'react';
import Image from 'next/image';
import Front from '../../../../public/assets/about/Herobg.jpg';
// eslint-disable-next-line react/function-component-definition
const Hero: React.FC = () => (
  <div className="relative">
      <div className="bg-[#000]">
        <Image src={Front} alt="" className="md:h-full w-full opacity-60 h-screen" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="md:text-5xl text-3xl font-bold text-white">Get to About us!</h1>
        <p className='text-white md:text-center p-4 m-4 md:mr-20 nd:ml-20 md:text-lg text-justify'>Our SR temple construction Company was established in
              2011 since then we are providing
              the best solution.
          <span> Our engineers are working hard to build the best temple with minimum expenses.</span>
          </p>
      </div>
    </div>
);

export default Hero;
