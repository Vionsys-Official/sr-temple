import React from 'react';
import Image from 'next/image';
import { GrUserWorker } from 'react-icons/gr';
import templee from '../../../../public/assets/home/templee.jpg';

function WeWork() {
  return (
    <div>
      <section className="light py-4 md:py-10 bg-slate-100 dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="px-4 mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-full max-w-3xl text-center">
              <h2 className="leading-none md:text-MainHeading md:font-MainHeading text-MainHeading_sm font-MainHeading_sm text-center mb-4">How We Work</h2>
              <p className="md:text-SubHeading text-SubHeading_sm md:font-SubHeading font-SubHeading_sm text-center">
                Our approach ensures precision, expertise and exceptional results,
                bringing your vision to life.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 lg:gap-12">
            <div className="col-span-3 lg:col-span-1 lg:order-2">
              <Image src={templee} alt="" className="g-center bg-no-repeat bg-cover rounded-2xl h-full min-h-[175px]" />
            </div>
            <div className="col-span-3 lg:col-span-1 ezy__service13-list">
              <div className="lg:my-12">
                <div className="flex md:mt-12 mt-4 lg:text-end">
                  <div className="mr-4 lg:mr-0 lg:ml-4 lg:order-2">
                    <span
                      className="bg-[#254736] text-white w-10 h-10 rounded-full text-3xl inline-flex justify-center items-center mb-6"
                    >
                      <GrUserWorker size={25} />
                    </span>
                  </div>
                  <div>
                    <h4 className="md:text-CardHeading text-CardHeading_sm md:font-CardHeading font-CardHeading_sm mb-4">Planning & Design</h4>
                    <p className="md:text-Paragraph md:font-Paragraph font-Paragraph_sm">
                      We start with thorough measurement and site evaluation followed
                      by creating 2D and 3D architectural maps for clarity.
                    </p>
                  </div>
                </div>
                <div className="flex md:mt-12 mt-4 lg:text-end">
                  <div className="mr-4 lg:mr-0 lg:ml-4 lg:order-2">
                    <span
                      className="bg-[#254736] text-white w-10 h-10 rounded-full text-3xl inline-flex justify-center items-center mb-6"
                    >
                      <GrUserWorker size={25} />
                    </span>
                  </div>
                  <div>
                    <h4 className="md:text-CardHeading text-CardHeading_sm md:font-CardHeading font-CardHeading_sm mb-4">Construction Expertise</h4>
                    <p className="md:text-Paragraph md:font-Paragraph font-Paragraph_sm">
                      Our expertise includes detailed cost estimation, valuation
                      and creating structural drawings for safety and durability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 lg:col-span-1 ezy__service13-list lg:order-3">
              <div className="lg:my-12">
                <div className="flex md:mt-12 mt-4">
                  <div className="mr-3">
                    <span
                      className="bg-[#254736] text-white w-10 h-10 rounded-full text-3xl inline-flex justify-center items-center mb-6"
                    >
                      <GrUserWorker size={25} />
                    </span>
                  </div>
                  <div>
                    <h4 className="md:text-CardHeading text-CardHeading_sm md:font-CardHeading font-CardHeading_sm mb-4">Traditional Wisdom</h4>
                    <p className="md:text-Paragraph md:font-Paragraph font-Paragraph_sm">
                      Our approach ensures experience, precision, expertise and exceptional
                      results bringing your vision to your life.
                    </p>
                  </div>
                </div>
                <div className="flex md:mt-12 mt-4">
                  <div className="mr-3">
                    <span
                      className="bg-[#254736] text-white w-10 h-10 rounded-full text-3xl inline-flex justify-center items-center mb-6"
                    >
                      <GrUserWorker size={25} />
                    </span>
                  </div>
                  <div>
                    <h4 className="md:text-CardHeading text-CardHeading_sm md:font-CardHeading font-CardHeading_sm mb-4">Execution & Support:</h4>
                    <p className="md:text-Paragraph md:font-Paragraph font-Paragraph_sm">
                      We ensure impeccable construction execution and offer ongoing maintenance,
                      renovation and consultancy services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WeWork;
