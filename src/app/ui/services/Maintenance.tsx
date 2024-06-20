import React from 'react';
import { FaTools, FaHammer, FaWrench } from 'react-icons/fa';

function Maintenance() {
  return (
    <div className="bg-amber-50 py-4">
      <div className="container mx-auto text-center">
        <h2 className="text-MainHeading_sm md:text-MainHeading font-bold text-center mb-4">
          Maintenance & Renovation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
          <div className="flex flex-col items-center p-3 transition-transform transform hover:scale-105">
            <FaTools className="h-12 w-12 text-yellow mb-2" />
            <h3 className="text-SubHeading font-CardHeading mb-2">
              General Maintenance
            </h3>
            <p className="text-Paragraph text-center">
              Our team offers regular maintenance services to ensure your property
              remains in top condition with minimal disruptions.
            </p>
            <hr className="border-t-0 border-dotted border-amber-500 my-4 w-10 border-4" />
          </div>
          <div className="flex flex-col items-center p-3 transition-transform transform hover:scale-105">
            <FaHammer className="h-12 w-12 text-yellow mb-2" />
            <h3 className="text-SubHeading font-CardHeading mb-2">
              Renovation Services
            </h3>
            <p className="text-Paragraph text-center">
              We provide expert renovation services to update and enhance your
              property, combining aesthetics and functionality.
            </p>
            <hr className="border-t-0 border-dotted border-amber-500 my-4 w-10 border-4" />
          </div>
          <div className="flex flex-col items-center p-3 transition-transform transform hover:scale-105">
            <FaWrench className="h-12 w-12 text-yellow mb-2" />
            <h3 className="text-SubHeading font-CardHeading mb-2">
              Repairs & Fixes
            </h3>
            <p className="text-Paragraph text-center">
              Our skilled professionals handle all types of repairs and fixes,
              ensuring every aspect of your property is in perfect working order.
            </p>
            <hr className="border-t-0 border-dotted border-amber-500 my-4 w-10 border-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maintenance;
