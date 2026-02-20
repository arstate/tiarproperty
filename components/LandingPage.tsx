import React, { useEffect } from 'react';
import { Hero } from './Hero';
import { AboutUs } from './AboutUs';
import { BentoGrid } from './BentoGrid';
import { PropertyShowcase } from './PropertyShowcase';
import { ValueProps } from './ValueProps';
import { SocialProof } from './SocialProof';
import { DeveloperLogoSlider } from './DeveloperLogoSlider';

export const LandingPage: React.FC<{ currentHash?: string }> = ({ currentHash }) => {
  // Handle scroll to section on mount or when hash changes
  useEffect(() => {
    const hash = currentHash || window.location.hash;
    if (hash && hash !== '#') {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else if (!hash || hash === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentHash]);

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