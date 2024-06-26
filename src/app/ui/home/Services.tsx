'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LuConstruction } from 'react-icons/lu';
import { service, serviceMarathi } from '@/data/HomeService';
import { useLanguage } from '@/lib/languageContext';
import Service from '../../../../public/assets/home/Service.jpg';

function Services() {
  const { language } = useLanguage() || { language: 'english' };
  return (
    <div>
      <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl md:mb-6 flex flex-col items-center justify-center">
              <motion.h2
                initial={{ opacity: 0, x: 100 }} // X:100
                whileInView={{ opacity: 1, x: 1 }} // y:100
                transition={{
                  delay: 0.2,
                  scale: { type: 'spring', stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: 'easeInOut',
                }}
                className="tracking-tight md:text-MainHeading md:font-MainHeading text-MainHeading_sm font-MainHeading_sm text-center"
              >
                {language === 'english' ? 'Services We Deliver' : 'सुविधा'}
              </motion.h2>
              <motion.h6
                initial={{ opacity: 0, x: -100 }} // X:100
                whileInView={{ opacity: 1, x: 1 }} // y:100
                transition={{
                  delay: 0.2,
                  scale: { type: 'spring', stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: 'easeInOut',
                }}
                className="md:text-SubHeading text-SubHeading_sm md:font-SubHeading font-SubHeading_sm text-center"
              >
                {language === 'english' ? 'Building temples, fostering spirituality' : 'मंदिर बांधणे म्हणजे आध्यात्मिकतेची वातावरणे विकसित करणे'}
              </motion.h6>
              <motion.p
                initial={{ opacity: 0, x: 100 }} // X:100
                whileInView={{ opacity: 1, x: 1 }} // y:100
                transition={{
                  delay: 0.2,
                  scale: { type: 'spring', stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: 'easeInOut',
                }}
                className="md:text-Paragraph md:font-Paragraph font-Paragraph_sm flex flex-col text-center py-3 mb-5"
              >
                {language === 'english' ? 'We offer a range of services highlighted below. From building and restoring temples with care and precision to managing everything from design to construction ensuring each temple honors its spiritual and cultural significance, we are committed to quality and respect in every project. Here are some of our services; to learn more, visit:' : 'आपल्याला खास अद्यावत केलेल्या सेवा त्यात सुंदरता आणि सुसंगतीने मंदिरे निर्माण करणे आणि पुनर्स्थापन करणे, त्यांची देखरेख करणे आणि निर्माणाच्या डिझायनपासून सुरुवात ते मंदिर पूर्ण करणे ह्या सर्व प्रकल्पांमध्ये आम्ही विशेषत: प्रत्येक मंदिराला आध्यात्मिक आणि सांस्कृतिक महत्त्व देण्याचा प्रयत्न करतो. आमच्या कार्यांची अधिक माहिती मिळवण्यासाठी खालील सुविधांच्या लिस्टमध्ये पाहा; अधिक माहितीसाठी, भेट द्या:'}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 100 }} // X:100
                whileInView={{ opacity: 1, y: 1 }} // y:100
                transition={{
                  delay: 0.2,
                  scale: { type: 'spring', stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: 'easeInOut',
                }}
                className="flex flex-col justify-center items-center"
              >
                <Link href="/services">
                  <Button type="submit" variant="outline" className="px-4 py-1 bg-yellow hover:bg-[#deb01d] text-black rounded-md text-buttonText font-buttonText">{language === 'english' ? 'Explore Services' : 'सुविधांची संपूर्ण माहितीसाठी'}</Button>
                </Link>
              </motion.div>
            </div>
          </div>
          <div>
            <Image src={Service} alt="" className="object-cover w-full h-56 rounded shadow-lg sm:h-96" />
          </div>
        </div>
        <div className="py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="grid md:gap-8 gap-3 row-gap-5 lg:grid-cols-3">
            {(language === 'english' ? service : serviceMarathi).map((item) => (
              <div key={item.id} className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-[#f7c100]  group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-[#f7c100]  group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-[#f7c100] group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-[#f7c100]  group-hover:scale-y-100" />
                <div className="relative md:p-4 p-1 bg-white rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                      <LuConstruction size={25} className="text-[#254736]" />
                    </div>
                    <h6 className="font-semibold leading-5">{item.title}</h6>
                  </div>
                  <p className="mb-2 text-sm text-gray-900">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
