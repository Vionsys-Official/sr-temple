import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

function ContactUs() {
  return (
    <section className="max-w-full py-10 flex justify-center px-4 ">
      <div className="bg-[#254736] text-white  md:w-[70%] flex flex-col rounded-2xl  justify-between py-4 px-8">
        <div>
          <h2 className="font-bold text-Heading-sm md:text-Heading py-2 text-center">
            Discover what we can do for you.
          </h2>
          <p
            className="py-2 text-Para-sm md:text-Para text-center"
          >
            Contact us today to discuss how we can help you to achieve your
            business goals.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/contact">
            <Button type="submit" variant="outline" className="px-4 py-2 bg-yellow hover:bg-[#deb01d] text-black rounded-md text-buttonText font-buttonText">Get In Touch</Button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ContactUs;
