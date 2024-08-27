import React from 'react';
import { Metadata } from 'next';
import dynamic from "next/dynamic";
import DynamicLoader from "@/components/ui/DynamicLoader";

const Hero = dynamic(() => import('@/app/ui/about/hero'), {
  loading: () => <DynamicLoader />,
});

const Features = dynamic(() => import('@/app/ui/about/features'), {
  loading: () => <DynamicLoader />, 
});

const Choose = dynamic(() => import('@/app/ui/about/Choose'), {
  loading: () => <DynamicLoader />,
});

const Counter = dynamic(() => import('@/app/ui/about/Counter'), {
  loading: () => <DynamicLoader />,
});

const Testimonials = dynamic(() => import('@/app/ui/about/AboutTestimonials'), {
  loading: () => <DynamicLoader />,
});

const CallToAction = dynamic(() => import('@/app/ui/about/CallToAction'), {
  loading: () => <DynamicLoader />,
});

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
