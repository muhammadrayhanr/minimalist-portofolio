'use client';
import Giscus from '@giscus/react';
import React from 'react';

const GuestBook = () => {
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
        theme='dark'
        lang='en'
        loading='lazy'
      />
    </section>
  );
};

export default GuestBook;
