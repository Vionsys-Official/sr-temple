/* eslint-disable @typescript-eslint/no-use-before-define */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import fadein from '@/utils/variants';
import { FaPencilRuler, FaHardHat } from 'react-icons/fa';
import { BiTask } from 'react-icons/bi';
import { useLanguage } from '@/lib/languageContext';

function ChooseUs() {
  const { language } = useLanguage() || { language: 'english' };
  return (
    <div className="pt-8 px-4">
      <motion.h1
        variants={fadein('right', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="text-MainHeading font-MainHeading pb-4 text-center capitalize"
      >
        {language === 'english' ? 'Key Advantages of Choosing Us' : 'आमच्या निवडण्याच्या मुख्य फायदे '}
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-evenly items-center py-6">
        <div className="relative transition-all duration-500 hover:translate-y-2 w-full md:w-[27vw] bg-neutral-50 rounded-lg shadow-xl flex items-center justify-center p-4 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-amber-400">
          <div className="flex flex-col justify-center gap-4 md:gap-6 items-center text-center w-full">
            <span>
              <FaPencilRuler size={30} className="font-extrabold" />
            </span>
            <span className="font-CardHeading text-CardHeading">{language === 'english' ? 'Design' : 'रचना'}</span>
            <p className="text-Paragraph font-Paragraph">
              {language === 'english' ? 'Our team of experienced architects and designers create visually stunning and structurally sound temple designs.' : 'आमची अनुभवी वास्तुविशारद आणि डिझायनर्सची टीम विचाराशील आश्चर्यकारक आणि संरचनात्मकदृष्ट्या सुदृढ मंदिर डिझाइन तयार करते.'}
            </p>
          </div>
        </div>

        <div className="relative transition-all duration-500 hover:translate-y-2 w-full md:w-[27vw] bg-neutral-50 rounded-lg shadow-xl flex items-center justify-center p-4 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-amber-400">
          <div className="flex flex-col justify-center gap-4 md:gap-6 items-center text-center w-full">
            <span>
              <BiTask size={30} className="font-extrabold" />
            </span>
            <span className="font-CardHeading text-CardHeading">
              {language === 'english' ? 'Planning' : 'नियोजन'}
            </span>
            <p className="text-Paragraph font-Paragraph">
              {language === 'english' ? 'We handle all the logistical and regulatory aspects of temple construction ensuring a smooth and efficient process.' : 'आम्ही मंदिर बांधणीच्या सर्व लॉजिस्टिक आणि नियामक बाबी हाताळतो, प्रक्रिया सुरळीत आणि कार्यक्षमतेची खात्री करून घेतो.'}
            </p>
          </div>
        </div>

        <div className="relative transition-all duration-500 hover:translate-y-2 w-full md:w-[27vw] bg-neutral-50 rounded-lg shadow-xl flex items-center justify-center p-4 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-amber-400">
          <div className="flex flex-col justify-center gap-4 md:gap-6 items-center text-center w-full">
            <span>
              <FaHardHat size={30} className="font-extrabold" />
            </span>
            <span className="font-CardHeading text-CardHeading">
              {language === 'english' ? 'Construction' : 'बांधकाम'}
            </span>
            <p className="text-Paragraph font-Paragraph">
              {language === 'english' ? 'Our skilled craftsmen bring your temple design to life, using traditional techniques and high-quality materials.' : 'आमचे कुशल कारागीर पारंपारिक तंत्रे आणि उच्च-गुणवत्तेची सामग्री वापरून तुमच्या मंदिराची रचना उदयास आणतो.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
