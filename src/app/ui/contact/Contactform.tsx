/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-use-before-define */

'use client';

import React, { useState } from 'react';
import { cn } from '@/utils/cn';
import { z } from 'zod';
import Input from '../../../components/ui/input';
import Label from '../../../components/ui/label';
import ContactSchema from '../../../schema/ContactSchema';

export default function SignupFormDemo() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    countryCode: '',
    mobile: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const completePhoneNumber = `${formData.countryCode}${formData.mobile}`;
    const dataToValidate = { ...formData, mobile: completePhoneNumber };

    try {
      ContactSchema.parse(dataToValidate);
      // If validation is successful
      console.log('Validation successful', dataToValidate);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors: { [key: string]: string } = {};
        err.errors.forEach((error) => {
          const fieldName = error.path[0];
          newErrors[fieldName as string] = error.message;
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <section className="h-full w-full xs:py-5">
      <h1 className="flex justify-center text-MainHeading font-MainHeading py-2 ">
        Connect Here
      </h1>
      <div className="md:max-w-[50vw] w-full px-5 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white ">
        <h2 className="font-CardHeading text-CardHeading text-center">
          Let Us Know
        </h2>
        <p className="text-Paragraph font-Paragraph text-center">
          We truly appreciate your interest and look forward to assisting you
        </p>
        {/* /Form */}
        <form className="py-5" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            {/* Firstname */}
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="Tyler"
                type="text"
                value={formData.firstname}
                onChange={handleInputChange}
              />
              {errors.firstname && <ErrorText>{errors.firstname}</ErrorText>}
            </LabelInputContainer>
            {/* Lastname */}
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                placeholder="Durden"
                type="text"
                value={formData.lastname}
                onChange={handleInputChange}
              />
              {errors.lastname && <ErrorText>{errors.lastname}</ErrorText>}
            </LabelInputContainer>
          </div>
          {/* Email */}
          <LabelInputContainer className="mb-4 mt-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </LabelInputContainer>
          {/* Mobile number */}
          <LabelInputContainer className="mb-4 mt-2">
            <Label htmlFor="mobile">Mobile Number</Label>
            <div className="">
              <Input
                id="mobile"
                placeholder="234 567 8901"
                type="tel"
                className="w-full"
                value={formData.mobile}
                onChange={handleInputChange}
              />
            </div>
            {errors.mobile && <ErrorText>{errors.mobile}</ErrorText>}
          </LabelInputContainer>
          {/* Subject */}
          <LabelInputContainer className="mb-8">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="Subject here"
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
            />
            {errors.subject && <ErrorText>{errors.subject}</ErrorText>}
          </LabelInputContainer>
          {/* Message */}
          <LabelInputContainer className="mb-8">
            <Label htmlFor="message">Message</Label>
            <textarea
              className="border border-slate-400 rounded-md"
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
            className="bg-gradient-to-br relative group/btn from-amber-400 to-neutral-400 md:w-[20vw] w-full md:mx-44 rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Submit &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
    </section>
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
