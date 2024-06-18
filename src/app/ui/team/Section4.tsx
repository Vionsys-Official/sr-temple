import React from 'react';
import Image from 'next/image';
import ConstructionImage from '../../../../public/assets/team/ConstructionImage.jpg';
import ArtImage from '../../../../public/assets/team/ArtImage.jpg';

function Section4() {
  return (
    <section>
      <div className="text-center p-8">
        <h2 className="font-bold text-MainHeading text-gray">
          Why Choose Our Team?
        </h2>
        <div className="flex flex-wrap items-center mt-20 text-left">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <Image width={500} height={500} src={ArtImage} alt="gem" className="inline-block rounded shadow-xl border border-merino-400" />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left">
            <h3 className="font-bold mt-8 text-SubHeading md:mt-0 ">
              Proven Track Record
            </h3>
            <p className="sm:text-CardHeading mt-6">
              {/* eslint-disable-next-line max-len */}
              Our team has successfully completed numerous temple projects across India, each one a testament to our skill, dedication, and artistic vision. Positive feedback from clients highlights the exceptional work and professional approach of our team, reinforcing our reputation for excellence and ensuring client satisfaction.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20 text-left">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <Image width={500} height={500} src={ConstructionImage} alt="project members" className="inline-block rounded shadow-xl border border-merino-400" />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-SubHeading md:mt-0 ">
              Expertise and Experience
            </h3>
            <p className="sm:text-CardHeading mt-6">
              {/* eslint-disable-next-line max-len */}
              Our team of master artisans and craftsmen, with skills perfected over generations, ensures temples that are both artistically and structurally exceptional. Complementing this, our experienced architects blend traditional styles with modern engineering to create timeless structures, guaranteeing a harmonious blend of aesthetic beauty and architectural integrity.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
