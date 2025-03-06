'use client';
import React, { useState } from 'react';
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
import Toggle from '../atoms/Toggle';
import { useTheme } from 'next-themes';

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ElementType;
  }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const { theme } = useTheme();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 10);
  });

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        className={cn(
          'mx-auto fixed top-3 sm:top-0 inset-x-0 rounded-full z-[5000] py-2',
          isScrolled
            ? 'bg-white dark:bg-neutral-50 border border-gray-700 dark:border-neutral-100 w-fit sm:top-1 sm:rounded-full'
            : 'w-full sm:rounded-none',
          className
        )}
      >
        <div className='flex gap-10 max-w-6xl inset-x-0 mx-auto px-8 py-3 space-x-1 items-center justify-between'>
          <Link href={'/'}>
            <Image
              src={theme === 'dark' ? '/assets/logo-white.svg' : '/assets/logo-black.svg'}
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
                  'px-4 sm:px-3',
                  pathname === navItem.link
                    ? 'underline underline-offset-2'
                    : ''
                )}
              >
                {navItem.icon &&
                  React.createElement(navItem.icon, {
                    className: 'w-5 h-5 hidden',
                  })}
                <span className='hidden sm:block text-sm'>{navItem.name}</span>
              </Link>
            ))}
          </div>
          <Toggle />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
