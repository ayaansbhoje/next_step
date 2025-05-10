import React from 'react';
import Navbar from '../components/navbar'; // Adjust the import path as needed
import AboutUsHero from '../components/AboutUsHero'; // Adjust the import path as needed
import MissionWhyChooseUs from '../components/MissionWhyChooseUs'; // Adjust the import path as needed
import MeetTheTeam from '../components/MeetTheTeam'; // Meet The Team component
import OurApproach from '../components/OurApproach'; // Our Approach component

const AboutUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AboutUsHero />
      <MissionWhyChooseUs />
      <MeetTheTeam />
      <OurApproach /> {/* Added the Our Approach component */}
      
      {/* You can add more content sections below if needed */}
    </div>
  );
};

export default AboutUsPage;