import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import ProfessionalSummary from '../components/ProfessionalSummary';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import ResumeDownload from '../components/ResumeDownload';
import Partners from '../components/Partners';
import Contact from '../components/Contact';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Handle hash navigation when component mounts or location changes
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Hero scrollY={scrollY} />
      <ProfessionalSummary />
      <Experience />
      <Skills />
      <Education />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      {/* <ResumeDownload /> */}
      {/* <Partners /> */}
      <Contact />
    </>
  );
}
