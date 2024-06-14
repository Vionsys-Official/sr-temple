import React from 'react';
import { FaBullseye } from 'react-icons/fa6';

function Vision() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="px-4 mx-auto md:px-24 lg:px-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="flex flex-col lg:items-center lg:flex-row lg:max-w-4xl">
          <div className="flex items-center mb-6 lg:w-1/3 lg:mb-0">
            <div className="flex items-center justify-center w-14 h-14 mr-5 rounded-full bg-indigo-50 sm:w-24 sm:h-24 xl:mr-15 xl:w-24 xl:h-24">
              <FaBullseye size={60} />
            </div>
            <h3 className="text-MainHeading font-MainHeading">
              Vision
            </h3>
          </div>
          <div className="lg:w-2/3">
            <p className="text-gray-800">
              To be the leading temple construction company in India, recognized for our dedication
              to quality, customer satisfaction and innovative designs that reflect the rich
              cultural heritage of our country.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
