import React from 'react';
import HeroSection from './components/HeroSection';
import OurServices from './components/OurServices';
import CounterSection from './components/CounterSection';
import PortfolioSection from './components/PortfolioSection';
import WhyChooseUs from './components/WhyChooseUs';
import ContactUs from './components/ContactUs';

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
