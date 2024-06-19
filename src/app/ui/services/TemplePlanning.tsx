'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function TemplePlanning() {
  return (
    <section>

      <div className="p-5 mx-auto sm:p-10 bg-white">
        <div className="flex flex-col items-center justify-center shadow bg-slate-400 shadow-slate-300 max-w-full mx-auto overflow-hidden rounded">
          <div className="py-11 w-full bg-gray" />
          <div className="p-6 m-4 flex justify-center mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-white shadow-inner">
            <div className="">
              <h1 className="max-w-full flex justify-center text-MainHeading_sm font-bold tracking-tight text-gray-900 sm:text-MainHeading sm:leading-none">
                Temple Construction Services
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: 'spring', stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: 'easeInOut',
                }}
                className="max-w-full mb-4 text-MainHeading_sm font-bold tracking-tight text-gray-900 sm:text-MainHeading sm:leading-none"
              >
                Temple Planning and Measurement Services
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: 'spring', stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: 'easeInOut',
                }}
                className="text-Paragraph_sm md:text-Paragraph"
              >
                Our team of experts provides meticulous planning and measurement
                services tailored to the unique needs of temple construction. We
                understand the importance of accurate measurements in creating
                harmonious and aesthetically pleasing structures. Our planning
                services ensure that every detail, from site selection to spatial
                organization, is in perfect alignment with your vision and religious
                requirements.
              </motion.p>
            </div>
            <p className="mb-4 text-sm font-bold text-gray tracking-widest uppercase">
              Features
            </p>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: 'spring', stiffness: 30 },
                opacity: { duration: 0.5 },
                ease: 'easeInOut',
              }}
              className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0"
            >
              <ul className="space-y-3">
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Spatial Design and Layout
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Construction Planning
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Regulatory Compliance
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Project Management
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Measurement Services
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Cultural and Religious Sensitivity
                </li>
              </ul>
            </motion.div>
          </div>
          <div>
            <Image
              className="object-cover w-full h-full rounded shadow-lg"
              src="/assets/services/planing.jpg"
              alt="services"
              height={1000}
              width={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TemplePlanning;
