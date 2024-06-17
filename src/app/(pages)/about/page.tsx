import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import Hero from '@/app/ui/about/hero';
import Features from '@/app/ui/about/features';
import Choose from '@/app/ui/about/Choose';

// eslint-disable-next-line react/function-component-definition
const Page: React.FC = () => (
  <div>
    <Hero />
    <Features />
    <Choose />

  </div>

);

export default Page;
