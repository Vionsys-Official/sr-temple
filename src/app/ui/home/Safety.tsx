'use client';

import React from 'react';
import Image from 'next/image';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { motion } from 'framer-motion';
import s1 from '../../../../public/assets/home/S1.jpg';

const features = [
  {
    title: 'Safety Standards & Protocols',
    content: 'We strictly adhere to local, state, and federal safety regulations, implementing rigorous protocols across all projects to ensure compliance and a safe work environment.',
  },
  {
    title: 'Safety Certifications & Training',
    content: 'Our team maintains certified safety standards such as OSHA regulations, complemented by ongoing training to stay updated on the latest practices.',
  },
  {
    title: 'Interactive Safety Tools',
    content: 'Clients benefit from interactive safety tools including checklists to assess project risks, empowering proactive safety management.',
  },
  {
    title: 'Communication and Reporting',
    content: 'We offer an easy-to-use system for clients to report safety concerns promptly, alongside readily accessible emergency contact details.',
  },
];
export default function Safety() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 1 }}
      transition={{
        delay: 0.2,
        scale: { type: 'spring', stiffness: 30 },
        opacity: { duration: 0.6 },
        ease: 'easeInOut',
      }}
      className="py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl lg:px-8 lg:py-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 100 }} // X:100
        whileInView={{ opacity: 1, y: 1 }} // y:100
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut',
        }}
        className="md:text-MainHeading text-MainHeading_sm md:font-MainHeading_sm font-MainHeading leading-none tracking-tight md:mx-auto text-center"
      >
        Our Safety Excellence
      </motion.h2>
      <motion.h6
        initial={{ opacity: 0, y: 100 }} // X:100
        whileInView={{ opacity: 1, y: 1 }} // y:100
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut',
        }}
        className="md:text-SubHeading text-SubHeading_sm md:font-SubHeading font-SubHeading_sm text-center mb-3 py-3"
      >
        Integrated Safety and Client Engagement
      </motion.h6>
      <div className="mx-auto max-w-7xl md:px-6 px-2 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none lg:grid lg:grid-cols-2">
          <div className="mt-2 mb-2 flex items-center justify-center lg:justify-end">
            <Image
              style={{ height: '400px' }}
              className="object-cover w-full opacity-80 rounded-lg shadow-lg"
              src={s1}
              alt="Construction image 3"
            />
          </div>
          <div className="mt-4 md:mr-4 lg:mt-0 lg:max-w-lg lg:ml-8">
            <dl className="mt-4 space-y-6 leading-5">
              {features.map((feature) => (
                <div key={feature.title} className="md:pl-9">
                  <motion.div
                    initial={{ opacity: 0, x: -70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.2,
                      scale: { type: 'spring', stiffness: 30 },
                      opacity: { duration: 0.6 },
                      ease: 'easeInOut',
                    }}
                  >
                    <h6 className="mb-2 font-semibold leading-5">
                      <AiFillSafetyCertificate size={15} className="inline mr-2" />
                      {feature.title}
                    </h6>
                    <p className=" mt-2 md:ml-6 ml-4 md:text-Paragraph text-Paragraph_sm md:font-Paragraph font-Paragraph_sm">
                      {feature.content}
                    </p>
                  </motion.div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
