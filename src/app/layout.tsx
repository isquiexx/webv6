import React from 'react';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: {
    default: 'Celestia Astronomy Platform',
    template: 'Celestia Astronomy Platform | %s',
  },
  description: 'Discover the wonders of the universe with Celestia - your gateway to star observation, astronomy education, online lectures, and space exploration for families and enthusiasts.',
  keywords: 'astronomy, star observation, space exploration, online lectures, astronomy education, night sky, celestial events, family astronomy',
  
  openGraph: {
    type: 'website',
    title: {
      default: 'Celestia Astronomy Platform',
      template: 'Celestia Astronomy Platform | %s',
    },
    description: 'Explore the cosmos with Celestia - offering star observation services, educational programs, and astronomy events for all ages with special family discounts.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}<script type="module" src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Falekseyma1809back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.8"></script>
</body>
    </html>
  );
}