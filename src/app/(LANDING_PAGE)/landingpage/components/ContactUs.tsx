/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import contact from '@/../public/assets/portfolio/Contact.jpg';
import { z } from 'zod';
import { Toaster, toast } from 'react-hot-toast';
import contactschema from '@/schema/ContactSchema';
import axios from 'axios';
import Link from 'next/link';
import { motion } from 'framer-motion';
import fadein from '@/utils/variants';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataToValidate = { ...formData };
    setLoading(true);
    try {
      await contactschema.parse(dataToValidate);

      axios
        .post('/api/sendEmail', dataToValidate)
        .then(() => {
          toast.success('Thank you for sending us message!');
          setFormData({
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            subject: '',
            message: '',
          });
        })
        .catch(() => {
          toast.error('Something went wrong!');
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors: { [key: string]: string } = {};
        err.errors.forEach((error) => {
          const fieldName = error.path[0];
          newErrors[fieldName as string] = error.message;
        });
        setErrors(newErrors);
        setLoading(false);
      }
    }
  };

  return (
    <section>
      <Toaster />
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-7xl py-6 md:py-10">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <motion.p
                  variants={fadein('left', 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-MainHeading_sm font-MainHeading md:text-MainHeading text-center"
                >
                  Get in touch
                </motion.p>
                <motion.p
                  variants={fadein('right', 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.5 }}
                  className="py-4 text-SubHeading_sm md:text-SubHeading font-SubHeading text-center"
                >
                  Let us know how we can help.
                </motion.p>
                <form onSubmit={handleSubmit} className="py-4 space-y-2">
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700"
                        htmlFor="firstname"
                      >
                        First Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        placeholder="First Name"
                      />
                      <div className="md:h-5 md:w-64">
                        {errors.firstname && (
                        <p className="text-red-500 text-xs">
                          {errors.firstname}
                        </p>
                        )}
                      </div>
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700"
                        htmlFor="lastname"
                      >
                        Last Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        placeholder="Last Name"
                      />
                      <div className="md:h-5 md:w-64">
                        {errors.lastname && (
                        <p className="text-red-500 text-xs">
                          {errors.lastname}
                        </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                    />
                    <div className="md:h-5 md:w-64">
                      {errors.email && (
                        <p className="text-red-500 text-xs">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700"
                      htmlFor="mobile"
                    >
                      Phone number
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="tel"
                      id="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Phone number"
                    />
                    <div className="md:h-5 md:w-64">
                      {errors.mobile && (
                        <p className="text-red-500 text-xs">
                          {errors.mobile}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                    />
                    <div className="md:h-5 md:w-64">
                      {errors.subject && (
                        <p className="text-red-500 text-xs">
                          {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                    />
                    <div className="md:h-5 md:w-64">
                      {errors.message && (
                        <p className="text-red-500 text-xs">
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center bg-yellow hover:bg-[#deb01d] text-[#000] rounded-md px-3 py-2 font-semibold leading-7 "
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send message'}
                  </button>
                </form>
              </div>
            </div>

            <div className="md:h-full md:w-full flex justify-evenly flex-col gap-4">
              <Image
                height={1000}
                width={1000}
                src={contact}
                alt="contact image"
                className="max-h-full w-full object-cover lg:block hidden"
              />
              {/* Social Links */}
              <div className="flex justify-center items-center gap-8">
                {/* facebook link */}
                <section className="flex justify-center items-center">
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/people/Vionsys-It-Solutions-India-Pvt-Ltd/61556943721247/?mibextid=qi2Omg&rdid=DiGYSgrONFma1sht&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fj5CS6REwZ5K4WJWz%2F%3Fmibextid%3Dqi2Omg"
                    className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1.1em"
                      viewBox="0 0 448 512"
                      strokeWidth="0"
                      fill="currentColor"
                      stroke="currentColor"
                      className="w-5"
                    >
                      <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                    </svg>
                    <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-[#000] group-hover:text-sm group-hover:-translate-y-10 duration-700">
                      Facebook
                    </span>
                  </Link>
                </section>
                {/* instagram  link */}
                <section className="flex justify-center items-center">
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/vionsys.it.solutions/?igsh=aXMyYzU1cjZ3M3Ux"
                    className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#a21caf] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1.2em"
                      viewBox="0 0 24 24"
                      strokeWidth="1"
                      fill="currentColor"
                      stroke="currentColor"
                      className="w-5"
                    >
                      <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z" />
                    </svg>
                    <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-[#000] group-hover:text-sm group-hover:-translate-y-10 duration-700">
                      Instagram
                    </span>
                  </Link>
                </section>
                {/* linkdin link */}
                <section className="flex justify-center items-center">
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/vionsys-it-solutions-ind-pvt-ltd/?originalSubdomain=in"
                    className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1.1em"
                      viewBox="0 0 512 512"
                      strokeWidth="0"
                      fill="currentColor"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
                    </svg>
                    <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-[#000] group-hover:text-sm group-hover:-translate-y-10 duration-700">
                      Linkedin
                    </span>
                  </Link>
                </section>
                {/* x link */}
                <section className="flex justify-center items-center">
                  <Link
                    href="https://x.com/vionsysit"
                    target="_blank"
                    className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray to-[#000] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      strokeWidth="0"
                      fill="currentColor"
                      stroke="currentColor"
                    >
                      <path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z" />
                    </svg>
                    <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-[#000] group-hover:text-sm group-hover:-translate-y-10 duration-700">
                      Twitter
                    </span>
                  </Link>
                </section>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
