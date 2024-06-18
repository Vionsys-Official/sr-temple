import React from 'react';
import Image from 'next/image';
import TeamHero from '../../../../public/assets/team/TeamHero.jpg';

function TeamHeroSection() {
  return (
    <div className="overflow-hidden">
      <div className="w-full">
        <div className="md:h-[100vh] h-[80vh] flex justify-center items-center relative overflow-hidden bg-[#000]">
          <Image
            src={TeamHero}
            alt="heroimg"
            className="object-cover w-full h-full opacity-45"
            quality={100}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-16 lg:px-32 xl:px-48">
            <h1 className="text-yellow text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Specialist Team in Temple Construction
            </h1>
            <p className="text-lg md:text-xl lg:text-3xl text-white max-w-3xl">
              {/* eslint-disable-next-line max-len */}
              At SR Temple Construction, a team of expert architects, skilled artisans, and meticulous project managers ensures that every temple we construct is a masterpiece of design, devotion, and durability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamHeroSection;
