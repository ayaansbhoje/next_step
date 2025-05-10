import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutUsHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div ref={ref} className="relative w-full h-screen">
      {/* Main container with flex layout */}
      <div className="flex h-full w-full">
        {/* Left 2/3 - Image section */}
        <motion.div 
          className="w-2/3 h-full relative"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img 
            src="assets/banner_1.jpg" 
            alt="Modern office interior with bridge walkway" 
            className="w-full h-full object-cover"
          />
          {/* Overlay text for "ABOUT US" */}
          <motion.div 
            className="absolute bottom-0 left-0 p-10"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <h1 className="text-white text-8xl font-bold tracking-wider">
              ABOUT US
            </h1>
          </motion.div>
        </motion.div>
        
        {/* Right 1/3 - Gradient section with quote */}
        <motion.div 
          className="w-1/3 h-full bg-gradient-to-r from-[#DBB965] from-0% to-[#564827] to-78% flex items-center justify-center p-10"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <h2 className="text-white text-5xl font-bold leading-tight">
              "Bridging The Gap Between Human Talent And Business Success."
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsHero;