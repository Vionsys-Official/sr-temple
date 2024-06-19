'use client'
import { motion } from 'framer-motion';
import React from 'react'
import { FaCalendarCheck } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa6";

const features = () => {
  return (
    <div className="px-4 py-16 mx-auto mt-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-yellow lg:py-20">
    <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
      <div className="lg:w-1/2">
        <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray sm:text-4xl sm:leading-none xl:max-w-lg">
        Presenting Our Key Features: 
        </h2>
      </div>
      <div className="lg:w-1/2">
        <motion.p
        initial={{ opacity: 0, y: 100 }} // X:100
        whileInView={{ opacity: 1, y: 1 }} // y:100
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut',
        }} className="text-base text-gray md:text-lg">
        At SR Temple Construction, we take pride in our meticulous attention to detail, ensuring that every project reflects our dedication to excellence and our clients' visions.
        </motion.p>
      </div>
    </div>
    <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }} // X:100
        whileInView={{ opacity: 1, y: 1 }} // y:100
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut',
        }} 
        className="max-w-md">

        <motion.div
        initial={{ opacity: 0, y: 100 }} // X:100
        whileInView={{ opacity: 1, y: 1 }} // y:100
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut',
        }} className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
        <FaCalendarCheck size={30}/>

        </motion.div>
        <h6 className="mb-2 font-semibold leading-5">Years of service</h6>
        <p className="mb-3 text-sm text-gray-900">
          Designing and constructing temples with meticulous craftsmanship since 2011
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
        }} className="max-w-md">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
        <FaGlobeAmericas size={30}/>
        </div>
        <h6 className="mb-2 font-semibold leading-5">Area of work</h6>
        <p className="mb-3 text-sm text-gray-900">
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
        }} className="max-w-md">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
        <FaMoneyCheck size={30}/>
        </div>
        <h6 className="mb-2 font-semibold leading-5">Cost</h6>
        <p className="mb-3 text-sm text-gray-900">
        Providing best final result with minimum cost.
        </p>
      </motion.div>
    </div>
  </div>
  )
}

export default features




/*<section>
import React from 'react';

const features = () => (
  <div className="flex flex-wrap justify-center mt-5 mb-5 h-[80vh]">
    <div className="w-screen text-center text-MainHeading mt-5">
      <h1 className="md:mb-5 font-bold text-gray"> Have a Look at our Features</h1>
      <p className="text-base mb-5 text-gray pt-5">At SR Temple Construction, we take pride in our meticulous attention to detail, ensuring that every project reflects our dedication to excellence and our clients' visions.</p>
    </div>

    <div className="p-5 max-w-sm ">
      <div className="flex rounded-lg h-full dark:bg-gray-800 bg-gray hover:bg-gray p-8 flex-col">
        <div className="flex items-center mb-3">
          <div
            className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <h2 className="text-white dark:text-white text-lg font-medium">Years of service</h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <p className="leading-relaxed text-base text-white dark:text-gray-300">
          Designing and building temple since 2011
          </p>
        </div>
      </div>
    </div>

    <div className="p-4 max-w-sm">
      <div className="flex rounded-lg h-full bg-gray hover:bg-gray p-8 flex-col">
        <div className="flex items-center mb-3">
          <div
            className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <h2 className="text-white dark:text-white text-lg font-medium">Area of work</h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <p className="leading-relaxed text-base text-white dark:text-gray-300 pb-10 ">
          Working all over India and we give best designs in market
          </p>
        </div>
      </div>
    </div>
    <div className="p-4 max-w-sm">
      <div className="flex rounded-lg h-full bg-gray  hover:bg-gray p-8 flex-col">
        <div className="flex items-center mb-3">
          <div
            className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <h2 className="text-white dark:text-white text-lg font-medium">Cost</h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <p className="leading-relaxed text-base text-white dark:text-gray-300">
          Providing best final result with minimum cost
          </p>
        </div>
      </div>
    </div>
  </div>

);

export default features;
</section>*/