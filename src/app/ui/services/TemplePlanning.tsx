'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/languageContext';

function TemplePlanning() {
  const { language } = useLanguage() || { language: 'english' };
  return (
    <section>

      <div className="p-5 mx-auto sm:p-10 bg-white">
        <div className="flex flex-col items-center justify-center shadow bg-slate-400 shadow-slate-300 max-w-full mx-auto overflow-hidden rounded">
          <div className="py-11 w-full bg-gray" />
          <div className="p-6 m-4 flex justify-center mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-white shadow-inner">
            <div className="">
              <h1 className="max-w-full flex justify-center text-MainHeading_sm font-bold tracking-tight text-gray-900 sm:text-MainHeading sm:leading-none">
                {language === 'english' ? 'Temple Construction Services' : language === 'marathi' ? 'मंदिर निर्माण सेवा' : 'मंदिर निर्माण सेवाएँ'}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: 'spring', stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: 'easeInOut',
                }}
                className="max-w-full mb-4 text-MainHeading_sm font-bold tracking-tight text-gray-900 sm:text-MainHeading sm:leading-none"
              >
                {language === 'english' ? 'Temple Planning and Measurement Services' : language === 'marathi' ? 'नियोजन आणि मापन सेवा' : 'योजना और माप सेवाएँ'}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: 'spring', stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: 'easeInOut',
                }}
                className="text-Paragraph_sm md:text-Paragraph"
              >
                {language === 'english' ? 'Our team of experts provides meticulous planning and measurement services tailored to the unique needs of temple construction. We understand the importance of accurate measurements in creating harmonious and aesthetically pleasing structures. Our planning services ensure that every detail, from site selection to spatial organization, is in perfect alignment with your vision and religious requirements.' : language === 'marathi' ? 'आमची तज्ज्ञांची टीम मंदिर बांधणीच्या अनन्य गरजांनुसार सूक्ष्म नियोजन आणि मोजमाप सेवा प्रदान करते. सुसंवादी आणि सौंदर्यदृष्ट्या सुखकारक रचना तयार करण्यासाठी अचूक मोजमापांचे महत्त्व आम्हाला समजते. आमच्या नियोजन सेवा हे सुनिश्चित करतात की प्रत्येक तपशील, स्थान निवडीपासून ते स्थानिक संस्थेपर्यंत, तुमची दृष्टी आणि धार्मिक आवश्यकतांशी संपूर्ण अनुकूल असते.' : 'हमारे विशेषज्ञों की टीम मंदिर निर्माण की विशिष्ट आवश्यकताओं के अनुसार सावधानीपूर्वक योजना और माप सेवाएं प्रदान करती है। हम एक सामंजस्यपूर्ण और सौंदर्यपूर्ण रूप से डिज़ाइन बनाने के लिए सटीक माप के महत्व को समझते हैं। हमारी नियोजन सेवाएँ सुनिश्चित करती हैं कि स्थान चयन से लेकर स्थानीय संगठन तक हर विवरण, आपके दृष्टिकोण और धार्मिक आवश्यकताओं के साथ पूरी तरह से समर्थ है।'}
              </motion.p>
            </div>
            <p className="mb-4 text-sm font-bold text-gray tracking-widest uppercase">
              {language === 'english' ? 'Features' : language === 'marathi' ? 'वैशिष्ट्ये' : 'विशेषताएँ'}
            </p>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: 'spring', stiffness: 30 },
                opacity: { duration: 0.5 },
                ease: 'easeInOut',
              }}
              className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0"
            >
              <ul className="space-y-3">
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  {language === 'english' ? 'Spatial Design and Layout' : language === 'marathi' ? 'स्थानिक रचना आणि मांडणी' : 'स्थानीय निर्माण और व्यवस्थापन'}
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  {language === 'english' ? 'Construction Planning' : language === 'marathi' ? 'बांधकाम नियोजन' : 'निर्माण योजना'}
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  {language === 'english' ? 'Regulatory Compliance' : language === 'marathi' ? 'नियामक अनुपालन' : 'नियामक अनुपालन'}
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  {language === 'english' ? 'Project Management' : language === 'marathi' ? 'प्रकल्प व्यवस्थापन' : 'प्रकल्प प्रबंधन'}
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  {language === 'english' ? 'Measurement Services' : language === 'marathi' ? 'मापन सेवा' : 'मापन सेवाएँ'}
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  {language === 'english' ? 'Cultural and Religious Sensitivity' : language === 'marathi' ? 'सांस्कृतिक आणि धार्मिक संवेदनशीलता' : 'सांस्कृतिक एवं धार्मिक संवेदनशीलता'}
                </li>
              </ul>
            </motion.div>
          </div>
          <div>
            <Image
              className="object-cover w-full h-full rounded shadow-lg"
              src="/assets/services/planing.jpg"
              alt="services"
              height={1000}
              width={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TemplePlanning;
