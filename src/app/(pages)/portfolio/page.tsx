import ChooseUs from '@/app/ui/portfolio/ChooseUs';
import ContactUs from '@/app/ui/portfolio/ContactUs';
import { Features } from '@/app/ui/portfolio/Features';
import Hero from '@/app/ui/portfolio/Hero';
import { OurWork } from '@/app/ui/portfolio/OurWork';
import React from 'react';

const page = () => (
  <main className="overflow-x-hidden py-12">
    <Hero />
    <ChooseUs />
    <Features />
    <OurWork />
    <ContactUs />
  </main>
);

export default page;
