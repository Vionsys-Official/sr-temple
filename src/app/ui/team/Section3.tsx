import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import Image from 'next/image';
import TempleImage from '../../../../public/assets/team/TempleImage.jpg';

function Section3() {
  return (
    <section>
      <div className="container flex flex-col px-10 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        {/* Text content */}
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 lg:text-4xl">
              Expert Team in
              <span className=" mx-1 font-extrabold text-MainHeading  relative inline-block stroke-current">
                Temple
                <svg
                  className="absolute -bottom-0.5 w-full max-h-1.5  text-gray"
                  viewBox="0 0 55 5"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="3" />
                </svg>
              </span>

              Construction
            </h1>
            <p className="mt-4 text-gray-600 text-Paragraph">
              {/* eslint-disable-next-line max-len */}
              Our expert team in temple construction brings together unparalleled craftsmanship and deep-rooted tradition. Each structure we build is a testament to our commitment to excellence, creating sacred spaces that inspire devotion and reverence.
            </p>

            <div className="grid gap-6 mt-8 sm:grid-cols-2">
              {/* Feature list */}
              <div className="flex items-center text-gray-800">
                <IoMdCheckmarkCircleOutline className="text-gray" />
                <span className="mx-3">Over a Decade of Experience</span>
              </div>
              <div className="flex items-center text-gray-800">
                <IoMdCheckmarkCircleOutline className="text-gray" />
                <span className="mx-3">Nationwide Reach and Service</span>
              </div>
              <div className="flex items-center text-gray-800">
                <IoMdCheckmarkCircleOutline className="text-gray" />
                <span className="mx-3">Innovative Temple Designs</span>
              </div>
              <div className="flex items-center text-gray-800">
                <IoMdCheckmarkCircleOutline className="text-gray" />
                <span className="mx-3">High-Quality Craftsmanship</span>
              </div>
              <div className="flex items-center text-gray-800">
                <IoMdCheckmarkCircleOutline className="text-gray" />
                <span className="mx-3">Blend of Tradition and Modernity</span>
              </div>
              <div className="flex items-center text-gray-800">
                <IoMdCheckmarkCircleOutline className="text-gray" />
                <span className="mx-3">Dedicated Project Managers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <Image
            width={500}
            height={500}
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src={TempleImage}
            alt=" photo"
          />
        </div>
      </div>
    </section>
  );
}

export default Section3;
