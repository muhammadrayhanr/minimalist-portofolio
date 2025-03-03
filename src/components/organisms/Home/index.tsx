import Divider from '@/components/atoms/Divider';
import About from '@/components/molecules/Home/About';
import Hero from '@/components/molecules/Home/Hero';
import Projects from '@/components/molecules/Home/Projects';
import React from 'react';

const Home = () => {
  return (
    <>
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Projects />
    </>
  );
};

export default Home;
