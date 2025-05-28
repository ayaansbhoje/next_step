import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const OurServices = () => {
  const [activeService, setActiveService] = useState(null);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Customised Solutions",
      description: "Tailored HR Solutions: Developing Comprehensive People Strategies Precisely Aligned with Your Unique Organizational Goals Across Talent Acquisition, Development, and Management Ecosystems",
      position: "top-[-6px] left-1/6 transform -translate-x-1/2"
    },
    {
      id: 2,
      title: "Leadership Development",
      description: "We design and deliver leadership development solutions that empower individuals and teams to lead with clarity, confidence, and purpose. Our programs focus on enhancing self-awareness, building core leadership competencies.",
      position: "top-[-6px] left-1/2 transform -translate-x-1/2"
    },
    {
      id: 3,
      title: "Executive Coaching",
      description: "Provide structured coaching solutions for professionals at mid and senior levels—to enhance leadership effectiveness, accelerate performance and unlock potential. Our outcome-driven approach aligns individual development with organizational goals, enabling professionals to lead with clarity, confidence, and impact.",
      position: "top-[-6px] right-1/6 transform translate-x-1/2"
    },
    {
      id: 4,
      title: "Setting-up and enhancing existing HR Practices",
      description: "Establish a structured HR framework that ensures organizational consistency, drives compliance, and cultivates a high-performing workforce, enabling sustainable business growth.",
      position: "top-[400px] left-1/6 transform -translate-x-1/2"
    },
    {
      id: 5,
      title: "Revamping Performance Management Systems",
      description: "Drive a high-performance culture by designing and implementing robust, transparent performance management practices. Our approach ensures clarity in expectations, aligns individual goals with organizational objectives, and provides a structured pathway for continuous feedback, growth, and accountability—for both employees and leaders.",
      position: "top-[400px] left-1/2 transform -translate-x-1/2"
    },
    {
      id: 6,
      title: "Unique Programs for Educational Institutes",
      description: "We collaborate closely with educational institutions to design and deliver customized programs that align with their specific goals. Each program is co-created by actively involving with faculty, ensuring relevance, continuity and lasting impact on students' development.",
      position: "top-[400px] right-1/6 transform translate-x-1/2"
    }
  ];

  const handleMouseEnter = (id) => setActiveService(id);
  const handleMouseLeave = () => setActiveService(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [controls]);

  return (
    <section ref={sectionRef} className="bg-black text-white py-10 relative w-full overflow-hidden">
      <div className="container mx-auto px-2 sm:px-6">
        <motion.h2 
          className="text-2xl sm:text-2xl md:text-5xl font-bold mb-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          What We Provide
        </motion.h2>

        <div className="relative lg:h-[750px] flex flex-wrap justify-center gap-6 lg:block">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`
                transition-all duration-300
                ${service.position}
                lg:absolute
              `}
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
                    delay: 0.3 + index * 0.2,
                    duration: 0.6,
                  },
                },
              }}
            >
              <div
                className={`w-76 h-76 sm:w-56 sm:h-56 md:w-92 md:h-92 rounded-full flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 transition-all duration-300 cursor-pointer ${
                  activeService === service.id
                    ? 'bg-transparent border-4 border-[#DBB965] text-white scale-105 sm:scale-110'
                    : 'text-black'
                }`}
                style={{ 
                  background: activeService === service.id 
                    ? 'transparent' 
                    : 'linear-gradient(to bottom right, #DBB965 0%, #756336 100%)'
                }}
              >
                <h3 className="text-center font-bold text-sm sm:text-base md:text-xl mb-2 sm:mb-3">
                  {service.title}
                </h3>

                {activeService === service.id && (
                  <p className="text-center text-xs sm:text-sm md:text-sm opacity-100 transition-opacity duration-300 ease-in">
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