'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Contact() {
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
            Interested in Collaborating with Us?
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
            Enhance your temple project with our expertise for sustainable and sacred growth.
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
            Partner with us to create a temple that blends architectural innovation with cultural
            heritage, integrating eco-friendly practices and inspiring spiritual devotion.
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
              <Button type="submit" variant="outline" className="px-4 py-1 bg-yellow hover:bg-[#deb01d] text-black rounded-md text-buttonText font-buttonText">Let&apos;s Get Started</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
