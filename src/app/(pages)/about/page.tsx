import React from 'react';
import { Metadata } from 'next';
import Hero from '@/app/ui/about/hero';
import Features from '@/app/ui/about/features';
import Choose from '@/app/ui/about/Choose';
import Counter from '@/app/ui/about/Counter';
import Testimonials from '@/app/ui/about/AboutTestimonials';
import CallToAction from '@/app/ui/about/CallToAction';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Our SR temple construction Company was established in 2011 since then we are providing the best solution. Our engineers are working hard to build the best temple with minimum expenses.',
};

// eslint-disable-next-line react/function-component-definition
const Page: React.FC = () => (
  <div>
    <Hero />
    <Features />
    <Choose />
    <Counter />
    <Testimonials />
    <CallToAction />

  </div>

);

export default Page;
