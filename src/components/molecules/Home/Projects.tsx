import { IconLink } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Projects() {
  const project = [
    {
      id: 1,
      label: 'Personal Website',
      image: 'personal-web.png',
      tech: 'typescript',
      summary:
        'a digital space that showcases my best works, backgrounds, etc.',
      tags: ['NextJS', 'Tailwind'],
      link: 'https://mrayhanr.my.id',
    },
  ];

  return (
    <section>
      <h2 className='text-2xl font-semibold relative flex group cursor-pointer mb-5 w-fit items-center'>
        Projects
      </h2>
      <div className='grid gap-2'>
        {project.map((p) => {
          return (
            <div
              key={p.id}
              className='border border-[#252529] bg-[#141417] rounded-xl sm:flex items-center'
            >
              <div className='p-2'>
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
                  <h1 className='text-2xl font-black'>{p.label}</h1>
                  <Link
                    target='_blank'
                    href={p.link}
                    className='border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] duration-200 px-5 py-2 flex items-center rounded-lg text-zinc-400 gap-2 text-sm'
                  >
                    <IconLink className='h-4 w-4 text-neutral-500' /> Preview
                  </Link>
                </div>
                <hr className='border-1 border-[#252529] border-dashed my-3' />
                <div className='flex items-center gap-5'>
                  <ul className='flex gap-2'>
                    {p.tags.map((t) => {
                      return (
                        <li
                          key={t}
                          className='text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500 font-mono w-fit'
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
                <p className=''>{p.summary}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
