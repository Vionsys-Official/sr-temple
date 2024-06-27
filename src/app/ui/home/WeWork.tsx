'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GrUserWorker } from 'react-icons/gr';
import { useLanguage } from '@/lib/languageContext';
import templee from '../../../../public/assets/home/temple.jpeg';

function WeWork() {
  const { language } = useLanguage() || { language: 'english' };
  return (
    <div>
      <section className="light py-6 md:py-10 bg-slate-100 dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="px-4 mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-full max-w-3xl text-center">
              <motion.h2
                initial={{ opacity: 0, y: 100 }} // X:100
                whileInView={{ opacity: 1, y: 1 }} // y:100
                transition={{
                  delay: 0.2,
                  scale: { type: 'spring', stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: 'easeInOut',
                }}
                className="leading-none md:text-MainHeading md:font-MainHeading text-MainHeading_sm font-MainHeading_sm text-center mb-4"
              >
                {language === 'english' ? 'How We Work?' : language === 'marathi' ? 'आम्ही कसे काम करतो?' : 'हम कैसे काम करते हैं?'}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 100 }} // X:100
                whileInView={{ opacity: 1, y: 1 }} // y:100
                transition={{
                  delay: 0.2,
                  scale: { type: 'spring', stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: 'easeInOut',
                }}
                className="md:text-SubHeading text-SubHeading_sm md:font-SubHeading font-SubHeading_sm text-center"
              >
                {language === 'english' ? 'Our approach ensures precision, expertise and exceptional results, bringing your vision to life.' : language === 'marathi' ? 'आम्ही अचूकता, कौशल्य आणि अद्वितीय परिणाम सुनिश्चित करतो, ज्यामुळे तुमचे स्वप्न साकार होतील.' : 'हम सटीकता, विशेषज्ञता और अद्वितीय परिणाम सुनिश्चित करते हैं, जो आपके सपनों को साकार करेगा।'}
              </motion.p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 lg:gap-12">
            <div className="col-span-3 lg:col-span-1 lg:order-2">
              <Image src={templee} alt="" className="g-center bg-no-repeat bg-cover rounded-2xl h-full min-h-[175px]" />
            </div>
            <div className="col-span-3 lg:col-span-1 ezy__service13-list">
              <div className="lg:my-12">
                <div className="flex md:mt-12 mt-4 lg:text-end">
                  <div className="mr-4 lg:mr-0 lg:ml-4 lg:order-2">
                    <span
                      className="bg-[#254736] text-white w-10 h-10 rounded-full text-3xl inline-flex justify-center items-center mb-6"
                    >
                      <GrUserWorker size={25} />
                    </span>
                  </div>
                  <div>
                    <h4 className="md:text-CardHeading text-CardHeading_sm md:font-CardHeading font-CardHeading_sm mb-4">{language === 'english' ? 'Planning & Design' : language === 'marathi' ? 'योजना आणि डिझाईन' : 'योजना और डिजाइन'}</h4>
                    <p className="md:text-Paragraph md:font-Paragraph font-Paragraph_sm">
                      {language === 'english' ? 'We start with thorough measurement and site evaluation followed by creating 2D and 3D architectural maps for clarity.' : language === 'marathi' ? 'आम्ही संपूर्ण मापदंड आणि स्थळ मूल्यांकनासह सुरू करतो. त्यानंतर, स्पष्टीकरणासाठी २D आणि ३D, वास्तुकला नकाशे तयार करतो.' : 'हम संपूर्ण मापदण्ड और साइट मूल्यांकन के साथ शुरुआत करते हैं। फिर, व्याख्या के लिए 2D और 3D वास्तुशिल्प मानचित्र बनाता है।'}
                    </p>
                  </div>
                </div>
                <div className="flex md:mt-12 mt-4 lg:text-end">
                  <div className="mr-4 lg:mr-0 lg:ml-4 lg:order-2">
                    <span
                      className="bg-[#254736] text-white w-10 h-10 rounded-full text-3xl inline-flex justify-center items-center mb-6"
                    >
                      <GrUserWorker size={25} />
                    </span>
                  </div>
                  <div>
                    <h4 className="md:text-CardHeading text-CardHeading_sm md:font-CardHeading font-CardHeading_sm mb-4">
                      {language === 'english' ? 'Construction Expertise' : language === 'marathi' ? 'निर्माण कौशल्य' : 'निर्माण कौशल'}
                    </h4>
                    <p className="md:text-Paragraph md:font-Paragraph font-Paragraph_sm">
                      {language === 'english' ? 'Our expertise includes detailed cost estimation, valuation and creating structural drawings for safety and durability.' : language === 'marathi' ? 'आमच्या संपूर्ण खर्च अंदाज, मूल्यमापन आणि स्थायी नकाशे सुरक्षा इ. सुविधांचा सुरक्षा आणि दीर्घकाळासाठी समावेश आहे.' : 'हमारा पूरा लागत अनुमान, मूल्यांकन और स्थायी मानचित्र सुरक्षा आदि। सुविधाओं में सुरक्षा और स्थायित्व शामिल हैं।'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 lg:col-span-1 ezy__service13-list lg:order-3">
              <div className="lg:my-12">
                <div className="flex md:mt-12 mt-4">
                  <div className="mr-3">
                    <span
                      className="bg-[#254736] text-white w-10 h-10 rounded-full text-3xl inline-flex justify-center items-center mb-6"
                    >
                      <GrUserWorker size={25} />
                    </span>
                  </div>
                  <div>
                    <h4 className="md:text-CardHeading text-CardHeading_sm md:font-CardHeading font-CardHeading_sm mb-4">
                      {language === 'english' ? 'Traditional Wisdom' : language === 'marathi' ? 'पारंपारिक ज्ञान' : 'पारंपरिक ज्ञान'}
                    </h4>
                    <p className="md:text-Paragraph md:font-Paragraph font-Paragraph_sm">
                      {language === 'english' ? 'Our approach ensures unparalleled experience, precision, unmatched expertise, and exceptional results, bringing your vision to vibrant life.' : language === 'marathi' ? 'आमची पध्दत अनुभव, सुस्पष्टीकरण, कौशल्य आणि अद्वितीय परिणाम तुमचे लक्ष्य साकार करेल.' : 'आपके लक्ष्यों को प्राप्त करने के लिए हमारा दृष्टिकोण अनुभव, कौशल, विशेषज्ञता और अद्वितीय परिणाम है।'}
                    </p>
                  </div>
                </div>
                <div className="flex md:mt-12 mt-4">
                  <div className="mr-3">
                    <span
                      className="bg-[#254736] text-white w-10 h-10 rounded-full text-3xl inline-flex justify-center items-center mb-6"
                    >
                      <GrUserWorker size={25} />
                    </span>
                  </div>
                  <div>
                    <h4 className="md:text-CardHeading text-CardHeading_sm md:font-CardHeading font-CardHeading_sm mb-4">
                      {language === 'english' ? 'Execution & Support' : language === 'marathi' ? 'निर्माण आणि सहकार्य' : 'निर्माण और सहयोग'}
                    </h4>
                    <p className="md:text-Paragraph md:font-Paragraph font-Paragraph_sm">
                      {language === 'english' ? 'We ensure impeccable construction execution and offer ongoing maintenance, renovation, and consultancy services.' : language === 'marathi' ? 'आम्ही अत्यंत उत्तम निर्माण सुनिश्चित करतो आणि सतत देखरेख, सुधारणा आणि सल्लागार सेवा प्रदान करतो.' : 'हम सर्वोत्तम निर्माण सुनिश्चित करते हैं और निरंतर निगरानी, ​​सुधार और सलाहकार सेवाएँ प्रदान करते हैं।'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WeWork;
