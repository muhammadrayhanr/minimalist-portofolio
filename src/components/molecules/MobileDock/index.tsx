'use client';

import { HomeIcon, BookOpenIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';

const MobileDock = () => {

  return (
    <div className="fixed sm:hidden bottom-0 left-0 w-full bg-white dark:bg-neutral-50 border-t border-gray-200 dark:border-neutral-100 shadow-lg p-2">
      <div className="flex py-1 justify-around items-center">
        <NavItem href="/" label="Home">
          <HomeIcon size={24} />
        </NavItem>
        <NavItem href="/guestbook" label="Guestbook">
          <BookOpenIcon size={24} />
        </NavItem>
        <NavItem href="/contact" label="Contact">
          <MailIcon size={24} />
        </NavItem>
      </div>
    </div>
  );
};

const NavItem = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <Link href={href} className="flex flex-col items-center gap-1 text-gray-600 dark:text-neutral-900 hover:text-black dark:hover:text-white transition">
    {children}
    <span className="text-xs">{label}</span>
  </Link>
);

export default MobileDock;
