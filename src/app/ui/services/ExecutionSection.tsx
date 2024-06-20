'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function ExecutionSection() {
  return (
    <section>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex justify-center items-center md:border-r border-yellow">
            <Image
              className="object-cover  rounded shadow-lg"
              src="/assets/services/vastu.jpg"
              alt="services"
              height={500}
              width={500}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }} // X:100
              whileInView={{ opacity: 1, x: 0 }} // y:100
              transition={{
                delay: 0.2,
                x: { type: 'spring', stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: 'easeInOut',
              }}
              className="md:px-10 p-2"
            >
              <h2 className="max-w-full mb-4 text-MainHeading_sm font-bold tracking-tight text-gray-900 sm:text-MainHeading sm:leading-none">
                2D, 3D & Vastu Shastra Plan Drawing Services
              </h2>
              <p className="text-Paragraph_sm md:text-Paragraph">
                We offer specialized 2D and 3D plan drawing services, incorporating
                the principles of Vastu Shastra to create spaces that are not only
                visually stunning but also spiritually harmonious. Our skilled designers
                and architects work closely with you to develop detailed plans that reflect
                your vision and adhere to traditional architectural guidelines. These
                comprehensive drawings provide a clear blueprint for your temple
                construction project.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">

          <div className="flex flex-col items-center justify-center md:border-r border-yellow">
            <motion.div
              initial={{ opacity: 0, x: 100 }} // X:100
              whileInView={{ opacity: 1, x: 0 }} // y:100
              transition={{
                delay: 0.2,
                x: { type: 'spring', stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: 'easeInOut',
              }}
              className="md:px-10 p-2 mb-6"
            >
              <h2 className="max-w-full mb-4 text-MainHeading_sm font-bold tracking-tight text-gray-900 sm:text-MainHeading sm:leading-none">
                Temple Execution Construction Services
              </h2>
              <p className="text-Paragraph_sm md:text-Paragraph">
                Our experienced construction team brings your temple plans to life with
                precision and craftsmanship. We oversee every aspect of the construction
                process, ensuring that all work is carried out to the highest standards.
                From foundation laying to intricate carvings and final finishes, our team
                is dedicated to creating temples that are both structurally sound and
                spiritually uplifting.
              </p>
            </motion.div>
          </div>

          <div className="flex justify-center items-center">
            <Image
              className="object-cover  rounded shadow-lg"
              src="/assets/services/Execution.jpg"
              alt="services"
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex justify-center items-center md:border-r border-yellow">
            <Image
              className="object-cover  rounded shadow-lg"
              src="/assets/services/Consultancy.jpg"
              alt="services"
              height={500}
              width={500}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }} // X:100
              whileInView={{ opacity: 1, x: 0 }} // y:100
              transition={{
                delay: 0.2,
                x: { type: 'spring', stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: 'easeInOut',
              }}
              className="md:px-10 p-2 mb-6"
            >
              <h2 className="max-w-full mb-4 text-MainHeading_sm font-bold tracking-tight text-gray-900 sm:text-MainHeading sm:leading-none">
                Consultancy Services
              </h2>
              <p className="text-Paragraph_sm md:text-Paragraph">
                We provide expert consultancy services to guide you through every stage
                of your temple construction project. Our consultants offer valuable
                insights and advice on design, materials, and construction techniques,
                ensuring that your project is executed seamlessly. We are committed to
                helping you achieve your vision while adhering to the highest standards
                of quality and tradition.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExecutionSection;
