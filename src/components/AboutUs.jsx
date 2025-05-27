import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { fadeIn } from '../variant';

const AboutUs = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  // Custom line drawing animation variant
  const drawLine = (delay) => ({
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: {
        delay: delay,
        duration: 1,
        ease: "easeInOut"
      }
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        } else {
          setIsVisible(false);
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
    <div ref={sectionRef} className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* First section - Our Story with yellow line below */}
        <div className="mb-6 sm:mb-8 md:mb-12">
          <div className="flex flex-col items-start">
            {/* Our Story heading */}
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 text-black"
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.8 } }
              }}
            >
              Our Story
            </motion.h2>
            
            {/* Vertical yellow line below heading */}
            <div className="relative h-24 sm:h-32 mb-2 sm:mb-3">
              <motion.div 
                className="absolute left-0 top-0 w-1 bg-yellow-400"
                initial="hidden"
                animate={controls}
                variants={drawLine(0.8)}
                style={{ originY: 0 }}
              />
              <motion.div 
                className="absolute left-0 top-0 w-3 h-3 rounded-full bg-yellow-400 -translate-x-1"
                initial={{ opacity: 0 }}
                animate={controls}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.8 } }
                }}
              />
              <motion.div 
                className="absolute left-0 bottom-0 w-3 h-3 rounded-full bg-yellow-400 -translate-x-1"
                initial={{ opacity: 0 }}
                animate={controls}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 1.8 } }
                }}
              />
            </div>
          </div>
          
          {/* Text below the yellow line */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-yellow-600 w-full"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 1.9 } }
            }}
          >
            At The Next Step (TNS), we are more than an HR consulting firm – we are strategic partners
            dedicated to transforming organizations through human-centric solutions.
          </motion.p>
        </div>
        
        {/* Second section - Black line on right side */}
        <div className="mb-6 sm:mb-8 md:mb-12 flex flex-col items-end">
          {/* Vertical black line on right */}
          <div className="relative h-24 sm:h-32 mb-2 sm:mb-3">
            <motion.div 
              className="absolute right-0 top-0 w-1 bg-black"
              initial="hidden"
              animate={controls}
              variants={drawLine(2.7)}
              style={{ originY: 0 }}
            />
            <motion.div 
              className="absolute right-0 top-0 w-3 h-3 rounded-full bg-black translate-x-1"
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 2.7 } }
              }}
            />
            <motion.div 
              className="absolute right-0 bottom-0 w-3 h-3 rounded-full bg-black translate-x-1"
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 3.7 } }
              }}
            />
          </div>
          
          {/* Text below the black line, right-aligned */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-black w-full text-right"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 3.8 } }
            }}
          >
            We practice a values-based approach, striving to 
            deliver meaningful impact at every step of our 
            engagement.
          </motion.p>
        </div>
        
        {/* Third section - Yellow line in center */}
        <div className="flex flex-col items-center">
          {/* Vertical yellow line in center */}
          <div className="relative h-24 sm:h-32 mb-2 sm:mb-3">
            <motion.div 
              className="absolute left-1/2 top-0 w-1 bg-yellow-400 -translate-x-1/2"
              initial="hidden"
              animate={controls}
              variants={drawLine(4.6)}
              style={{ originY: 0 }}
            />
            <motion.div 
              className="absolute left-1/2 top-0 w-3 h-3 rounded-full bg-yellow-400 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 4.6 } }
              }}
            />
            <motion.div 
              className="absolute left-1/2 bottom-0 w-3 h-3 rounded-full bg-yellow-400 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 5.6 } }
              }}
            />
          </div>
          
          {/* Text below the center yellow line */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-yellow-600 w-full text-center"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 5.7 } }
            }}
          >
            Our mission is to partner with organizations and individuals to enhance leadership, build strong HR
            foundations, and drive sustainable performance through focused coaching, capability building, and
            strategic interventions.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;