import React from 'react';

const MissionWhyChooseUs = () => {
  return (
    <div className="bg-black text-white w-full py-16">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <div className="flex items-center gap-8 mb-20">
          <div className="w-1/2">
            <img 
              src="assets/img_1.jpg" 
              alt="Person working on laptop with notes" 
              className="w-full h-[400px] object-cover rounded-lg" 
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-4xl font-bold mb-6 uppercase tracking-wider">
              WHAT IS OUR MISSION?
            </h2>
            <p className="text-lg text-yellow-500">
              We exist to help organizations and leaders unlock human potential through innovative 
              HR solutions and transformative leadership training at every stage of their growth journey.
            </p>
          </div>
        </div>
        
        {/* Why Choose Us Section */}
        <div className="flex items-center gap-8">
          <div className="w-1/2">
            <h2 className="text-4xl font-bold mb-6 uppercase tracking-wider">
              WHY CHOOSE US?
            </h2>
            <p className="text-lg text-yellow-500">
              We combine deep HR expertise with innovative leadership development to deliver 
              personalized solutions that create measurable results and sustainable 
              organizational excellence, driving your business forward.
            </p>
          </div>
          <div className="w-1/2">
            <img 
              src="assets/img_2demo.jpg" 
              alt="Team collaboration in meeting" 
              className="w-full h-[400px] object-cover rounded-lg" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionWhyChooseUs;