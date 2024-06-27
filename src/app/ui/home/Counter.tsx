'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { FaProjectDiagram, FaBriefcase } from 'react-icons/fa';

interface CountUpProps {
  endProp: number; // Rename end to endProp
  durationprops: number;
  reset: boolean;
}

function CountUp({ endProp, durationprops, reset }: CountUpProps) {
  const [count, setCount] = useState<number>(0);

  const animateValue = (
    start: number,
    end: number,
    duration: number,
    callback: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      callback(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    if (reset) {
      setCount(0);
      animateValue(0, endProp, durationprops * 1000, setCount);
    }
  }, [endProp, durationprops, reset]);

  return <span>{count}</span>;
}

interface Item {
  id: number;
  icon: JSX.Element;
  count: number;
  heading: string;
}

function SocialProofCounter() {
  const arr: Item[] = [
    {
      id: 1,
      icon: <FaBriefcase size={35} />,
      count: 10,
      heading: 'Years of Experience',
    },
    {
      id: 2,
      icon: <AiOutlineUsergroupAdd size={35} />,
      count: 150,
      heading: 'Skilled Workers',
    },
    {
      id: 3,
      icon: <FaProjectDiagram size={35} />,
      count: 450,
      heading: 'Completed Projects',
    },
  ];

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      {/* first section */}
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-4xl md:mb-12">
        <motion.h2
          initial={{ opacity: 0, x: -100 }} // X:100
          whileInView={{ opacity: 1, x: 1 }} // y:100
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: 'easeInOut',
          }}
          className="max-w-lg md:text-MainHeading md:font-MainHeading text-MainHeading_sm font-MainHeading_sm tracking-tight md:mx-auto text-center"
        >
          Who We Are
        </motion.h2>
        <motion.h6
          initial={{ opacity: 0, x: 100 }} // X:100
          whileInView={{ opacity: 1, x: 1 }} // y:100
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: 'easeInOut',
          }}
          className="md:text-SubHeading text-SubHeading_sm md:font-SubHeading font-SubHeading_sm text-center"
        >
          {' '}
          SR Temple Construction Company: Crafting Sacred Spaces Since 2011
        </motion.h6>
        <motion.p
          initial={{ opacity: 0, x: -100 }} // X:100
          whileInView={{ opacity: 1, x: 1 }} // y:100
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: 'easeInOut',
          }}
          className="md:text-Paragraph md:font-Paragraph font-Paragraph_sm py-3 text-center"
        >
          At SR Temple Construction Company, we specialize in designing and building temples that
          blend architectural brilliance with spiritual sanctity. Since our establishment in 2011,
          we have been dedicated to providing the best temple construction solutions across India.
        </motion.p>
      </div>
      <div className="">
        <section
          className="flex justify-center items-center"
          ref={sectionRef}
        >
          {/* 2nd section */}
          <div className="flex md:flex-row flex-col gap-6 justify-center items-center w-full">
            {arr.map((item) => (
              <div
                key={item.id}
                className="relative bg-white flex flex-col gap-4 justify-center items-center border rounded-md shadow-xl shadow-gray2 overflow-hidden group  md:w-75 lg:w-80 w-full h-40 align-content-center transform border-l-4 border-[#f7c100] hover:-translate-y-6 duration-300"
              >
                <div className="relative z-10 bg-golden3 text-[#254736] p-3 rounded-full transition-all duration-500 group-hover:text-white border-l-4 border-[#254736] hover:-translate-y-2 rounded-r">
                  {item.icon}
                </div>
                <div className="relative z-10 flex flex-col justify-center items-center">
                  <h5 className="text-2xl font-extrabold transition-all duration-500 group-hover:text-white text-[#254736]">
                    {isVisible ? (
                      <CountUp
                        endProp={item.count} // Pass endProp instead of end
                        durationprops={1.5}
                        reset={isVisible}
                      />
                    ) : (
                      '0'
                    )}
                    {item.id === 4 ? '%' : '+'}
                  </h5>
                  <p className="text-subHeading font-semibold transition-all duration-500 group-hover:text-white text-[#254736] text-center">
                    {item.heading}
                  </p>
                </div>
                <div className="absolute inset-0 bg-[#254736] transition-transform duration-500 transform translate-x-full group-hover:translate-x-0" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default SocialProofCounter;
