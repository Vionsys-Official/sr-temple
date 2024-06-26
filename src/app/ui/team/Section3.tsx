'use client';

import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/languageContext';
import TempleImage from '../../../../public/assets/team/TempleImage.jpg';

function Section3() {
  const { language } = useLanguage() || { language: 'english' };
  return (
    <section className="overflow-hidden">
      <div className="container flex flex-col px-10 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        {/* Text content */}
        <div className="w-full lg:w-1/2">
          <div className="p-4">
            <h1 className="text-[#254736] md:text-4xl text-3xl font-extrabold tracking-wide">
              {language === 'english' ? 'Expert Team In' : 'मंदिर बांधकामातील'}
              <span className="mx-1 text-MainHeading_sm font-extrabold relative inline-block stroke-current">
                {language === 'english' ? 'Temple' : ' तज्ञांची '}
                <svg
                  className="absolute -bottom-0.5 w-full max-h-1.5  text-gray"
                  viewBox="0 0 55 5"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="3" />
                </svg>
              </span>
              {language === 'english' ? 'Construction' : 'टीम'}
            </h1>
            <p className="mt-4 text-gray-600 text-Paragraph">
              {/* eslint-disable-next-line max-len */}
              {language === 'english' ? 'Our expert team in temple construction brings together unparalleled craftsmanship and deep-rooted tradition. Each structure we build is a testament to our commitment to excellence, creating sacred spaces that inspire devotion and reverence.' : ' मंदिर बांधणीतील आमची तज्ञ टीम अतुलनीय कारागिरी आणि खोलवर रुजलेली परंपरा एकत्र आणते. आम्ही तयार केलेली प्रत्येक रचना ही भक्ती आणि आदराची प्रेरणा देणारी पवित्र जागा निर्माण करून उत्कृष्टतेच्या आमच्या वचनबद्धतेचा दाखला आहे. '}
            </p>

            <div className="grid gap-6 mt-8 sm:grid-cols-2">
              {/* Feature list */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  scale: { type: 'spring', stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: 'easeInOut',
                }}
                className="flex items-center text-gray-800"
              >
                <IoMdCheckmarkCircleOutline className="text-gray" />
                <span className="mx-3">{language === 'english' ? 'Over a Decade of Experience' : 'एक दशकाहून अधिक अनुभव'}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  scale: { type: 'spring', stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: 'easeInOut',
                }}
                className="flex items-center text-gray-800"
              >
                <IoMdCheckmarkCircleOutline className="text-gray" />
                <span className="mx-3">
                  {language === 'english' ? 'Nationwide Reach and Service' : 'राष्ट्रव्यापी पोहोच आणि सेवा'}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  scale: { type: 'spring', stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: 'easeInOut',
                }}
                className="flex items-center text-gray-800"
              >
                <IoMdCheckmarkCircleOutline className="text-gray" />
                <span className="mx-3">
                  {language === 'english' ? 'Innovative Temple Designs' : 'नाविन्यपूर्ण मंदिर डिझाइन'}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  scale: { type: 'spring', stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: 'easeInOut',
                }}
                className="flex items-center text-gray-800"
              >
                <IoMdCheckmarkCircleOutline className="text-gray" />
                <span className="mx-3">
                  {language === 'english' ? 'High-Quality Craftsmanship' : 'उच्च-गुणवत्ताची कलाकृती'}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  scale: { type: 'spring', stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: 'easeInOut',
                }}
                className="flex items-center text-gray-800"
              >
                <IoMdCheckmarkCircleOutline className="text-gray" />
                <span className="mx-3">
                  {language === 'english' ? 'Blend of Tradition and Modernity' : 'परंपरा आणि आधुनिकता यांचे मिश्रण'}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  scale: { type: 'spring', stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: 'easeInOut',
                }}
                className="flex items-center text-gray-800"
              >
                <IoMdCheckmarkCircleOutline className="text-gray" />
                <span className="mx-3">
                  {language === 'english' ? 'Dedicated Project Managers' : 'समर्पित प्रकल्प व्यवस्थापक'}
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <Image
            width={500}
            height={500}
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src={TempleImage}
            alt=" photo"
          />
        </div>
      </div>
    </section>
  );
}

export default Section3;
