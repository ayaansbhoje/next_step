import React from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import LeadershipPrograms from './components/LeadershipPrograms';
import ReviewSection from './components/ReviewSection';
import Footer from './components/Footer'; // Add this import
import AnimatedBackground from './components/AnimatedBackground';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* AnimatedBackground with -z-10 will place it behind all content */}
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <AboutUs />
      <OurServices />
      <LeadershipPrograms />
      
      <Footer /> {/* Add the Footer component here */}
      <div className="content">
        {/* Additional content can go here */}
      </div>
    </div>
  );
}

export default App;