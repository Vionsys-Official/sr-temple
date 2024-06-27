'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/languageContext';
import TeamHero from '../../../../public/assets/team/TeamHero.jpg';

function TeamHeroSection() {
  const { language } = useLanguage() || { language: 'english' };
  return (
    <div className="overflow-hidden">
      <div className="w-full">
        <div className="md:h-[100vh] h-[80vh] flex justify-center items-center relative overflow-hidden bg-[#000]">
          <Image
            src={TeamHero}
            alt="heroimg"
            className="object-cover w-full h-full opacity-45"
            quality={100}
          />
          <motion.div
            initial={{ opacity: 0, y: -100 }} // X:100
            whileInView={{ opacity: 1, y: 1 }} // y:100
            transition={{
              delay: 0.2,
              scale: { type: 'spring', stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: 'easeInOut',
            }}
            className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-16 lg:px-32 xl:px-48"
          >
            <h1 className="text-yellow md:text-5xl text-3xl font-bold mb-4 capitalize">
              {language === 'english' ? 'Specialist Team in Temple Construction' : language === 'marathi' ? 'मंदिराच्या निर्मितीसाठी टीम' : 'मंदिर के निर्माण के लिए टीम'}
            </h1>
            <p className="lg:text-xl text-Paragraph text-white max-w-3xl">
              {/* eslint-disable-next-line max-len */}
              {language === 'english' ? 'At SR Temple Construction, a team of expert architects, skilled artisans, and meticulous project managers ensures that every temple we construct is a masterpiece of design, devotion and durability.' : language === 'marathi' ? 'SR Temple Construction निर्माणातील तांत्रिक वास्तुकारांची, कुशल कारिगरांची आणि सूक्ष्म योजना व्यवस्थापकांची टीम खात्री देते की आम्ही बांधत असलेले प्रत्येक मंदिर हे डिझाइन, भक्ती आणि टिकाऊपणाचा उत्कृष्ट नमुना असेल.' : 'SR Temple Construction में तकनीकी वास्तुकारों, कुशल कारीगरों और सूक्ष्म योजना व्यवस्थापकों की टीम सुनिश्चित करती है कि हम बना रहे हर मंदिर डिज़ाइन, भक्ति और टिकाऊता का उत्कृष्ट नमूना हैं।'}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TeamHeroSection;
