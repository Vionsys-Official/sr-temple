'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import lanhero from '../lanhero.jpg';
import srlogo from '../../../../../public/assets/logo/srlogo.png';

function HeroSection() {
  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-between px-6">
        <div className="flex items-center justify-center">
          <div className="flex md:items-center justify-center text-3xl font-bold text-true-gray-800">
            <div className="px- py-2">
              <Link href="/">
                <Image
                  src={srlogo}
                  alt=""
                  className="md:w-14 md:h-12 w-14 h-14"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center ml-44">
          <Link
            href="/contact"
            className="mr-5 font-bold text-true-gray-800 bg-amber-400  border rounded-xl px-3 py-2 hover:text-cool-gray-700 transition duration-150 ease-in-out"
          >
            Contact us
          </Link>
          <Link
            href="/about"
            className="px-3 py-2 font-bold rounded-xl bg-amber-400 border shadow-md from-true-gray-900 transition duration-200 ease-in-out"
          >
            About Us
          </Link>
        </div>
      </div>
      <div className="w-full">
        <div className="md:h-[90vh] h-[70vh] flex justify-center items-center relative overflow-hidden bg-slate-900">
          <Image
            src={lanhero}
            alt="heroimg"
            className="object-cover w-full h-full opacity-40"
            quality={100}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute sm:py-5 mx-10 flex flex-col items-center"
          >
            <h1 className=" text-white md:text-5xl font-MainHeading text-MainHeading_sm text-center">
              Transforming Spiritual Dreams into Architectural Reality
            </h1>
            <p className="sm:text-xl text-SubHeading_sm font-SubHeading text-yellow text-center px-2 sm:mx-44 mb-4 backdrop-blur-sm">
              Creating timeless temples that capture the essence of your
              spiritual journey with unparalleled craftsmanship and attention to
              detail.
            </p>
            <Link href="/">
              <button
                type="submit"
                className="relative  group cursor-pointer text-sky-50 overflow-hidden h-10 w-44 rounded-xl bg-yellow  flex justify-center items-center font-extrabold mx-auto"
              >
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-amber-600" />
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-amber-500" />
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-amber-400" />
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-amber-300" />
                <p className="z-20 text-[#000]">Discover more</p>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
