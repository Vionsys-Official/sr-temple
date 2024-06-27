/* eslint-disable @typescript-eslint/no-use-before-define */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import fadein from '@/utils/variants';
import { FaPencilRuler, FaHardHat } from 'react-icons/fa';
import { BiTask } from 'react-icons/bi';

function ChooseUs() {
  return (
    <div className="pt-8 px-4">
      <motion.h1
        variants={fadein('right', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="text-MainHeading font-MainHeading pb-4 text-center capitalize"
      >
        Key Advantages of Choosing Us
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-evenly items-center py-6">
        <div className="relative transition-all duration-500 hover:translate-y-2 w-full md:w-[27vw] bg-neutral-50 rounded-lg shadow-xl flex items-center justify-center p-4 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-amber-400">
          <div className="flex flex-col justify-center gap-4 md:gap-6 items-center text-center w-full">
            <span>
              <FaPencilRuler size={30} className="font-extrabold" />
            </span>
            <span className="font-CardHeading text-CardHeading">Design</span>
            <p className="text-Paragraph font-Paragraph">
              Our team of experienced architects and designers create visually
              stunning and structurally sound temple designs.
            </p>
          </div>
        </div>

        <div className="relative transition-all duration-500 hover:translate-y-2 w-full md:w-[27vw] bg-neutral-50 rounded-lg shadow-xl flex items-center justify-center p-4 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-amber-400">
          <div className="flex flex-col justify-center gap-4 md:gap-6 items-center text-center w-full">
            <span>
              <BiTask size={30} className="font-extrabold" />
            </span>
            <span className="font-CardHeading text-CardHeading">Planning</span>
            <p className="text-Paragraph font-Paragraph">
              We handle all the logistical and regulatory aspects of temple
              construction, ensuring a smooth and efficient process.
            </p>
          </div>
        </div>

        <div className="relative transition-all duration-500 hover:translate-y-2 w-full md:w-[27vw] bg-neutral-50 rounded-lg shadow-xl flex items-center justify-center p-4 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-amber-400">
          <div className="flex flex-col justify-center gap-4 md:gap-6 items-center text-center w-full">
            <span>
              <FaHardHat size={30} className="font-extrabold" />
            </span>
            <span className="font-CardHeading text-CardHeading">
              Construction
            </span>
            <p className="text-Paragraph font-Paragraph">
              Our skilled craftsmen bring your temple design to life, using
              traditional techniques and high-quality materials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
