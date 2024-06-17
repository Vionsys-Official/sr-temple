import React from 'react';
import Image from 'next/image';
// eslint-disable-next-line react/function-component-definition
const Hero: React.FC = () => (
  <div className="relative">
    <div className="h-72">
      <Image
        src="/assets/about/Herobg.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-65"
      />
    </div>
    <div className="relative bg-gray-900 bg-opacity-65">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
        <div className="flex items-center justify-center xl:flex-row text-center mb-28">
          <div className="w-full max-w-xl mb-20 xl:mb-0 xl:pr-16 xl:w-7/12">
            <h2 className="max-w-lg pt-10 mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none opacity-90">
              About Us
            </h2>
            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg text-white">
              Our SR temple construction Company was established in
              2011 since then we are providing
              the best solution.
              Our engineers are working hard to build the best temple with minimum expenses.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
