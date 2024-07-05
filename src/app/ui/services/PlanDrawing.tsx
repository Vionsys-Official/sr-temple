"use client";

import { useLanguage } from "@/lib/languageContext";
import { motion } from "framer-motion";
import SR1 from '../../../../public/assets/services/SR1.png';
import SR4 from '../../../../public/assets/services/SR4.png';
import React from "react";
import Image from "next/image";

const PlanDrawing = () => {
  const { language } = useLanguage() || { language: "english" };
  return (
    <section className="w-full mx-auto py-10 bg-gray-50 bg-gray-900 bg-amber-50 px-4">
      <div className="lg:text-center">
        <p className="mt-2 md:text-MainHeading md:font-MainHeading text-MainHeading_sm font-MainHeading_sm leading-8 tracking-tight capitalize text-center">
        {language === 'english' ? '2D and 3D plan with Vastu' : language === 'marathi' ? 'वास्तुकला के साथ 2D और 3D ड्राइंग' : 'पूर्वानुमान सेवाएँ'}
        </p>
        <p className="mt-3 max-w-2xl md:text-SubHeading text-SubHeading_sm md:font-SubHeading font-SubHeading_sm text-center lg:mx-auto">
        {language === 'english' ? 'Design Your Dream Space with Perfect Vastu Alignment in 2D and 3D!' : language === 'marathi' ? 'आपल्या स्वप्नातील जागेचे 2D आणि 3D मध्ये परफेक्ट वास्तू संरेखनासह डिझाइन करा!' : 'अपने सपनों के स्थान को 2D और 3D में परफेक्ट वास्तु संरेखन के साथ डिज़ाइन करें!'}
        </p>
      </div>

      <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6 md:order mb-12">
        <div className="lg:order-1 order-2 lg:w-[50%] xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
          <h2 className="font-bold md:text-2xl text-lg text-gray-900">
          {language === 'english' ? '2D Plans' : language === 'marathi' ? '2D योजना' : '2D योजना'}
          </h2>

          <p className="md:text-Paragraph md:font-Paragraph font-Paragraph_sm text-justify my-4">
          {language === 'english' ? "2D plans serve as foundational architectural blueprints, encompassing floor plans, elevations, and sections to give a comprehensive overhead depiction of a building's structure, detailing room layouts, walls, doors, and windows. Utilizing advanced tools like AutoCAD and Revit ensures meticulous drafting and design precision." : language === 'marathi' ? '2D योजना ही आर्किटेक्चरल ब्लूप्रिंटची पाया असते, ज्यात मजल्यावरील योजना, उंची आणि विभागांचा समावेश होतो ज्यामुळे इमारतीच्या रचनेचे सर्वांगीण चित्रण मिळते. यात खोलीचे लेआउट, भिंती, दरवाजे, आणि खिडक्या यांचा तपशील असतो. AutoCAD आणि Revit सारख्या प्रगत साधनांचा वापर करून तपशीलवार मसुदा आणि डिझाइनची अचूकता सुनिश्चित केली जाते.' : '2D योजना आर्किटेक्चरल ब्लूप्रिंट की नींव होती है, जिसमें फ़्लोर प्लान, ऊँचाई और सेक्शन शामिल होते हैं, जिससे इमारत की संरचना का सम्पूर्ण चित्रण मिलता है। इसमें कमरे के लेआउट, दीवारें, दरवाजे, और खिड़कियों का विवरण होता है। AutoCAD और Revit जैसे उन्नत उपकरणों का उपयोग करके विस्तृत मसौदा और डिज़ाइन की सटीकता सुनिश्चित की जाती है।'}
          </p>
          <p className="mb-2 text-lg font-bold text-gray">
            {language === "english"
              ? "Vastu Principles for 2D Plans"
              : language === "marathi"
              ? "2D योजनांसाठी वास्तु तत्त्वे"
              : "2D योजनाओं के लिए वास्तु सिद्धांत"}
          </p>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.5 },
              ease: "easeInOut",
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
                {language === "english"
                  ? "Site Orientation"
                  : language === "marathi"
                  ? "स्थळाचे ओरिएंटेशन"
                  : "स्थल का ओरिएंटेशन"}
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
                {language === "english"
                  ? "Layout and Zoning"
                  : language === "marathi"
                  ? "लेआउट आणि विभागन"
                  : "लेआउट और विभागन"}
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
                {language === "english"
                  ? "Entrance and Exits"
                  : language === "marathi"
                  ? "प्रवेशद्वार आणि निर्गम"
                  : "प्रवेशद्वार और निकास"}
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
                {language === "english"
                  ? "Space Planning"
                  : language === "marathi"
                  ? "जागेचे नियोजन"
                  : "स्थान का नियोजन"}
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
                {language === "english"
                  ? "Design Considerations"
                  : language === "marathi"
                  ? "डिझाइन विचार"
                  : "डिझाइन विचार"}
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full">
          <Image
            className="lg:rounded-t-lg xs:rounded-sm H-[40vh]"
            src={SR4}
            alt=""
          />
        </div>
      </div>

      <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
        <div className="lg:w-[50%] xs:w-full">
          <Image
            className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
            src={SR1}
            alt="billboard image"
          />
        </div>
        <div className="lg:w-[50%] sm:w-full xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
          <h2 className="font-bold md:text-2xl text-lg text-gray-900">
          {language === 'english' ? '3D Plans' : language === 'marathi' ? '3D योजना' : '3D योजना'}
          </h2>

          <p className="md:text-Paragraph md:font-Paragraph font-Paragraph_sm text-justify my-4">
          {language === 'english' ? 'Our 3D plans create detailed three-dimensional representations of buildings, using 3D modeling, rendering, and virtual walkthroughs. Utilizing industry-leading tools such as SketchUp, 3ds Max, and Blender, we ensure precise and detailed modeling, empowering architects and designers to explore diverse design elements and make well-informed decisions.' : language === 'marathi' ? 'आमच्या 3D योजना 3D मॉडेलिंग, रेंडरिंग आणि व्हर्च्युअल वॉकथ्रू वापरून इमारतींचे तपशीलवार त्रिमितीय प्रतिकृती तयार करतात. SketchUp, 3ds Max आणि ब्लेंडर सारख्या उद्योगातील आघाडीच्या साधनांचा वापर करून, आम्ही अचूक आणि तपशीलवार मॉडेलिंग सुनिश्चित करतो, आर्किटेक्ट आणि डिझाइनर्सना विविध डिझाइन घटकांचा शोध घेण्यास आणि योग्य निर्णय घेण्यास सक्षम बनवतो.' : 'हमारी 3D योजना 3D मॉडलिंग, रेंडरिंग और वर्चुअल वॉकथ्रू का उपयोग करके इमारतों की विस्तृत त्रि-आयामी प्रतिकृतियां बनाते हैं। SketchUp, 3ds Max और ब्लेंडर जैसे उद्योग के अग्रणी उपकरणों का उपयोग करके, हम सटीक और विस्तृत मॉडलिंग सुनिश्चित करते हैं, जिससे आर्किटेक्ट्स और डिज़ाइनर्स को विभिन्न डिज़ाइन तत्वों का पता लगाने और सही निर्णय लेने में सक्षम बनाते हैं।'}
          </p>
          <p className="mb-2 text-lg font-bold text-gray">
            {language === "english"
              ? "Vastu Principles for 3D Plans"
              : language === "marathi"
              ? "3D योजनांसाठी वास्तु तत्त्वे"
              : "3D योजनाओं के लिए वास्तुशिल्प सिद्धांत"}
          </p>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.5 },
              ease: "easeInOut",
            }}
            className="grid space-y-3 sm:gap-2 sm:grid-cols-1 sm:space-y-0"
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
                {language === "english"
                  ? "Elevation and Facade Design"
                  : language === "marathi"
                  ? "उंची आणि दर्शनी भाग डिझाइन"
                  : "ऊंचाई और मुखौटा डिजाइन"}
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
                {language === "english"
                  ? "3D Modeling for Vastu Compliance"
                  : language === "marathi"
                  ? "वास्तू अनुपालनासाठी 3D मॉडेलिंग"
                  : "वास्तुशिल्प अनुपालन के लिए 3D मॉडलिंग"}
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
                {language === "english"
                  ? "Virtual Walkthroughs"
                  : language === "marathi"
                  ? "व्हर्च्युअल वॉकथ्रू"
                  : "व्हर्च्युअल वॉकथ्रू"}
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlanDrawing;
