import React from 'react';
import { Metadata } from 'next';
import Hero from '../../ui/contact/Hero';
import Getintouch from '../../ui/contact/Getintouch';
import Addressmap from '../../ui/contact/Addressmap';
import Contactform from '../../ui/contact/Contactform';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'We are here to assist you with all your temple construction inquiries and needs. Reach out to our dedicated team of professionals for expert advice, project consultations, and personalized support. Your journey to building a sacred space begins with a simple conversation. Contact us today!',
};

const page = () => (
  <div className="overflow-x-hidden">
    <Hero />
    <Getintouch />
    <Contactform />
    <Addressmap />
  </div>
);

export default page;
