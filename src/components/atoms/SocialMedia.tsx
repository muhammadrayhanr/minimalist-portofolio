import { socialMediaItems } from '@/lib/mock';
import Link from 'next/link';
import React from 'react';

const SocialMedia = ({ className }: { className: string }) => {
  return (
    <div className={`flex flex-row gap-5 items-center ${className}`}>
      {socialMediaItems.map((item, idx) => {
        return (
          <Link key={idx} target='_blank' href={item.link}>
            {React.createElement(item.icon, { className: 'w-5 h-5' })}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialMedia;
