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
                src="assets/shabnam_img1.jpg"
                alt="Shabnam Jussa Gaitonde"
                className="w-full h-full object-cover"
              />
              
              {/* Hover overlay with lighter black background */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-6">
                <p className="text-white text-sm text-center font-medium">
                With 30+ years in HR leadership across ITES, Pharmaceuticals, Chemicals, and Consulting, she brings strategic expertise as a certified Erickson coach and IIM Calcutta EPHRM alumnus. Her core strengths include organizational change management, leadership development, and cultural transformation. She has successfully implemented talent development programs, performance systems, and diversity initiatives while driving succession planning and engagement. As a former CHRO with multicultural experience across India, US, France, Algeria, and China, she combines practical, people-centric approaches with measurable business results—effectively guiding organizations through structural changes and workforce optimization.
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
              <p className="text-white">Founder Partnerer </p>
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
                src="/assets/partner_2.jpeg" 
                alt="Chandrahas Shetty"
                className="w-full h-full object-cover"
              />
              
              {/* Hover overlay with lighter black background */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-6">
                <p className="text-white text-sm text-center font-medium">
                  40+ years in HR and Business Support, with 17 years as President at a major pharmaceutical company. Certified coach and transformation consultant specializing in organizational change and HR-business alignment.Holds a Master's in Personnel Management with advanced studies from Mumbai University, TISS, and XLRI.Known for forward-thinking leadership across healthcare and manufacturing sectors, with expertise in talent development, labor relations, succession planning, and performance management throughout pan-India operations.
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
              <p className="text-white">Strategic Partner </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;