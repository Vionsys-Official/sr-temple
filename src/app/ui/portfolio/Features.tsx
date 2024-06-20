/* eslint-disable react/no-unescaped-entities */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import fadein from '@/utils/variants';

export function Features() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:py-6">
      <motion.h1
        variants={fadein('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="text-MainHeading font-MainHeading py-6 text-center"
      >
        Our Features
      </motion.h1>
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10 pt-8">
        <div className="lg:w-1/2">
          <motion.h2
            variants={fadein('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-lg mb-6 text-3xl md:text-SubHeading text-center font-SubHeading tracking-tight"
          >
            Modern temple construction emphasizes sustainability for
            environmental and cultural preservation.
          </motion.h2>
        </div>
        <div className="lg:w-1/2">
          <motion.p
            variants={fadein('left', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="text-base  md:text-Paragraph"
          >
            Temple construction today integrates sustainability principles to
            ensure environmental responsibility and long-term preservation of
            cultural heritage. Sustainable practices aim to minimize ecological
            impact, conserve resources, and promote community well-being.
          </motion.p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:gap-12 justify-center gap-6  items-center">
        <div>
          <div className="overflow-hidden before:ease-in-out after:ease-in-out bg-white group cursor-pointer relative flex flex-col gap-4 justify-between rounded-2xl border hover:after:w-full border-white-222 hover:border-[#11BE86] duration-300 p-4 md:p-6 px-8 before:h-full before:w-2 hover:before:w-full after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:duration-300 after:opacity-5 after:bg-[url('https://s3-alpha-sig.figma.com/img/6956/4aec/59afa93303a34a23ecc13368dc4094db?Expires=1717977600&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=PFrwNwC7QeqlIUsWFsC-jbQzlVTUSh7T5VfJ9vMNaAEsoOS92kRDH-OjWcAX~dmuZ77fPWjZJX0v1kXaZENeqa--USg1BcCN8z~Z1id5y5RQT1ZTU5OR4PRrLISHbowyTAu65h2jCKOSYXCrXN3F6fH8epD-Pm9TCGCYvD9svkhnbTSZxPKZhn8okHm7W~3wWyIhJBaZyQ30qWwD~JAh5r0BRE6XIfIpgTlUWeLq9wwCbwFZQR5RWInuHUfLrfhvAnxmzVVoTO1TxyjHOeXVb68Tc~nJuypwlDmcd0Sg02sJu3-uj7vFXRul6qw0LRfsQrWS5c5RJ~P-z5-eS~1jTA__')] before:duration-300 before:-z-1 before:bg-[#254736] before:absolute before:top-0 before:left-0">
            <h4 className="font-medium text-lg duration-300 group-hover:text-white group-hover:z-[5]">
              Passive Design
            </h4>
            <p className="text-Paragraph group-hover:text-white group-hover:z-[5]">
              {' '}
              Orienting the temple to maximize natural light and ventilation
              reduces the need for artificial lighting and mechanical cooling.
            </p>
          </div>
        </div>

        <div>
          <div className="overflow-hidden before:ease-in-out after:ease-in-out bg-white group cursor-pointer relative flex flex-col gap-4 justify-between rounded-2xl border hover:after:w-full border-white-222 hover:border-[#11BE86] duration-300 p-4 md:p-6 px-8 before:h-full before:w-2 hover:before:w-full after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:duration-300 after:opacity-5 after:bg-[url('https://s3-alpha-sig.figma.com/img/6956/4aec/59afa93303a34a23ecc13368dc4094db?Expires=1717977600&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=PFrwNwC7QeqlIUsWFsC-jbQzlVTUSh7T5VfJ9vMNaAEsoOS92kRDH-OjWcAX~dmuZ77fPWjZJX0v1kXaZENeqa--USg1BcCN8z~Z1id5y5RQT1ZTU5OR4PRrLISHbowyTAu65h2jCKOSYXCrXN3F6fH8epD-Pm9TCGCYvD9svkhnbTSZxPKZhn8okHm7W~3wWyIhJBaZyQ30qWwD~JAh5r0BRE6XIfIpgTlUWeLq9wwCbwFZQR5RWInuHUfLrfhvAnxmzVVoTO1TxyjHOeXVb68Tc~nJuypwlDmcd0Sg02sJu3-uj7vFXRul6qw0LRfsQrWS5c5RJ~P-z5-eS~1jTA__')] before:duration-300 before:-z-1 before:bg-[#254736] before:absolute before:top-0 before:left-0">
            <h4 className="font-medium text-lg duration-300 group-hover:text-white group-hover:z-[5]">
              Adaptability
            </h4>
            <p className="text-Paragraph group-hover:text-white group-hover:z-[5]">
              {' '}
              Designing flexible spaces that can accommodate future changes or
              expansions without compromising the temple's integrity or
              sustainability.
            </p>
          </div>
        </div>

        <div>
          <div className="overflow-hidden before:ease-in-out after:ease-in-out bg-white group cursor-pointer relative flex flex-col gap-4 justify-between rounded-2xl border hover:after:w-full border-white-222 hover:border-[#11BE86] duration-300 p-4 md:p-6 px-8 before:h-full before:w-2 hover:before:w-full after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:duration-300 after:opacity-5 after:bg-[url('https://s3-alpha-sig.figma.com/img/6956/4aec/59afa93303a34a23ecc13368dc4094db?Expires=1717977600&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=PFrwNwC7QeqlIUsWFsC-jbQzlVTUSh7T5VfJ9vMNaAEsoOS92kRDH-OjWcAX~dmuZ77fPWjZJX0v1kXaZENeqa--USg1BcCN8z~Z1id5y5RQT1ZTU5OR4PRrLISHbowyTAu65h2jCKOSYXCrXN3F6fH8epD-Pm9TCGCYvD9svkhnbTSZxPKZhn8okHm7W~3wWyIhJBaZyQ30qWwD~JAh5r0BRE6XIfIpgTlUWeLq9wwCbwFZQR5RWInuHUfLrfhvAnxmzVVoTO1TxyjHOeXVb68Tc~nJuypwlDmcd0Sg02sJu3-uj7vFXRul6qw0LRfsQrWS5c5RJ~P-z5-eS~1jTA__')] before:duration-300 before:-z-1 before:bg-[#254736] before:absolute before:top-0 before:left-0">
            <h4 className="font-medium text-lg duration-300 group-hover:text-white group-hover:z-[5]">
              Cultural Sensitivity
            </h4>
            <p className="text-Paragraph group-hover:text-white group-hover:z-[5]">
              {' '}
              Respecting local traditions, aesthetics, and rituals in design and
              material selection ensures the temple's authenticity and relevance
              within its community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
