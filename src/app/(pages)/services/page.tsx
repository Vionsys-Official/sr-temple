import Commitment from '@/app/ui/services/Commitment';
import ExecutionSection from '@/app/ui/services/ExecutionSection';
import Herosection from '@/app/ui/services/Herosection';
import TemplePlanning from '@/app/ui/services/TemplePlanning';
import ValuationSection from '@/app/ui/services/ValuationSection';
import ContactUs from '@/app/ui/portfolio/ContactUs';
import React from 'react';
import Maintenance from '@/app/ui/services/Maintenance';

export const metadata = {
  title: 'SRTemple Constructions - Services ',
};

const page = () => (
  <main className="pt-12 md:pt-16 overflow-hidden">
    <Herosection />
    <TemplePlanning />
    <ValuationSection />
    <ExecutionSection />
    <Maintenance />
    <Commitment />
    <ContactUs />
  </main>
);

export default page;
