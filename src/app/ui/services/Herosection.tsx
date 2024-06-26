'use client';

import { useLanguage } from '@/lib/languageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

function Herosection() {
  const { language } = useLanguage() || { language: 'english' };
  return (
    <section className="relative">
      <div className="relative h-[60vh] md:h-[90vh] overflow-x-hidden bg-slate-950">
        <Image
          src="/assets/services/hero1.jpg"
          className="absolute inset-0 object-cover w-full h-full opacity-60"
          alt="services"
          width={1000}
          height={1000}
          objectFit="cover"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="flex flex-col px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: -100 }} // X:100
              whileInView={{ opacity: 1, y: 1 }} // y:100
              transition={{
                delay: 0.2,
                scale: { type: 'spring', stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: 'easeInOut',
              }}
              className="max-w-5xl md:p-6 rounded-lg bg-black bg-opacity-70"
            >
              <h2 className="mb-4 md:text-5xl text-3xl font-extrabold text-yellow">
                {language === 'english' ? 'Our Services' : 'आमच्या सेवा'}
              </h2>
              <p className="text-white md:text-xl text-base leading-relaxed">
                {language === 'english' ? 'We offer a comprehensive range of services to ensure your temple construction project is a success from start to finish. Our expert team is dedicated to providing high-quality, reliable, and cost-effective solutions tailored to your needs.' : 'आपल्या मंदिर निर्माण प्रकल्पाची सुरुवात ते शेवट यशस्वी ठरवण्यासाठी आम्ही विविध सेवा तुमच्या प्रतिक्रियांच्या आधारावर प्रस्तुत करतो. आमची तज्ज्ञ संघ उच्च गुणवत्तेची, विश्वसनीय आणि किफायतशीर समाधाने प्रदान करण्यासाठी समर्पित आहे.'}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
