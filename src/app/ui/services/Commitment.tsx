'use client';

import { useLanguage } from '@/lib/languageContext';
import { motion } from 'framer-motion';
import React from 'react';
import {
  FaMoneyBillAlt,
  FaUserFriends,
  FaPaintRoller,
  FaCheckCircle,
} from 'react-icons/fa';

function Commitment() {
  const { language } = useLanguage() || { language: 'english' };
  return (
    <div className="bg-gray-100 pt-4">
      <div className="container mx-auto">
        <h2 className="text-MainHeading font-bold text-center mb-4">{language === 'english' ? 'Our Commitment' : 'आमची बांधिलकी'}</h2>
        <motion.div
          initial={{ opacity: 0, scale: 1.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.5 },
            ease: 'easeInOut',
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition-transform transform hover:scale-105 hover:bg-amber-50">
            <FaCheckCircle className="h-6 w-6 text-SubHeading mx-auto mb-3" />
            <h3 className="text-SubHeading font-CardHeading mb-2">
              {language === 'english' ? 'Reliability' : 'विश्वसनीयता'}
            </h3>

            <p className="text-Paragraph">
              {language === 'english' ? 'We are committed to delivering trustworthy services with consistent quality, dependable service, and timely delivery.' : 'आम्ही विश्वसनीय सेवा पुरवण्यात समर्थ आहोत, त्यांच्यात सातत्यपूर्ण गुणवत्ता, विश्वसनीय सेवा आणि समयानुसार सेवा पुरवणे.'}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition-transform transform hover:scale-105 hover:bg-amber-50">
            <FaMoneyBillAlt className="h-6 w-6 text-SubHeading mx-auto mb-3" />

            <h3 className="text-SubHeading font-CardHeading mb-2">
              {language === 'english' ? 'Cost-Effectiveness' : 'खर्च-अर्थसंवेदनशीलता'}
            </h3>
            <p className="text-Paragraph">
              {language === 'english' ? 'Our solutions prioritize affordability without compromising on quality, offering transparent pricing and exceptional value.' : 'आमचे समाधान गुणवत्तेशी तडजोड न करता परवडण्याला प्राधान्य देतात, पारदर्शक किंमत आणि अद्वितीय मूल्य देतात.'}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition-transform transform hover:scale-105 hover:bg-amber-50">
            <FaUserFriends className="h-6 w-6 text-SubHeading mx-auto mb-3" />
            <h3 className="text-SubHeading font-CardHeading mb-2">
              {language === 'english' ? 'Customer Focus' : 'ग्राहक केंद्रित'}
            </h3>
            <p className="text-Paragraph">
              {language === 'english' ? 'Putting you first, we provide personalized service, dedicated support, and responsive communication to meet your needs.' : 'तुम्हाला प्रथम स्थान देऊन, आम्ही तुमच्या गरजा पूर्ण करण्यासाठी वैयक्तिकृत सेवा, समर्पित समर्थन आणि प्रतिसादात्मक संप्रेषण प्रदान करतो.'}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition-transform transform hover:scale-105 hover:bg-amber-50">
            <FaPaintRoller className="h-6 w-6 text-SubHeading mx-auto mb-3" />
            <h3 className="text-SubHeading mb-2 font-CardHeading">
              {language === 'english' ? 'Excellent Finishing' : 'उत्कृष्ट फिनिशिंग'}
            </h3>
            <p className="text-Paragraph">
              {language === 'english' ? 'Our focus on detail, high-quality materials, and superior craftsmanship ensures outstanding finishing in every construction aspect.' : 'तपशील, उच्च-गुणवत्तेची सामग्री आणि उत्कृष्ट कारागिरीवर आमचे लक्ष प्रत्येक बांधकाम पैलूमध्ये उत्कृष्ट फिनिशिंग सुनिश्चित करते.'}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Commitment;
