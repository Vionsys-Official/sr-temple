/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React from 'react';

// Define a service type
type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: 'Valuation services',
    description:
      'We offer comprehensive valuation services to assess the financial aspects of your temple construction project. Our valuation experts provide detailed cost analysis, helping you understand investment required for your project. ',
  },
  {
    title: 'Consultancy Services',
    description:
      'We provide expert consultancy services to guide you through every stage of temple construction project. Our consultants offer valuable insights and advice on design, materials, and construction techniques.',
  },
  {
    title: 'Vastu Shastra Plan Drawing Services',
    description:
      'Offering architectural plans that are aligned with Vastu Shastra principles, ensuring your spaces promote health, prosperity, and well-being.',
  },
  {
    title: '2D, 3D, Design Services',
    description:
      'Specialized in creating 2D and 3D architectural plans infused with Vastu Shastra principles ensuring harmony and functionality.',
  },
  {
    title: 'Maintenance and Renovation services',
    description:
      'Comprehensive upkeep and effective enhancement of temples ensuring longevity and Our team offers regular maintenance services to ensure your property remains in top condition with minimal disruptions.',
  },
  {
    title: 'Repairs and Fixes Services',
    description:
      'Our skilled professionals handle all types of repairs and fixes, ensuring every aspect of your property is in perfect working order.',
  },
];

function OurServices() {
  return (
    <div className="px-4 py-8">
      <section className="flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-3xl font-MainHeading text-MainHeading  py-2">
            Our Services
          </h1>
          <p className="text-SubHeading font-SubHeading md:mx-40 py-2">
            We offer a full spectrum of services from initial concept to final
            blessing, ensuring your temple is crafted with the utmost care and
            expertise.
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-6 p-4">
          {services.map((service, index) => (
            <div
              key={index}
              className=" group overflow-hidden bg-gradient-to-tr from-amber-300 via-amber-400 to-amber-500 text-gray-50 rounded-xl relative md:w-[25vw]  w-full md:h-[50vh] h-[30vh]"
            >
              <div className="absolute  w-28 h-28 bg-transparent border-4 opacity-50 rounded-full left-1 top-12 group-hover:top-28 group-hover:left-56 group-hover:scale-125 group-hover:blur duration-700 transform -translate-x-1/2 -translate-y-1/2" />
              <div className="flex flex-col justify-between  relative z-10 h-full">
                <div className="flex flex-col justify-center text-center h-full p-2">
                  <span className="font-CardHeading text-white md:text-CardHeading  py-2">
                    {service.title}
                  </span>
                  <p className="text-Paragraph font-Paragraph px-4">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default OurServices;
