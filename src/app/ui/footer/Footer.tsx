/* eslint-disable max-len */

'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { MdOutlineMail, MdPhoneInTalk } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/languageContext';
import LinkedIn from '../../../../public/assets/socialicons/linkedin.png';
import Facebook from '../../../../public/assets/socialicons/facebook.png';
import Instagram from '../../../../public/assets/socialicons/instagram.png';
import Twitter from '../../../../public/assets/socialicons/Twitter4.png';

function Footer() {
  const { language } = useLanguage() || { language: 'english' };
  return (
    <footer className="px-4 w-[100vw] overflow-hidden bg-slate-200  z-10 text-black">
      {/* Footer Content */}
      <div className="bg-transparent pt-5 overflow-hidden " />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          y: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut',
        }}
        className="flex flex-col gap-4"
      >
        <div className="flex md:flex-row flex-col md:gap-24 gap-4 justify-evenly items-center w-full md:px-10 px-2 ">

          <div className="flex flex-col gap-3 justify-center items-center ">
            <div className="p-3 bg-white rounded-full">
              <MdPhoneInTalk
                size={21}
                className="w-8 h-8"
              />
            </div>
            <div className="">
              <span>
                {' '}
                {language === 'english' ? 'Phone' : ' फोन नं'}
                : +91 9834632900
              </span>
            </div>
          </div>

          <div className="flex flex-col  gap-3 justify-center items-center">
            <div className="p-3 bg-white rounded-full">
              <MdOutlineMail size={22} className="w-8 h-8" />
            </div>
            <div>
              <span className="text-wrap flex  ">

                sunil.rathod@srtempleconstructions.com
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 justify-center  items-center">
            <div className="p-3 bg-white rounded-full">
              <GrLocation className="w-8 h-8" />
            </div>
            <div>
              <span>
                {' '}
                {language === 'english' ? 'Address: Shivaji Chowk Loha, Nanded - 431708, India' : language === 'marathi' ? 'पत्ता : शिवाजी चौक लोहा, नांदेड - 431708, भारत' : 'पता : शिवाजी चौक लोहा, नांदेड - 431708, भारत'}
              </span>
            </div>

          </div>
        </div>
        <hr />
        <div className="flex md:flex-row flex-col md:gap-10 gap-4 md:pl-10 pl-0 pb-4 ">

          {/* Card for company info and social media links */}
          <div className="md:w-[40%] w-full flex items-center">
            <div className="flex-1 justify-center items-center text-center md:w-auto w-full">
              <div className="bg-white h-full p-4 shadow-lg rounded-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                <div className="w-full flex justify-center items-center sm:px-2">
                  <Link href="/about" passHref>
                    <div className="flex text-center text-gray md:text-SubHeading text-SubHeading_sm font-bold ">
                      {language === 'english' ? 'SR Temple Construction' : 'SR Temple Construction'}
                    </div>
                  </Link>
                </div>
                <div className="w-full flex justify-center items-center ">
                  <p className="md:text-Paragraph text-Paragraph_sm md:w-auto w-full py-2 sm:px-6">
                    {language === 'english' ? 'At SR Temple Construction, we are dedicated to offering unparalleled solutions for all your temple construction needs. With decades of experience and a team of skilled professionals, we have established ourselves as a leading provider of high-quality temple construction services.' : language === 'marathi' ? 'SR Temple Construction मध्ये, आम्ही तुमच्या सर्व मंदिर बांधकाम गरजांसाठी अतुलनीय उपाय पुरवण्यासाठी समर्पित आहोत. दहा वर्षांपेक्षा जास्त अनुभव आणि कुशल कामगारांच्या टीमसह, आम्ही उच्च दर्जाच्या मंदिर बांधकाम सेवांचा एक आघाडीचे पुरवठादार म्हणून स्वतःची ओळख निर्माण केली आहे.' : 'SR Temple Construction में, हम आपकी सभी मंदिर निर्माण आवश्यकताओं के लिए अद्वितीय समाधान प्रदान करने के लिए समर्पित हैं। दशकों के अनुभव और कुशल श्रमिकों की एक टीम के साथ, हमने खुद को उच्च गुणवत्ता वाली मंदिर निर्माण सेवाओं के अग्रणी प्रदाता के रूप में स्थापित किया है।'}
                  </p>
                </div>

              </div>
            </div>
          </div>
          {/* right side */}
          <div className="md:w-[60%] w-full flex md:flex-row flex-col gap-4">
            {/* Our Services */}
            <div className="flex-3 md:w-[50%] w-full text-start md:pl-0 pl-4 flex flex-col">
              <h3 className="md:text-SubHeading text-SubHeading_sm text-gray font-bold mb-2">
                {language === 'english' ? 'Our Services' : language === 'marathi' ? 'आमच्या सेवा' : 'हमारी सेवाएँ'}
              </h3>
              <div className="grid grid-cols-1 gap-2 md:text-Paragraph text-Paragraph_sm">
                <p>{language === 'english' ? 'Planning & Measurement Services' : language === 'marathi' ? 'नियोजन व मापन सेवा' : 'योजना और पैरामीटर सेवाएँ'}</p>
                <p>{language === 'english' ? 'Valuation & Estimation Services' : language === 'marathi' ? 'अंदाज सेवा' : 'आकलन सेवाएँ'}</p>
                <p>{language === 'english' ? '2D, 3D & Vastu Shastra Plan Drawing' : language === 'marathi' ? 'वास्तूसह 2D आणि 3D रेखाचित्र/ नकाशे' : 'वास्तुकला के साथ 2D और 3D ड्राइंग'}</p>
                <p>{language === 'english' ? 'Temple Construction Services' : language === 'marathi' ? 'मंदिर बांधकाम सेवा' : 'मंदिर निर्माण सेवाएँ'}</p>
                <p>{language === 'english' ? 'Art and Sculpturing Services' : language === 'marathi' ? 'कला आणि शिल्पकला सेवा' : 'कला आणि शिल्पकला सेवाएँ'}</p>
                <p>{language === 'english' ? 'Painting Services' : language === 'marathi' ? 'कलर सेवा' : 'कलर सेवाएँ'}</p>
                <p>{language === 'english' ? 'Consultancy Sevices' : language === 'marathi' ? 'सल्लागार सेवा' : 'सलाहकार सेवाएँ'}</p>
                <p>{language === 'english' ? 'Maintenance & Renovation Services' : language === 'marathi' ? 'देखभाल आणि नूतनीकरण सेवा' : 'रखरखाव एवं नवीकरण सेवाएँ'}</p>
              </div>
            </div>
            {/* quick links */}
            <div className="flex-3 text-start md:w-[30%] w-full md:pl-0 pl-4">
              <h5 className="md:text-SubHeading text-SubHeading_sm text-gray font-bold mb-2">
                {language === 'english' ? 'Quick Links' : language === 'marathi' ? 'जलद दुवे' : 'त्वरित संपर्क'}
              </h5>
              <div className="grid grid-cols-1 gap-2 md:text-Paragraph text-Paragraph_sm ">
                <Link href="/services" className="hover:text-blue-700 hover-font-bold">{language === 'english' ? 'Services' : language === 'marathi' ? 'सेवा' : 'सेवाएँ'}</Link>
                <Link href="/about" className="hover:text-blue-700 hover-font-bold">
                  {' '}
                  {language === 'english' ? 'About Us' : language === 'marathi' ? 'आमच्याबद्दल' : 'हमारे बारे में'}
                </Link>
                <Link href="/portfolio " className="hover:text-blue-700 hover-font-bold">{language === 'english' ? 'Portfolio' : language === 'marathi' ? 'पोर्टफोलिओ' : 'पोर्टफोलिओ'}</Link>
                <Link href="/team " className="hover:text-blue-700 hover-font-bold">{language === 'english' ? 'Team' : language === 'marathi' ? 'टीम' : 'टीम'}</Link>
                <Link href="/contact" className="hover:text-blue-700 hover-font-bold">{language === 'english' ? 'Contact Us' : language === 'marathi' ? 'संपर्क साधा' : 'संपर्क करे'}</Link>
              </div>
            </div>
            {/* social media links */}
            <div className="flex flex-col ">
              <div className="w-full md:text-center text-start md:pl-0 pl-4">
                <h1 className="md:text-SubHeading text-SubHeading_sm text-gray font-bold mb-2">
                  {language === 'english' ? 'Follow Us' : language === 'marathi' ? 'आम्हाला फॉलो करा' : 'हमें फॉलो करें'}
                </h1>

              </div>
              <div className="flex gap-4 justify-center px-6 md:py-6 py-2">
                <Link href="/" passHref>
                  <Image src={Facebook} alt="Facebook" quality={100} width={40} height={40} className="" />
                </Link>
                <Link href="/" passHref>
                  <Image src={Instagram} alt="Instagram" quality={100} width={40} height={40} className="" />
                </Link>
                <Link href="/" passHref>
                  <Image src={LinkedIn} alt="LinkedIn" quality={100} width={40} height={40} className="" />
                </Link>
                <Link href="/" passHref>
                  <Image src={Twitter} alt="Twitter" quality={100} width={40} height={40} className="" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
      <hr />
      <div className="text-center relative flex justify-center items-center md:pt-4  pt-2">
        <p className="text-gray md:text-Paragraph text-Paragraph_sm">
          {' '}
          {language === 'english' ? 'Copyright © 2024 SR Temple Construction. - All Rights Reserved' : language === 'marathi' ? 'कॉपीराइट © 2024 SR Temple Construction. - सर्व हक्क राखीव' : 'कॉपीराइट © 2024 SR Temple Construction. - सर्वाधिकार सुरक्षित'}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
