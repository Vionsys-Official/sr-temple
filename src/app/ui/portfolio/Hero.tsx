'use client';

import React from 'react';
import Image from 'next/image';
import Mob from '@/../public/assets/portfolio/Mob.jpg';
import { motion } from 'framer-motion';
import fadein from '@/utils/variants';
import { useLanguage } from '@/lib/languageContext';

function Hero() {
  const { language } = useLanguage() || { language: 'english' };
  return (
    <main className="md:h-[100vh] h-auto md:w-[100vw] pb-10 bg-yellow overflow-x-hidden flex flex-col md:flex-row justify-evenly items-center">
      <div className="relative  md:w-[45vw] py-10 p-4 pb-4 md:p-0 md:space-y-3 space-y-1">
        <p className="text-white bg-slate-800 md:w-32 px-3 py-2 rounded-2xl text-center mx-auto md:mx-0">
          {language === 'english' ? 'Our Projects' : 'आमचे प्रकल्प'}
        </p>
        <motion.h1
          variants={fadein('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="md:text-5xl text-3xl leading-none font-MainHeading text-black py-4 text-center md:text-left"
        >
          {language === 'english' ? 'Majestic Temples' : 'भव्य मंदिरे'}
          <span className="block">{language === 'english' ? 'Built With Devotion' : 'भक्तीने बांधले'}</span>
        </motion.h1>
        <motion.h3
          variants={fadein('left', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="md:text-xl text-base text-white text-center md:text-left"
        >
          {language === 'english' ? 'Constructing the Heart of Worship signifies building a dedicated space that nurtures spiritual connection, creating a reverent environment for both communal and personal worship.' : 'विभावनाच्या हृदयाचे निर्माण हा म्हणजे एक विशेष स्थान तयार करणे ज्या ठिकाणी आपल्याला आपल्या आत्म्याच्या संबंधात वाढ झाली जाते आणि समाजाच्या आणि व्यक्तिच्या पूजेच्या उपस्थितीसाठी उत्कृष्ट परिसर तयार करणे.'}
        </motion.h3>
      </div>

      <div className="relative box-shadow: 5px 5px 2.5px 6px rgb(209, 218, 218) shadow-md shadow-slate-500 flex justify-center h-[300px] md:h-[450px] w-[160px] md:w-[250px] border-4 border-black rounded-2xl bg-gray-50 md:top-12">
        <span className="absolute z-10 border border-black bg-slate-950 w-24 h-3 rounded-br-xl rounded-bl-xl" />
        <span className="absolute -right-2 top-14 border-4 border-black h-7 rounded-md" />
        <span className="absolute -right-2 bottom-36 border-4 border-black h-10 rounded-md" />
        <Image
          src={Mob}
          alt="Image not Found"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
    </main>
  );
}

export default Hero;
