'use client';
import BackToTop from '@/components/atoms/BackToTop';
import Footer from '@/components/molecules/Footer';
import MobileDock from '@/components/molecules/MobileDock';
import { Navbar } from '@/components/molecules/Navbar';
import { ReactNode } from 'react';

export default function layout({ children }: { children?: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className='px-4 md:mx-auto max-w-6xl my-20'>{children}</main>
      <Footer />
      <MobileDock />
      <BackToTop />
    </>
  );
}
