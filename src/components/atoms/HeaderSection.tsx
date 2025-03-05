import { SparkleIcon } from 'lucide-react';
import React from 'react';
import ShimmerText from '@/components/atoms/ShimmerText';

const HeaderSection = ({ text }: { text: string }) => {
  return (
    <div className='flex items-center gap-2 mb-2 text-[#8fdc5f] font-medium'>
      <SparkleIcon className='w-3 h-3' />
      <ShimmerText text={text} disabled={false} speed={2} className='text-md cursor-pointer uppercase' />
    </div>
  );
};

export default HeaderSection;
