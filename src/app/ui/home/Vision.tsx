'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye } from 'react-icons/fa6';

function Vision() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="px-4 mx-auto md:px-24 lg:px-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="flex flex-col lg:items-center lg:flex-row lg:max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -100 }} // X:100
            whileInView={{ opacity: 1, x: 1 }} // y:100
            transition={{
              delay: 0.2,
              scale: { type: 'spring', stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: 'easeInOut',
            }}
            className="flex items-center justify-center md:mb-6 mb-3 lg:w-1/3 lg:mb-0 py-6"
          >
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center justify-center w-14 h-14 mr-5 rounded-full bg-indigo-50 sm:w-24 sm:h-24 xl:mr-15 xl:w-24 xl:h-24">
                <FaBullseye size={60} />
              </div>
            </div>
            <h3
              className="md:text-4xl text-3xl font-extrabold text-[#254736]"
            >
              Vision
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }} // X:100
            whileInView={{ opacity: 1, x: 1 }} // y:100
            transition={{
              delay: 0.2,
              scale: { type: 'spring', stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: 'easeInOut',
            }}
            className="lg:w-2/3"
          >
            <p className="md:text-Paragraph md:font-Paragraph font-Paragraph_sm mb-3 text-justify">
              To be the leading temple construction company in India, recognized for our dedication
              to quality, customer satisfaction and innovative designs that reflect the rich
              cultural heritage of our country.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
