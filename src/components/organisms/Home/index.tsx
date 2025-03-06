import Divider from '@/components/atoms/Divider';
import About from '@/components/molecules/Home/About';
import Contact from '@/components/molecules/Home/Contact';
import Hero from '@/components/molecules/Home/Hero';
import Projects from '@/components/molecules/Home/Projects';

const Home = () => {
  return (
    <>
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
    </>
  );
};

export default Home;
