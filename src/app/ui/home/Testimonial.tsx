'use client';

import React from 'react';
import { motion } from 'framer-motion';
import testimonials from '@/data/HomeTestimonial';
import { InfiniteMovingCards } from '../../../components/ui/infinite-moving-cards';

export default function InfiniteMovingCardsDemo() {
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
        Testimonials
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
        We are proud to share our customers experiences, reflecting our commitment to
        excellence and the quality of our products and services.
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
