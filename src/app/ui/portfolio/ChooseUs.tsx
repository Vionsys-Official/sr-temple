/* eslint-disable @typescript-eslint/no-use-before-define */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import fadein from '@/utils/varients';

function ChooseUs() {
  return (
    <div className="pt-8 px-4">
      <motion.h1
        variants={fadein('right', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="text-MainHeading font-MainHeading pb-4 text-center"
      >
        Key Advantages of Choosing Us
      </motion.h1>

      <div className="flex md:flex-row flex-col md:gap-0 gap-4  justify-evenly items-center">
        <div className=" overflow-hidden relative transition-all  duration-500 hover:translate-y-2 md:w-[27vw] md:h-[50vh] h-[20vh] bg-neutral-50 rounded-lg shadow-xl flex items-center justify-center gap-2 p-4 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-amber-400">

          <div className="flex flex-col justify-center md:gap-6 gap-4 items-center text-center w-full">
            <span>
              <TypeIcon className="font-extrabold" />
            </span>
            <span className="font-CardHeading text-CardHeading">Design</span>
            <p className="line-clamp-3 text-Paragraph font-Paragraph mt-2 pb-2">
              Our team of experienced architects and designers create visually
              stunning and structurally sound temple designs.
            </p>
          </div>
        </div>

        <div className=" overflow-hidden relative transition-all duration-500 hover:translate-y-2 md:w-[27vw] md:h-[50vh] h-[20vh] bg-neutral-50 rounded-lg shadow-xl flex items-center justify-center gap-2 p-4 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-amber-400">
          <div className="flex flex-col md:gap-6 gap-4 justify-center items-center text-center w-full">
            <span><PlaneIcon className="font-extrabold" /></span>
            <span className="font-CardHeading text-CardHeading">
              Planning
            </span>
            <p className="line-clamp-3 text-Paragraph font-Paragraph mt-2 pb-2">
              We handle all the logistical and regulatory aspects of temple
              construction, ensuring a smooth and efficient process.
            </p>
          </div>
        </div>

        <div className=" overflow-hidden relative transition-all duration-500 hover:translate-y-2 md:w-[27vw] md:h-[50vh] h-[20vh] bg-neutral-50 rounded-lg shadow-xl flex items-center justify-center gap-2 p-4 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-amber-400">
          <div className="flex flex-col justify-center md:gap-6 gap-4 items-center text-center w-full">
            <span><ConstructionIcon /></span>
            <span className="font-CardHeading text-CardHeading">
              Construction
            </span>
            <p className="line-clamp-3 text-Paragraph font-Paragraph mt-2 pb-2">
              Our skilled craftsmen and construction experts bring your temple
              design to life, using traditional techniques and high-quality
              materials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;

function ConstructionIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="6" width="20" height="8" rx="1" />
      <path d="M17 14v7" />
      <path d="M7 14v7" />
      <path d="M17 3v3" />
      <path d="M7 3v3" />
      <path d="M10 14 2.3 6.3" />
      <path d="m14 6 7.7 7.7" />
      <path d="m8 6 8 8" />
    </svg>
  );
}

function PlaneIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}

function TypeIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  );
}
