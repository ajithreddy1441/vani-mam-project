
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import AppointmentBooking from '@/components/AppointmentBooking';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <AppointmentBooking />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
