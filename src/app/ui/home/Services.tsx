import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LuConstruction } from 'react-icons/lu';
import Service from '../../../../public/assets/home/Service.jpg';

function Services() {
  const service = [
    {
      id: 1,
      title: 'Planning and Measurement Services',
      description: 'Expert planning and precise measurement services tailored for temples ensuring thoughtful design and layout.',
    },
    {
      id: 2,
      title: 'Valuation and Estimation Services',
      description: 'Delivering precise property and asset valuations, cost assessments for construction projects ensuring transparent and accurate budgets.',
    },
    {
      id: 3,
      title: '2D, 3D & Vastu Shastra Plan Drawing',
      description: 'Specialized in creating 2D and 3D architectural plans infused with Vastu Shastra principles ensuring harmony and functionality.',
    },
    {
      id: 4,
      title: 'Temple Construction Services',
      description: 'Managing construction projects from inception to completion with precision, adherence to cultural and architectural standards.',
    },
    {
      id: 5,
      title: 'Consultancy Services',
      description: 'Expertise guidance in temple architecture, construction and renovation ensuring adherence to cultural and spiritual norms.',
    },
    {
      id: 6,
      title: 'Maintenance & Renovation Services',
      description: 'Comprehensive upkeep and effective enhancement of temples ensuring longevity and aesthetic appeal.',
    },
  ];

  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6 flex flex-col items-center justify-center">
              <h2 className="tracking-tight text-MainHeading font-MainHeading">
                Services We Deliver
              </h2>
              <h6 className="text-SubHeading font-SubHeading">Building temples, fostering spirituality</h6>
              <p className="text-Paragraph font-Paragraph flex flex-col text-center py-3 mb-5">
                We offer a range of services highlighted on our homepage. From building and
                restoring temples with care and precision to managing everything from design to
                construction ensuring each temple honors its spiritual and cultural significance,
                we are committed to quality and respect in every project. Here are some of our
                services; to learn more, visit:
              </p>

              <Link href="/services">
                <Button type="submit" variant="outline" className="px-4 py-1 bg-yellow hover:bg-[#deb01d] text-black rounded-md text-buttonText font-buttonText">Explore Services</Button>
              </Link>
            </div>
          </div>
          <div>
            <Image src={Service} alt="" className="object-cover w-full h-56 rounded shadow-lg sm:h-96" />
          </div>
        </div>
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
            {service.map((item) => (
              <div key={item.id} className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-[#f7c100]  group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-[#f7c100]  group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-[#f7c100] group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-[#f7c100]  group-hover:scale-y-100" />
                <div className="relative p-4 bg-white rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                      <LuConstruction size={25} className="text-[#254736]" />
                    </div>
                    <h6 className="font-semibold leading-5">{item.title}</h6>
                  </div>
                  <p className="mb-2 text-sm text-gray-900">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
