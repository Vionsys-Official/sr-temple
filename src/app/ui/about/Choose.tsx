'use client';

import { useLanguage } from '@/lib/languageContext';
import { motion } from 'framer-motion';
import React from 'react';

// eslint-disable-next-line react/function-component-definition
const Choose: React.FC = () => {
  const { language } = useLanguage() || { language: 'english' };

  return (
    <div className="px-4 py-5 text-center md:py-8 md:px-16 md:my-8 md:mx-8 md:max-w-full mx-auto max-w-xl ">
      <div className="max-w-xl mb-8 md:mx-auto sm:text-center lg:max-w-2xl md:mb-10">
        <div />
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: 'easeInOut',
          }}
          className="max-w-lg mb-6 font-MainHeading_sm md:font-MainHeading text-MainHeading_sm md:text-MainHeading md:text-gray leading-none md:leading-normal tracking-tight text-gray md:mx-auto capitalize"
        >
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">
              {language === 'english' ? 'Get' : language === 'marathi' ? 'आम्हाला' : 'हमें'}
            </span>
          </span>
          {' '}
          {language === 'english' ? 'to Know the Reasons You Should Choose Us!' : language === 'marathi' ? 'का निवडावे याची कारणे जाणून घ्या!' : 'क्यों चुनें? जानिए इसके कारण!'}
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
          className=" text-gray md:text-Paragraph text-Paragraph_sm font-Paragraph_sm md:font-Paragraph"
        >
          {language === 'english' ? 'Our innovative solutions and attention to detail ensure that every project exceeds our clients expectations, building trust and lasting relationships.' : language === 'marathi' ? 'आमचे नाविन्यपूर्ण उपाय आणि तपशीलाकडे लक्ष देणे हे सुनिश्चित करते की प्रत्येक प्रकल्प आमच्या ग्राहकांच्या अपेक्षां पेक्षा जास्त आहे, विश्वास निर्माण करतो आणि चिरस्थायी नातेसंबंध निर्माण करतो.' : 'हमारे प्रवर्तनीय समाधान और विवरण पर ध्यान देना यह सुनिश्चित करता है कि प्रत्येक परियोजना हमारे ग्राहकों की अपेक्षाओं से अधिक है, विश्वास बनाता है और दीर्घकालिक संबंधों का निर्माण करता है।'}
        </motion.p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2 md:mb-0">
        <motion.div
          initial={{ opacity: 0, y: 100 }} // X:100
          whileInView={{ opacity: 1, y: 1 }} // y:100
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: 'easeIn',
          }}
          className="duration-300 transform bg-white border-l-4 border-yellow hover:-translate-y-2"
        >
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm bg-gray">
            <h6 className="mb-2 font-CardHeading text-CardHeading md:font-MainHeading md:text-CardHeading text-white">
              {language === 'english' ? 'Innovative Design' : language === 'marathi' ? 'नाविन्यपूर्ण डिझाइन' : 'नवाचारात्मक डिज़ाइन'}
            </h6>
            <p className="mb-2 text-Paragraph_sm font-Paragraph_sm md:text-Paragraph md:font-Paragraph text-white">
              {language === 'english' ? 'We prioritize customer satisfaction, which is consistently achieved through our innovative designs, meticulous attention to detail and adherence to top-tier construction standards.' : language === 'marathi' ? 'आम्ही ग्राहकांच्या समाधानाला प्राधान्य देतो, जे आमच्या नाविन्यपूर्ण डिझाइन, तपशीलांकडे बारकाईने लक्ष देऊन आणि उच्च-स्तरीय बांधकाम मानकांचे पालन करून सातत्याने प्राप्त केले जाते.' : 'हम ग्राहक संतोष को प्राथमिकता देते हैं, जो हमारे नवाचारात्मक डिजाइन, विवरण पर बारीकी से ध्यान देने और उच्च-स्तरीय निर्माण मानकों का पालन करने के माध्यम से लगातार प्राप्त किया जाता है।'}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }} // X:100
          whileInView={{ opacity: 1, y: 1 }} // y:100
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: 'easeIn',
          }}
          className="duration-300 transform bg-white border-l-4 border-yellow hover:-translate-y-2"
        >
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm bg-gray">
            <h6 className="mb-2 font-CardHeading text-CardHeading md:font-MainHeading md:text-CardHeading text-white">
              {language === 'english' ? 'Cost Estimation' : language === 'marathi' ? 'खर्चाचा अंदाज' : 'लागत अनुमान'}
            </h6>
            <p className=" mb-2 text-Paragraph_sm font-Paragraph_sm md:text-Paragraph md:font-Paragraph text-white">
              {language === 'english' ? 'While constructing masterpieces, cost is a crucial factor. Our commitment to delivering exceptional value means we offer comprehensive temple construction services at affordable prices.' : language === 'marathi' ? 'बांधकाम करताना खर्च एक महत्त्वाचा घटक असतो. आमची वचनबद्धता अपवादात्मक मूल्य देण्याची आहे, त्यामुळे आम्ही परवडणाऱ्या किमतीत सर्वसमावेशक मंदिर बांधणी सेवा देतो.' : 'निर्माण के दौरान लागत एक महत्वपूर्ण तत्व होता है। हमारी प्रतिबद्धता असाधारण मूल्य देने की है, इसलिए हम किफायती कीमतों पर व्यापक मंदिर निर्माण सेवाएं प्रदान करते हैं।'}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }} // X:100
          whileInView={{ opacity: 1, y: 1 }} // y:100
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: 'easeIn',
          }}
          className="duration-300 transform bg-white border-l-4 border-yellow hover:-translate-y-2"
        >
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm bg-gray">
            <h6 className="mb-2 font-CardHeading text-CardHeading md:font-MainHeading md:text-CardHeading text-white">
              {language === 'english' ? 'Skilled Workforce' : language === 'marathi' ? 'कुशल कामगार मिळवा' : 'कुशल कार्यबल प्राप्त करें'}
            </h6>
            <p className="mb-2 text-Paragraph_sm font-Paragraph_sm md:text-Paragraph md:font-Paragraph text-white">
              {language === 'english' ? 'Experience is paramount in the construction industry and our seasoned workforce exemplifies this principle. With years of expertise and a deep understanding of the intricacies involved in each project.' : language === 'marathi' ? 'बांधकाम उद्योगात अनुभव खूप महत्त्वाचा असतो आणि आमचे अनुभवी कामगार हे तत्व स्पष्ट करतात. अनेक वर्षांचा अनुभव आणि प्रत्येक प्रकल्पातील तपशीलांची खोल समज आमच्या कामगिरीतून दिसून येते.' : 'निर्माण उद्योग में अनुभव बहुत महत्वपूर्ण होता है और हमारे अनुभवी श्रमिक इस सिद्धांत को स्पष्ट करते हैं। कई वर्षों का अनुभव और प्रत्येक परियोजना के विवरण की गहरी समझ हमारे प्रदर्शन में झलकती है।'}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }} // X:100
          whileInView={{ opacity: 1, y: 1 }} // y:100
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: 'easeIn',
          }}
          className="duration-300 transform bg-white border-l-4 border-yellow hover:-translate-y-2"
        >
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm bg-gray">
            <h6 className="mb-2 font-CardHeading text-CardHeading md:font-MainHeading md:text-CardHeading text-white">
              {language === 'english' ? 'Sustainable Practices' : language === 'marathi' ? 'शाश्वत पद्धती' : 'शाश्वत पद्धतियाँ'}
            </h6>
            <p className="text-Paragraph_sm font-Paragraph_sm md:text-Paragraph md:font-Paragraph text-white">
              {language === 'english' ? 'We incorporate eco-friendly practices and sustainable materials to minimize environmental impact and promote long-term sustainability ensuring a healthier planet.' : language === 'marathi' ? 'आम्ही पर्यावरणावर होणारा परिणाम कमी करण्यासाठी आणि दीर्घकालीन शाश्वतता वाढवण्यासाठी पर्यावरणपूरक पद्धती आणि शाश्वत सामग्रींचा वापर करतो.' : 'हम पर्यावरण पर प्रभाव को कम करने और दीर्घकालिक स्थायित्व बढ़ाने के लिए पर्यावरण-अनुकूल पद्धतियाँ और सतत सामग्रियों का उपयोग करते हैं।'}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Choose;
