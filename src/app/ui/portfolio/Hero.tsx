import React from "react";
import Image from "next/image";
import Mob from "@/../public/assets/portfolio/Mob.jpg";

function Hero() {
  return (
    <main className="md:h-[100vh] h-[70vh] md:w-[100vw] bg-yellow overflow-x-hidden flex flex-col md:flex-row justify-evenly items-center">
      <div className="md:w-[45vw] p-4 pb-4 md:p-0 space-y-3">
        <p className="text-white bg-slate-800 md:w-32 px-3 py-2 rounded-2xl text-center mx-auto md:mx-0">
          Our Projects
        </p>
        <h1 className="md:text-[56px] text-[36px] leading-none md:font-MainHeading text-black py-4 text-center md:text-left">
          Majestic Temples
          <span className="block">Built with Devotion</span>
        </h1>
        <h3 className="md:text-[20px] text-[16px] text-white text-center md:text-left">
          Constructing the Heart of Worship signifies building a dedicated
          space that nurtures spiritual connection, creating a reverent
          environment for both communal and personal worship.
        </h3>
      </div>

      <div className="relative box-shadow: 5px 5px 2.5px 6px rgb(209, 218, 218) shadow-md shadow-slate-500 flex justify-center h-[300px] md:h-[450px] w-[160px] md:w-[250px] border-4 border-black rounded-2xl bg-gray-50">
        <span className="absolute z-10 border border-black bg-slate-950 w-24 h-3 rounded-br-xl rounded-bl-xl"></span>
        <span className="absolute -right-2 top-14 border-4 border-black h-7 rounded-md"></span>
        <span className="absolute -right-2 bottom-36 border-4 border-black h-10 rounded-md"></span>
        <Image
          src={Mob}
          alt="Image not Found"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
    </main>
  );
}

export default Hero;
