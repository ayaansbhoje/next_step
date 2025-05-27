import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MeetTheTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const teamMembers = [
    {
      id: 1,
      name: "Shabnam Jussa Gaitonde",
      position: "Founder Partner",
      image: "assets/shabnam_img1.jpg",
      description: "With over 30 years of experience in Human Resources, she has led people strategies for mid and large sized organizations across diverse sectors including ITES, Pharmaceuticals, Chemicals, and Consulting. A certified coach from Erickson Coaching and an alumnus of IIM Calcutta, she brings deep expertise in aligning HR with business goals. Her strengths lie in leading organizational change, building leadership pipelines, and transforming workplace culture. She has conceptualized and implemented impactful talent development, performance management, and diversity & inclusion programs, while also driving succession planning and engagement strategies. Having held senior HR leadership positions, including CHRO roles, she is known for her practical, people-centric approach and her ability to coach individuals and teams to achieve measurable results. Her work spans multicultural environments across geographies — steering organizations through structural changes and right-sizing initiatives."
    },
    {
      id: 2,
      name: "Chandrahas Shetty",
      position: "Strategic Partner",
      image: "/assets/part_2.jpg",
      description: "With over four decades of diverse experience in Human Resources and Business Support, including 17 years as President of HR and Business Support of a large pharmaceuticals company, he brings a rare blend of strategic insight and hands-on leadership. A certified coach and transformation consultant, he has led large-scale organizational change initiatives, implemented digital systems, and played a pivotal role in aligning HR with core business operations. His academic credentials include a Master's in Personnel Management, advanced HR studies from the University of Mumbai and TISS, and a leadership program from XLRI. Known for his future-focused mindset, he has consistently introduced innovative strategies, built leadership pipelines and improved employee engagement through structured interventions. His experience spans multiple sectors and he has supported pan-India operations with a strong emphasis on talent development, union negotiations, succession planning, and performance benchmarking."
    }
  ];

  return (
    <div ref={ref} style={{background: "linear-gradient(to bottom right, #DBB965 0%, #756336 100%)"}} className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          OUR LEADERS
        </motion.h2>
        
        <div className="space-y-20">
          {/* First Team Member - Image Left, Content Right */}
          <motion.div 
            className="flex items-center gap-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
          >
            {/* Image Section */}
            <motion.div 
              className="w-80 flex-shrink-0"
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden rounded-lg w-80 h-80 shadow-2xl">
                <img 
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
            
            {/* Content Section */}
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.h3 
                className="text-3xl font-bold text-white mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                {teamMembers[0].name}
              </motion.h3>
              
              <motion.p 
                className="text-xl text-white/90 mb-6 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              >
                {teamMembers[0].position}
              </motion.p>
              
              <motion.p 
                className="text-white/85 leading-relaxed text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                {teamMembers[0].description}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Second Team Member - Content Left, Image Right */}
          <motion.div 
            className="flex items-center gap-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* Content Section */}
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            >
              <motion.h3 
                className="text-3xl font-bold text-white mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
              >
                {teamMembers[1].name}
              </motion.h3>
              
              <motion.p 
                className="text-xl text-white/90 mb-6 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
              >
                {teamMembers[1].position}
              </motion.p>
              
              <motion.p 
                className="text-white/85 leading-relaxed text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
              >
                {teamMembers[1].description}
              </motion.p>
            </motion.div>

            {/* Image Section */}
            <motion.div 
              className="w-80 flex-shrink-0"
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden rounded-lg w-80 h-80 shadow-2xl">
                <img 
                  src={teamMembers[1].image}
                  alt={teamMembers[1].name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;