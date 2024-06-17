/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

// eslint-disable-next-line react/function-component-definition
const Choose: React.FC = () => (
  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Get</span>
          </span>{' '}
          to know the reasons you should choose us!
        </h2>
        <p className="text-base text-gray md:text-lg">
        Our innovative solutions and attention to detail ensure that every project exceeds our clients' expectations, building trust and lasting relationships.
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <div className="duration-300 transform bg-white border-l-4 border-yellow hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm bg-gray">
            <h6 className="mb-2 font-semibold leading-5 text-white">Innovative Design</h6>
            <p className="text-sm text-white">
            We prioritize customer satisfaction, achieved through our innovative designs and top-tier construction standards.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-yellow hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm bg-gray">
            <h6 className="mb-2 font-semibold leading-5 text-white">Optimal Cost Estimation</h6>
            <p className="text-sm text-white">
            While constructing masterpieces, cost is a crucial factor. We offer comprehensive temple construction services at the most competitive prices
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-yellow hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm bg-gray">
            <h6 className="mb-2 font-semibold leading-5 text-white">
            Experienced Professionals and Skilled Workforce
            </h6>
            <p className="text-sm text-white">
            Experience is paramount. Our seasoned workforce ensures efficient execution and timely project completion."
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-yellow hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm bg-gray">
            <h6 className="mb-2 font-semibold leading-5 text-white">Sustainable Practices</h6>
            <p className="text-sm text-white">
            We incorporate eco-friendly practices and sustainable materials to minimize environmental impact and promote long-term sustainability.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a
          href="/"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-gray transition duration-200 rounded shadow-md md:w-auto bg-yellow hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Learn more
        </a>
      </div>
    </div>
);

export default Choose;
