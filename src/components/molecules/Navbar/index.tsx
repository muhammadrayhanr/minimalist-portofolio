'use client';
import React from 'react';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { IconHome, IconMail, IconMessage } from '@tabler/icons-react';
export function Navbar() {
  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <IconHome className='h-4 w-4 text-neutral-500 dark:text-white' />,
    },
    {
      name: 'Guestbook',
      link: '/guestbook',
      icon: (
        <IconMessage className='h-4 w-4 text-neutral-500 dark:text-white' />
      ),
    },
    {
      name: 'Contact',
      link: '/contact',
      icon: (
        <IconMail className='h-4 w-4 text-neutral-500 dark:text-white' />
      ),
    },
  ];
  return <FloatingNav navItems={navItems} />;
}
