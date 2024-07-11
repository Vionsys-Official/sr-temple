'use client';

import { useLanguage } from '@/lib/languageContext';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react'

const Consultancy = () => {
    const { language } = useLanguage() || { language: 'english' };
  return (
    <div className="bg-amber-50 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex justify-center items-center md:border-r border-yellow">
            <Image
              className="object-cover rounded shadow-lg"
              src="/assets/services/Consultancy.jpg"
              alt="services"
              height={500}
              width={500}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }} // X:100
              whileInView={{ opacity: 1, x: 0 }} // y:100
              transition={{
                delay: 0.2,
                x: { type: 'spring', stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: 'easeInOut',
              }}
              className="md:px-10 p-2 mb-6"
            >
              <h2 className="max-w-full mb-4 text-MainHeading_sm font-bold tracking-tight text-gray-900 sm:text-MainHeading sm:leading-none">
                {language === 'english' ? 'Consultancy Services' : language === 'marathi' ? 'सल्लागार सेवा' : 'सलाहकार सेवाएँ'}
              </h2>
              <p className="text-Paragraph_sm md:text-Paragraph">
                {language === 'english' ? 'We provide expert consultancy services to guide you through every stage of your temple construction project. Our consultants offer valuable insights and advice on design, materials and construction techniques, ensuring that your project is executed seamlessly. We are committed to helping you achieve your vision while adhering to the highest standards of quality and tradition.' : language === 'marathi' ? 'तुमच्या मंदिर बांधकाम प्रकल्पाच्या प्रत्येक टप्प्यावर तुम्हाला मार्गदर्शन करण्यासाठी आम्ही तज्ञ सल्ला सेवा प्रदान करतो. आमचे सल्लागार डिझाईन, साहित्य आणि बांधकाम तंत्रांवर मौल्यवान सुचना आणि सल्ला देतात, यामुळे तुमचा प्रकल्प अखंडपणे कार्यरत असेल याची खात्री करून. गुणवत्ता आणि परंपरेच्या सर्वोच्च मानकांचे पालन करताना तुमची दृष्टी साध्य करण्यात मदत करण्यासाठी आम्ही वचनबद्ध आहोत.' : 'हम आपके मंदिर निर्माण परियोजना के प्रत्येक चरण में आपको मार्गदर्शन के लिए विशेषज्ञ सलाह सेवा प्रदान करते हैं। हमारे सलाहकार डिजाइन, साहित्य और निर्माण तंत्रों पर मूल्यवान सूचना और सलाह प्राप्त होती है, जिससे आपकी परियोजना अखण्डता से कार्यान्वित हो सके। हम सर्वोच्च गुणवत्ता और परंपरागत मानकों का पालन करते हुए आपके लक्ष्यों को पूरा करने में मदद करने के लिए प्रतिबद्ध हैं।'}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
  )
}

export default Consultancy