'use client';
import React from 'react';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { navbarItems } from '@/lib/mock';
export function Navbar() {
  return <FloatingNav navItems={navbarItems} />;
}
