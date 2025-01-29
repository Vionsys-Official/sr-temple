import React, { FC } from 'react';
import dynamic from "next/dynamic";
import DynamicLoader from "@/components/ui/DynamicLoader";

const Hero = dynamic(() => import("../ui/home/Hero"), {
  loading: () => <DynamicLoader />,
});

const Counter = dynamic(() => import("../ui/home/Counter"), {
  loading: () => <DynamicLoader />,
});

const Vision = dynamic(() => import("../ui/home/Vision"), {
  loading: () => <DynamicLoader />,
});

const Contact = dynamic(() => import("../ui/home/Contact"), {
  loading: () => <DynamicLoader />,
});

const Services = dynamic(() => import("../ui/home/Services"), {
  loading: () => <DynamicLoader />,
});

const Testimonial = dynamic(() => import("../ui/home/Testimonial"), {
  loading: () => <DynamicLoader />,
});

const WeWork = dynamic(() => import("../ui/home/WeWork"), {
  loading: () => <DynamicLoader />,
});

const Choose = dynamic(() => import("../ui/home/Choose"), {
  loading: () => <DynamicLoader />,
});

const Safety = dynamic(() => import("../ui/home/Safety"), {
  loading: () => <DynamicLoader />,
});

const page: FC = () => (
  <div className="overflow-hidden">
    <Hero />
    <Counter />
    <Vision />
    <WeWork />
    <Services />
    <Choose />
    <Safety />
    <Testimonial />
    <Contact />
  </div>
);

export default page;
