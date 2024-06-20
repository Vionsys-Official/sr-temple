/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */

'use client';

import React from 'react';
import { MdLightbulbOutline } from 'react-icons/md';
import { FaCalculator, FaUserTie, FaLeaf } from 'react-icons/fa';
import { GiHouse, GiFlexibleStar } from 'react-icons/gi';
import { motion } from 'framer-motion';
import fadein from '@/utils/variants';

function WhyChooseUs() {
  return (
    <section>
      <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-8 lg:py-8">
        <motion.h1
          variants={fadein('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="md:text-MainHeading text-MainHeading_sm pb-8 text-center font-MainHeading"
        >
          See Why We are the Best Choice
        </motion.h1>
        <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-8 border-slate-400  border-b sm:border-r ">
            <div className="group max-w-md text-center space-y-2 hover:scale-110 ease-in duration-500">
              <div className="flex justify-center items-center">
                <MdLightbulbOutline className="text-center py-2 group-hover:text-yellow" size={50} />
              </div>

              <h6 className="mb-2 font-semibold leading-5">
                Innovative Design
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                We prioritize customer satisfaction, achieved through our
                innovative designs and top-tier construction standards.
              </p>
            </div>
          </div>
          <div className="p-8 border-slate-400 border-b lg:border-r">
            <div className="group max-w-md text-center space-y-2 hover:scale-110 ease-in duration-500">
              <div className="flex justify-center items-center ">
                <FaCalculator size={50} className="text-center py-2 group-hover:text-yellow" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Optimal Cost Estimation
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                While constructing masterpieces, cost is a crucial factor. We
                offer comprehensive temple construction services at the most
                competitive prices
              </p>
            </div>
          </div>
          <div className="p-8 border-slate-400 border-b sm:border-r lg:border-r-0">
            <div className=" group max-w-md text-center space-y-2 hover:scale-110 ease-in duration-500">
              <div className="flex justify-center items-center">
                <FaUserTie size={50} className="text-center py-2 group-hover:text-yellow" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Experienced Professionals
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Experience is paramount. Our seasoned workforce ensures
                efficient execution and timely project completion.
              </p>
            </div>
          </div>
          <div className="p-8 border-slate-400 border-b lg:border-b-0 lg:border-r">
            <div className="group max-w-md text-center space-y-2 hover:scale-110 ease-in duration-500">
              <div className="flex justify-center items-center">
                <FaLeaf size={50} className="text-center py-2 group-hover:text-yellow" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Sustainable Practices
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                We incorporate eco-friendly practices and sustainable materials
                to minimize environmental impact and promote long-term
                sustainability.
              </p>
            </div>
          </div>
          <div className="p-8 border-slate-400 border-b sm:border-b-0 sm:border-r">
            <div className=" group max-w-md text-center space-y-2 hover:scale-110 ease-in duration-500">
              <div className="flex justify-center items-center">
                <GiHouse size={50} className="text-center py-2 group-hover:text-yellow" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">Passive Design</h6>
              <p className="mb-3 text-sm text-gray-900">
                Orienting the temple to maximize natural light and ventilation
                reduces the need for artificial lighting and mechanical cooling.
              </p>
            </div>
          </div>
          <div className="p-8">
            <div className="group max-w-md text-center space-y-2 hover:scale-110 ease-in duration-500">
              <div className="flex justify-center items-center">
                <GiFlexibleStar size={50} className="text-center py-2 group-hover:text-yellow" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">Adaptability</h6>
              <p className="mb-3 text-sm text-gray-900">
                Designing flexible spaces that can accommodate future changes or
                expansions without compromising the temple's integrity or
                sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
