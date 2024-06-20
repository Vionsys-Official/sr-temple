/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */

'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

function NotFound() {
    const router = useRouter();
    return (
        <div className="md:h-screen h-[70vh] w-full bg-gray-50 flex justify-center items-center px-5">
            <div className="w-full flex  flex-col justify-center items-center mx-8">
                <div className="text-7xl text-yellow font-dark font-extrabold md:mb-8 mb-5">
                    404
                </div>
                <p className="md:text-5xl text-4xl text-black font-bold md:mb-8 mb-5">
                    Page not found
                </p>
                <p className="text-lg md:text-xl leading-normal text-slate-600 md:mb-8 mb-5">
                    Oops! The page you&apos;re searching for cannot be found.
                </p>
                <div className="flex md:flex-row flex-col gap-4">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center justify-center md:w-1/2 w-full px-3 py-1 text-base transition-all hover:scale-105 duration-200 bg-yellow hover:bg-[#000] hover:text-white border border-black rounded-lg gap-x-2 sm:w-auto "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 rtl:rotate-180"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                            />
                        </svg>

                        <span>Go back</span>
                    </button>
                    <Link href="/">
                        <Button type="submit" variant="outline" className="px-3 py-1 text-base bg-yellow hover:bg-[#000] hover:text-white text-black rounded-md"> Back to Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
