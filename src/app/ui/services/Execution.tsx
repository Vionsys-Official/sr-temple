'use client';

import React from "react";
import exe from "../.../../../../../public/assets/services/exe.png";
import Image from "next/image";
import { useLanguage } from "@/lib/languageContext";

const Execution = () => {
  const { language } = useLanguage() || { language: "english" };
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="max-w-xl mb-6 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="mb-3 md:text-MainHeading md:font-MainHeading text-MainHeading_sm font-MainHeading_sm text-center leading-none tracking-tight md:mx-auto">
        {language === 'english' ? 'Temple Execution Services' : language === 'marathi' ? 'मंदिर बांधकाम सेवा' : 'मंदिर निर्माण सेवाएँ'}
        </h2>
        <p className="md:text-SubHeading text-SubHeading_sm md:font-SubHeading font-SubHeading_sm text-center">
        {language === 'english' ? 'Crafting Temples of Tradition and Modernity' : language === 'marathi' ? 'परंपरेचे आणि आधुनिकतेचे मंदिर' : 'परंपरा और आधुनिकता से मंदिर'}
        </p>
      </div>
      <div className="grid max-w-screen-xl gap-8 row-gap-10 mx-auto lg:grid-cols-2">
        <div className="flex flex-col max-w-xl sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <Image src={exe} alt=''/>
            </div>
          </div>
          <div>
            <h6 className="mb-3 font-bold md:text-xl text-lg text-gray-900 leading-5">
            {language === 'english' ? 'R.C.C. and Brick Work' : language === 'marathi' ? 'आर.सी.सी. आणि वीट काम' : 'आर.सी.सी. और ईंट का काम'}
            </h6>
            <p className="mb-3 md:text-Paragraph md:font-Paragraph font-Paragraph_sm text-justify">
            {language === 'english' ? 'Our Temple Execution Services seamlessly integrate R.C.C. for robust structural strength with traditional Brick Work for walls, pillars, and decorative elements. This unique approach harmonizes modern durability with traditional aesthetics, ensuring unparalleled structural integrity and authentic cultural representation in temple construction.' : language === 'marathi' ? 'आमच्या मंदिर बांधकाम सेवांमध्ये आर.सी.सी. चा वापर करून मजबूत संरचनात्मक ताकद प्राप्त होते आणि पारंपरिक वीट काम भिंती, स्तंभ, आणि सजावटीच्या घटकांसाठी वापरले जाते. हा अनोखा दृष्टिकोन आधुनिक टिकाऊपणा आणि पारंपरिक सौंदर्यशास्त्र यांचे समरसकरण करतो, मंदिर बांधकामात अद्वितीय संरचनात्मक अखंडता आणि प्रामाणिक सांस्कृतिक प्रतिनिधित्व सुनिश्चित करतो.' : 'हमारी मंदिर निर्माण सेवाओं में आर.सी.सी. का उपयोग करके मजबूत संरचनात्मक ताकत प्राप्त होती है और पारंपरिक ईंट का काम दीवारों, स्तंभों, और सजावटी तत्वों के लिए उपयोग किया जाता है। यह अनोखा दृष्टिकोण आधुनिक टिकाऊपन और पारंपरिक सौंदर्यशास्त्र का समरसकरण करता है, मंदिर निर्माण में अद्वितीय संरचनात्मक अखंडता और प्रामाणिक सांस्कृतिक प्रतिनिधित्व सुनिश्चित करता है।'}
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-xl sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <Image src={exe} alt=''/>
            </div>
          </div>
          <div>
            <h6 className="mb-3 font-bold md:text-xl text-lg text-gray-900 leading-5">
            {language === 'english' ? 'Stone Work' : language === 'marathi' ? 'दगड काम' : 'पत्थर का काम'}
            </h6>
            <p className="mb-3 md:text-Paragraph md:font-Paragraph font-Paragraph_sm text-justify">
            {language === 'english' ? 'Our Temple Execution Services combine traditional stone carving with modern techniques, creating temples that blend heritage with innovation. Skilled artisans meticulously craft intricate designs using durable stones like granite and marble, ensuring both structural integrity and aesthetic precision, preserving cultural heritage while meeting modern standards.' : language === 'marathi' ? 'आमच्या मंदिर बांधकाम सेवांमध्ये पारंपरिक दगड कोरीवकाम आधुनिक तंत्रज्ञानासोबत एकत्र केले जाते, ज्यामुळे वारसा आणि नवोन्मेष यांचे मिश्रण असलेली मंदिरे निर्माण होतात. कुशल कारागीर टिकाऊ दगड जसे की ग्रॅनाइट आणि संगमरवर वापरून बारकाईने जटिल डिझाईन्स तयार करतात, संरचनात्मक अखंडता आणि सौंदर्यात्मक अचूकता सुनिश्चित करतात, सांस्कृतिक वारसा जपून आधुनिक मानकांनुसार बांधकाम करतात.' : 'हमारी मंदिर निर्माण सेवाएँ पारंपरिक पत्थर की नक्काशी को आधुनिक तकनीक के साथ जोड़ती हैं, जिससे ऐसे मंदिर बनते हैं जो विरासत और नवीनता को मिश्रित को करता हैं। कुशल कारीगर ग्रेनाइट और संगमरमर जैसे टिकाऊ पत्थरों का उपयोग करके सावधानीपूर्वक जटिल डिजाइन बनाते हैं, संरचनात्मक अखंडता और सौंदर्य परिशुद्धता सुनिश्चित करते हैं, जबकि सांस्कृतिक विरासत और इमारत को आधुनिक मानकों के अनुसार संरक्षित करते हैं।'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Execution;
