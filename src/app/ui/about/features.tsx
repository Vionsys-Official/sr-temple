/* eslint-disable react/jsx-indent */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */

'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { FaCalendarCheck, FaGlobeAmericas } from 'react-icons/fa';

import { FaMoneyCheck } from 'react-icons/fa6';

const features = () => (
  <div className="mx-5 my-5 px-4 py-4 md:mx-10 md:py-7 md:mb-4 md:mt-10 sm:max-w-xl md:max-w-full bg-yellow">
    <div className="text-center md:w-full">
      <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl md:mb-10">
        <div />
        <motion.h2
          initial={{ opacity: 0, y: 100 }} // X:100
          whileInView={{ opacity: 1, y: 1 }} // y:100
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: 'easeInOut',
          }}
          className="max-w-lg font-MainHeading_sm md:font-MainHeading text-MainHeading_sm md:text-MainHeadingleading-none tracking-tight text-gray sm:text-4xl md:mx-auto"
        >
          {' '}
          Here Are Our Key Features!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }} // X:100
          whileInView={{ opacity: 1, y: 1 }} // y:100
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: 'easeInOut',
          }}
          className="text-base text-gray md:text-Paragraph text-Paragraph_sm py-2"
        >
          At SR Temple Construction, we take pride in our meticulous attention to detail, ensuring that every project reflects our dedication to excellence and our clients' visions..
        </motion.p>
      </div>
    </div>
    <div className="grid md:gap-8 md:row-gap-10 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:px-4 md:py-2 text-center">
      <motion.div
        initial={{ opacity: 0, y: 100 }} // X:100
        whileInView={{ opacity: 1, y: 1 }} // y:100
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut',
        }}
        className="max-w-md"
      >

        <motion.div
          initial={{ opacity: 0, y: 100 }} // X:100
          whileInView={{ opacity: 1, y: 1 }} // y:100
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: 'easeInOut',
          }}
          className="flex items-center justify-center h-10 text-center w-full"
        >
          <FaCalendarCheck size={40} className="text-center pb-2 flex items-center md:pb-2" />

        </motion.div>
        <h6 className="mb-0text-gray md:text-gray md:mb-2 md:font-CardHeading font-CardHeading_sm text-CardHeading_sm md:text-CardHeading leading-5">Years of service</h6>
        <p className="mb-0 md:mb-3 text-gray text-Paragraph_sm md:text-Paragraph font-Paragraph md:font-Paragraph ">
          Designing and constructing temples with meticulous craftsmanship since 2011.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // X:100
        whileInView={{ opacity: 1, y: 1 }} // y:100
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut',
        }}
        className="max-w-md"
      >
        <div className="flex items-center justify-center h-10 text-center w-full ">
          <FaGlobeAmericas size={40} className="md:pb-2 pb-2" />
        </div>
        <h6 className="md:mb-2 text-gray md:text-gray md:font-CardHeading font-CardHeading_sm text-CardHeading_sm md:text-CardHeading leading-5">Area of work</h6>
        <p className="md:mb-3 text-gray text-Paragraph_sm md:text-Paragraph font-Paragraph md:font-Paragraph ">
          Working all over India and we give best designs in market.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // X:100
        whileInView={{ opacity: 1, y: 1 }} // y:100
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut',
        }}
        className="max-w-md"
      >
        <div className="flex items-center justify-center h-10 text-center w-full">
          <FaMoneyCheck size={40} className="md:pb-2 pb-2" />
        </div>
        <h6 className="md:mb-2 text-gray md:text-gray md:font-CardHeading font-CardHeading_sm text-CardHeading_sm md:text-CardHeading leading-5">Cost</h6>
        <p className="md:mb-3 text-gray text-Paragraph_sm md:text-Paragraph font-Paragraph md:font-Paragraph ">
          Best result, minimum cost. Guaranteed quality, timely delivery.
        </p>
      </motion.div>
    </div>
  </div>
);

export default features;
