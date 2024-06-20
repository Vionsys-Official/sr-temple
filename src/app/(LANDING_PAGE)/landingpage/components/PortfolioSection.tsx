/* eslint-disable react/no-array-index-key */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import fadein from '@/utils/variants';
import temple1 from '@/../public/assets/portfolio/temple1.jpg';
import temple2 from '@/../public/assets/portfolio/temple2.jpg';
import temple3 from '@/../public/assets/portfolio/temple3.jpg';
import temple4 from '@/../public/assets/portfolio/temple4.jpg';

const images = [temple1, temple2, temple3, temple4];

function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="w-full py-8 md:py-12 lg:py-12 ">
      <motion.h1
        variants={fadein('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="text-MainHeading_sm text-center md:pb-10 font-MainHeading tracking-tighter md:text-MainHeading"
      >
        Explore Our Achievements
      </motion.h1>
      <div className="flex md:flex-row flex-col  justify-center items-center gap-8 px-8 ">
        {/* Left Section */}
        <div className="space-y-4 md:w-[50%] flex justify-center flex-col items-center">
          <motion.h2
            variants={fadein('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="text-SubHeading_sm text-center font-SubHeading tracking-tighter md:text-4xl"
          >
            Our Latest Creations
          </motion.h2>
          <motion.p
            variants={fadein('right', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="max-w-[600px] text-SubHeading_sm text-center md:text-SubHeading lg:text-SubHeading"
          >
            Check out some of our latest projects and see how we can help you
            achieve your goals.
          </motion.p>
          <Link
            href="/portfolio"
            className="px-4 py-1 bg-yellow hover:bg-[#deb01d] text-[#000] rounded-md text-buttonText font-buttonText"
            prefetch={false}
          >
            View Portfolio
          </Link>
        </div>

        {/* Right Section */}
        <div className="relative w-full md:w-[40%]">
          <div className="relative h-56 overflow-hidden shadow-xl shadow-slate-400 rounded-lg md:h-80 lg:h-72 ">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                style={{ transition: 'opacity 1s ease-in-out' }}
              >
                <Image
                  src={image}
                  layout="fill"
                  objectFit="cover"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
                aria-current={index === currentIndex}
                aria-label={`Slide ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handlePrev}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#000]/60  group-hover:bg-[#000]/50  group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handleNext}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#000]/60  group-hover:bg-[#000]/50  group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only bg-slate-100">Next</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
