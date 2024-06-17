'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import contacthero from '../../../../public/assets/contact/contacthero.jpg';

function Hero() {
  return (
    <div className="overflow-hidden pt-10">
      <div className="w-full">
        <div className="md:h-[100vh] h-[70vh] flex justify-center items-center relative overflow-hidden bg-slate-900">
          <Image
            src={contacthero}
            alt="heroimg"
            className="object-cover w-full h-full opacity-65"
            quality={100}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute"
          >
            <h1 className="text-amber-400 text-5xl font-MainHeading text-center ">
              Schedule a Service
            </h1>
            <p className="text-3xl font-semibold text-white text-center px-2">Contact us today and lets build something extraordinary together.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
