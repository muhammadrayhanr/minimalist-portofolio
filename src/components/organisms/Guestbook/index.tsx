'use client';
import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

const GuestBook = () => {
  const { theme } = useTheme();

  return (
    <section>
      <Giscus
        repo='muhammadrayhanr/minimalist-portofolio'
        repoId='R_kgDOOB1eyw'
        category='General'
        categoryId='DIC_kwDOOB1ey84Cnixv'
        mapping='pathname'
        strict='0'
        reactionsEnabled='1'
        emitMetadata='1'
        inputPosition='top'
        theme={theme === 'dark' ? 'dark' : 'light'}
        lang='en'
        loading='lazy'
      />
    </section>
  );
};

export default GuestBook;
