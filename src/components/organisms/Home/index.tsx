import Divider from '@/components/atoms/Divider';
import About from '@/components/molecules/Home/About';
import Hero from '@/components/molecules/Home/Hero';
import React from 'react';

const Home = () => {
  return (
    <>
      <Hero />
      <Divider />
      <About />
    </>
  );
};

export default Home;
