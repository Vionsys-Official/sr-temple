import React from 'react';

function Contact() {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="text-MainHeading font-MainHeading tracking-tight leading-tight md:mx-auto">
            Interested in collaborating with us?
          </h2>
          <h6 className="text-SubHeading font-SubHeading">Enhance your temple project with our expertise for sustainable and sacred growth.</h6>
          <p className="text-Paragraph font-Paragraph py-3">
            Partner with us to create a temple that blends architectural innovation with cultural
            heritage, integrating eco-friendly practices and inspiring spiritual devotion.
          </p>
          <button type="submit" className="px-4 py-1 bg-yellow hover:bg-[#deb01d] text-black rounded-md text-buttonText font-buttonText">Let&apos;s Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
