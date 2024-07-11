'use client';

import Image from "next/image";
import React from "react";
import SR3 from '../../../../public/assets/services/SR3.png';
import temple from '../../../../public/assets/services/templee6.jpeg';
import { useLanguage } from "@/lib/languageContext";

const PaintingArt = () => {
  const { language } = useLanguage() || { language: "english" };
  return (
    <div>
      {/* Art & Sculpturing Service */}
      <section className="px-3 py-5 bg-slate-100 lg:pt-10">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center max-w-xl">
            <h2 className="mb-3 md:text-MainHeading md:font-MainHeading text-MainHeading_sm font-MainHeading_sm text-center leading-none tracking-tight md:mx-auto">
            {language === 'english' ? 'Art And Sculpturing Services' : language === 'marathi' ? 'कला आणि शिल्पकला सेवा' : 'कला और मूर्तिकला सेवाएँ'}
            </h2>
            <p className="md:text-Paragraph md:font-Paragraph font-Paragraph_sm text-justify my-4 md:mx-auto">
            {language === 'english' ? 'Our company specializes in art and sculpturing services for temple construction. We create intricate sculptures and decorations using traditional techniques like carving and mural painting, utilizing premium materials such as stone, metal, or wood, and advanced technologies like 3D modeling to ensure designs meet cultural and religious requirements.' : language === 'marathi' ? 'आमची कंपनी मंदिर बांधकामासाठी कला आणि शिल्पकला सेवांमध्ये विशेष आहे. आम्ही पारंपरिक तंत्रांचा वापर करून कोरीव काम आणि भित्तीचित्रांसारख्या सुबक शिल्प आणि सजावट तयार करतो, जसे की दगड, धातू, किंवा लाकूड यांसारख्या उच्च दर्जाच्या सामग्रीचा वापर करून, आणि सांस्कृतिक आणि धार्मिक आवश्यकतांची पूर्तता करण्यासाठी 3D मॉडेलिंग सारख्या आधुनिक तंत्रज्ञानाचा उपयोग करतो.' : 'हमारी कंपनी मंदिर निर्माण के लिए कला और मूर्तिकला सेवाओं में माहिर है। हम सांस्कृतिक और धार्मिक आवश्यकताओं को पूरा करने के लिए पारंपरिक तकनीकों का उपयोग करके, पत्थर, धातु या लकड़ी जैसी उच्च गुणवत्ता वाली सामग्री और 3D मॉडलिंग जैसी आधुनिक तकनीकों का उपयोग करके नक्काशी और भित्तिचित्र जैसी बेहतरीन मूर्तियां और सजावट बनाते हैं।'}
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              className="h-48 w-80 object-cover lg:w-[600px] lg:h-[350px]"
              src={temple}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Painting Service */}
      <section className="px-3 py-5 bg-slate-100 lg:pb-10">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div className="order-2 flex flex-col justify-center items-center max-w-xl">
            <h2 className="mb-3 md:text-MainHeading md:font-MainHeading text-MainHeading_sm font-MainHeading_sm text-center leading-none tracking-tight md:mx-auto">
            {language === 'english' ? 'Painting Services' : language === 'marathi' ? 'पेंटिंग सेवा' : 'पेंटिंग सेवाएँ'}
            </h2>
            <p className="md:text-Paragraph md:font-Paragraph font-Paragraph_sm text-justify my-4 md:mx-auto">
            {language === 'english' ? 'We specialize in temple painting services that blend traditional artistry with modern techniques, focusing on intricate designs for stone, RCC, and brick surfaces. Our artisans preserve cultural heritage with vibrant, durable colors, whether restoring ancient temples or creating new artworks.' : language === 'marathi' ? 'आम्ही मंदिराच्या पेंटिंग सेवांमध्ये माहिर आहोत जे आधुनिक तंत्रांसह पारंपारिक कलात्मकतेचे मिश्रण करतात, दगड, आरसीसी आणि विटांच्या पृष्ठभागासाठी जटिल डिझाइनवर लक्ष केंद्रित करतात. प्राचीन मंदिरांचा जीर्णोद्धार असो किंवा नवीन कलाकृती तयार करणे असो आमचे कारागीर चमकदार, टिकाऊ रंगांसह सांस्कृतिक वारसा जपतात.' : 'हम मंदिर के पेंटिंग सेवाओं में माहिर हैं जो पत्थर, आरसीसी और लकड़ी के सतहों के लिए जटिल डिज़ाइन पर ध्यान केंद्रित करते हैं और आधुनिक तकनीकों के साथ पारंपरिक कलात्मकता का मिश्रण करते हैं। हम प्राचीन मंदिरों का नवीनीकरण करते हैं या उन्हें नई कलाकृतियों से सजाते हैं, जो हमारे काम में चमकदार और टिकाऊ रंगों के साथ सांस्कृतिक विरासत को बनाए रखने में मदद करती हैं।'}
            </p>
          </div>
          <div className="order-1">
            <Image
              className="h-48 w-80 object-cover lg:w-[600px] lg:h-[350px]"
              src={SR3}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaintingArt;
