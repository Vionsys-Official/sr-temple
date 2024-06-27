'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';

function Contact() {
  const { language } = useLanguage() || { language: 'english' };
  return (
    <div>
      <div className="px-2 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 flex flex-col items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, x: 100 }} // X:100
            whileInView={{ opacity: 1, x: 1 }} // y:100
            transition={{
              delay: 0.2,
              scale: { type: 'spring', stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: 'easeInOut',
            }}
            className="md:text-MainHeading md:font-MainHeading text-MainHeading_sm font-MainHeading_sm text-center md:mx-auto md:py-3 capitalize"
          >
            {language === 'english' ? 'Interested in Collaborating with Us?' : language === 'marathi' ? 'आमच्यासोबत सहयोग करण्यास इच्छुक आहात का?' : 'हमारे साथ सहयोग करने में रुचि रखते हैं?'}
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
            className="md:text-SubHeading text-SubHeading_sm md:font-SubHeading font-SubHeading_sm text-center mb-3"
          >
            {language === 'english' ? 'Enhance your temple project with our expertise for sustainable and sacred growth.' : language === 'marathi' ? 'शाश्वत आणि पवित्र वाढीसाठी आमच्या कौशल्यासह तुमच्या मंदिर प्रकल्पाला समृद्ध करा.' : 'टिकाऊ और पवित्र विकास के लिए अपनी मंदिर परियोजना को हमारी विशेषज्ञता से समृद्ध करें।'}
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
            className="md:text-Paragraph md:font-Paragraph font-Paragraph_sm py-3 md:mb-6 mb-3 text-center"
          >
            {language === 'english' ? 'Partner with us to create a temple that blends architectural innovation with cultural heritage integrating eco-friendly practices and inspiring spiritual devotion.' : language === 'marathi' ? 'स्थापत्यशास्त्रातील नवकल्पना आणि सांस्कृतिक वारसाचे मिश्रण करणारे, पर्यावरणास अनुकूल प्रथा एकत्रित करणारे आणि आध्यात्मिक भक्तीला प्रेरणा देणारे मंदिर तयार करण्यासाठी आमच्यासोबत भागीदारी करा.' : 'एक ऐसा मंदिर बनाने के लिए हमारे साथ साझेदारी करें जो वास्तुशिल्प नवाचार और सांस्कृतिक विरासत को मिश्रित करता है, पर्यावरण-अनुकूल प्रथाओं को एकीकृत करता है और आध्यात्मिक भक्ति को प्रेरित करता है।'}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 100 }} // X:100
            whileInView={{ opacity: 1, y: 1 }} // y:100
            transition={{
              delay: 0.2,
              scale: { type: 'spring', stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: 'easeInOut',
            }}
          >
            <Link href="/contact">
              <Button type="submit" variant="outline" className="px-4 py-1 bg-yellow hover:bg-[#deb01d] text-black rounded-md text-buttonText font-buttonText">
                {language === 'english' ? 'Lets Get Started' : language === 'marathi' ? 'संपर्क साधा' : 'संपर्क करे'}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
