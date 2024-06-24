/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-use-before-define */

'use client';

import React, { useState } from 'react';
import { cn } from '@/utils/cn';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
import fadein from '../../../utils/variants';
import Input from '../../../components/ui/input';
import Label from '../../../components/ui/label';
import ContactSchema from '../../../schema/ContactSchema';

export default function SignupFormDemo() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false); // State to handle loading

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[id];
      return newErrors;
    });
  };
  const handleMobileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setFormData((prevData) => ({ ...prevData, mobile: value }));
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors.mobile;
        return newErrors;
      });
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataToValidate = { ...formData };
    setLoading(true); // Set loading to true when the form is submitted
    try {
      await ContactSchema.parse(dataToValidate);

      axios
        .post('/api/sendEmail', dataToValidate)
        .then(() => {
          toast.success('Thank you for sending us message!');
          setFormData({ // Reset form data to empty strings
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
  // main section
    <>
      <Toaster />
      <section className="h-full w-full xs:py-5 md:py-6">

        <motion.h1
          variants={fadein('down', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="flex justify-center text-MainHeading font-MainHeading py-2 "
        >
          Connect Here
        </motion.h1>
        {/* Form Heading */}
        <div className="md:max-w-[50vw] w-full px-5 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white ">
          <h2 className="font-CardHeading text-CardHeading text-center">
            Let Us Know
          </h2>
          <p className="text-Paragraph font-Paragraph text-center">
            We truly appreciate your interest and look forward to assisting you
          </p>
          {/* Contact Form */}
          <form className="py-5" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  type="text"
                  value={formData.firstname}
                  onChange={handleInputChange}
                />
                {errors.firstname && <ErrorText>{errors.firstname}</ErrorText>}
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  type="text"
                  value={formData.lastname}
                  onChange={handleInputChange}
                />
                {errors.lastname && <ErrorText>{errors.lastname}</ErrorText>}
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4 mt-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4 mt-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <div className="">
                <Input
                  id="mobile"
                  type="tel"
                  className="w-full"
                  value={formData.mobile}
                  inputMode="numeric"
                  pattern="\d*"
                  maxLength={10}
                  onChange={handleMobileInput}
                />
              </div>
              {errors.mobile && <ErrorText>{errors.mobile}</ErrorText>}
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={handleInputChange}
              />
              {errors.subject && <ErrorText>{errors.subject}</ErrorText>}
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="message">Message</Label>
              <textarea
                className="border border-slate-300 rounded-md"
                id="message"
                name="message"
                rows={4}
                cols={50}
                value={formData.message}
                onChange={handleInputChange}
              />
              {errors.message && <ErrorText>{errors.message}</ErrorText>}
              <BottomGradient />
            </LabelInputContainer>
            <button
              title="submit"
              className="bg-gradient-to-br  relative group/btn from-amber-400 to-neutral-400 md:w-[20vw] w-full md:mx-44 rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-sm mr-2" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit &rarr;
                  <BottomGradient />
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function BottomGradient() {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
}

function LabelInputContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <span className="text-red-600 text-sm">{children}</span>;
}
