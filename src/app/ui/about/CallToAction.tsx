
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import React from 'react';


const CallToAction: React.FC = () => {
  return (
    <div className="container m-auto px-6 py-10 text-center">
      <div className="flex flex-col md:flex-row items-center justify-between relative w-full h-auto md:h-64 bg-white text-gray shadow-2xl rounded-lg p-8">
        <div className="md:w-10/12 w-full text-2xl">
          <span className="flex">
          Partner with us to create a temple that blends architectural innovation with cultural heritage, integrating eco-friendly practices and inspiring spiritual devotion.
          </span>
        </div>
        <div className="flex justify-center items-center mt-3">
          <Link href="/contact">
            <Button type="submit" variant="outline" className="px-8 py-1 bg-yellow hover:bg-yellow text-[#000] rounded-md text-buttonText font-buttonText">Get in Touch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
