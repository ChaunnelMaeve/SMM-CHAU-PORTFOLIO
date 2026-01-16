import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import Contact from '../components/Contact';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Hero scrollY={scrollY} />
      <Services />
      <Partners />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}
