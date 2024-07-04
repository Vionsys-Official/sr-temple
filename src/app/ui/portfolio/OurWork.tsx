/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable max-len */

'use client';

import { ParallaxScrollSecond } from '@/components/ui/parallax-scroll-2';
import { useLanguage } from '@/lib/languageContext';

export function OurWork() {
  const { language } = useLanguage() || { language: 'english' };
  return (
    <main className="overflow-hidden py-8">
      <h1 className="text-MainHeading font-MainHeading text-center pb-6">
        {language === 'english' ? 'Check Our Portfolio' : language === 'marathi' ? 'आमचे पोर्टफोलिओ तपासा' : 'हमारा पोर्टफोलियो देखें'}
      </h1>
      <ParallaxScrollSecond images={images} />
      ;
    </main>
  );
}

export default OurWork;

const images = [
  '/assets/portfolio/temple1.png',
  '/assets/portfolio/temple2.png',
  '/assets/portfolio/temple3.png',
  '/assets/portfolio/temple4.png',
  '/assets/portfolio/temple5.png',
  '/assets/portfolio/temple6.png',
  '/assets/portfolio/temple7.png',
  '/assets/portfolio/temple8.png',
  '/assets/portfolio/temple9.png',
  '/assets/portfolio/temple10.png',
  '/assets/portfolio/temple11.png',
  '/assets/portfolio/temple12.png',
  '/assets/portfolio/temple13.png',
  '/assets/portfolio/temple14.png',
  '/assets/portfolio/temple15.png',
  '/assets/portfolio/temple16.png',
  '/assets/portfolio/temple17.png',
  '/assets/portfolio/temple18.png',
  '/assets/portfolio/temple19.png',
  '/assets/portfolio/temple20.png',
  '/assets/portfolio/temple21.png',
];
