import React from 'react';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { LanguageProvider } from '../lib/languageContext';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'SR Temple Construction Pvt. Ltd.',
    template: '%s - SR Temple Construction Pvt. Ltd.',
  },
  description:
  'Welcome to SR Temple Construction! With decades of experience and a team of skilled professionals, we offer unparalleled solutions for all your temple construction needs. As a leading provider of high-quality temple construction services, we are dedicated to ensuring excellence and precision in every project we undertake. Explore our expertise and commitment to building sacred spaces that inspire and elevate.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>

        <LanguageProvider>
          {children}
        </LanguageProvider>

      </body>
    </html>
  );
}
