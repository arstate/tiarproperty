import React, { useEffect } from 'react';
import { Hero } from './Hero';
import { AboutUs } from './AboutUs';
import { BentoGrid } from './BentoGrid';
import { PropertyShowcase } from './PropertyShowcase';
import { ValueProps } from './ValueProps';
import { SocialProof } from './SocialProof';
import { DeveloperLogoSlider } from './DeveloperLogoSlider';

export const LandingPage: React.FC = () => {
  // Handle scroll to section on mount if hash exists (e.g. coming from Search Page)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
        window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="relative z-10">
      <Hero />
      <SocialProof />
      <DeveloperLogoSlider />
      <BentoGrid />
      <PropertyShowcase />
      <AboutUs />
      <ValueProps />
    </main>
  );
};