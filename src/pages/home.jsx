import React from 'react';
import Navbar from '../components/navbar';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import OurServices from '../components/OurServices';
import LeadershipPrograms from '../components/LeadershipPrograms';
import ReviewSection from '../components/ReviewSection';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import '../App.css';

function Home() {
  return (
    <div className="app">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <AboutUs />
      <OurServices />
      <LeadershipPrograms />
      <ReviewSection />
      <Footer />
      <div className="content">
        {/* Additional content can go here */}
      </div>
    </div>
  );
}

export default Home;






