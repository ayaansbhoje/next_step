import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function LeadershipPrograms() {
  // State to track which program is currently being hovered
  const [hoveredProgram, setHoveredProgram] = useState(null);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  // Program data
  const programs = [
    {
      id: 'legacy',
      title: 'Legacy Leadership',
      description: 'Augment leadership skills of senior subject matter experts into well-rounded, visionary leaders who can propel the organization towards enduring success and a meaningful impact for the future.',
      image: '/api/placeholder/500/300'
    },
    {
      id: 'momentum',
      title: 'Leadership Momentum',
      description: 'Develop mid-level managers’ strategic, operational, and people-leadership skills, equipping them to drive impactful business results and foster a high-performance culture within their teams.',
      image: '/api/placeholder/500/300'
    },
    {
      id: 'launchpad',
      title: 'Manager Launchpad',
      description: 'Equip new managers with the foundational skills, knowledge, and mindset needed to successfully transition from individual contributors to effective leaders.',
      image: '/api/placeholder/500/300'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <div ref={sectionRef} className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          Leadership Development Programs
        </motion.h2>
        
        <div className="space-y-8">
          {programs.map((program, index) => (
            <motion.div 
              key={program.id}
              className={`border-2 ${hoveredProgram === program.id ? 'border-white' : 'border-gray-300'} rounded-lg transition-all duration-300 overflow-hidden min-h-[120px]`}
              onMouseEnter={() => setHoveredProgram(program.id)}
              onMouseLeave={() => setHoveredProgram(null)}
              initial={{ opacity: 0, x: -50 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    delay: 0.3 + (index * 0.2),
                    duration: 0.6 
                  }
                }
              }}
            >
              {hoveredProgram === program.id ? (
                <div className="flex flex-col md:flex-row">
                  <div className="p-10 md:w-1/2">
                    <h3 className="text-3xl font-bold text-white mb-6">{program.title}</h3>
                    <p className="text-lg text-white">{program.description}</p>
                  </div>
                  <div className="md:w-1/2">
                    <img 
                      src={program.image} 
                      alt={`${program.title} illustration`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ) : (
                <div className="p-10">
                  <h3 className="text-3xl font-bold text-gray-300">{program.title}</h3>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}