
import React from 'react';
import Hero from '@/app/ui/about/hero';
import Features from '@/app/ui/about/features';
import Choose from '@/app/ui/about/Choose';
import Counter from '@/app/ui/about/Counter';
// eslint-disable-next-line react/function-component-definition
const Page: React.FC = () => (
  <div>
    <Hero />
    <Features />
    <Choose />
    <Counter/>
  </div>

);

export default Page;
