import React from 'react';
import { Metadata } from 'next';
import dynamic from "next/dynamic";
import DynamicLoader from "@/components/ui/DynamicLoader";

const TeamHeroSetion = dynamic(() => import("@/app/ui/team/TeamHeroSetion"), {
  loading: () => <DynamicLoader />,
});

const Section2 = dynamic(() => import("@/app/ui/team/Section2"), {
  loading: () => <DynamicLoader />,
});

const Section3 = dynamic(() => import("@/app/ui/team/Section3"), {
  loading: () => <DynamicLoader />,
});

const Section4 = dynamic(() => import("@/app/ui/team/Section4"), {
  loading: () => <DynamicLoader />,
});

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
