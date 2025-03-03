'use client';
import React, { useState, JSX } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 10);
  });

  console.log(pathname)

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        className={cn(
          'w-full fixed py-1 top-0 border-b border-b-[#252529] rounded bg-18181b shadow-lg z-[5000]',
          isScrolled ? 'backdrop-blur-md' : 'backdrop-blur-none',
          className
        )}
      >
        <div className='flex max-w-3xl inset-x-0 mx-auto  px-8 py-3 items-center justify-center md:justify-between space-x-4 transition-all duration-300'>
          <Link href={'/'} className='hidden md:block'>
            <Image
              src={'/assets/logo-white.svg'}
              alt='logo'
              width={25}
              height={25}
            />
          </Link>
          <div className='relative items-center flex space-x-1'>
            {navItems.map((navItem, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  'text-neutral-50 hover:text-neutral-300 px-2',
                  pathname == navItem.link
                    ? 'underline underline-offset-2 text-white'
                    : ''
                )}
              >
                <span className='block sm:hidden'>{navItem.icon}</span>
                <span className='hidden sm:block text-sm'>{navItem.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
