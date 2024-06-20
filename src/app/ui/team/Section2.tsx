'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { FaSquarePhone } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import ImageTeam from '../../../../public/assets/team/ImageTeam.png';

function section2() {
  return (

    <section>
      <div className="bg-white">
        <div
          id="MyTeamBG"
          className="flex flex-col items-center p-5 border-2 border-[#000000]"
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 relative rounded-full border-8 border-gray overflow-hidden">
            <Image
              src={ImageTeam}
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: 'spring', stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: 'easeInOut',

            }}
          >
            <h1 className="text-SubHeading font-semibold text-center mt-4 bg-my-team rounded-md">
              Sunil Ulhas Rathod
            </h1>
            <h6 className="text-gray-500 text-center bg-my-team rounded-md">
              Owner
            </h6>
            <h1 className="text-gray-500 flex items-center justify-center m-2 bg-my-team rounded-md">
              <FaSquarePhone className="mt-[1px] mr-2" />
              9834632900
            </h1>
          </motion.div>

        </div>

        <div className="text-center p-5">

          <p className="max-w-2xl mx-auto my-2 text-Paragraph text-gray-500  md:leading-relaxed dark:text-gray-400 text-center">
            <RiDoubleQuotesL className="inline-block  text-gray-400 mb-4" />
            {' '}
            {/* eslint-disable-next-line max-len */}
            As a dedicated temple artist and owner of SR Temple Construction. My work transforms spiritual concepts into meaningful art, rooted in meticulous detail and cultural heritage. Through collaboration and community engagement, I strive to preserve and enhance the rich traditions of temple artistry.
            {' '}
            {' '}
            <RiDoubleQuotesR className="inline-block  text-gray-400 mb-4" />
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <button type="button" className="text-white bg-yellow font-medium rounded-lg text-Paragraph_sm px-5 py-2.5 ">
              Contact us
            </button>
          </Link>
          <Link href="/portfolio">
            <button type="button" className="text-white bg-gray font-medium rounded-lg text-Paragraph_sm px-5 py-2.5 ">
              Our Work
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default section2;
