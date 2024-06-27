'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '@/data/HomeTestimonial';
import { useLanguage } from '@/lib/languageContext';
import { InfiniteMovingCards } from '../../../components/ui/infinite-moving-cards';

export default function InfiniteMovingCardsDemo() {
  const { language } = useLanguage() || { language: 'english' };
  // const [languagefeat, setlanguagefeat] = useState(language==="english"?true:false)
  return (
    <div className="md:h-[25rem] h-[34rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 100 }} // X:100
        whileInView={{ opacity: 1, y: 1 }} // y:100
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut',
        }}
        className="md:text-MainHeading md:font-MainHeading text-MainHeading_sm font-MainHeading_sm"
      >
        {language === 'english' ? 'Testimonials' : language === 'marathi' ? 'अभिप्राय' : 'प्रतिक्रिया'}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }} // X:100
        whileInView={{ opacity: 1, y: 1 }} // y:100
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut',
        }}
        className="md:text-SubHeading text-SubHeading_sm md:font-SubHeading font-SubHeading_sm md:px-48 px-2 py-3 text-center"
      >
        {language === 'english' ? 'We are proud to share our customers experiences, reflecting our commitment to excellence and the quality of our products and services.' : language === 'marathi' ? 'आम्ही आमच्या ग्राहकांच्या अनुभवांबद्दल अभिमानाने सांगतो, जे आमच्या उत्कृष्टतेच्या वचनबद्धतेचा आणि सेवांच्या गुणवत्तेचा प्रतिबिंब आहे.' : 'हम अपने ग्राहक अनुभवों पर गर्व करते हैं, जो सेवाओं की उत्कृष्टता और गुणवत्ता के प्रति हमारी प्रतिबद्धता का प्रतिबिंब है।'}
      </motion.p>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        className="bg-slate-300"
      />

    </div>
  );
}
