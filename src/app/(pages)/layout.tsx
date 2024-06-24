import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import React from 'react';
import Footer from '../ui/footer/Footer';
import Navbar from '../ui/navbar/Navbar';

export const metadata: Metadata = {
  title: 'SRTemple Construction Pvt. Ltd.',
  description: 'Welcome to the SRTemple Construction Pvt. Ltd.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
