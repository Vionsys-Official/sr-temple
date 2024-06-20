import React from 'react';
import Section2 from '@/app/ui/team/Section2';
import TeamHeroSetion from '@/app/ui/team/TeamHeroSetion';
import Section3 from '@/app/ui/team/Section3';
import Section4 from '@/app/ui/team/Section4';

export const metadata = {
  title: 'SRTemple Constructions - Teams Page',
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
