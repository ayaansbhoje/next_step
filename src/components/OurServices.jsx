import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const OurServices = () => {
  const [activeService, setActiveService] = useState(null);
  const controls = useAnimation();
  const sectionRef = useRef(null);
  
  const services = [
    {
      id: 1,
      title: "Setting-up and enhancing existing HR Practices",
      description: "Establish a structured HR framework that ensures organizational consistency, drives compliance, and cultivates a high-performing workforce, enabling sustainable business growth.",
      position: "top-16 left-6"
    },
    {
      id: 2,
      title: "Advanced Performance Management Solutions",
      description: "Cultivate a High-Performance Organizational Culture Through Robust, Transparent Practices That Provide Strategic Guidance and Defined Pathways for Employees and Leaders",
      position: "top-16 right-0"
    },
    {
      id: 3,
      title: "Customised Solutions",
      description: "Tailored HR Solutions: Developing Comprehensive People Strategies Precisely Aligned with Your Unique Organizational Goals Across Talent Acquisition, Development, and Management Ecosystems",
      position: "top-88 left-1/5"
    },
    {
      id: 4,
      title: "Executive Coaching",
      description: "Provide structured coaching solutions for professionals at mid and senior levels—to enhance leadership effectiveness, accelerate performance and unlock potential. Our outcome-driven approach aligns individual development with organizational goals, enabling professionals to lead with clarity, confidence, and impact.",
      position: "top-88 right-1/5"
    }
  ];
  
  const handleMouseEnter = (id) => {
    setActiveService(id);
  };
  
  const handleMouseLeave = () => {
    setActiveService(null);
  };
  
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
    <section ref={sectionRef} className="bg-black text-white py-16 relative w-full overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          What we provide
        </motion.h2>
        
        <div className="relative h-[650px]">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`absolute ${service.position} transition-all duration-300`}
              onMouseEnter={() => handleMouseEnter(service.id)}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    delay: 0.3 + (index * 0.2),
                    duration: 0.6 
                  }
                }
              }}
            >
              <div
                className={`w-64 h-64 md:w-80 md:h-80 rounded-full flex flex-col items-center justify-center p-6 transition-all duration-300 cursor-pointer ${
                  activeService === service.id
                    ? 'bg-transparent border-4 border-yellow-500 text-white scale-110'
                    : 'bg-yellow-500 text-black'
                }`}
              >
                <h3 className="text-center font-bold text-lg md:text-xl mb-3">{service.title}</h3>
                
                {activeService === service.id && (
                  <p className="text-center text-xs md:text-sm opacity-100 transition-opacity duration-300 ease-in">
                    {service.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;