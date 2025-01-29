/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */

'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/utils/cn';

export function ParallaxScrollSecond({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ['start start', 'end start'], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn('h-full md:h-[40rem] items-start  overflow-y-auto w-full', className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 items-start  md:max-w-6xl w-full mx-auto gap-5 md:py-20 py-4 md:px-10 px-2"
        ref={gridRef}
      >
        <div className="grid md:gap-10 gap-4">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={`grid-1${idx}`}
            >
              <Image
                src={el}
                className="md:h-96 h-60 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="600"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid md:gap-10 gap-4">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={`grid-2${idx}`}>
              <Image
                src={el}
                className="md:h-96 h-60 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="600"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid md:gap-10 gap-4">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={`grid-3${idx}`}>
              <Image
                src={el}
                className="md:h-96 h-60 w-full object-cover object-left-top rounded-lg gap-10 !p-0 !m-0 "
                height="400"
                width="600"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ParallaxScrollSecond;
