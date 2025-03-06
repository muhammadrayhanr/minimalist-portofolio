import HeaderSection from '@/components/atoms/HeaderSection';
import { projectItems } from '@/lib/mock';
import { LinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <section className='sm:mx-5'>
      <HeaderSection text='projects' />
      <div className='grid gap-2'>
        {projectItems.map((p) => {
          return (
            <div
              key={p.id}
              className='border dark:border-[#252529] bg-neutral-100 dark:bg-[#141417] rounded-xl sm:flex items-center mt-2'
            >
              <div className='flex justify-center p-2'>
                <Image
                  src={`/assets/${p.image}`}
                  alt='mockup'
                  width={500}
                  height={70}
                  className='border border-[#202024] rounded-lg'
                />
              </div>
              <div className='p-3 w-full'>
                <div className='flex justify-between items-center'>
                  <h3 className='text-lg text-black font-black'>{p.label}</h3>
                  <Link
                    target='_blank'
                    href={p.link}
                    className='border border-[#252529] dark:bg-[#18181b] dark:hover:bg-[#1f1f24] duration-200 px-5 py-2 flex items-center rounded-lg dark:text-zinc-400 gap-2 text-sm'
                  >
                    <LinkIcon className='h-3 w-3 dark:text-neutral-500' /> Preview
                  </Link>
                </div>
                <hr className='border-1 dark:border-[#252529] border-dashed my-3' />
                <div className='flex items-center gap-5'>
                  <ul className='flex gap-2'>
                    {p.tags.map((t) => {
                      return (
                        <li
                          key={t}
                          className='text-xs dark:bg-[#18181b] border dark:border-[#252529] rounded px-1 py-0.5 dark:text-zinc-500 font-mono w-fit'
                        >
                          # {t}
                        </li>
                      );
                    })}
                  </ul>
                  <div className='bg-zinc-500 rounded-full h-[3px] w-[3px] aspect-square flex-none relative '></div>
                  <p className='opacity-50 text-sm'>{p.tech}</p>
                </div>
                <hr className='border-1 border-[#252529] border-dashed my-3' />
                <p className='text-sm'>{p.summary}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
