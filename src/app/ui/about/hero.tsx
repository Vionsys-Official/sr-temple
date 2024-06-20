'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Front from '../../../../public/assets/about/herobg5.jpg';
// eslint-disable-next-line react/function-component-definition
const Hero: React.FC = () => (
  <div className="relative">
    <div className="bg-[#000]">
      <Image src={Front} alt="" className=" w-full opacity-70 md:h-[90vh] h-[70vh]" />
    </div>
    <motion.div
      initial={{ opacity: 0, y: 100 }} // X:100
      whileInView={{ opacity: 1, y: 1 }} // y:100
      transition={{
        delay: 0.2,
        scale: { type: 'spring', stiffness: 30 },
        opacity: { duration: 0.6 },
        ease: 'easeInOut',
      }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-5"
    >
      <h1 className="md:text-5xl text-3xl font-extrabold border-yellow text-yellow mb-2">Get to Know About Us!</h1>
      <p className="text-white md:w-[50vw] md:text-xl text-base leading-relaxed">
        Our SR temple construction Company was established in
        2011 since then we are providing
        the best solution.
        <span> Our engineers are working hard to build the best temple with minimum expenses.</span>
      </p>
    </motion.div>
  </div>
);

export default Hero;
