import React, { FC } from 'react';
import Hero from './ui/home/Hero';
import Counter from './ui/home/Counter';
import Vision from './ui/home/Vision';
import Contact from './ui/home/Contact';
import Services from './ui/home/Services';
import Testimonial from './ui/home/Testimonial';
import WeWork from './ui/home/WeWork';
import Choose from './ui/home/Choose';

const page: FC = () => (
  <div>
    <Hero />
    <Counter />
    <Vision />
    <WeWork />
    <Services />
    <Choose />
    <Testimonial />
    <Contact />
  </div>
);

export default page;
