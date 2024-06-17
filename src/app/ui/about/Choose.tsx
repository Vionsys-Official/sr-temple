/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

// eslint-disable-next-line react/function-component-definition
const Choose: React.FC = () => (
  <div className="text-center p-8">
    <h2 className="font-bold sm:text-3xl text-MainHeading text-gray ">
      Why to choose US?
    </h2>

    <div className="flex flex-wrap items-center mt-20 text-center">
      <div className="w-full md:w-3/5 lg:w-1/2 px-4">
        <img src="https://picsum.photos/400/240" alt="gem" className="inline-block rounded shadow-lg border border-merino-400" />
      </div>
      <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
        <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
          Innovative Design
        </h3>
        <p className="sm:text-lg mt-6">
          We believe in Customer Satisfaction and we achieve that with our Innovative design and best class construction.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap items-center mt-20 text-left">
      <div className="w-full md:w-3/5 lg:w-1/2 px-4">
        <img src="https://picsum.photos/400/240" alt="project members" className="inline-block rounded shadow-lg border border-merino-400" />
      </div>
      <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
        <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
          Best Cost Approach
        </h3>
        <p className="sm:text-lg mt-6">
          While we are constructing masterpiece cost it matters a lot and we are providing all types of temple construction in minimum cost.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap items-center mt-20 text-left">
      <div className="w-full md:w-3/5 lg:w-1/2 px-4">
        <img src="https://picsum.photos/400/240" alt="editor" className="inline-block rounded shadow-lg border border-merino-400" />
      </div>
      <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
        <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
          Experienced engineers,workers and employees.
        </h3>
        <p className="sm:text-lg mt-6">
          In every field, experience is counted. Our experienced workers work efficiently and finish any task in a given timeline.
        </p>
      </div>
    </div>

  </div>
);

export default Choose;
