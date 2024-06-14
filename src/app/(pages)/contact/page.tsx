import React from 'react';
import Hero from '../../ui/contact/Hero';
import Getintouch from '../../ui/contact/Getintouch';
import Addressmap from '../../ui/contact/Addressmap';
import Contactform from '../../ui/contact/Contactform';

const page = () => (
  <div className="overflow-x-hidden">
    <Hero />
    <Getintouch />
    <Contactform />
    <Addressmap />
  </div>
);

export default page;
