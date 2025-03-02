'use client';
import React from 'react';
import { FloatingNav } from '../ui/floating-navbar';
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';
export function Navbar() {
  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <IconHome className='h-4 w-4 text-neutral-500 dark:text-white' />,
    },
    {
      name: 'Projects',
      link: '/projects',
      icon: <IconUser className='h-4 w-4 text-neutral-500 dark:text-white' />,
    },
    {
      name: 'Guestbook',
      link: '/guestbook',
      icon: (
        <IconMessage className='h-4 w-4 text-neutral-500 dark:text-white' />
      ),
    },
  ];
  return <FloatingNav navItems={navItems} />;
}
