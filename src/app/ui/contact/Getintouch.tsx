'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import fadein from '../../../utils/variants';
import call from '../../../../public/assets/contact/call-service.gif';
import email from '../../../../public/assets/contact/email-file.gif';
import location from '../../../../public/assets/contact/location-pin.gif';

function GetInTouch() {
  return (

    <div className="w-screen">
      {/* Main section */}
      <section className=" md:h-[80vh] w-screen ">
        <div className="flex-col text-center  justify-center py-5">
          <div className="text-center">
            <motion.h1
              variants={fadein('up', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="text-MainHeading font-MainHeading"
            >
              Contact Our Office
            </motion.h1>
          </div>
          {/* cards */}
          <div className="flex md:flex-row flex-col justify-center gap-6 md:gap-10 py-10">
            {/* Address card */}
            <div className="cursor-default overflow-hidden relative transition-all duration-500 hover:translate-y-2 md:w-[27vw] md:h-[50vh] bg-neutral-50 rounded-lg shadow-md shadow-slate-500 flex items-center justify-center gap-2 p-10 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-amber-400">
              <div className="flex flex-col justify-center items-center text-center w-full">
                <Image src={location} alt="icon" className="w-12 h-12 mb-4" />
                <span className="font-CardHeading text-CardHeading">
                  Address
                </span>
                <p className="line-clamp-3 text-Paragraph font-Paragraph mt-2">
                  Shivaji Chowk Loha, Nanded Maharashtra, Pincode-431708.
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="cursor-default overflow-hidden relative transition-all duration-500 hover:translate-y-2 md:w-[27vw] md:h-[50vh] bg-neutral-50 rounded-lg shadow-md shadow-slate-500 flex items-center justify-center gap-2 p-10 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-amber-400">
              <div className="flex flex-col justify-center items-center text-center w-full">
                <Image src={email} alt="icon" className="w-12 h-12 mb-4" />
                <span className="font-CardHeading text-CardHeading">Email</span>
                <p className="line-clamp-4 text-Paragraph font-Paragraph mt-2">
                  sunil.rathod@srtempleconstructions.com
                  govind.rathodsae@gmail.com
                </p>
              </div>
            </div>
            {/* Call card */}
            <div className="cursor-default overflow-hidden relative transition-all duration-500 hover:translate-y-2 md:w-[27vw] md:h-[50vh] h-full bg-neutral-50 rounded-lg shadow-md shadow-slate-500 flex items-center justify-center gap-2 p-10 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-amber-400">
              <div className="flex flex-col justify-center items-center text-center w-full">
                <Image src={call} alt="icon" className="w-12 h-12 mb-4" />
                <span className="font-CardHeading text-CardHeading">
                  Make A Call
                </span>
                <p className="line-clamp-3 text-Paragraph font-Paragraph mt-2">
                  9834632900 / 9765938370
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetInTouch;
