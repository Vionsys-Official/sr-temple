'use client';

import React from 'react';
import { motion } from 'framer-motion';
import fadein from '@/utils/variants';
import { useLanguage } from '@/lib/languageContext';

export function Features() {
  const { language } = useLanguage() || { language: 'english' };
  return (
    <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:py-6">
      <motion.h1
        variants={fadein('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="text-MainHeading font-MainHeading py-6 text-center"
      >
        {language === 'english' ? 'Our Features' : language === 'marathi' ? 'आमची वैशिष्ट्ये' : 'हमारी विशेषताएं'}
      </motion.h1>
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10 pt-8">
        <div className="lg:w-1/2">
          <motion.h2
            variants={fadein('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-lg mb-6 text-SubHeading_sm md:text-SubHeading text-center font-SubHeading tracking-tight"
          >
            {language === 'english' ? 'Modern temple construction emphasizes sustainability for environmental and cultural preservation.' : language === 'marathi' ? 'आधुनिक मंदिर निर्माणात पर्यावरणीय आणि सांस्कृतिक संरक्षणासाठी प्रगतीला महत्व दिले आहे.' : 'आधुनिक मंदिर निर्माण में पर्यावरण और सांस्कृतिक संरक्षण में प्रगति को महत्व दिया गया है।'}
          </motion.h2>
        </div>
        <div className="lg:w-1/2">
          <motion.p
            variants={fadein('left', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="text-base text-center  md:text-Paragraph"
          >
            {language === 'english' ? 'Temple construction today integrates sustainability principles to ensure environmental responsibility and long-term preservation of cultural heritage. Sustainable practices aim to minimize ecological impact, conserve resources and promote community well-being.' : language === 'marathi' ? 'आजच्या काळातील मंदिर निर्माणामध्ये पर्यावरणीय उत्तरदायित्व आणि सांस्कृतिक धरोवार सुनिश्चित करण्यासाठी प्राणांतर विशेषतांचा अवलंब करणे गरजेचे आहे. शाश्वत पद्धतींचा वापर करून पर्यावरणीय परिणाम कमी करण्याचा प्रयत्न करणे, संसाधने संरक्षित करण्याचा प्रयत्न करणे आणि समुदायाच्या कल्याणास प्रोत्साहन देणे आहे.' : 'आजकल के समय में मंदिर निर्माण में पर्यावरणीय ज़िम्मेदारी और सांस्कृतिक सुरक्षा सुनिश्चित करने के लिए विशेष ध्यान देना आवश्यक है। हमें विशेष रूप से जीवन शक्तियों का संयोजन करने की जरूरत है, पर्यावरणीय प्रभाव को कम करने के लिए स्थायी तरीके अपनाने का प्रयास करना, संसाधनों की रक्षा करने का प्रयास करना और समुदाय के कल्याण को प्रोत्साहित करना।'}
          </motion.p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:gap-12 justify-center gap-6  items-center">
        <div>
          <div className="overflow-hidden before:ease-in-out after:ease-in-out bg-white group relative flex flex-col gap-4 justify-between rounded-2xl border hover:after:w-full border-white-222 hover:border-[#11BE86] duration-300 p-4 md:p-6 px-8 before:h-full before:w-2 hover:before:w-full after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:duration-300 after:opacity-5 after:bg-[url('https://s3-alpha-sig.figma.com/img/6956/4aec/59afa93303a34a23ecc13368dc4094db?Expires=1717977600&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=PFrwNwC7QeqlIUsWFsC-jbQzlVTUSh7T5VfJ9vMNaAEsoOS92kRDH-OjWcAX~dmuZ77fPWjZJX0v1kXaZENeqa--USg1BcCN8z~Z1id5y5RQT1ZTU5OR4PRrLISHbowyTAu65h2jCKOSYXCrXN3F6fH8epD-Pm9TCGCYvD9svkhnbTSZxPKZhn8okHm7W~3wWyIhJBaZyQ30qWwD~JAh5r0BRE6XIfIpgTlUWeLq9wwCbwFZQR5RWInuHUfLrfhvAnxmzVVoTO1TxyjHOeXVb68Tc~nJuypwlDmcd0Sg02sJu3-uj7vFXRul6qw0LRfsQrWS5c5RJ~P-z5-eS~1jTA__')] before:duration-300 before:-z-1 before:bg-[#254736] before:absolute before:top-0 before:left-0">
            <h4 className="font-medium text-lg duration-300 group-hover:text-white group-hover:z-[5]">
              {language === 'english' ? 'Passive Design' : language === 'marathi' ? 'निष्क्रिय डिझाइन' : 'निष्क्रिय डिज़ाइन'}
            </h4>
            <p className="text-Paragraph group-hover:text-white group-hover:z-[5]">
              {' '}
              {language === 'english' ? 'Orienting the temple to maximize natural light and ventilation reduces the need for artificial lighting and mechanical cooling.' : language === 'marathi' ? 'नैसर्गिक प्रकाश आणि वायूसंचरण जास्तीत जास्त करण्यासाठी मंदिराला दिशा देण्यामुळे कृत्रिम प्रकाश आणि यांत्रिक थंडीची आवश्यकता कमी होते.' : 'नैसर्गिक प्रकाश और वायुसंचरण को अधिक से अधिक बढ़ाने के लिए मंदिर को दिशा देने के कारण कृत्रिम प्रकाश और यांत्रिक ठंडा की आवश्यकता कम हो जाती है।'}
            </p>
          </div>
        </div>

        <div>
          <div className="overflow-hidden before:ease-in-out after:ease-in-out bg-white group relative flex flex-col gap-4 justify-between rounded-2xl border hover:after:w-full border-white-222 hover:border-[#11BE86] duration-300 p-4 md:p-6 px-8 before:h-full before:w-2 hover:before:w-full after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:duration-300 after:opacity-5 after:bg-[url('https://s3-alpha-sig.figma.com/img/6956/4aec/59afa93303a34a23ecc13368dc4094db?Expires=1717977600&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=PFrwNwC7QeqlIUsWFsC-jbQzlVTUSh7T5VfJ9vMNaAEsoOS92kRDH-OjWcAX~dmuZ77fPWjZJX0v1kXaZENeqa--USg1BcCN8z~Z1id5y5RQT1ZTU5OR4PRrLISHbowyTAu65h2jCKOSYXCrXN3F6fH8epD-Pm9TCGCYvD9svkhnbTSZxPKZhn8okHm7W~3wWyIhJBaZyQ30qWwD~JAh5r0BRE6XIfIpgTlUWeLq9wwCbwFZQR5RWInuHUfLrfhvAnxmzVVoTO1TxyjHOeXVb68Tc~nJuypwlDmcd0Sg02sJu3-uj7vFXRul6qw0LRfsQrWS5c5RJ~P-z5-eS~1jTA__')] before:duration-300 before:-z-1 before:bg-[#254736] before:absolute before:top-0 before:left-0">
            <h4 className="font-medium text-lg duration-300 group-hover:text-white group-hover:z-[5]">
              {language === 'english' ? 'Adaptability' : language === 'marathi' ? 'परिवर्तनशीलता' : 'परिवर्तनशीलता'}
            </h4>
            <p className="text-Paragraph group-hover:text-white group-hover:z-[5]">
              {' '}
              {language === 'english' ? 'Designing flexible spaces that can accommodate future changes or expansions without compromising the temples integrity or sustainability.' : language === 'marathi' ? 'भविष्यातील बदलांसाठी किंवा विस्तारांसाठी अनुकूल असलेली जागा तयार करणे, मंदिराच्या अखंडतेशी किंवा परिपूर्णतेला तडजोड न करता.' : 'परिवर्तनशीलता मंदिर की अखंडता या पूर्णता से समझौता किए बिना, भविष्य में परिवर्तन या विस्तार के लिए जगह बनाना।'}
            </p>
          </div>
        </div>

        <div>
          <div className="overflow-hidden before:ease-in-out after:ease-in-out bg-white group relative flex flex-col gap-4 justify-between rounded-2xl border hover:after:w-full border-white-222 hover:border-[#11BE86] duration-300 p-4 md:p-6 px-8 before:h-full before:w-2 hover:before:w-full after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:duration-300 after:opacity-5 after:bg-[url('https://s3-alpha-sig.figma.com/img/6956/4aec/59afa93303a34a23ecc13368dc4094db?Expires=1717977600&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=PFrwNwC7QeqlIUsWFsC-jbQzlVTUSh7T5VfJ9vMNaAEsoOS92kRDH-OjWcAX~dmuZ77fPWjZJX0v1kXaZENeqa--USg1BcCN8z~Z1id5y5RQT1ZTU5OR4PRrLISHbowyTAu65h2jCKOSYXCrXN3F6fH8epD-Pm9TCGCYvD9svkhnbTSZxPKZhn8okHm7W~3wWyIhJBaZyQ30qWwD~JAh5r0BRE6XIfIpgTlUWeLq9wwCbwFZQR5RWInuHUfLrfhvAnxmzVVoTO1TxyjHOeXVb68Tc~nJuypwlDmcd0Sg02sJu3-uj7vFXRul6qw0LRfsQrWS5c5RJ~P-z5-eS~1jTA__')] before:duration-300 before:-z-1 before:bg-[#254736] before:absolute before:top-0 before:left-0">
            <h4 className="font-medium text-lg duration-300 group-hover:text-white group-hover:z-[5]">
              {language === 'english' ? 'Cultural Sensitivity' : language === 'marathi' ? 'सांस्कृतिक संवेदनशीलता' : 'सांस्कृतिक संवेदनशीलता'}
            </h4>
            <p className="text-Paragraph group-hover:text-white group-hover:z-[5]">
              {' '}
              {language === 'english' ? 'Respecting local traditions, aesthetics, and rituals in design and material selection ensures the temples authenticity and relevance within its community.' : language === 'marathi' ? 'स्थानिक परंपरा, सौंदर्यशास्त्र आणि रीतीरिवाजांना सावधानीपूर्वक मानून आदराने मंदिराची सत्यता आणि समाजातील प्रासंगिकता सुनिश्चित होते.' : 'स्थानीय परंपराओं, सौंदर्यशास्त्र और रीति-रिवाजों का सम्मानजनक विचार समाज में मंदिर की प्रामाणिकता और प्रासंगिकता सुनिश्चित करता है।'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
