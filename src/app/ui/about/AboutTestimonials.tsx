'use client';

import { useLanguage } from '@/lib/languageContext';
import { testimonials, testimonialsMarathi } from '@/data/AboutTestimonial';
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
          {language === 'english' ? 'Testimonials' : 'अभिप्राय'}
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
            <span className="md:block">{language === 'english' ? 'What Our Customers Are Saying!' : 'आमचे ग्राहक काय म्हणत आहेत!'}</span>
          </motion.div>

          <div className="absolute right-0 bottom-0 mr-4 mb-4 hidden md:block">
            <button
              type="submit"
              className="rounded-l-full border-r bg-yellow text-gray focus:outline-none hover:text-gray font-bold w-12 h-10"
              onClick={() => setTestimonialActive(testimonialActive === 1
                ? testimonials.length : testimonialActive - 1)}
            >
              &#8592;
            </button>
            <button
              type="submit"
              className="rounded-r-full bg-yellow text-gray-500 focus:outline-none hover:text-gray font-bold w-12 h-10"
              onClick={() => setTestimonialActive(testimonialActive
                >= testimonials.length ? 1 : testimonialActive + 1)}
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
                {language === 'english' ? 'I wanted to construct one temple in my village and I contacted lots of company but I got best response and service from SR temple construction.' : 'मी माझ्या गावात एक मंदिर बांधू इच्छित होतो आणि मी अनेक कंपन्यांशी संपर्क साधला, पण मला SR मंदिर निर्माण कंपनीकडून सर्वात चांगला प्रतिसाद आणि सेवा मिळाली.'}
              </p>
              )}

              {testimonialActive === 2 && (
              <p className="text-gray px-6 py-6 md:px-16 md:py-10 font-Paragraph_sm md:font-Paragraph text-Paragraph_sm md:text-Paragraph">
                {language === 'english' ? 'One of the best temple construction companies in India and also highly reliable and cost-effective.' : 'भारतामध्ये सर्वात उत्तम मंदिर बांधणी कंपन्यांपैकी एक आणि अत्यंत विश्वासार्ह, नाविन्यपूर्ण आणि किफायतशीर.'}
              </p>
              )}

              {testimonialActive === 3 && (
              <p className="text-gray px-6 py-6 md:px-16 md:py-10 font-Paragraph_sm md:font-Paragraph text-Paragraph_sm md:text-Paragraph">
                {language === 'english' ? 'The SR temple construction project will have the best and most experienced workers and engineers.' : 'SR Temple Construction कंपनी प्रकल्पात सर्वोत्कृष्ट आणि अनुभवी कामगार, अभियंते आणि डिझाइनर असतील.'}
              </p>
              )}
              {testimonialActive === 4 && (
              <p className="text-gray px-6 py-6 md:px-16 md:py-10 font-Paragraph_sm md:font-Paragraph text-Paragraph_sm md:text-Paragraph">
                {language === 'english' ? 'You are at the right place. Here, your all requirements will get fulfilled promptly in regard to temple construction.' : 'आपण योग्य ठिकाणी आला आहात. येथे तुमच्या मंदिर बांधणीच्या सर्व गरजा तत्काळ पूर्ण होतील.'}
              </p>
              )}
              {testimonialActive === 5 && (
              <p className="text-gray px-6 py-6 md:px-16 md:py-10 font-Paragraph_sm md:font-Paragraph text-Paragraph_sm md:text-Paragraph">
                {language === 'english' ? 'The SR temple construction is the best service provider in temple construction. I am super happy with their service.' : 'SR मंदिर बांधणी सेवा सर्वोत्कृष्ट आहे. मी त्यांच्या सेवेने खूप आनंदी आहे.'}
              </p>
              )}
            </motion.div>

            <div className="flex my-4 justify-center items-center">
              {(language === 'english' ? testimonials : testimonialsMarathi).map((testimonial) => (
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
                  <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">{(language === 'english' ? testimonials : testimonialsMarathi)[testimonialActive - 1].name}</h2>
                  <small className="text-gray-500 text-xs md:text-sm truncate">{(language === 'english' ? testimonials : testimonialsMarathi)[testimonialActive - 1].title}</small>
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
