'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeaderSection from '@/components/atoms/HeaderSection';

const About = () => {
  const [showList, setShowList] = useState(false);

  return (
    <section className='mx-5'>
      <HeaderSection text='about' />

      <div className='space-y-8'>
        <p className='text-sm'>
          I was born in <u>Jakarta, Indonesia</u>. Being exposed to technology
          and sciences at an early age, this has always guided me on the path to
          learn something new and be curious of how things work.
          <span className='underline'>
            {' '}
            A Front End Developer who loves to create and learn new things.
          </span>
        </p>

        <AnimatePresence>
          {showList && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <ul className='list-disc space-y-4 ml-8 dot text-sm'>
                <li>
                  I spend my spare time building and developing free Apps and
                  Web Applications because I want to continue growing and honing
                  my skills.
                </li>
                <li>
                  I&#39;m always excited to collaborate with others and
                  contribute to different projects. If you have a project that
                  needs an extra set of hands or fresh ideas, feel free to reach
                  out to me!
                </li>
                <li>
                  If you come across anything interesting in my projects or have
                  a project you&#39;d like me to collaborate on, please
                  don&#39;t hesitate to get in touch. Let&#39;s create something
                  awesome together!
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className='w-full bg-transparent py-1 text-xs mt-2'
          onClick={() => setShowList(!showList)}
        >
          {showList ? 'See Less' : 'See More'}
        </button>
      </div>
    </section>
  );
};

export default About;
