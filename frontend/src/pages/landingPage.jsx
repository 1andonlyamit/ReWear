import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import FeaturedItemsCarousel from '../components/landing/FeaturedItemsCarousel';
import ImpactMetrics from '../components/landing/ImpactMetrics';
import TestimonialsSection from '../components/landing/TestimonialsSection';

// Main Landing Page Component
export default function ReWearLanding() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeroSection />
      <FeaturedItemsCarousel />
      <ImpactMetrics />
      <TestimonialsSection />
    </div>
  );
}