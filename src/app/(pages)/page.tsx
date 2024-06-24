import React, { FC } from 'react';
import Counter from '../ui/home/Counter';
import Vision from '../ui/home/Vision';
import Contact from '../ui/home/Contact';
import Services from '../ui/home/Services';
import Testimonial from '../ui/home/Testimonial';
import WeWork from '../ui/home/WeWork';
import Choose from '../ui/home/Choose';
import Hero from '../ui/home/Hero';
import Safety from '../ui/home/Safety';

const page: FC = () => (
  <div className="overflow-hidden">
    <Hero />
    <Counter />
    <Vision />
    <WeWork />
    <Services />
    <Choose />
    <Safety />
    <Testimonial />
    <Contact />
  </div>
);

export default page;
