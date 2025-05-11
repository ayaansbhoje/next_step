import React from 'react';

const ServicesHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image tag instead of background image */}
      <img 
        src="/assets/service_1.jpg" 
        alt="People having a consultation in a bright office space"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Yellow Overlay with reduced opacity */}
      <div className="absolute inset-0 bg-yellow-600/30" />
      
      {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-6xl font-bold tracking-widest">
          OUR SERVICES
        </h1>
      </div>
    </div>
  );
};

export default ServicesHero;