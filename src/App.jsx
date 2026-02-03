import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import UpcomingDestinations from './components/UpcomingDestinations';
import Services from './components/Services';
import Speciality from './components/Speciality';
import FeaturedTrip from './components/FeaturedTrip';
import TripCategory from './components/TripCategory';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-surface-page">
      <Header />
      <main>
        <HeroSection />
        <UpcomingDestinations />
        <Services />
        <Speciality />
        <FeaturedTrip />
        <TripCategory />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
