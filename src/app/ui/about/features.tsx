/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

const features = () => (
  <div className="flex flex-wrap justify-center mt-20">
    <div className="w-screen text-center text-MainHeading font-bold text-gray">
      <h1 className="md:mb-5"> Have a Look at our Features</h1>
      <p className="text-Paragraph mb-10">At SR Temple Construction, we take pride in our meticulous attention to detail, ensuring that every project reflects our dedication to excellence and our clients' visions.</p>
    </div>

    <div className="p-4 max-w-sm ">
      <div className="flex rounded-lg h-full dark:bg-gray-800 bg-yellow hover:bg-gray p-8 flex-col">
        <div className="flex items-center mb-3">
          <div
            className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <h2 className="text-white dark:text-white text-lg font-medium">Feature 1</h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <p className="leading-relaxed text-base text-white dark:text-gray-300">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
          </p>
        </div>
      </div>
    </div>

    <div className="p-4 max-w-sm">
      <div className="flex rounded-lg h-full dark:bg-gray-800 bg-yellow  hover:bg-gray p-8 flex-col">
        <div className="flex items-center mb-3">
          <div
            className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <h2 className="text-white dark:text-white text-lg font-medium">Feature 2</h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <p className="leading-relaxed text-base text-white dark:text-gray-300 pb-10 ">
            Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.
          </p>
        </div>
      </div>
    </div>
    <div className="p-4 max-w-sm">
      <div className="flex rounded-lg h-full dark:bg-gray-800 bg-yellow  hover:bg-gray p-8 flex-col">
        <div className="flex items-center mb-3">
          <div
            className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <h2 className="text-white dark:text-white text-lg font-medium">Feature 2</h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <p className="leading-relaxed text-base text-white dark:text-gray-300">
            Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.
          </p>
        </div>
      </div>
    </div>
  </div>

);

export default features;
