'use client';
import Image from "next/image";
import React from "react";
import SR from '../../../../public/assets/services/SR.png';
import { useLanguage } from "@/lib/languageContext";
import { motion } from 'framer-motion';

const Estimation = () => {
  const { language } = useLanguage() || { language: 'english' };
  return (
    <section className="md:p-10 p-4 bg-black">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-items-center gap-5">
        <div className="order-1 lg:order-1 shadow-2xl md:p-4">
          <Image
            className="object-cover"
            src={SR}
            alt=""
          />
        </div>
        <div className="order-2 lg:order-2 flex flex-col justify-center items-center text-center">
        <motion.h2
                initial={{ opacity: 0, x: 100 }} // X:100
                whileInView={{ opacity: 1, x: 1 }} // y:100
                transition={{
                  delay: 0.2,
                  scale: { type: 'spring', stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: 'easeInOut',
                }}
                className="tracking-tight md:text-MainHeading md:font-MainHeading text-MainHeading_sm font-MainHeading_sm text-center flex flex-col items-center justify-center"
              >
                {language === 'english' ? 'Estimation Services' : language === 'marathi' ? 'अंदाज सेवा' : 'पूर्वानुमान सेवाएँ'}
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
                {language === 'english' ? 'Crafting spiritual sanctuaries, estimating with care' : language === 'marathi' ? 'आध्यात्मिक मंदिरांची निर्मिती, काळजीपूर्वक अंदाज' : 'आध्यात्मिक मंदिरों की निर्माण, सावधानीपूर्वक अनुमान'}
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
                className="md:text-Paragraph md:font-Paragraph font-Paragraph_sm text-justify p-3"
              >
                {language === 'english' ? 'Temple construction estimation services play a pivotal role in the industry by forecasting costs, allocating resources, scheduling timelines, and assessing risks critical for meticulous project planning and management.' : language === 'marathi' ? 'मंदिर बांधकाम अंदाज सेवा उद्योगात महत्त्वपूर्ण भूमिका बजावतात ज्यामध्ये खर्चाचा अंदाज, संसाधनांचे वाटप, वेळापत्रक तयार करणे आणि जोखमींचे मूल्यांकन हे परियोजना नियोजन आणि व्यवस्थापनासाठी महत्त्वपूर्ण आहे.' : 'मंदिर निर्माण अनुमान सेवाएँ उद्योग में महत्वपूर्ण भूमिका निभाती हैं जिसमें खर्च का अनुमान, संसाधनों का आवंटन, समय सारिणी बनाना और जोखिमों का मूल्यांकन परियोजना योजना और प्रबंधन के लिए महत्वपूर्ण है।'}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 100 }} // X:100
                whileInView={{ opacity: 1, x: 1 }} // y:100
                transition={{
                  delay: 0.2,
                  scale: { type: 'spring', stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: 'easeInOut',
                }}
                className="md:text-Paragraph md:font-Paragraph font-Paragraph_sm text-justify p-3 mb-5"
              >
                {language === 'english' ? 'Our methodology spans various estimation facets, encompassing cost, time, resources, risk, and effort, employing techniques such as analogous, parametric, and bottom-up estimating. Emphasizing industry best practices and continuous enhancement, we ensure precise estimations that foster successful project outcomes, adapting adeptly to evolving challenges and future trends.' : language === 'marathi' ? 'आमची कार्यपद्धती विविध अंदाज पैलूंचा समावेश करते, त्यात खर्च, वेळ, संसाधने, जोखीम आणि प्रयत्न यांचा समावेश होतो, आम्ही अनुरूप, पॅरामेट्रिक आणि बॉटम-अप अंदाज लावण्याच्या तंत्रांचा वापर करतो. उद्योगातील सर्वोत्कृष्ट पद्धती आणि सतत वाढीवर भर देऊन, आम्ही अचूक अंदाज सुनिश्चित करतो जे यशस्वी प्रकल्प परिणामांना चालना देतात, विकसित होणारी आव्हाने आणि भविष्यातील ट्रेंडशी कुशलतेने जुळवून घेतात.' : 'हमारी कार्यप्रणाली लागत, समय, संसाधन, जोखिम और प्रयास सहित विभिन्न अनुमान पहलुओं को शामिल करती है, हम अनुकूली, पैरामीट्रिक और बॉटम-अप अनुमान तकनीकों का उपयोग करते हैं। उद्योग की सर्वोत्तम प्रथाओं और निरंतर विकास पर जोर देते हुए, हम सटीक पूर्वानुमान सुनिश्चित करते हैं जो सफल परियोजना परिणामों को संचालित करते हैं, उभरती चुनौतियों और भविष्य के रुझानों को कुशलता से अपनाते हैं।'}
              </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Estimation;
