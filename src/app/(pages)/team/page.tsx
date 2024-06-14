import React from 'react';
import Image from 'next/image';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FaSquarePhone } from 'react-icons/fa6';

function Page() {
  return (
    <section>
      <div className="container flex flex-col px-10 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        {/* Text content */}
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 lg:text-4xl">
              Expert Team in
              <span className="text-yellow mx-1 font-extrabold text-4xl relative inline-block stroke-current">
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
            <p className="mt-4 text-gray-600">
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
                <span className="mx-3">Fast shipping (+ Express)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <Image
            width={1000}
            height={1000}
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src="/assets/team/TempleImage.jpg"
            alt=" photo"
          />
        </div>
      </div>

      <div className="bg-white p-10 ">
        <div className="flex justify-center m-5">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 relative rounded-full border-8 border-slate-700 overflow-hidden">
            <Image
              src="/assets/team/ImageTeam.png"
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <h1 className="text-SubHeading font-semibold text-center mt-4">
          SUNIL ULHAS RATHOD
        </h1>
        <h6 className="text-gray-500 text-center">Owner</h6>
        <h1 className="text-gray-500 flex items-center justify-center m-2">
          <FaSquarePhone className="mt-[1px] mr-2" />
          9834632900
        </h1>
        <div className="flex justify-center p-2">
          <div className="border-b-2 border-gray-500 w-full" />
        </div>
        <div className="text-center p-5">
          <p>
            {/* eslint-disable-next-line max-len */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illo, delectus ratione iusto at aperiam mollitia enim quam sint accusamus aliquam cumque id ipsam ipsa omnis. Ab provident odit error.
          </p>
        </div>
        <div className="flex justify-center gap-4 lg:p-5">
          <button type="button" className="text-white bg-yellow  font-medium rounded-lg text-sm px-5 py-2.5 ">
            Contact us
          </button>
          <button type="button" className="text-white bg-gray font-medium rounded-lg text-sm px-5 py-2.5 ">
            Read More
          </button>
        </div>
      </div>

      {/* Features section */}

    </section>
  );
}

export default Page;
