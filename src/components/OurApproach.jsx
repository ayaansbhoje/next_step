import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const OurApproach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Our approach steps data
  const approachSteps = [
    {
      id: 1,
      title: "Comprehensive Assessment",
      description: "We partner with you to discover your unique challenges, customize targeted solutions, implement strategic changes, measure tangible outcomes, and transform your organization's potential into lasting success.",
      image: "/assets/comp_assesment.jpg" // Replace with your actual image path
    },
    {
      id: 2,
      title: "Customized Solution Design",
      description: "We partner with you to discover your unique challenges, customize targeted solutions, implement strategic changes, measure tangible outcomes, and transform your organization's potential into lasting success.",
      image: "/assets/cus_sol.jpeg" // Replace with your actual image path
    },
    {
      id: 3,
      title: "Collaborative Implementation",
      description: "We partner with you to discover your unique challenges, customize targeted solutions, implement strategic changes, measure tangible outcomes, and transform your organization's potential into lasting success.",
      image: "/assets/collab_imp.jpeg" // Replace with your actual image path
    },
    {
      id: 4,
      title: "Measurable Results Tracking",
      description: "Every initiative includes clear metrics for success. We establish key performance indicators and systematically track progress, making adjustments as needed to ensure you achieve maximum return on investment.",
      image: "/assets/result_track.jpg" // Replace with your actual image path
    },
    {
      id: 5,
      title: "Continuous Optimization",
      description: "Our relationship doesn't end with implementation. We provide ongoing support, refinement, and knowledge transfer to ensure lasting impact. As your organization evolves, our solutions evolve with you.",
      image: "/assets/cont_opt.jpg" // Replace with your actual image path
    }
  ];

  return (
    <div ref={ref} className="bg-black text-white py-16">
      <div className="container mx-auto px-8">
        {/* Section Title */}
        <motion.h2 
          className="text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          OUR APPROACH
        </motion.h2>
        
        {/* Introduction Text */}
        <motion.p 
          className="text-center text-[#DBB965] mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          We partner with you to discover your unique challenges, customize targeted solutions, implement strategic changes, measure tangible outcomes, and transform your organization's potential into lasting success.
        </motion.p>

        {/* Approach Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Line - Height adjusted to end at last bubble */}
          <motion.div 
            className="absolute left-1/2 top-10 w-0.5 bg-[#DBB965]" 
            style={{ transform: 'translateX(-50%)', height: 'calc(100% - 110px)' }}
            initial={{ height: 0 }}
            animate={isInView ? { height: 'calc(100% - 110px)' } : { height: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          />
          
          {approachSteps.map((step, index) => (
            <motion.div 
              key={step.id} 
              className="flex flex-row items-center mb-16 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.6 + (index * 0.2), ease: "easeOut" }}
            >
              {/* Left Side - Image */}
              <motion.div 
                className="w-5/12 pr-8 flex justify-end"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.8 + (index * 0.2), ease: "easeOut" }}
              >
                <div className="w-64 h-48 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={`Step ${step.id}: ${step.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Middle - Timeline Ball - Aligned with header text */}
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2" 
                style={{ top: '1.65rem' }}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 1 + (index * 0.2), ease: "easeOut" }}
              >
                <div className="w-4 h-4 rounded-full bg-[#DBB965]"></div>
              </motion.div>
              
              {/* Right Side - Content */}
              <motion.div 
                className="w-5/12 pl-36"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 1.2 + (index * 0.2), ease: "easeOut" }}
              >
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-[#DBB965]">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurApproach;