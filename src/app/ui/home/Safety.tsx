'use client';

import React from 'react';
import Image from 'next/image';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/languageContext';
import s1 from '../../../../public/assets/home/S1.jpg';

const features = [
  {
    title: 'Safety Standards & Protocols',
    content: 'We strictly adhere to local, state, and federal safety regulations, implementing rigorous protocols across all projects to ensure compliance and a safe work environment.',
  },
  {
    title: 'Safety Certifications & Training',
    content: 'Our team maintains certified safety standards such as OSHA regulations, complemented by ongoing training to stay updated on the latest practices.',
  },
  {
    title: 'Interactive Safety Tools',
    content: 'Clients benefit from interactive safety tools including checklists to assess project risks, empowering proactive safety management.',
  },
  {
    title: 'Communication and Reporting',
    content: 'We offer an easy-to-use system for clients to report safety concerns promptly, alongside readily accessible emergency contact details.',
  },
];

const featuresMarathi = [
  {
    title: 'सुरक्षा मानके आणि प्रोटोकॉल',
    content: 'आम्ही स्थानिक, राज्य आणि संघीय सुरक्षा नियमांचे काटेकोर पालन करतो, सर्व प्रकल्पांमध्ये काटेकोर प्रोटोकॉल अंमलात आणतो जेणेकरून नियमांचे पालन होईल आणि एक सुरक्षित कामाचे वातावरण तयार होईल.',
  },
  {
    title: 'सुरक्षा प्रमाणपत्रे आणि प्रशिक्षण',
    content: 'आमचा संघ OSHA नियमांप्रमाणे प्रमाणित सुरक्षा मानके राखतो आणि नवीनतम पद्धतींचे ज्ञान ठेवण्यासाठी सतत प्रशिक्षण घेतो.',
  },
  {
    title: 'आंतरक्रियात्मक सुरक्षा साधने',
    content: 'ग्राहकांना प्रकल्पाच्या जोखमींचे मूल्यांकन करण्यासाठी चेकलिस्टसह आंतरक्रियात्मक सुरक्षा साधनांचा लाभ देतो, ज्यामुळे सक्रिय सुरक्षा व्यवस्थापन शक्य होते.',
  },
  {
    title: 'संप्रेषण आणि अहवाल',
    content: 'ग्राहकांना सुरक्षाबद्दल त्वरित नोंदवण्यासाठी सोपी प्रणाली प्रदान करतो, तसेच आपत्कालीन संपर्क तपशील सहजपणे उपलब्ध करतो.',
  },
];
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
        {language === 'english' ? 'Our Safety Excellence' : 'आमची सुरक्षा उत्कृष्टता'}
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
        {language === 'english' ? 'Integrated Safety and Client Engagement' : 'एकात्मिक सुरक्षा आणि ग्राहक प्रतिबद्धता'}
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
            <dl className="mt-4 space-y-6 leading-5">
              {(language === 'english' ? features : featuresMarathi).map((feature) => (
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
            </dl>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
