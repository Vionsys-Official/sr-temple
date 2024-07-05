"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/languageContext";
import { planning, planningHindi, planningMarathi } from "@/data/ServicePlanning";

const PlanningMeasurement = () => {
  const { language } = useLanguage() || { language: "english" };
  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 bg-white">
        <div className="flex flex-col items-center justify-center shadow bg-slate-400 shadow-slate-300 max-w-full mx-auto overflow-hidden rounded">
          <div className="py-11 w-full bg-gray" />
          <div className="p-6 m-4 flex justify-center mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-white shadow-inner">
            <div className="">
              <h1 className="max-w-full flex justify-center text-MainHeading_sm font-bold tracking-tight text-gray-900 sm:text-MainHeading sm:leading-none">
                {language === "english"
                  ? "Temple Construction Services"
                  : language === "marathi"
                  ? "मंदिर निर्माण सेवा"
                  : "मंदिर निर्माण सेवाएँ"}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section className="py-4 bg-gray-900 text-gray-100">
        <div className="px-4 mx-auto max-w-7xl h-auto sm:px-6 lg:px-8">
          <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
            <div className="max-w-xl mb-6">
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut",
                }}
                className="max-w-full mb-4 text-MainHeading_sm font-bold tracking-tight md:text-start text-center text-gray-900 sm:text-MainHeading sm:leading-none"
              >
                {language === "english"
                  ? "Temple Planning And Measurement Services"
                  : language === "marathi"
                  ? "नियोजन आणि मापन सेवा"
                  : "योजना और माप सेवाएँ"}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut",
                }}
                className="text-Paragraph_sm md:text-Paragraph md:text-start text-center"
              >
                {language === "english"
                  ? "Our Temple Planning and Measurement Services cover every essential step for successful construction. We start with careful site selection, followed by site cleaning and soil testing to ensure proper bearing capacity. We also consult with the temple owner to meet their specific requirements, ensuring the project aligns with their vision. This comprehensive approach guarantees a sacred and structurally sound temple."
                  : language === "marathi"
                  ? "आमच्या मंदिर नियोजन आणि मापन सेवा यशस्वी बांधकामासाठी आवश्यक असलेल्या प्रत्येक टप्प्याचे समावेश करतात. आम्ही काळजीपूर्वक साइट निवडीपासून सुरुवात करतो, त्यानंतर साइटची साफसफाई आणि माती परीक्षण करून योग्य बेअरिंग क्षमता सुनिश्चित करतो. आम्ही मंदिराच्या मालकाशी त्यांच्या विशिष्ट गरजा पूर्ण करण्यासाठी सल्लामसलत करतो, प्रकल्प त्यांच्या दृष्टीकोनाशी जुळतो याची खात्री करतो. हा सर्वसमावेशक दृष्टीकोन पवित्र आणि संरचनात्मकदृष्ट्या सुदृढ मंदिराची हमी देतो."
                  : "हमारी मंदिर नियोजन और मापन सेवाएँ सफल निर्माण के लिए आवश्यक प्रत्येक चरण को शामिल करती हैं। हम सावधानीपूर्वक साइट चयन से शुरुआत करते हैं, इसके बाद साइट की सफाई और मिट्टी परीक्षण कर उचित बियरिंग क्षमता सुनिश्चित करते हैं। हम मंदिर के मालिक से उनकी विशिष्ट आवश्यकताओं को पूरा करने के लिए सलाह-मशविरा करते हैं, ताकि परियोजना उनके दृष्टिकोण के साथ मेल खाती हो। यह समग्र दृष्टिकोण पवित्र और संरचनात्मक रूप से मजबूत मंदिर की गारंटी देता है।"}
              </motion.p>
            </div>
            <div>
              <div className="w-full">
                <Image
                  className="object-cover rounded shadow-lg"
                  src="/assets/services/planing.jpg"
                  alt="services"
                  height={"600"}
                  width={"1000"}
                />
              </div>
            </div>
          </div>
          <div className="grid max-w-4xl lg:max-w-7xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-2 sm:text-left">
            {(language === 'english' ? planning : language === 'marathi' ? planningMarathi : planningHindi).map((item) => (
              <div
                key={item.id}
                className="overflow-hidden bg-amber-50 shadow-md rounded-xl transition duration-300 transform border hover:scale-105 group hover:shadow-xl"
              >
                <div className="p-3">
                  <h3 className="md:text-CardHeading text-CardHeading_sm md:font-CardHeading font-CardHeading_sm">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanningMeasurement;
