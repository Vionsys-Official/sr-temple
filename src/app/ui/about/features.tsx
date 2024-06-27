'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { FaCalendarCheck, FaGlobeAmericas } from 'react-icons/fa';
import { FaMoneyCheck } from 'react-icons/fa6';
import { useLanguage } from '@/lib/languageContext';

// eslint-disable-next-line react/function-component-definition
const Features: React.FC = () => {
  const { language } = useLanguage() || { language: 'english' };

  return (
    <div className="mx-5 my-5 px-4 py-4 md:mx-10 md:py-7 md:mb-4 md:mt-10 sm:max-w-xl md:max-w-full bg-yellow">
      <div className="text-center md:w-full">
        <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl md:mb-10">
          <div />
          <motion.h2
            initial={{ opacity: 0, y: 100 }} // X:100
            whileInView={{ opacity: 1, y: 1 }} // y:100
            transition={{
              delay: 0.2,
              scale: { type: 'spring', stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: 'easeInOut',
            }}
            className="max-w-lg font-MainHeading_sm md:font-MainHeading text-MainHeading_sm md:text-MainHeadingleading-none tracking-tight text-gray sm:text-4xl md:mx-auto"
          >
            {' '}
            {language === 'english' ? 'Here Are Our Key Features!' : language === 'marathi' ? 'आमची प्रमुख वैशिष्ट्ये!' : 'हमारी प्रमुख विशेषताएँ!'}
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
            className="text-base text-gray md:text-Paragraph text-Paragraph_sm py-2"
          >
            {language === 'english' ? 'At SR Temple Construction, we take pride in our meticulous attention to detail, ensuring that every project reflects our dedication to excellence and our clients visions.' : language === 'marathi' ? 'SR Temple Construction मध्ये, प्रत्येक प्रकल्पात आमचे उत्कृष्टतेचे समर्पण आणि आमच्या ग्राहकांच्या दृष्टीकोनाचे प्रतिबिंब पडेल याची खात्री करून, तपशीलांकडे आमचे बारकाईने लक्ष दिल्याचा आम्हाला अभिमान वाटतो.' : 'SR Temple Construction में, प्रत्येक प्रोजेक्ट में हमारी उत्कृष्टता की प्रतिबद्धता और हमारे ग्राहकों के दृष्टिकोण को प्रतिबिंबित करते हुए, विवरणों पर हमारे गहन ध्यान पर हमें गर्व है।'}
          </motion.p>
        </div>
      </div>
      <div className="grid md:gap-8 md:row-gap-10 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:px-4 md:py-2 text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }} // X:100
          whileInView={{ opacity: 1, y: 1 }} // y:100
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: 'easeInOut',
          }}
          className="max-w-md"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }} // X:100
            whileInView={{ opacity: 1, y: 1 }} // y:100
            transition={{
              delay: 0.2,
              scale: { type: 'spring', stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: 'easeInOut',
            }}
            className="flex items-center justify-center h-10 text-center w-full"
          >
            <FaCalendarCheck size={40} className="text-center pb-2 flex items-center md:pb-2" />
          </motion.div>
          <h6 className="mb-0 text-gray md:text-gray md:mb-2 md:font-CardHeading font-CardHeading_sm text-CardHeading_sm md:text-CardHeading leading-5">
            {language === 'english' ? 'Years of service' : language === 'marathi' ? 'सेवेचे वर्षे' : 'सेवा के वर्ष'}
          </h6>
          <p className="mb-0 md:mb-3 text-gray text-Paragraph_sm md:text-Paragraph font-Paragraph md:font-Paragraph ">
            {language === 'english' ? 'Designing and constructing temples with meticulous craftsmanship since 2011.' : language === 'marathi' ? '2011 पासून बारकाईने कुशलतेने मंदिरांची रचना आणि बांधणी करत आहोत.' : '2011 से कुशलता से मंदिरों की डिज़ाइन और निर्माण कर रहे हैं।'}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }} // X:100
          whileInView={{ opacity: 1, y: 1 }} // y:100
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: 'easeInOut',
          }}
          className="max-w-md"
        >
          <div className="flex items-center justify-center h-10 text-center w-full">
            <FaGlobeAmericas size={40} className="md:pb-2 pb-2" />
          </div>
          <h6 className="md:mb-2 text-gray md:text-gray md:font-CardHeading font-CardHeading_sm text-CardHeading_sm md:text-CardHeading leading-5">
            {language === 'english' ? 'Area of work' : language === 'marathi' ? 'कामाचे क्षेत्र' : 'काम का क्षेत्र'}
          </h6>
          <p className="md:mb-3 text-gray text-Paragraph_sm md:text-Paragraph font-Paragraph md:font-Paragraph ">
            {language === 'english' ? 'Working all over India, and we give best designs in market.' : language === 'marathi' ? 'संपूर्ण भारतात काम करतो आणि बाजारातील सर्वोत्तम डिझाईन्स देतो.' : 'पूरे भारत में काम करते हैं और बाजार में सबसे अच्छे डिज़ाइन प्रदान करते हैं।'}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }} // X:100
          whileInView={{ opacity: 1, y: 1 }} // y:100
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: 'easeInOut',
          }}
          className="max-w-md"
        >
          <div className="flex items-center justify-center h-10 text-center w-full">
            <FaMoneyCheck size={40} className="md:pb-2 pb-2" />
          </div>
          <h6 className="md:mb-2 text-gray md:text-gray md:font-CardHeading font-CardHeading_sm text-CardHeading_sm md:text-CardHeading leading-5">
            {language === 'english' ? 'Cost' : language === 'marathi' ? 'खर्च' : 'लागत'}
          </h6>
          <p className="md:mb-3 text-gray text-Paragraph_sm md:text-Paragraph font-Paragraph md:font-Paragraph ">
            {language === 'english' ? 'Best result, minimum cost. Guaranteed quality, timely delivery.' : language === 'marathi' ? 'सर्वोत्तम परिणाम, कमी खर्च. हमी गुणवत्ता, वेळेवर वितरण.' : 'सर्वोत्तम परिणाम, कम लागत। गुणवत्ता की गारंटी, समय पर वितरण।'}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
