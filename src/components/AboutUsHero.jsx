import React from 'react';

const AboutUsHero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Main container with flex layout */}
      <div className="flex h-full w-full">
        {/* Left 2/3 - Image section */}
        <div className="w-2/3 h-full relative">
          <img 
            src="assets/banner_1.jpg" 
            alt="Modern office interior with bridge walkway" 
            className="w-full h-full object-cover"
          />
          {/* Overlay text for "ABOUT US" */}
          <div className="absolute bottom-0 left-0 p-10">
            <h1 className="text-white text-8xl font-bold tracking-wider">
              ABOUT US
            </h1>
          </div>
        </div>
        
        {/* Right 1/3 - Gradient section with quote */}
        <div className="w-1/3 h-full bg-gradient-to-r from-[#DBB965] from-0% to-[#564827] to-78% flex items-center justify-center p-10">
          <div>
            <h2 className="text-white text-5xl font-bold leading-tight">
              "Bridging The Gap Between Human Talent And Business Success."
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;