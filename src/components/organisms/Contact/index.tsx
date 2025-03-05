/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import HeaderSection from '@/components/atoms/HeaderSection';
import SocialMedia from '@/components/atoms/SocialMedia';
import SpotlightCard from '@/components/ui/spotlight-card';
import { Dot } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactPage = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');
  console.log(data);

  return (
    <section className='py-10 mx-5'>
      <HeaderSection text='connect with me' />
      <h1 className='w-full sm:w-2/3 lg:w-1/2 text-4xl font-bold'>
        Let&apos;s start a project together
      </h1>
      <div className='grid mt-8 sm:grid-cols-2 gap-10'>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className='flex flex-col mt-4'>
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              type='text'
              className='flex h-11 w-full rounded-xl px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-bg-900 border-4 mt-2 focus:border-[#acf267] text-black'
              {...register('name')}
            />
          </div>
          <div className='flex flex-col mt-4'>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              type='email'
              className='flex h-11 w-full rounded-xl px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-bg-900 border-4 mt-2 focus:border-[#acf267] text-black'
              {...register('email')}
            />
          </div>
          <div className='flex flex-col mt-4'>
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              className='flex h-20 w-full rounded-xl px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-bg-900 border-4 mt-2 focus:border-[#acf267] text-black'
              {...register('message')}
            />
          </div>
          <button
            type='submit'
            className='text-sm mt-7 px-7 py-2 rounded-full bg-white text-black border border-white hover:bg-transparent hover:text-white transition-all duration-600'
          >
            Submit
          </button>
        </form>
        <SpotlightCard>
          <div>
            <span className='flex w-40 items-center mb-4 rounded-full bg-[#B5FF6D]/10 px-2 py-1 text-xs'>
              <Dot className='h-6 w-6 animate-ping rounded-full text-[#39D353] opacity-75' />
              <span className='pe-3'>Available for work</span>
            </span>
            <Image
              src={'/assets/profile.png'}
              alt='profile pic'
              width={110}
              height={110}
              className='rounded-full grayscale hover:grayscale-0 duration-150'
            />
            <p className='mt-5 text-sm'>My inbox is always open, Whether you have a project or just want to say Hi. I would love to hear from you. Feel free to contact me and I&apos;ll get back to you.</p>
            <SocialMedia className={'mt-5'} />
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default ContactPage;
