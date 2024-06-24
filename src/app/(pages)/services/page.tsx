import Commitment from '@/app/ui/services/Commitment';
import ExecutionSection from '@/app/ui/services/ExecutionSection';
import Herosection from '@/app/ui/services/Herosection';
import TemplePlanning from '@/app/ui/services/TemplePlanning';
import ValuationSection from '@/app/ui/services/ValuationSection';
import ContactUs from '@/app/ui/portfolio/ContactUs';
import React from 'react';
import Maintenance from '@/app/ui/services/Maintenance';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Discover our comprehensive range of high-quality temple construction services tailored to meet your specific needs. From architectural design and project planning to detailed craftsmanship and finishing touches, our experienced team is committed to delivering excellence at every stage. Explore how we can help bring your vision of a sacred space to life.',
};

const page = () => (
  <main className="pt-12 md:pt-16 overflow-hidden">
    <Herosection />
    <TemplePlanning />
    <ValuationSection />
    <ExecutionSection />
    <Maintenance />
    <Commitment />
    <section className="pt-6 md:pt-0">
      <ContactUs />
    </section>
  </main>
);

export default page;
