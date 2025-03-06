'use client';
import Footer from '@/components/molecules/Footer';
import { Navbar } from '@/components/molecules/Navbar';
import React, { ReactNode } from 'react';

export default function layout({ children }: { children?: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className='px-4 md:mx-auto max-w-6xl my-20'>{children}</main>
      <Footer />
    </>
  );
}
