import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import React from 'react';

export const metadata: Metadata = {
  title: 'SR Temple Construction Pvt. Ltd.',
  description: 'Welcome to SR Temple Construction! We specialize in providing unparalleled temple construction solutions with decades of experience and a team of skilled professionals. As a leading provider of high-quality services, we are committed to excellence and precision in every project. Discover how we can help you build inspiring and sacred spaces that stand the test of time. Explore our expertise and dedication to your vision.',
  openGraph: {
    images: '/src/app/opengraph-image.png',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        {children}
      </body>
    </html>
  );
}
