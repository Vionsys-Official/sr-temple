/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable max-len */

'use client';

import { ParallaxScrollSecond } from '@/components/ui/parallax-scroll-2';
import temple1 from '@/../public/assets/portfolio/temple1.jpg';
import temple2 from '@/../public/assets/portfolio/temple2.jpg';
import temple3 from '@/../public/assets/portfolio/temple3.jpg';
import temple4 from '@/../public/assets/portfolio/temple4.jpg';
import temple5 from '@/../public/assets/portfolio/temple5.jpg';
import temple6 from '@/../public/assets/portfolio/temple6.jpg';
import temple7 from '@/../public/assets/portfolio/temple7.jpg';
import temple8 from '@/../public/assets/portfolio/temple8.jpg';
import temple9 from '@/../public/assets/portfolio/temple9.jpg';
import temple10 from '@/../public/assets/portfolio/temple10.jpg';
import temple11 from '@/../public/assets/portfolio/temple11.jpg';
import temple12 from '@/../public/assets/portfolio/temple12.jpg';

export function OurWork() {
  return (
    <main className="overflow-hidden py-8">
      <h1 className="text-MainHeading font-MainHeading text-center pb-6">Check our Portfolio</h1>
      <ParallaxScrollSecond images={images} />
      ;
    </main>
  );
}

export default OurWork;

const images = [
  temple1,
  temple2, temple3, temple4, temple5, temple6, temple7, temple8, temple9, temple10, temple11, temple12,
];
