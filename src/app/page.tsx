import React, { FC } from 'react';
import Hero from './ui/home/Hero';
import Counter from './ui/home/Counter';
import Vision from './ui/home/Vision';
import Contact from './ui/home/Contact';
import Choose from './ui/home/Choose';
import Services from './ui/home/Services';
import Testimonial from './ui/home/Testimonial';
import WeWork from './ui/home/WeWork';

const page: FC = () => (
  <div>
    <Hero />
    <Counter />
    <Vision />
    <Choose />
    <WeWork />
    <Services />
    <Testimonial />
    <Contact />
  </div>
);

export default page;
