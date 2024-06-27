'use client';

import { useLanguage } from '@/lib/languageContext';
import { motion } from 'framer-motion';
import React from 'react';

function ValuationSection() {
  const { language } = useLanguage() || { language: 'english' };
  return (
    <section>
      <div className="px-4 py-8 md:max-w-full md:px-10">
        <div className="md:p-8 flex flex-col text-center md:flex-row gap-8 rounded shadow-md shadow-blue-100">

          <motion.div
            initial={{ opacity: 0, x: -100 }} // X:100
            whileInView={{ opacity: 1, x: 0 }} // y:100
            transition={{
              delay: 0.2,
              x: { type: 'spring', stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: 'easeInOut',
            }}
            className="flex flex-col md:w-1/2 p-4 shadow-inner shadow-blue-900"
          >
            <div className="mb-4">
              <h2 className=" text-MainHeading_sm font-bold sm:text-MainHeading">
                {language === 'english' ? 'Valuation Services' : language === 'marathi' ? 'मूल्यमापन सेवा' : 'मूल्यांकन सेवाएँ'}
              </h2>
            </div>
            <div className="">
              <p className="mb-4 text-Paragraph_sm md:text-Paragraph">
                {language === 'english' ? 'We offer comprehensive valuation services to assess the financial aspects of your temple construction project. Our valuation experts provide detailed cost analysis, helping you understand the investment required for your project. This service ensures transparency and aids in effective budget management, allowing you to make informed decisions throughout the construction process.' : language === 'marathi' ? 'तुमच्या मंदिर बांधकाम प्रकल्पाच्या आर्थिक पैलूंचे मूल्यांकन करण्यासाठी आम्ही सर्वसमावेशक मूल्यमापन सेवा देऊ करतो. आमचे मूल्यांकन तज्ञ तपशीलवार खर्चाचे विश्लेषण देतात, तुम्हाला तुमच्या प्रकल्पासाठी आवश्यक गुंतवणूक समजून घेण्यात मदत करतात. ही सेवा पारदर्शकता सुनिश्चित करते आणि प्रभावी बजेट व्यवस्थापनामध्ये मदत करते, ज्यामुळे तुम्हाला संपूर्ण बांधकाम प्रक्रियेदरम्यान माहितीपूर्ण निर्णय घेता येतो.' : 'हम आपके मंदिर निर्माण परियोजना के वित्तीय पहलुओं का आकलन करने के लिए व्यापक मूल्यांकन सेवाएं प्रदान करते हैं। हमारे मूल्यांकन विशेषज्ञ विस्तृत लागत विश्लेषण प्रदान करते हैं, जिससे आपको अपने प्रोजेक्ट के लिए आवश्यक निवेश को समझने में मदद मिलती है। यह सेवा पारदर्शिता सुनिश्चित करती है और प्रभावी बजट प्रबंधन में मदद करती है, जिससे आप निर्माण प्रक्रिया के दौरान सूचित निर्णय ले सकते हैं।'}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }} // X:100
            whileInView={{ opacity: 1, x: 0 }} // y:100
            transition={{
              delay: 0.2,
              x: { type: 'spring', stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: 'easeInOut',
            }}
            className="flex flex-col md:w-1/2 p-4 shadow-inner shadow-blue-900"
          >
            <div className="mb-4">
              <h2 className=" text-MainHeading_sm font-bold sm:text-MainHeading">
                {language === 'english' ? 'Estimation Services' : language === 'marathi' ? 'अंदाज सेवा' : 'पूर्वानुमान सेवाएँ'}
              </h2>
            </div>
            <div className="">
              <p className="mb-4 text-Paragraph_sm md:text-Paragraph">
                {language === 'english' ? 'Our estimation services provide precise cost projections for your temple construction project. We take into account all factors including materials, labor and timelines to give you a clear and accurate estimate. This enables you to plan your finances effectively and avoid any unexpected expenses, ensuring a smooth and hassle-free construction experience.' : language === 'marathi' ? 'आमच्या अंदाज सेवा तुमच्या मंदिर बांधकाम प्रकल्पासाठी स्पष्ट खर्चाचे अंदाज देते. तुम्हाला स्पष्ट आणि अचूक अंदाज देण्यासाठी आम्ही साहित्य, श्रम आणि वेळापत्रकासह सर्व घटक विचारात घेतो. हे तुम्हाला तुमची आर्थिक योजना प्रभावीपणे करण्यास आणि कोणतेही अनपेक्षित खर्च टाळण्यास सहाय्यता करते, एक सुगम आणि त्रासमुक्त बांधकाम अनुभव सुनिश्चित करते.' : 'हमारी आकलन सेवा आपके मंदिर निर्माण परियोजना के लिए स्पष्ट लागत अनुमान प्रदान करती है। हम आपको स्पष्ट और सटीक अनुमान देने के लिए सामग्री, श्रम और समय सहित सभी घटकों पर विचार करते हैं। यह आपको प्रभावी ढंग से अपने वित्त की योजना बनाने और किसी भी अप्रत्याशित खर्च से बचने में मदद करता है, जिससे एक सहज और परेशानी मुक्त निर्माण अनुभव सुनिश्चित होता है।'}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default ValuationSection;
