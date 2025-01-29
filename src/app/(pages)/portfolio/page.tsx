import React from 'react';
import { Metadata } from 'next';
import dynamic from "next/dynamic";
import DynamicLoader from "@/components/ui/DynamicLoader";

const Hero = dynamic(() => import('@/app/ui/portfolio/Hero'), {
  loading: () => <DynamicLoader />,
});

const ChooseUs = dynamic(() => import('@/app/ui/portfolio/ChooseUs'), {
  loading: () => <DynamicLoader />,
});

const Features = dynamic(() => import('@/app/ui/portfolio/Features'), {
  loading: () => <DynamicLoader />,
});

const OurWork = dynamic(() => import('@/app/ui/portfolio/OurWork'), {
  loading: () => <DynamicLoader />,
});

const ContactUs = dynamic(() => import('@/app/ui/portfolio/ContactUs'), {
  loading: () => <DynamicLoader />,
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore our diverse portfolio showcasing a wide range of temple construction projects that highlight our expertise, precision, and dedication to quality. From traditional temples to contemporary sacred spaces, our work reflects our commitment to excellence and our passion for creating inspiring environments. Discover the beauty and craftsmanship of our completed projects.',
};
const page = () => (
  <main className="overflow-x-hidden py-12 md:p-0">
    <Hero />
    <ChooseUs />
    <Features />
    <OurWork />
    <ContactUs />
  </main>
);

export default page;
