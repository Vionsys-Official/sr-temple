/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-use-before-define */

'use client';

import React from 'react';
import { cn } from '@/utils/cn';
import Input from '../../../components/ui/input';
import Label from '../../../components/ui/label';

export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section className="min-h-screen w-full">
      <h1 className="flex justify-center text-MainHeading font-MainHeading ">
        Connect Here
      </h1>
      <div className="md:max-w-[50vw] w-full px-5 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white ">
        <h2 className="font-CardHeading text-CardHeading text-center">
          Let Us Know
        </h2>
        <p className=" text-Paragraph font-Paragraph text-center">
          We truly appreciate your interest and look forward to assisting you
        </p>

        <form className="py-5" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="Tyler" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Durden" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4 mt-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="Subject">Subject</Label>
            <Input id="Subject" placeholder="Subject here" type="text" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="Message">Message</Label>
            <textarea
              className="border border-slate-400 rounded-md"
              id="message"
              name="message"
              rows={4}
              cols={50}
            />
            <BottomGradient />
          </LabelInputContainer>
          <button
            title="submit"
            className="bg-gradient-to-br relative group/btn from-amber-400  to-neutral-400  w-full  rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Submit &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    </section>
  );
}

export function BottomGradient() {
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
