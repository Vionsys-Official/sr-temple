import React from 'react';
import Image from 'next/image';

import contacthero from '../../../../public/assets/contact/contacthero.jpg';

function Hero() {
  return (
    <div className="overflow-hidden">
      <div className="w-full">
        <div className="md:h-[100vh] h-[70vh] flex justify-center items-center relative overflow-hidden bg-slate-900">
          <Image
            src={contacthero}
            alt="heroimg"
            className="object-cover w-full h-full opacity-65"
            quality={100}
          />
          <div className="absolute">
            <h1 className="text-amber-500 text-5xl font-MainHeading text-center ">
              Schedule a Service
            </h1>
            <p className="text-3xl font-semibold text-white text-center px-2">Contact us today and lets build something extraordinary together.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
