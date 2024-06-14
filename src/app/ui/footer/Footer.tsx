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

    <footer className="px-4 w-[100vw]  overflow-hidden bg-slate-300 text-black z-10">
      {/* Footer Content */}
      <div className="bg-transparent py-5 overflow-hidden " />
      <div className="flex md:flex-row flex-col gap-3 py-2">
        <div className="flex-1  justify-center text-center md:w-[34%] w-full">
          <div className="w-full flex md:px-6 pb-2">
            <Link href="/about" className="flex text-start  text-gray md:text-SubHeading text-xl font-bold">SR Temple Construction</Link>
          </div>
          <div className="w-full">
            <p className="flex text-base text-start md:px-6 md:w-[90%] w-full py-2">
              At SR Temple Construction Company, we are dedicated to offering unparalleled solutions for all your temple construction needs. With decades of experience and a team of skilled professionals, we have established ourselves as a leading provider of high-quality temple construction services.
            </p>
          </div>
          <div className="flex gap-4  md:justify-start justify-center px-6 py-6">
            <Link href=" ">
              <Image src={Facebook} alt="Facebook" quality={100} width={40} height={40} />
            </Link>
            <Link href=" ">
              <Image
                src={Instagram}
                alt="Instagram"
                quality={100}
                width={40}
                height={40}
              />
            </Link>
            <Link href=" ">
              <Image src={LinkedIn} alt="LinkedIn" quality={100} width={40} height={40} />
            </Link>
            <Link href=" ">
              <Image src={Twitter} alt="Twitter" quality={100} width={40} height={40} />
            </Link>
          </div>
        </div>
        {/* Our Services */}
        <div className="flex-3 md:w-[22%] w-full text-start  flex flex-col col-span-2 gap-2">
          <h3 className="md:text-SubHeading text-xl  text-gray font-bold mb-2">
            Our Services
          </h3>
          <div className="grid grid-cols-1 gap-2 text-base">
            <Link href=" "> R.C.C and Bricks Artwork </Link>
            <Link href=" ">Temple 3D Design</Link>
            <Link href=" ">Temple Construction</Link>
            <Link href=" ">Vastu Shilp Shatra</Link>
            <Link href=" ">Stone Temple Work</Link>
            <Link href=" ">Painting</Link>
          </div>
        </div>

        <div className="flex-3 text-start  md:w-[22%] w-full">
          <h3 className="md:text-SubHeading text-xl  text-gray font-bold mb-2">
            Quick Links
          </h3>
          <div className="grid grid-cols-1 gap-2 text-base ">
            <Link href="/about" className="hover:text-blue-700 hover-font-bold"> About Us </Link>
            <Link href="/services" className="hover:text-blue-700 hover-font-bold">Services</Link>
            <Link href="/portfolio " className="hover:text-blue-700 hover-font-bold">Portfolio</Link>
            <Link href="/team " className="hover:text-blue-700 hover-font-bold">Team</Link>
            <Link href="/contact" className="hover:text-blue-700 hover-font-bold">Contact Us</Link>
          </div>
        </div>

        {/* Contact */}
        <div className="flex-4 md:w-[22%] w-full">
          <div className=" text-start  col-span-2 flex flex-col  gap-2">
            <h3 className=" md:text-SubHeading text-gray font-bold mb-2">
              <Link href=" ">Contact Info</Link>
            </h3>
            <div className="flex flex-col md:justify-center gap-2 text-base">
              <div className="flex  gap-2">
                <div>
                  <MdPhoneInTalk size={21} className="mr-2" />
                </div>
                <span>
                  {' '}
                  Phone: +91 9834632900
                </span>
              </div>
              <div className="flex gap-2">
                <div>
                  {' '}
                  <MdOutlineMail size={22} className="mr-2" />
                </div>
                <span> Email: sunil.rathod@srtempleconstructions.com</span>
              </div>
              <div className="flex  gap-2">
                <div>
                  <GrLocation className="w-6 h-6 flex-shrink-0 mr-2" />
                </div>
                <span>
                  Address: Shivaji Chowk Loha,
                  Nanded - 431708,
                  India

                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <hr />
      <div className="text-center  relative flex justify-center items-center pt-4 ">
        <p className=" text-gray">
          {' '}
          Copyright &#169; 2024 SR Temple Construction. - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
