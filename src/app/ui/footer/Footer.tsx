/* eslint-disable max-len */
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { MdOutlineMail, MdPhoneInTalk } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import LinkedIn from '../../../../public/assets/socialicons/linkedin.png';
import Facebook from '../../../../public/assets/socialicons/facebook.png';
import Instagram from '../../../../public/assets/socialicons/instagram.png';
import Twitter from '../../../../public/assets/socialicons/Twitter4.png';

function Footer() {
  return (
    <footer className="px-4 w-[100vw] overflow-hidden bg-slate-300  z-10 text-black">
      {/* Footer Content */}
      <div className="bg-transparent py-5 overflow-hidden " />
      <div className="flex flex-col gap-4">
        <div className="flex md:flex-row flex-col md:gap-24 gap-4 justify-center items-center w-full md:px-10 px-2 ">
          <div className="flex flex-col gap-3 justify-center items-center ">
            <div className="p-3 bg-white rounded-full">
              <MdPhoneInTalk
                size={21}
                className="w-8 h-8"
              />
            </div>
            <div className="">
              <span>
                {' '}
                Phone: +91 9834632900
              </span>
            </div>
          </div>
          <div className="flex flex-col  gap-3 justify-center items-center">
            <div className="p-3 bg-white rounded-full">
              <MdOutlineMail size={22} className="w-8 h-8" />
            </div>
            <div>
              <span className="text-wrap flex  ">

                sunil.rathod@srtempleconstructions.com
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 justify-center  items-center">
            <div className="p-3 bg-white rounded-full">
              <GrLocation className="w-8 h-8" />
            </div>
            <div>
              <span>
                {' '}
                Address: Shivaji Chowk Loha,
                Nanded - 431708,
                India
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex md:flex-row flex-col md:gap-10 gap-4 md:pl-10 pl-0 py-2 ">

          {/* Card for company info and social media links */}
          <div className="md:w-[40%] w-full">
            <div className="flex-1 justify-center items-center text-center md:w-auto w-full pb-2">
              <div className="bg-white px-4 shadow-lg rounded-lg py-10 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                <div className="w-full flex justify-center items-center sm:px-2">
                  <Link href="/about" passHref>
                    <div className="flex text-center text-gray md:text-SubHeading text-SubHeading_sm font-bold cursor-pointer">
                      SR Temple Construction
                    </div>
                  </Link>
                </div>
                <div className="w-full flex justify-center items-center ">
                  <p className="md:text-Paragraph text-Paragraph_sm md:w-[90%] w-full py-2 sm:px-6">
                    At SR Temple Construction, we are dedicated to offering unparalleled solutions for all your temple construction needs. With decades of experience and a team of skilled professionals, we have established ourselves as a leading provider of high-quality temple construction services.
                  </p>
                </div>

              </div>
            </div>
          </div>
          {/* right side */}
          <div className="md:w-[55%] w-full flex md:flex-row flex-col gap-4">
            {/* Our Services */}
            <div className="flex-3 md:w-[50%] w-full text-start md:pl-0 pl-4 flex flex-col col-span-2 gap-2">
              <h3 className="md:text-SubHeading text-SubHeading_sm text-gray font-bold mb-2">
                Our Services
              </h3>
              <div className="grid grid-cols-1 gap-2 md:text-Paragraph text-Paragraph_sm">
                <Link href=" ">Planning & Measurement Services </Link>
                <Link href=" ">Valuation & Estimation Services</Link>
                <Link href=" ">2D,3D & Vastu Shastra Plan Drawing</Link>
                <Link href=" ">Temple Construction Services</Link>
                <Link href=" ">Consultancy Sevices</Link>
                <Link href=" ">Maintenance & Renovation Services</Link>
              </div>
            </div>
            {/* quick links */}
            <div className="flex-3 text-start md:w-[20%] w-full md:pl-0 pl-4">
              <h3 className="md:text-SubHeading text-xl text-gray font-bold mb-2">
                Quick Links
              </h3>
              <div className="grid grid-cols-1 gap-2 md:text-Paragraph text-Paragraph_sm ">
                <Link href="/services" className="hover:text-blue-700 hover-font-bold">Services</Link>
                <Link href="/about" className="hover:text-blue-700 hover-font-bold"> About Us </Link>
                <Link href="/portfolio " className="hover:text-blue-700 hover-font-bold">Portfolio</Link>
                <Link href="/team " className="hover:text-blue-700 hover-font-bold">Team</Link>
                <Link href="/contact" className="hover:text-blue-700 hover-font-bold">Contact Us</Link>
              </div>
            </div>
            {/* social media links */}
            <div className="flex flex-col ">
              <div className="w-full md:text-center text-start md:pl-0 pl-4">
                <h1 className="md:text-SubHeading text-SubHeading_sm text-gray font-bold mb-2">
                  Follow Us
                </h1>

              </div>
              <div className="flex gap-4 justify-center px-6 md:py-6 py-2">
                <Link href="/" passHref>
                  <Image src={Facebook} alt="Facebook" quality={100} width={40} height={40} className="cursor-pointer" />
                </Link>
                <Link href="/" passHref>
                  <Image src={Instagram} alt="Instagram" quality={100} width={40} height={40} className="cursor-pointer" />
                </Link>
                <Link href="/" passHref>
                  <Image src={LinkedIn} alt="LinkedIn" quality={100} width={40} height={40} className="cursor-pointer" />
                </Link>
                <Link href="/" passHref>
                  <Image src={Twitter} alt="Twitter" quality={100} width={40} height={40} className="cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
      <hr />
      <div className="text-center relative flex justify-center items-center md:pt-4  pt-2">
        <p className="text-gray md:text-Paragraph text-Paragraph_sm">
          {' '}
          Copyright &#169; 2024 SR Temple Construction. - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
