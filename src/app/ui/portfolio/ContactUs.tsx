'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import fadein from '@/utils/variants';
import { useLanguage } from '@/lib/languageContext';

function ContactUs() {
  const { language } = useLanguage() || { language: 'english' };
  return (
    <section className="max-w-full md:py-10 pb-6 pt-0 flex justify-center px-4 ">
      <div className="bg-[#254736] md:w-[70%] flex flex-col rounded-2xl justify-between py-4 px-8">
        <div>
          <motion.h2
            variants={fadein('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="font-bold text-Heading-sm md:text-Heading py-2 text-center text-white capitalize"
          >
            {language === 'english' ? 'Unlock Your Business Potential with Us!' : 'आमच्यासोबत तुमची व्यवसाय क्षमता अनलॉक करा!'}
          </motion.h2>
          <motion.p
            variants={fadein('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="py-2 text-Para-sm md:text-Para text-center text-white"
          >
            {language === 'english' ? 'Reach out now and embark on a journey to achieve your business aspirations.' : 'आत्ताच संपर्क साधा आणि तुमच्या आकांक्षा साध्य करण्यासाठी प्रवास सुरू करा.'}
          </motion.p>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/contact">
            <Button type="submit" variant="outline" className="px-4 py-1 bg-yellow hover:bg-[#deb01d] text-[#000] rounded-md text-buttonText font-buttonText">{language === 'english' ? 'Get in Touch' : 'संपर्क साधा'}</Button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ContactUs;
