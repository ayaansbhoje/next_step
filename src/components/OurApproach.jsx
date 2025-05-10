import React from 'react';

const OurApproach = () => {
  // Our approach steps data
  const approachSteps = [
    {
      id: 1,
      title: "Comprehensive Assessment",
      description: "We partner with you to discover your unique challenges, customize targeted solutions, implement strategic changes, measure tangible outcomes, and transform your organization's potential into lasting success.",
      image: "/api/placeholder/250/200" // Replace with your actual image path
    },
    {
      id: 2,
      title: "Customized Solution Design",
      description: "We partner with you to discover your unique challenges, customize targeted solutions, implement strategic changes, measure tangible outcomes, and transform your organization's potential into lasting success.",
      image: "/api/placeholder/250/200" // Replace with your actual image path
    },
    {
      id: 3,
      title: "Collaborative Implementation",
      description: "We partner with you to discover your unique challenges, customize targeted solutions, implement strategic changes, measure tangible outcomes, and transform your organization's potential into lasting success.",
      image: "/api/placeholder/250/200" // Replace with your actual image path
    },
    {
      id: 4,
      title: "Measurable Results Tracking",
      description: "Every initiative includes clear metrics for success. We establish key performance indicators and systematically track progress, making adjustments as needed to ensure you achieve maximum return on investment.",
      image: "/api/placeholder/250/200" // Replace with your actual image path
    },
    {
      id: 5,
      title: "Continuous Optimization",
      description: "Our relationship doesn't end with implementation. We provide ongoing support, refinement, and knowledge transfer to ensure lasting impact. As your organization evolves, our solutions evolve with you.",
      image: "/api/placeholder/250/200" // Replace with your actual image path
    }
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-8">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-center mb-4">OUR APPROACH</h2>
        
        {/* Introduction Text */}
        <p className="text-center text-[#DBB965] mb-16 max-w-2xl mx-auto">
          We partner with you to discover your unique challenges, customize targeted solutions, implement strategic changes, measure tangible outcomes, and transform your organization's potential into lasting success.
        </p>

        {/* Approach Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Line - Height adjusted to end at last bubble */}
          <div className="absolute left-1/2 top-10 w-0.5 bg-[#DBB965]" 
               style={{ 
                 transform: 'translateX(-50%)', 
                 height: 'calc(100% - 110px)' 
               }}>
          </div>
          
          {approachSteps.map((step, index) => (
            <div key={step.id} className="flex flex-row items-center mb-16 relative">
              {/* Left Side - Image */}
              <div className="w-5/12 pr-8 flex justify-end">
                <div className="w-64 h-48 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={`Step ${step.id}: ${step.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Middle - Timeline Ball - Aligned with header text */}
              <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: '1.65rem' }}>
                <div className="w-4 h-4 rounded-full bg-[#DBB965]"></div>
              </div>
              
              {/* Right Side - Content */}
              <div className="w-5/12 pl-36">
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-[#DBB965]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurApproach;