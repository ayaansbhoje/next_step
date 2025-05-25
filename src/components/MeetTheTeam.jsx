import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MeetTheTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div ref={ref} style={{background: "linear-gradient(to bottom right, #DBB965 0%, #756336 100%)"}} className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          OUR LEADERS
        </motion.h2>
        
        {/* Fixed grid layout with exactly two columns */}
        <div className="grid grid-cols-2 gap-12 max-w-3xl mx-auto">
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
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
                <p className="text-white text-xs text-center font-medium">
                With over 30 years of experience in Human Resources, she has led people strategies for mid and large sized organizations across diverse sectors including ITES, Pharmaceuticals, Chemicals, and Consulting. A certified coach from Erickson Coaching and an alumnus of IIM Calcutta, she brings deep expertise in aligning HR with business goals. Her strengths lie in leading organizational change, building leadership pipelines, and transforming workplace culture. She has conceptualized and implemented impactful talent development, performance management, and diversity & inclusion programs, while also driving succession planning and engagement strategies.Having held senior HR leadership positions, including CHRO roles, she is known for her practical, people-centric approach and her ability to coach individuals and teams to achieve measurable results. Her work spans multicultural environments across geographies — steering organizations through structural changes and right-sizing initiatives.
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
              <p className="text-white">Founder Partner </p>
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
                src="/assets/cs_pic.jpg" 
                alt="Chandrahas Shetty"
                className="w-full h-full object-cover"
              />
              
              {/* Hover overlay with lighter black background */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
                <p className="text-white text-xs text-center font-medium">
                  With over four decades of diverse experience in Human Resources and Business Support, including 17 years as President of HR and Business Support of a large pharmaceuticals company, he brings a rare blend of strategic insight and hands-on leadership. A certified coach and transformation consultant, he has led large-scale organizational change initiatives, implemented digital systems, and played a pivotal role in aligning HR with core business operations. His academic credentials include a Master's in Personnel Management, advanced HR studies from the University of Mumbai and TISS, and a leadership program from XLRI. Known for his future-focused mindset, he has consistently introduced innovative strategies, built leadership pipelines and improved employee engagement through structured interventions. His experience spans multiple sectors and he has supported pan-India operations with a strong emphasis on talent development, union negotiations, succession planning, and performance benchmarking.
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