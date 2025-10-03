'use client';
import Header from '@/components/common/Header';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import EventsSection from './EventsSection';
import ContactSection from './ContactSection';

export default function HomePage() {
  return (
    <div className="w-full bg-background-primary">
      <div className="w-full max-w-[1406px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto">
          <Header />
        </div>

        <main>
          <HeroSection />
          <ServicesSection />
          <EventsSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
