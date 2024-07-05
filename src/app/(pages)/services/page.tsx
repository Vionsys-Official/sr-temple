import Commitment from '@/app/ui/services/Commitment';
import Herosection from '@/app/ui/services/Herosection';
import ContactUs from '@/app/ui/portfolio/ContactUs';
import React from 'react';
import Maintenance from '@/app/ui/services/Maintenance';
import { Metadata } from 'next';
import PlanningMeasurement from '@/app/ui/services/PlanningMeasurement';
import Estimation from '@/app/ui/services/Estimation';
import PlanDrawing from '@/app/ui/services/PlanDrawing';
import Execution from '@/app/ui/services/Execution';
import PaintingArt from '@/app/ui/services/PaintingArt';
import Consultancy from '@/app/ui/services/Consultancy';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Discover our comprehensive range of high-quality temple construction services tailored to meet your specific needs. From architectural design and project planning to detailed craftsmanship and finishing touches, our experienced team is committed to delivering excellence at every stage. Explore how we can help bring your vision of a sacred space to life.',
};

const page = () => (
  <main className="pt-12 md:pt-16 overflow-hidden">
    <Herosection />
    <PlanningMeasurement /> 
    <Estimation />
    <PlanDrawing />
    <Execution />
    <PaintingArt />
    <Maintenance />
    <Consultancy />
    <Commitment />
    <section className="pt-6 md:pt-0">
      <ContactUs />
    </section>
  </main>
);

export default page;
