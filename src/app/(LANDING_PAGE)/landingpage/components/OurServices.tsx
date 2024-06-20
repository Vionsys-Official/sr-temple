/* eslint-disable react/no-array-index-key */

'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: 'Valuation services',
    description:
      'We offer comprehensive valuation services to assess the financial aspects of your temple construction project. Our valuation experts provide detailed cost analysis, helping you understand investment required for project. ',
  },
  {
    title: 'Consultancy Services',
    description:
      'We provide expert consultancy services to guide you through every stage of temple construction project. Our consultants offer valuable insights and advice on design, materials, and construction techniques.',
  },
  {
    title: 'Vastu Shastra Plan Drawing Services',
    description:
      'Offering architectural plans that are aligned with Vastu Shastra principles, ensuring your spaces to promote health, prosperity, well-being, and bringing positive energy and well-being into every corner.',
  },
  {
    title: '2D, 3D, Design Services',
    description:
      'Specialized in creating 2D and 3D architectural plans infused with Vastu Shastra principles ensuring harmony and functionality.Our skilled designers and architects work closely with you to develop detailed plans.',
  },
  {
    title: 'Maintenance and Renovation services',
    description:
      'Comprehensive upkeep and effective enhancement of temples ensuring longevity and Our team offers regular maintenance services to ensure your property remains in top condition.',
  },
  {
    title: 'Repairs and Fixes Services',
    description:
      'Our skilled professionals handle all types of repairs and fixes, ensuring every aspect of your property is in perfect working order and provide efficient solutions to maintain the integrity and appearance of your property.',
  },
];

function OurServices() {
  return (
    <div className="px-4 py-8">
      <section className="flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: 'easeOut',
          }}
          className="text-center"
        >
          <h1 className="text-3xl font-MainHeading text-MainHeading  py-2">
            Our Services
          </h1>
          <p className="md:text-SubHeading text-SubHeading_sm font-SubHeading md:mx-40 py-2">
            We offer a full spectrum of services from initial concept to final
            blessing, ensuring your temple is crafted with the utmost care and
            expertise.
          </p>
        </motion.div>
        <div className="flex flex-row flex-wrap justify-center gap-6 p-4">
          {services.map((service, index) => (
            <div
              key={index}
              className=" group overflow-hidden bg-gradient-to-tr from-amber-300 via-amber-400 to-amber-500 text-gray-50 rounded-xl relative md:w-[25vw]  w-full md:h-[50vh] h-[30vh]"
            >
              <div className="absolute w-28 h-28 bg-transparent border-4 opacity-50 rounded-full left-1 top-12 group-hover:top-28 group-hover:left-56 group-hover:scale-125 group-hover:blur duration-700 transform -translate-x-1/2 -translate-y-1/2" />
              <div className="p-5 relative z-10 h-full">
                <div className="flex-col justify-center  text-center h-full md:px-4 py-4">
                  <span className="font-CardHeading text-white md:text-CardHeading text-CardHeading_sm  py-2">
                    {service.title}
                  </span>
                  <p className="text-Paragraph font-Paragraph px-2">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default OurServices;
