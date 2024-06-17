'use client';

import React from 'react';
import { InfiniteMovingCards } from '../../../components/ui/infinite-moving-cards';

export default function InfiniteMovingCardsDemo() {
  const testimonials = [
    {
      quote:
        'I wanted to construct one temple in my village and I contacted lots of company but I got best response and service from SR temple construction.',
      name: 'Mr. Machindra Pansare,',
      title: 'Yoola, Nashik',
    },
    {
      quote:
        'One of the best temple construction companies in India and also highly reliable, innovative and cost-effective.',
      name: 'Mr. Sambhaji Jadhav,',
      title: 'Kolhapur',
    },
    {
      quote: 'The SR temple construction project will have the best and most experienced workers, engineers and designers.',
      name: 'Sagar Kapadnis,',
      title: 'Pune',
    },
    {
      quote:
        'You are at the right place. Here, your all requirements will get fulfilled promptly in regard to temple construction.',
      name: 'Shubham Kanchar,',
      title: 'Hatnoor',
    },
    {
      quote:
        'The SR temple construction is the best service provider in temple construction. I am super happy with their service.',
      name: 'Mr. Sanjay Enamdar,',
      title: 'Hydrabad',
    },
  ];

  return (
    <div className="md:h-[25rem] h-[34rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <h1 className="md:text-MainHeading md:font-MainHeading text-MainHeading_sm font-MainHeading_sm">Testimonials</h1>
      <p className="md:text-SubHeading text-SubHeading_sm md:font-SubHeading font-SubHeading_sm md:px-48 px-2 py-3 text-center">
        We are proud to share our customers experiences, reflecting our commitment to
        excellence and the quality of our products and services.
      </p>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        className="bg-slate-300"
      />
    </div>
  );
}
