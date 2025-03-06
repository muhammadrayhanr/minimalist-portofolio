'use client';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { navbarItems } from '@/lib/mock';
export function Navbar() {
  return <FloatingNav navItems={navbarItems} />;
}
