import React from 'react';
import { Metadata } from 'next';
import dynamic from "next/dynamic";
import DynamicLoader from "@/components/ui/DynamicLoader";

const Hero = dynamic(() => import('../../ui/contact/Hero'), {
  loading: () => <DynamicLoader />,
});
const Getintouch = dynamic(() => import('../../ui/contact/Getintouch'), {
  loading: () => <DynamicLoader />,
});
const Addressmap = dynamic(() => import('../../ui/contact/Addressmap'), {
  loading: () => <DynamicLoader />,
});
const Contactform = dynamic(() => import('../../ui/contact/Contactform'), {
  loading: () => <DynamicLoader />,
});

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'We are here to assist you with all your temple construction inquiries and needs. Reach out to our dedicated team of professionals for expert advice, project consultations, and personalized support. Your journey to building a sacred space begins with a simple conversation. Contact us today!',
};

const page = () => (
  <div className="overflow-x-hidden">
    <Hero />
    <Getintouch />
    <Contactform />
    <Addressmap />
  </div>
);

export default page;
