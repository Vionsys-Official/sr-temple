import ChooseUs from '@/app/ui/portfolio/ChooseUs';
import ContactUs from '@/app/ui/portfolio/ContactUs';
import { Features } from '@/app/ui/portfolio/Features';
import Hero from '@/app/ui/portfolio/Hero';
import { OurWork } from '@/app/ui/portfolio/OurWork';
import React from 'react';
import { Metadata } from 'next';

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
