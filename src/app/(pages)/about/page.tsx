
import React from 'react';
import Hero from '@/app/ui/about/hero';
import Features from '@/app/ui/about/features';
import Choose from '@/app/ui/about/Choose';
import Counter from '@/app/ui/about/Counter';
import Testimonials from '@/app/ui/about/AboutTestimonials';
import CallToAction from '@/app/ui/about/CallToAction';

// eslint-disable-next-line react/function-component-definition
const Page: React.FC = () => (
  <div>
    <Hero />
    <Features />
    <Choose />
    <Counter/>
    <Testimonials/>
    <CallToAction/>
   
  </div>

);

export default Page;
