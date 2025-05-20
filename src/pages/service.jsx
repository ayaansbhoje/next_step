
import React from 'react';
import Navbar from '../components/navbar'; // Import your existing Navbar component
import Footer from '../components/Footer'; // Import your existing Footer component
import ServicesHero from '../components/ServicesHero'; // Import the hero component we created
import HRServices from '../components/HRServices';
import Leadership from '../components/Leadership';
import InstituteSlider from '../components/InstituteSlider'

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar at the top */}
      <Navbar />
      
      {/* Hero section takes up most of the viewport */}
      <ServicesHero />

      <HRServices />


      <InstituteSlider />
      
      

     
      
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default ServicesPage;