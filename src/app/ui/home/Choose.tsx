import Image from 'next/image';
import React from 'react';
import c2 from '../../../../public/assets/home/choose us/c2.jpg';
import c3 from '../../../../public/assets/home/choose us/c3.jpg';

export function Choose() {
  const choose = [
    {
      id: 1,
      title: 'Expertise and Experience',
      description: 'With extensive experience in temple construction, our expert team builds spiritual places that honor tradition and spirituality. Our successful projects reflect our dedication to excellence and authenticity in every detail.',
    },
    {
      id: 2,
      title: 'Respect for Tradition',
      description: 'We understand the importance of cultural and historical significance in temple construction. Our team works closely with experts to ensure every part of the temple respects and preserves its traditions.',
    },
    {
      id: 3,
      title: 'Budget Estimation',
      description: 'Our cost estimation ensures clarity with a detailed scope, transparent material costs, precise skilled labor expenses, thorough site preparation assessment, comprehensive permit considerations, and a structured, manageable payment plan.',
    },
    {
      id: 4,
      title: 'Customized Solutions',
      description: 'Each temple we build is unique. We offer customized design and construction services tailored to the specific needs and requirements of the community. Our flexible approach ensures that the temple reflects the spiritual values of its customers.',
    },
    {
      id: 5,
      title: 'Sustainability and Innovation',
      description: 'We integrate sustainable practices and innovative technology into our construction processes.',
    },
    {
      id: 6,
      title: 'Project Management Excellence',
      description: 'Highlight efficient project management practices that ensure timelines are met without compromising on quality, safety, or cultural sensitivity.',
    },
  ];

  return (
    <div className="py-16 mt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg text-3xl text-MainHeading font-MainHeading font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto whitespace-nowrap">
          Why Choose SR Temple Construction
        </h2>
      </div>
      <div className="grid gap-10 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center">
          {choose.map((item) => (
            <div key={item.id} className="flex mb-8">
              <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-yellow-50">
                  <svg
                    className="w-6 h-6 text-yellow-600"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-2 text-xl text-SubHeading font-SubHeading  leading-5 text-gray-900">
                  {item.title}
                </h6>
                <p className="text-base text-Paragraph font-Paragraph text-gray-800">
                  {item.description}
                </p>
                <hr className="w-full my-4 border-gray-300" />
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-2">
          <Image
            className="object-cover w-full h-48 rounded-lg shadow-lg"
            src={c2}
            alt="Construction image 2"
            layout="responsive"
            width={500}
            height={600}
          />
          <Image
            className="object-cover w-full h-48 rounded-lg shadow-lg"
            src={c3}
            alt="Construction image 3"
            layout="responsive"
            width={500}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}

export default Choose;