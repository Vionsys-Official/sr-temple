import Image from 'next/image';
import React from 'react';

function Herosection() {
  return (

    <section className="relative ">
      <div className="relative h-[60vh] md:h-[90vh] overflow-x-hidden">
        <Image
          src="/assets/services/hero.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt="services"
          height={1000}
          width={1000}
        />
        <div className="relative bg-gray bg-opacity-15 h-full flex justify-end">
          <div className="flex items-center justify-center w-1/2">
            <div className="flex flex-col px-4">
              <div className="w-full p-4 text-center rounded-xl bg-white shadow-inner shadow-blue-600">
                <h2 className=" mb-4 font-sans font-bold text-black text-4xl">
                  Our Services
                </h2>
                <p className=" text-gray-400 text-lg">
                  We offer a comprehensive range of services to ensure your
                  temple construction project is a success from start to finish.
                  Our expert team is dedicated to providing high-quality, reliable,
                  and cost-effective solutions tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Herosection;
