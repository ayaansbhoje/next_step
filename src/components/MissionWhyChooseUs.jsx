import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MissionWhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div ref={ref} className="bg-black text-white w-full py-16">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <motion.div 
          className="flex items-center gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <img 
              src="assets/img_1.jpg" 
              alt="Person working on laptop with notes" 
              className="w-full h-[400px] object-cover rounded-lg" 
            />
          </motion.div>
          <motion.div 
            className="w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold mb-6 uppercase tracking-wider">
              WHAT IS OUR MISSION?
            </h2>
            <p className="text-lg text-yellow-500">
              We exist to help organizations and leaders unlock human potential through innovative 
              HR solutions and transformative leadership training at every stage of their growth journey.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Why Choose Us Section */}
        <motion.div 
          className="flex items-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <motion.div 
            className="w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold mb-6 uppercase tracking-wider">
              WHY CHOOSE US?
            </h2>
            <p className="text-lg text-yellow-500">
              We combine deep HR expertise with innovative leadership development to deliver 
              personalized solutions that create measurable results and sustainable 
              organizational excellence, driving your business forward.
            </p>
          </motion.div>
          <motion.div 
            className="w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          >
            <img 
              src="assets/img_2demo.jpg" 
              alt="Team collaboration in meeting" 
              className="w-full h-[400px] object-cover rounded-lg" 
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionWhyChooseUs;