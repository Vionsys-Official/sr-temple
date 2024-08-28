import React from 'react';
import { Metadata } from 'next';
import dynamic from "next/dynamic";
import DynamicLoader from "@/components/ui/DynamicLoader";

const Herosection = dynamic(() => import('@/app/ui/services/Herosection'), {
  loading: () => <DynamicLoader />,
});

const PlanningMeasurement = dynamic(() => import('@/app/ui/services/PlanningMeasurement'), {
  loading: () => <DynamicLoader />,
});

const Estimation = dynamic(() => import('@/app/ui/services/Estimation'), {
  loading: () => <DynamicLoader />,
});

const PlanDrawing = dynamic(() => import('@/app/ui/services/PlanDrawing'), {
  loading: () => <DynamicLoader />,
});

const Execution = dynamic(() => import('@/app/ui/services/Execution'), {
  loading: () => <DynamicLoader />,
});

const PaintingArt = dynamic(() => import('@/app/ui/services/PaintingArt'), {
  loading: () => <DynamicLoader />,
});

const Maintenance = dynamic(() => import('@/app/ui/services/Maintenance'), {
  loading: () => <DynamicLoader />,
});

const Consultancy = dynamic(() => import('@/app/ui/services/Consultancy'), {
  loading: () => <DynamicLoader />,
});

const Commitment = dynamic(() => import('@/app/ui/services/Commitment'), {
  loading: () => <DynamicLoader />,
});

const ContactUs = dynamic(() => import('@/app/ui/portfolio/ContactUs'), {
  loading: () => <DynamicLoader />,
});


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
