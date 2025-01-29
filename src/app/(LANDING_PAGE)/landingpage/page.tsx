import React from 'react';
import dynamic from "next/dynamic";
import DynamicLoader from "@/components/ui/DynamicLoader";

const HeroSection = dynamic(() => import('./components/HeroSection'), {
  loading: () => <DynamicLoader />,
});

const OurServices = dynamic(() => import('./components/OurServices'), {
  loading: () => <DynamicLoader />,
});

const CounterSection = dynamic(() => import('./components/CounterSection'), {
  loading: () => <DynamicLoader />,
});

const PortfolioSection = dynamic(() => import('./components/PortfolioSection'), {
  loading: () => <DynamicLoader />,
});

const WhyChooseUs = dynamic(() => import('./components/WhyChooseUs'), {
  loading: () => <DynamicLoader />,
});

const ContactUs = dynamic(() => import('./components/ContactUs'), {
  loading: () => <DynamicLoader />,
});

const page = () => (
  <div className="overflow-x-hidden">
    <HeroSection />
    <OurServices />
    <CounterSection />
    <PortfolioSection />
    <WhyChooseUs />
    <ContactUs />
  </div>
);

export default page;
