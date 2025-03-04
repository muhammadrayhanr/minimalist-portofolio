import SocialMedia from '@/components/atoms/SocialMedia';
import SpotlightCard from '@/components/ui/spotlight-card';
import { Dot } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <SpotlightCard className='custom-spotlight-card'>
      <div className='flex flex-col justify-center items-center w-full'>
        <span className='flex items-center mb-4 rounded-full bg-[#B5FF6D]/10 px-2 py-1 text-xs'>
          <Dot className='h-6 w-6 animate-ping rounded-full text-[#39D353] opacity-75' />
          <span className='pe-3'>Available for work</span>
        </span>
        <span className='text-3xl text-center font-semibold'>Let&apos;s create your next big idea.</span>
        <Link href={'/contact'} className='text-sm mt-6 px-4 py-2 mb-7 md:mb-0 rounded-full bg-white text-black border border-white hover:bg-transparent hover:text-white transition-all duration-600'>Contact Me</Link>
        <SocialMedia className={'md:hidden'} />
      </div>
    </SpotlightCard>
  );
};

export default Contact;
