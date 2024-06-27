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
  '/assets/portfolio/templee1.jpeg',
  '/assets/portfolio/templee2.jpeg',
  '/assets/portfolio/templee3.jpeg',
  '/assets/portfolio/templee4.jpeg',
  '/assets/portfolio/templee5.jpeg',
  '/assets/portfolio/templee6.jpeg',
  '/assets/portfolio/templee7.jpg',
  '/assets/portfolio/templee8.jpeg',
  '/assets/portfolio/templee9.jpeg',
  '/assets/portfolio/templee10.jpg',
  '/assets/portfolio/templee11.jpeg',
  '/assets/portfolio/templee12.jpg',
];
