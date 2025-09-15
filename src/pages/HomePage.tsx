import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { CultureSection } from '../components/CultureSection';
import { JobsSection } from '../components/JobsSection';
import { ContactSection } from '../components/ContactSection';
export const HomePage = () => {
  return <div className="w-full">
      <HeroSection />
      <CultureSection />
      <JobsSection />
      <ContactSection />
    </div>;
};