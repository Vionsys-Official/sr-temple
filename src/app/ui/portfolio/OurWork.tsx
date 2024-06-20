/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable max-len */

'use client';

import { ParallaxScrollSecond } from '@/components/ui/parallax-scroll-2';

export function OurWork() {
  return (
    <main className="overflow-hidden py-8">
      <h1 className="text-MainHeading font-MainHeading text-center pb-6">Check Our Portfolio</h1>
      <ParallaxScrollSecond images={images} />
      ;
    </main>
  );
}

export default OurWork;

const images = [
  '/assets/portfolio/temple1.jpg',
  '/assets/portfolio/temple2.jpg',
  '/assets/portfolio/temple3.jpg',
  '/assets/portfolio/temple4.jpg',
  '/assets/portfolio/temple5.jpg',
  '/assets/portfolio/temple6.jpg',
  '/assets/portfolio/temple7.jpg',
  '/assets/portfolio/temple8.jpg',
  '/assets/portfolio/temple9.jpg',
  '/assets/portfolio/temple10.jpg',
  '/assets/portfolio/temple11.jpg',
  '/assets/portfolio/temple12.jpg',
];
