'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/languageContext';
import Front from '../../../../public/assets/about/herobg5.jpg';

// eslint-disable-next-line react/function-component-definition
const Hero: React.FC = () => {
  const { language } = useLanguage() || { language: 'english' };

  return (
    <div className="relative">
      <div className="bg-[#000]">
        <Image src={Front} alt="" className="w-full opacity-70 md:h-[90vh] h-[70vh]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // X:100
        whileInView={{ opacity: 1, y: 1 }} // y:100
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut',
        }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-5"
      >
        <h1 className="md:text-5xl text-3xl font-extrabold border-yellow text-yellow mb-2">
          {language === 'english' ? 'Get To Know About Us!' : language === 'marathi' ? 'आमच्याबद्दल जाणून घ्या!' : 'जानिए हमारे बारे में!' }
        </h1>
        <p className="text-white md:w-[50vw] md:text-xl text-base leading-relaxed">
          {language === 'english' ? 'Our SR temple construction Company was established in 2011 since then we are providing the best solution.' : language === 'marathi' ? 'आमची SR Temple Construction कंपनी 2011 मध्ये स्थापन झाली तेव्हापासून आम्ही सर्वोत्तम उपाय प्रदान करीत आहोत.' : 'हमारी SR Temple Construction कंपनी की स्थापना 2011 में हुई थी'}
          <span>
            {' '}
            {language === 'english' ? 'Our engineers are working hard to build the best temple with minimum expenses.' : language === 'marathi' ? 'आमचे अभियंते कमीत कमी खर्चात सर्वोत्कृष्ट मंदिर बांधण्यासाठी परिश्रम घेत आहेत.' : 'और तब से हम सर्वोत्तम समाधान प्रदान कर रहे हैं। हमारे इंजीनियर कम से कम खर्च में बेहतरीन मंदिर निर्माण के लिए मेहनत कर रहे हैं।'}
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
