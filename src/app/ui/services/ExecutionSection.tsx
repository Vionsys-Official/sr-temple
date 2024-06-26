'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/languageContext';

function ExecutionSection() {
  const { language } = useLanguage() || { language: 'english' };
  return (
    <section>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex justify-center items-center md:border-r border-yellow">
            <Image
              className="object-cover  rounded shadow-lg"
              src="/assets/services/vastu.jpg"
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
              className="md:px-10 p-2"
            >
              <h2 className="max-w-full mb-4 text-MainHeading_sm font-bold tracking-tight text-gray-900 sm:text-MainHeading sm:leading-none">
                {language === 'english' ? '2D, 3D & Vastu Shastra Plan Drawing Services' : language === 'marathi' ? '2D, 3D आणि वास्तुशास्त्र योजना रेखाचित्र सेवा' : '2D, 3D और वास्तुकला नक्शा सेवाएँ'}
              </h2>
              <p className="text-Paragraph_sm md:text-Paragraph">
                {language === 'english' ? 'We offer specialized 2D and 3D plan drawing services, incorporating the principles of Vastu Shastra to create spaces that are not only visually stunning but also spiritually harmonious. Our skilled designers and architects work closely with you to develop detailed plans that reflect your vision and adhere to traditional architectural guidelines. These comprehensive drawings provide a clear blueprint for your temple construction project.' : language === 'marathi' ? 'आम्ही विशेष 2D आणि 3D योजना नकाशा सेवा प्रदान करतो, ज्यांमध्ये वास्तु शास्त्राचे सिद्धांत समाविष्ट करून स्थान निर्माण करण्यासाठी आणि आध्यात्मिक रूपांतर करण्यासाठी मदत करते. आमचे कुशल डिझाइनर आणि वास्तुविशारद आपल्याशी समाविष्ट होतात आणि तुमच्या दृष्टीकोन प्रतिबिंबित करणाऱ्या आणि पारंपारिक वास्तुशिल्पाच्या मार्गदर्शक अनुसार रचना करतात. या विस्तृत ड्रॉइंग्ज तुमच्या मंदिर निर्माण प्रकल्पासाठी स्पष्ट नकाशा प्रदान करतात.' : 'हम जगह बनाने और आध्यात्मिक रूप से बदलने में मदद करने के लिए वास्तु शास्त्र के सिद्धांतों को शामिल करते हुए विशेष 2D और 3D योजना मानचित्र सेवाएं प्रदान करते हैं। हमारे कुशल डिज़ाइनर और आर्किटेक्ट आपके साथ जुड़ते हैं और ऐसे डिज़ाइन बनाते हैं जो आपकी दृष्टि को प्रतिबिंबित करते हैं और पारंपरिक वास्तुशिल्प दिशानिर्देशों का पालन करते हैं। ये विस्तृत चित्र आपके मंदिर निर्माण परियोजना के लिए एक स्पष्ट नक्शे प्रदान करते हैं।'}

              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-center lg:order-1 order-2 justify-center md:border-r border-yellow">
            <motion.div
              initial={{ opacity: 0, x: 100 }} // X:100
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
                {language === 'english' ? 'Temple Execution/ Construction Services' : language === 'marathi' ? 'मंदिर अंमलबजावणी/ बांधकाम सेवा' : 'मंदिर निर्माण सेवाएँ'}
              </h2>
              <p className="text-Paragraph_sm md:text-Paragraph">
                {language === 'english' ? 'Our experienced construction team brings your temple plans to life with precision and craftsmanship. We oversee every aspect of the construction process, ensuring that all work is carried out to the highest standards. From foundation laying to intricate carvings and final finishes, our team is dedicated to creating temples that are both structurally sound and spiritually uplifting.' : language === 'marathi' ? 'आमची अनुभवी बांधकाम टीम तुमच्या मंदिराच्या योजना अचूक आणि कारागिरीने उदयास आणते. आम्ही बांधकाम प्रक्रियेच्या प्रत्येक पैलूवर देखरेख करतो, हे सुनिश्चित करतो की सर्व काम सर्वोच्च मानकांनुसार चालते. पाया घालण्यापासून ते किचकट कोरीव काम आणि अंतिम फिनिशिंगपर्यंत, आमची टीम अशी मंदिरे तयार करण्यासाठी समर्पित आहे जी संरचनात्मकदृष्ट्या सुदृढ आणि आध्यात्मिकरित्या परिपूर्ण करणारी आहेत.' : 'हमारी अनुभवी निर्माण टीम आपके मंदिर के योजना को सटीकता और कार्यक्षमता से उत्तेजित करती है। हम हर निर्माण प्रक्रिया के प्रत्येक पहलू का ध्यान रखते हैं, जिससे सुनिश्चित हो कि सभी काम सर्वोच्च मानकों के अनुसार होते हैं। नींव रखने से लेकर जटिल नक्काशी से लेकर फिनिशिंग काम तक, हमारी टीम संरचनात्मक दृष्टिकोण से मंदिरों को तैयार करने में समर्पित है जो स्थापात्मक और आध्यात्मिक दृष्टिकोण से परिपूर्ण होती हैं।'}
              </p>
            </motion.div>
          </div>

          <div className="flex justify-center lg:order-2 order-1 items-center">
            <Image
              className="object-cover  rounded shadow-lg"
              src="/assets/services/Execution.jpg"
              alt="services"
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8">
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
                {language === 'english' ? 'Consultancy Services' : language === 'marathi' ? 'सल्लागार सेवा' : 'सलाहकार सेवाएं'}
              </h2>
              <p className="text-Paragraph_sm md:text-Paragraph">
                {language === 'english' ? 'We provide expert consultancy services to guide you through every stage of your temple construction project. Our consultants offer valuable insights and advice on design, materials and construction techniques, ensuring that your project is executed seamlessly. We are committed to helping you achieve your vision while adhering to the highest standards of quality and tradition.' : language === 'marathi' ? 'तुमच्या मंदिर बांधकाम प्रकल्पाच्या प्रत्येक टप्प्यावर तुम्हाला मार्गदर्शन करण्यासाठी आम्ही तज्ञ सल्ला सेवा प्रदान करतो. आमचे सल्लागार डिझाईन, साहित्य आणि बांधकाम तंत्रांवर मौल्यवान सुचना आणि सल्ला देतात, यामुळे तुमचा प्रकल्प अखंडपणे कार्यरत असेल याची खात्री करून. गुणवत्ता आणि परंपरेच्या सर्वोच्च मानकांचे पालन करताना तुमची दृष्टी साध्य करण्यात मदत करण्यासाठी आम्ही वचनबद्ध आहोत.' : 'हम आपके मंदिर निर्माण परियोजना के प्रत्येक चरण में आपको मार्गदर्शन के लिए विशेषज्ञ सलाह सेवा प्रदान करते हैं। हमारे सलाहकार डिजाइन, साहित्य और निर्माण तंत्रों पर मूल्यवान सूचना और सलाह प्राप्त होती है, जिससे आपकी परियोजना अखण्डता से कार्यान्वित हो सके। हम सर्वोच्च गुणवत्ता और परंपरागत मानकों का पालन करते हुए आपके लक्ष्यों को पूरा करने में मदद करने के लिए प्रतिबद्ध हैं।'}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExecutionSection;
