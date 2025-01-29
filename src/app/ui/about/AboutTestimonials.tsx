'use client';

import { useLanguage } from '@/lib/languageContext';
import { testimonials } from '@/data/AboutTestimonial';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

// eslint-disable-next-line react/function-component-definition
const Testimonials: React.FC = () => {
  const [testimonialActive, setTestimonialActive] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialActive((prevActive) => (prevActive
        >= testimonials.length ? 1 : prevActive + 1));
    }, 3000); // Change testimonials every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const { language } = useLanguage() || { language: 'english' };

  const totalTestimonials = testimonials.length;

  const handlePrevTestimonial = () => {
    setTestimonialActive((prevActive) => (prevActive === 1 ? totalTestimonials : prevActive - 1));
  };

  const handleNextTestimonial = () => {
    setTestimonialActive((prevActive) => (prevActive === totalTestimonials ? 1 : prevActive + 1));
  };

  return (
    <>
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: 'easeInOut',
          }}
          className="font-MainHeading_sm md:font-MainHeading text-MainHeading_sm md:text-MainHeading text-center text-gray md:text-gray md:mt-16 md:py-5 mt-4 mb-4"
        >
          {language === 'english' ? 'Testimonials' : language === 'marathi' ? 'अभिप्राय' : 'प्रतिक्रिया'}
        </motion.h1>
      </div>
      <div className="my-6 container mx-auto flex flex-col md:flex-row shadow-sm overflow-hidden">
        <div className="relative w-full py-2 md:py-10 bg-yellow rounded-xl md:w-1/2 flex flex-col item-center justify-center">
          <div className="absolute top-0 left-0 z-10 grid-gray w-16 h-16 md:w-40 md:h-40 md:ml-20 md:mt-24" />

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              scale: { type: 'spring', stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: 'easeInOut',
            }}
            className="text-gray relative text-center text-MainHeading_sm font-MainHeading_sm md:font-MainHeading md:text-MainHeading py-2 px-6 md:py-6 md:w-full md:text-gray tracking-tight mb-0"
          >
            <span className="md:block">{language === 'english' ? 'What Our Customers Are Saying!' : language === 'marathi' ? 'आमचे ग्राहक काय म्हणत आहेत!' : 'हमारे ग्राहक क्या कह रहे हैं!'}</span>
          </motion.div>

          <div className="absolute right-0 bottom-0 mr-4 mb-4 hidden md:block">
            <button
              type="submit"
              className="rounded-l-full border-r bg-yellow text-gray focus:outline-none hover:text-gray font-bold w-12 h-10"
              onClick={handlePrevTestimonial}
            >
              &#8592;
            </button>
            <button
              type="submit"
              className="rounded-r-full bg-yellow text-gray-500 focus:outline-none hover:text-gray font-bold w-12 h-10"
              onClick={handleNextTestimonial}
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="bg-gray-100 md:w-1/2">
          <div className="flex flex-col h-full relative">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                scale: { type: 'spring', stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: 'easeInOut',
              }}
              className="h-full relative z-10"
            >
              {testimonialActive === 1 && (
              <p className="text-gray font-Paragraph_sm md:font-Paragraph text-Paragraph_sm md:text-Paragraph px-6 py-6 md:px-16 md:py-10">
                I contacted lots of company but I got best response and
                service from SR temple construction.
              </p>
              )}

              {testimonialActive === 2 && (
              <p className="text-gray px-6 py-6 md:px-16 md:py-10 font-Paragraph_sm md:font-Paragraph text-Paragraph_sm md:text-Paragraph">
                One of the best temple construction companies in India
                and also highly reliable and cost-effective.
              </p>
              )}

              {testimonialActive === 3 && (
              <p className="text-gray px-6 py-6 md:px-16 md:py-10 font-Paragraph_sm md:font-Paragraph text-Paragraph_sm md:text-Paragraph">
                The SR temple construction project will have the
                best and most experienced workers and engineers.
              </p>
              )}
              {testimonialActive === 4 && (
              <p className="text-gray px-6 py-6 md:px-16 md:py-10 font-Paragraph_sm md:font-Paragraph text-Paragraph_sm md:text-Paragraph">
                You are at the right place. Here, your all requirements
                will get fulfilled promptly in regard to temple construction.
              </p>
              )}
              {testimonialActive === 5 && (
              <p className="text-gray px-6 py-6 md:px-16 md:py-10 font-Paragraph_sm md:font-Paragraph text-Paragraph_sm md:text-Paragraph">
                The SR temple construction is the best service provider in
                temple construction. I am super happy with their service.
              </p>
              )}
            </motion.div>

            <div className="flex my-4 justify-center items-center">
              {testimonials.map((testimonial) => (
                <button
                  type="submit"
                  key={testimonial.id}
                  onClick={() => setTestimonialActive(testimonial.id)}
                  className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline inline-block rounded-full mx-2 ${testimonialActive === testimonial.id
                    ? 'h-16 w-16 opacity-100 bg-gray text-white'
                    : 'h-12 w-12 opacity-25 bg-yellow text-gray-600'}`}
                >
                  {testimonial.initials}
                </button>
              ))}
            </div>

            <div className="flex justify-center px-6 pt-2 pb-6 md:py-6">
              {testimonialActive >= 1 && testimonialActive <= testimonials.length && (
                <div className="text-center">
                  <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">{testimonials[testimonialActive - 1].name}</h2>
                  <small className="text-gray-500 text-xs md:text-sm truncate">{testimonials[testimonialActive - 1].title}</small>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
