'use client';
import React from 'react';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { House, Mail, MessageSquareText } from 'lucide-react';
export function Navbar() {
  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <House className='h-5 w-5 text-neutral-500 dark:text-white' />,
    },
    {
      name: 'Guestbook',
      link: '/guestbook',
      icon: (
        <MessageSquareText className='h-5 w-5 text-neutral-500 dark:text-white' />
      ),
    },
    {
      name: 'Contact',
      link: '/contact',
      icon: (
        <Mail className='h-5 w-5 text-neutral-500 dark:text-white' />
      ),
    },
  ];
  return <FloatingNav navItems={navItems} />;
}
