import React from 'react';

const MeetTheTeam = () => {
  return (
    <div style={{backgroundColor: '#DBB965'}} className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">MEET THE TEAM</h2>
        
        {/* Fixed grid layout with exactly two columns */}
        <div className="grid grid-cols-2 gap-16 max-w-3xl mx-auto">
          {/* First Team Member */}
          <div className="group relative">
            <div className="relative overflow-hidden rounded-lg w-full aspect-square">
              {/* First team member image */}
              <img 
                src="/api/placeholder/250/250" 
                alt="Shabnam Jussa Gaitonde"
                className="w-full h-full object-cover"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                <p className="text-white text-sm text-center">
                  With over 15 years of experience in talent management and organizational development, 
                  Shabnam has led HR transformations across multiple industries.
                </p>
              </div>
            </div>
            
            {/* Name and Position */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white">Shabnam Jussa Gaitonde</h3>
              <p className="text-white">Former Vice President</p>
              <p className="text-white">Human Resources</p>
            </div>
          </div>
          
          {/* Second Team Member */}
          <div className="group relative">
            <div className="relative overflow-hidden rounded-lg w-full aspect-square">
              {/* Second team member image */}
              <img 
                src="/api/placeholder/250/250" 
                alt="Chandrahas Shetty"
                className="w-full h-full object-cover"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                <p className="text-white text-sm text-center">
                  Chandrahas brings 20+ years of leadership experience in business development and HR strategy. 
                  He specializes in building strategic partnerships and implementing innovative HR solutions.
                </p>
              </div>
            </div>
            
            {/* Name and Position */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white">Chandrahas Shetty</h3>
              <p className="text-white">Former President</p>
              <p className="text-white">Human Resource and Business Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;