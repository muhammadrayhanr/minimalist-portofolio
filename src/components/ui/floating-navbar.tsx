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

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        className={cn(
          'w-fit mx-auto fixed top-3 md:top-0 inset-x-0 rounded-full bg-18181b z-[5000] py-2 transition-all duration-100',
          isScrolled
            ? 'backdrop-blur-md border border-[#252529] md:w-1/3 md:top-1 md:rounded-full'
            : 'backdrop-blur-none border border-transparent md:w-full md:rounded-none',
          className
        )}
      >
        <div className='flex max-w-3xl inset-x-0 mx-auto px-8 py-3 space-x-1 items-center justify-center md:justify-between'>
          <Link href={'/'} className='hidden md:block'>
            <Image
              src={'/assets/logo-white.svg'}
              alt='logo'
              width={25}
              height={25}
            />
          </Link>
          <div className='relative items-center flex'>
            {navItems.map((navItem, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  'text-neutral-50 hover:text-neutral-300 px-4 md:px-3',
                  pathname === navItem.link
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
