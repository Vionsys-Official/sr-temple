'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { useLanguage } from '@/lib/languageContext';
import { Button } from '@/components/ui/button';

// eslint-disable-next-line react/function-component-definition
const CallToAction: React.FC = () => {
  const { language } = useLanguage() || { language: 'english' };

  return (
    <div className="container px-6 md:py-5 text-center my-4 pb-4">
      <div className="flex flex-col md:flex-row items-center justify-between relative w-full h-auto md:h-40 bg-white text-gray shadow-2xl rounded-lg md:p-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: 'easeInOut',
          }}
          className="md:w-10/12 w-full text-Paragraph_sm md:text-Paragraph font-Paragraph_sm md:font-Paragraph"
        >
          <span className="flex">
            {language === 'english' ? 'Partner with us to create a temple that seamlessly blends architectural innovation with cultural heritage, integrating cutting-edge eco-friendly practices and inspiring deep spiritual devotion and community connection.' : 'सांस्कृतिक वारसा आणि अत्याधुनिक पर्यावरणानुकूल पद्धती एकत्रित करणारे आणि खोल आध्यात्मिक भक्ती आणि समुदाय संबंधाला प्रेरणा देणारे मंदिर निर्माण करण्यासाठी आमच्यासोबत भागीदारी करा.'}
          </span>
        </motion.div>
        <div className="flex justify-center items-center mt-3 mb-3">
          <Link href="/contact">
            <Button
              type="submit"
              variant="outline"
              className="px-8 py-1 bg-yellow hover:bg-yellow text-[#000] rounded-md text-buttonText_sm md:text-buttonText md:font-buttonText font-buttonText_sm"
            >
              {language === 'english' ? 'Get in Touch' : 'संपर्क साधा'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
