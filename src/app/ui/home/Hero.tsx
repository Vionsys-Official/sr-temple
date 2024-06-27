'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useLanguage } from '@/lib/languageContext';
import Front from '../../../../public/assets/home/Front.jpg';

function Hero() {
  const { language } = useLanguage() || { language: 'english' };
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
              <h1 className="md:text-5xl text-3xl font-extrabold text-white text-center mb-6 md:px-0 px-1 capitalize">
                {language === 'english' ? 'Honoring tradition, building for the future' : language === 'marathi' ? 'भविष्याच्या निर्मितीच्या दिशेने परंपरेचा सन्मान' : 'परंपरा का सम्मान, भविष्य के लिए निर्माण'}
              </h1>
              <p className="md:text-xl text-base leading-normal text-center md:px-28">
                {language === 'english' ? 'We blend traditional artistry with modern techniques to craft majestic temples. Witness our dedication and craftsmanship in every temple we build.' : language === 'marathi' ? 'आम्ही पारंपरिक कला आणि आधुनिक तंत्रांचा संगम करून भव्य मंदिरांची निर्मिती करतो. आमच्या बांधलेल्या प्रत्येक मंदिरात आमचे समर्पण आणि कुशलता पहा.' : 'हम पारंपरिक कलाकारी को आधुनिक तकनीकों के साथ मिलाकर भव्य मंदिरों का निर्माण करते हैं। हमारे द्वारा निर्मित प्रत्येक मंदिर में हमारा समर्पण और शिल्पकला देखें।'}
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
