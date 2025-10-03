import { Metadata } from 'next';
import HomePage from './HomePage';

export const metadata: Metadata = {
  title: 'Celestia Astronomy Platform - Discover the Wonders of the Universe',
  description:
    'Explore the cosmos with Celestia - offering star observation services, educational programs for couples and children, online lectures, astronomy events, and special family discounts. Discover celestial secrets through night sky observations.',
  keywords:
    'astronomy, star observation, space exploration, online lectures, astronomy education, night sky, celestial events, family astronomy, couples programs, children astronomy, pensioner discounts, planetarium, universe exploration',

  openGraph: {
    title: 'Celestia Astronomy Platform - Discover the Wonders of the Universe',
    description:
      'Explore the cosmos with Celestia - offering star observation services, educational programs for couples and children, online lectures, astronomy events, and special family discounts.',
  },
};

export default function Page() {
  return <HomePage />;
}
