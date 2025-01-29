'use client';

import React from 'react';
import Image from 'next/image';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/languageContext';
import { features, featuresHindi, featuresMarathi } from '@/data/HomeSafety';
import s1 from '../../../../public/assets/home/S1.jpg';

export default function Safety() {
  const { language } = useLanguage() || { language: 'english' };
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 1 }}
      transition={{
        delay: 0.2,
        scale: { type: 'spring', stiffness: 30 },
        opacity: { duration: 0.6 },
        ease: 'easeInOut',
      }}
      className="py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl lg:px-8 lg:py-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 100 }} // X:100
        whileInView={{ opacity: 1, y: 1 }} // y:100
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut',
        }}
        className="md:text-MainHeading text-MainHeading_sm md:font-MainHeading_sm font-MainHeading leading-none tracking-tight md:mx-auto text-center"
      >
        {language === 'english' ? 'Our Safety Excellence' : language === 'marathi' ? 'आमची सुरक्षा उत्कृष्टता' : 'हमारी सुरक्षा उत्कृष्टता'}
      </motion.h2>
      <motion.h6
        initial={{ opacity: 0, y: 100 }} // X:100
        whileInView={{ opacity: 1, y: 1 }} // y:100
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut',
        }}
        className="md:text-SubHeading text-SubHeading_sm md:font-SubHeading font-SubHeading_sm text-center mb-3 py-3"
      >
        {language === 'english' ? 'Integrated Safety and Client Engagement' : language === 'marathi' ? 'एकात्मिक सुरक्षा आणि ग्राहक प्रतिबद्धता' : 'एकीकृत सुरक्षा और ग्राहक सहभागिता'}
      </motion.h6>
      <div className="mx-auto max-w-7xl md:px-6 px-2 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none lg:grid lg:grid-cols-2">
          <div className="mt-2 mb-2 flex items-center justify-center lg:justify-end">
            <Image
              style={{ height: '400px' }}
              className="object-cover w-full opacity-80 rounded-lg shadow-lg"
              src={s1}
              alt="Construction image 3"
            />
          </div>
          <div className="mt-4 md:mr-4 lg:mt-0 lg:max-w-lg lg:ml-8">
            <div className="mt-4 space-y-6 leading-5">
              {(language === 'english' ? features : language === 'marathi' ? featuresMarathi : featuresHindi).map((feature) => (
                <div key={feature.title} className="md:pl-9">
                  <motion.div
                    initial={{ opacity: 0, x: -70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.2,
                      scale: { type: 'spring', stiffness: 30 },
                      opacity: { duration: 0.6 },
                      ease: 'easeInOut',
                    }}
                  >
                    <h6 className="mb-2 font-semibold leading-5">
                      <AiFillSafetyCertificate size={15} className="inline mr-2" />
                      {feature.title}
                    </h6>
                    <p className=" mt-2 md:ml-6 ml-4 md:text-Paragraph text-Paragraph_sm md:font-Paragraph font-Paragraph_sm">
                      {feature.content}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
