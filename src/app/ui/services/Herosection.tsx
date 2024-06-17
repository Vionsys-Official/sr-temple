import Image from 'next/image';
import React from 'react';

function Herosection() {
  return (
    <section className="relative">
      <div className="relative h-[60vh] md:h-[90vh] overflow-x-hidden bg-slate-950">
        <Image
          src="/assets/services/hero1.jpg"
          className="absolute inset-0 object-cover w-full h-full opacity-60"
          alt="services"
          width={1000}
          height={1000}
          objectFit="cover"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="flex flex-col px-4 text-center">
            <div className="max-w-5xl p-6 rounded-lg bg-black bg-opacity-70 shadow-lg">
              <h2 className="mb-4 font-extrabold text-yellow text-3xl md:text-5xl">
                Our Services
              </h2>
              <p className="text-white text-xl md:text-2xl leading-relaxed">
                We offer a comprehensive range of services to ensure your temple
                construction project is a success from start to finish. Our expert
                team is dedicated to providing high-quality, reliable, and cost-effective
                solutions tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
