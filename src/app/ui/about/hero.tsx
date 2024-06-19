'use client'
import React from 'react';
import Image from 'next/image';
import Front from '../../../../public/assets/about/herobg5.jpg';
import { motion } from 'framer-motion';
// eslint-disable-next-line react/function-component-definition
const Hero: React.FC = () => (
  <div className="relative">
      <div className="bg-[#000]">
        <Image src={Front} alt="" className=" w-full opacity-70 md:h-[100vh] h-[70vh]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // X:100
        whileInView={{ opacity: 1, y: 1 }} // y:100
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut',
        }} className="absolute inset-0 flex flex-col items-center justify-center">
      <h1 className="md:text-5xl text-3xl font-bold text-yellow border-yellow-500">Get to know About us!</h1>
        <p className='text-white text-center p-4 m-4 md:w-[50vw] font-semibold md:text-xl'>Our SR temple construction Company was established in
              2011 since then we are providing
              the best solution.
          <span> Our engineers are working hard to build the best temple with minimum expenses.</span>
          </p>
          </motion.div>
      </div>
);

export default Hero;
