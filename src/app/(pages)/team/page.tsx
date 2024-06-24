import React from 'react';
import Section2 from '@/app/ui/team/Section2';
import TeamHeroSetion from '@/app/ui/team/TeamHeroSetion';
import Section3 from '@/app/ui/team/Section3';
import Section4 from '@/app/ui/team/Section4';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teams',
  description: 'Meet our dedicated team of skilled professionals who bring decades of experience and expertise to every project. Our talented architects, engineers, craftsmen, and support staff work collaboratively to ensure the highest standards of quality and precision in temple construction. Learn more about the individuals who are committed to making your vision a reality.',
};

function Page() {
  return (
    <section>
      <TeamHeroSetion />
      <Section2 />
      <Section3 />
      <Section4 />
    </section>
  );
}

export default Page;
