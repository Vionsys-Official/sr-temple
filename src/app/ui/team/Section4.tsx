'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ConstructionImage from '../../../../public/assets/team/ConstructionImage.jpg';
import ArtImage from '../../../../public/assets/team/ArtImage.jpg';

function Section4() {
  return (
    <section className="overflow-hidden">
      <div className="text-center p-8">
        <h2 className="font-bold text-MainHeading text-gray p-2">
          Why Choose Our Team?
        </h2>
        <div className="flex flex-wrap items-center justify-center mt-5 text-left">
          <div className="w-full md:w-3/5 lg:w-1/2 flex justify-center p-4">
            <Image
              width={500}
              height={500}
              src={ArtImage}
              alt="gem"
              className="inline-block rounded shadow-xl border border-merino-400"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }} // X:100
            whileInView={{ opacity: 1, x: 0 }} // x:0
            transition={{
              delay: 0.2,
              scale: { type: 'spring', stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: 'easeInOut',
            }}
            className="w-full md:w-2/5 lg:w-1/2 lg:px-4 text-center md:text-left p-4 lg:pr-12"
          >
            <h3 className="font-bold lg:mt-8 text-MainHeading_sm md:mt-0">
              Proven Track Record
            </h3>
            <p className="sm:text-CardHeading_sm mt-6">
              {/* eslint-disable-next-line max-len */}
              Our team has successfully completed numerous temple projects across India, each one a testament to our skill, dedication, and artistic vision. Positive feedback from clients highlights the exceptional work and professional approach of our team, reinforcing our reputation for excellence and ensuring client satisfaction.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap items-center justify-center mt-5 text-left">
          <div className="w-full md:w-3/5 lg:w-1/2 flex justify-center p-4">
            <Image
              width={500}
              height={500}
              src={ConstructionImage}
              alt="gem"
              className="inline-block rounded shadow-xl border border-merino-400"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -100 }} // X:-100
            whileInView={{ opacity: 1, x: 0 }} // x:0
            transition={{
              delay: 0.2,
              scale: { type: 'spring', stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: 'easeInOut',
            }}
            className="w-full md:w-2/5 lg:w-1/2 md:order-first text-center md:text-left p-4 lg:pl-12"
          >
            <h3 className="font-bold lg:mt-8 text-MainHeading_sm md:mt-0">
              Expertise and Experience
            </h3>
            <p className="sm:text-CardHeading_sm mt-6">
              {/* eslint-disable-next-line max-len */}
              Our team of master artisans and craftsmen, with skills perfected over generations, ensures temples that are both artistically and structurally exceptional. Complementing this, our experienced architects blend traditional styles with modern engineering to create timeless structures, guaranteeing a harmonious blend of aesthetic beauty and architectural integrity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
