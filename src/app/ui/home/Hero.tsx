'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import Front from '../../../../public/assets/home/Front.jpg';

function Hero() {
  return (
    <div>
      <section
        className="md:pt-16 pt-12 text-white relative md:h-[130vh]"
      >
        <div className="bg-[#000] bg-cover bg-center bg-no-repeat">
          <Image src={Front} alt="" className="md:h-full w-full opacity-40 h-[50vh]" />
        </div>
        <div className="md:px-4 mx-auto absolute inset-0 flex flex-col justify-center items-center">
          <div className="grid grid-cols-12 gap-6 md:pt-36">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: 'spring', stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: 'easeInOut',
              }}
              className="col-span-12 md:max-w-6xl"
            >
              <h1 className="md:text-5xl text-3xl font-extrabold text-white text-center mb-6 md:px-0 px-1">Honoring tradition, building for the future.</h1>
              <p className="md:text-xl text-base leading-normal text-center md:px-28">
                We blend traditional artistry with modern techniques to craft majestic temples.
                Witness our dedication and craftsmanship in every temple we build.
              </p>
            </motion.div>
            <div className="col-span-12 lg:col-span-10 lg:col-start-2 md:block hidden">
              <div className="relative h-[88vh] pt-[56.25%] rounded-[20px] overflow-hidden">
                <Image src={Front} alt="Description of the image" layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Hero;
