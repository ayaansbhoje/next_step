import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MeetTheTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div ref={ref} style={{backgroundColor: '#DBB965'}} className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          MEET THE TEAM
        </motion.h2>
        
        {/* Fixed grid layout with exactly two columns */}
        <div className="grid grid-cols-2 gap-16 max-w-3xl mx-auto">
          {/* First Team Member */}
          <motion.div 
            className="group relative"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-lg w-full aspect-square">
              {/* First team member image */}
              <img 
                src="assets/partner_1.jpeg" 
                alt="Shabnam Jussa Gaitonde"
                className="w-full h-full object-cover"
              />
              
              {/* Hover overlay with lighter black background */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-6">
                <p className="text-white text-sm text-center font-medium">
                Shabnam Jussa Gaitonde is an accomplished Human Resources executive with over 30 years of industry experience. As a former Vice President of Human Resources, she has demonstrated exceptional leadership in managing HR functions for organizations with up to 6000+ employees across diverse sectors including IT, Pharmaceuticals, Chemicals, and Consulting.
                </p>
              </div>
            </div>
            
            {/* Name and Position */}
            <motion.div 
              className="mt-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <h3 className="text-xl font-bold text-white">Shabnam Jussa Gaitonde</h3>
              <p className="text-white">Founder Partner</p>
              <p className="text-white">Human Resources</p>
            </motion.div>
          </motion.div>
          
          {/* Second Team Member */}
          <motion.div 
            className="group relative"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-lg w-full aspect-square">
              {/* Second team member image */}
              <img 
                src="/api/placeholder/250/250" 
                alt="Chandrahas Shetty"
                className="w-full h-full object-cover"
              />
              
              {/* Hover overlay with lighter black background */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-6">
                <p className="text-white text-sm text-center font-medium">
                Chandrahas Shetty is a seasoned Human Resources and Business Development executive with over 40 years of industry experience. As a former President in HR and Business Development, he has provided leadership across diverse sectors including pharmaceuticals, gastroenterology, dermatology, and ophthalmology divisions
                </p>
              </div>
            </div>
            
            {/* Name and Position */}
            <motion.div 
              className="mt-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <h3 className="text-xl font-bold text-white">Chandrahas Shetty</h3>
              <p className="text-white">Former President</p>
              <p className="text-white">Human Resource and Business Development</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;