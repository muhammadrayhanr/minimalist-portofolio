import SocialMedia from '@/components/atoms/SocialMedia';
import React from 'react';

const Footer = () => {
  return (
    <footer className='flex justify-center md:mx-auto max-w-3xl md:justify-between items-center px-5 py-2 md:flex-row'>
      <p className='text-xs'>&copy; 2025 Muhammad Rayhan Rohadi. All rights reserved.</p>
      <SocialMedia className='hidden md:flex' />
    </footer>
  );
};

export default Footer;
