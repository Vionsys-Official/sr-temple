'use client';

import Image from 'next/image';
import React from 'react';
import { BiSend } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { choose, chooseHindi, chooseMarathi } from '@/data/HomeChooseUs';
import { useLanguage } from '@/lib/languageContext';
import c2 from '../../../../public/assets/home/c2.jpg';
import c3 from '../../../../public/assets/home/Choose1.jpeg';

export default function Choose() {
  const { language } = useLanguage() || { language: 'english' };
  return (
    <div className="py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl lg:px-8 lg:py-6">
      <motion.div
        initial={{ opacity: 0, y: 100 }} // X:100
        whileInView={{ opacity: 1, y: 1 }} // y:100
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut',
        }}
        className="max-w-2xl mb-4 md:mx-auto lg:max-w-4xl md:mb-6"
      >
        <h2 className="md:text-MainHeading text-MainHeading_sm md:font-MainHeading_sm font-MainHeading leading-none tracking-tight md:mx-auto text-center">
          {language === 'english' ? 'Why Choose Us?' : language === 'marathi' ? 'आम्हाला का निवडाल?' : 'हमें क्यों चुनें?'}
        </h2>
        <h6 className="md:text-SubHeading text-SubHeading_sm md:font-SubHeading font-SubHeading_sm text-center mb-3 py-3">
          {language === 'english' ? 'Bringing your spiritual vision to life with care and quality' : language === 'marathi' ? 'तुमची आध्यात्मिक दृष्टी काळजीपूर्वक आणि गुणवत्तेने साकार करण्याचा प्रयत्न' : 'आपके आध्यात्मिक दृष्टिकोण को सावधानी और गुणवत्ता के साथ साकार करने का प्रयास करते है।'}
        </h6>
      </motion.div>
      <div className="grid gap-10 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center">
          {(language === 'english' ? choose : language === 'marathi' ? chooseMarathi : chooseHindi).map((item) => (
            <div key={item.id} className="flex mb-4">
              <div className="mr-4">
                <div className="flex items-center text-black justify-center w-10 h-10 mb-3 rounded-full bg-yellow-50">
                  <BiSend size={25} />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -70 }} // X:100
                whileInView={{ opacity: 1, x: 0 }} // y:100
                transition={{
                  delay: 0.2,
                  scale: { type: 'spring', stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: 'easeInOut',
                }}
              >
                <h6 className="mb-2 font-semibold leading-5">
                  {item.title}
                </h6>
                <p className="md:text-Paragraph text-Paragraph_sm md:font-Paragraph font-Paragraph_sm">
                  {item.description}
                </p>
                <hr className="w-full my-1 border-gray-300" />
              </motion.div>
            </div>
          ))}
        </div>
        <div className="grid gap-2">
          <Image
            className="object-cover w-full h-[53vh] rounded-lg shadow-lg"
            src={c2}
            alt="Construction image 2"
            width={500}
            height={300}
          />
          <Image
            className="object-cover w-full h-[53vh] rounded-lg shadow-lg md:block hidden"
            src={c3}
            alt="Construction image 3"
            width={500}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
