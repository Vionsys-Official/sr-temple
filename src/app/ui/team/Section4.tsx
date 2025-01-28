'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ConstructionImage from '../../../../public/assets/team/ConstructionImage.jpg';
import ArtImage from '../../../../public/assets/team/ArtImage.jpg';

function Section4() {
  return (
    <section className="overflow-hidden">
      <div className="text-center p-2">
        <h2 className="font-bold text-MainHeading text-yellow p-2">
          Why Choose Our Team?
        </h2>
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8">
          <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
            <div className="flex justify-center items-center">
              <Image
                className="object-cover  rounded shadow-lg"
                src={ArtImage}
                alt="services"
                height={500}
                width={500}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }} // X:100
              whileInView={{ opacity: 1, x: 0 }} // y:100
              transition={{
                delay: 0.2,
                x: { type: 'spring', stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: 'easeInOut',
              }}
              className="md:px-10 p-2 mb-6 flex flex-col justify-center items-center"
            >
              <h2 className="max-w-full mb-4 font-bold tracking-tight text-gray-900 md:text-SubHeading text-SubHeading_sm sm:leading-none">
                Expertise and Experience
              </h2>
              <p className="text-Paragraph_sm md:text-Paragraph">
                Our team of master artisans and craftsmen with skills perfected over generations
                ensures temples that are artistically and structurally exceptional.
                Complementing this,
                our experienced architects blend traditional styles with modern engineering to
                create timeless structures guaranteeing a harmonious blend of aesthetic
                beauty and architectural integrity. It give the spiritual as well as modern vibe.
              </p>
            </motion.div>

          </div>
        </div>
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8">
          <div className="grid gap-5 row-gap-10 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: 100 }} // X:100
              whileInView={{ opacity: 1, x: 0 }} // y:100
              transition={{
                delay: 0.2,
                x: { type: 'spring', stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: 'easeInOut',
              }}
              className="md:px-10 p-2 mb-6 flex flex-col justify-center items-center"
            >
              <h2 className="max-w-full mb-4 font-bold tracking-tight text-gray-900 md:text-SubHeading text-SubHeading_sm sm:leading-none">
                Proven Track Record
              </h2>
              <p className="text-Paragraph_sm md:text-Paragraph">
                Our team has successfully completed numerous temple projects across India,
                each one a testament to our skill, dedication, and artistic vision.
                Positive feedback from clients highlights the exceptional work and
                professional approach of our team, reinforcing our reputation
                for excellence and ensuring client satisfaction.
              </p>
            </motion.div>

            <div className="flex justify-center items-center">
              <Image
                className="object-cover  rounded shadow-lg"
                src={ConstructionImage}
                alt="services"
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Section4;
