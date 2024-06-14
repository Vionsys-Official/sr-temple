/* eslint-disable react/self-closing-comp */
import React from 'react';
import Image from 'next/image';
import call from '../../../../public/assets/contact/call-service.gif';
import email from '../../../../public/assets/contact/email-file.gif';
import location from '../../../../public/assets/contact/location-pin.gif';

function GetInTouch() {
  return (
    <div className="w-screen">
      <section className=" h-[80vh] w-screen">
        <div className="flex-col text-center  justify-center py-5">
          <div className="text-center">
            <h1 className="text-MainHeading font-MainHeading">
              Contact Our Office
            </h1>
          </div>
          {/* first card */}
          <div className="flex md:flex-row flex-col justify-center gap-6 md:gap-10 py-10">
            <div className="cursor-default overflow-hidden relative transition-all duration-500 hover:translate-y-2 md:w-[27vw] md:h-[50vh] h-[20vh] bg-neutral-50 rounded-lg shadow-xl flex items-center justify-center gap-2 p-4 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-amber-400">
              <div className="flex flex-col justify-center items-center text-center w-full">
                <Image src={location} alt="icon" className="w-12 h-12 mb-4" />
                <span className="font-CardHeading text-CardHeading">
                  Address
                </span>
                <p className="line-clamp-3 text-Paragraph font-Paragraph mt-2">
                  Shivaji Chowk Loha, Nanded, Pincode-431078.
                </p>
              </div>
            </div>

            {/* Second Card */}
            <div className="cursor-default overflow-hidden relative transition-all duration-500 hover:translate-y-2 md:w-[27vw] md:h-[50vh] h-[20vh] bg-neutral-50 rounded-lg shadow-xl flex items-center justify-center gap-2 p-4 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-amber-400">
              <div className="flex flex-col justify-center items-center text-center w-full">
                <Image src={email} alt="icon" className="w-12 h-12 mb-4" />
                <span className="font-CardHeading text-CardHeading">Email</span>
                <p className="line-clamp-3 text-Paragraph font-Paragraph mt-2">
                  Sunil.rathod@srtempleconstructions.com
                  govind.rathodsae@gmail.com
                </p>
              </div>
            </div>
            {/* third card */}
            <div className="cursor-default overflow-hidden relative transition-all duration-500 hover:translate-y-2 md:w-[27vw] md:h-[50vh] h-[20vh] bg-neutral-50 rounded-lg shadow-xl flex items-center justify-center gap-2 p-4 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-amber-400">
              <div className="flex flex-col justify-center items-center text-center w-full">
                <Image src={call} alt="icon" className="w-12 h-12 mb-4" />
                <span className="font-CardHeading text-CardHeading">
                  Make A Call
                </span>
                <p className="line-clamp-3 text-Paragraph font-Paragraph mt-2">
                  9834632900 / 9765938370
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetInTouch;
