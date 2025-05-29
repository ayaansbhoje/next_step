import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../variant';
import { Link } from 'react-router-dom';

const TypewriterText = ({ text, delay = 0, onComplete = () => {} }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  
  useEffect(() => {
    const startDelay = setTimeout(() => {
      setStartTyping(true);
    }, delay * 1000);
    
    return () => clearTimeout(startDelay);
  }, [delay]);
  
  useEffect(() => {
    if (startTyping && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      
      return () => clearTimeout(timeout);
    } else if (startTyping && currentIndex === text.length) {
      // Typing is complete, trigger the callback
      onComplete();
    }
  }, [currentIndex, text, startTyping, onComplete]);
  
  return <span>{displayText}</span>;
};

const HeroSection = () => {
  // State to control animation stages
  const [animationStarted, setAnimationStarted] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [lastLineComplete, setLastLineComplete] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Start the animation sequence after component mounts
  useEffect(() => {
    // Delay before starting the animation sequence
    const timer = setTimeout(() => {
      setAnimationStarted(true);
      
      // Add delay before showing typewriter
      setTimeout(() => {
        setShowTypewriter(true);
      }, 500);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle completion of the final typewriter line
  const handleFinalLineComplete = () => {
    setLastLineComplete(true);
  };

  // Animation variants for the scrolling columns
  const leftColumnVariants = {
    animate: {
      y: [0, -208], // Height of one box (52px) × 4 = 208
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear"
        }
      }
    }
  };

  const rightColumnVariants = {
    animate: {
      y: [-208, 0], // Start from negative to scroll in opposite direction
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear"
        }
      }
    }
  };

  // Animation variants for horizontal scrolling (mobile only)
  const horizontalScrollVariants = {
    animate: {
      x: [0, -480], // Width of boxes + gaps for seamless loop
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear"
        }
      }
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row items-center justify-between px-0 sm:px-2 md:px-4 lg:px-8 pt-24 sm:pt-32 md:pt-40 lg:pt-48 bg-transparent relative overflow-hidden">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-white z-10 mt-8 sm:mt-12 md:mt-16 lg:mt-20 lg:ml-12 lg:pl-0 text-center lg:text-left">
        <AnimatePresence>
          {showTypewriter && (
            <motion.h1 
              className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl lg:ml-54 font-bold leading-tight mb-4 lg:-mt-8 lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <TypewriterText text="Building Capability, " delay={0} />
              <br />
              <TypewriterText 
                text="Driving Results." 
                delay={2.3} 
                onComplete={handleFinalLineComplete}
              />
            </motion.h1>
          )}
        </AnimatePresence>
        
        {/* Button */}
        <AnimatePresence>
          {lastLineComplete && (
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
            >
              <Link 
                to="/ContactUs"
                className="inline-block bg-[#DBB965] hover:bg-[#c4a55a] text-white font-medium lg:mr-220 py-2 px-4 rounded text-sm transition-colors duration-300"
                style={{ backgroundColor: '#DBB965', color: '#FFFFFF' }}
              >
                Get in touch
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Desktop Image boxes with vertical scrolling */}
      {isDesktop && (
        <AnimatePresence>
          {lastLineComplete && (
            <motion.div 
              className="absolute right-32 top-1/2 transform -translate-y-1/2 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Right Image Boxes with vertical scrolling */}
              <div className="flex gap-12 h-full overflow-hidden">
                {/* Left Column */}
                <motion.div
                  className="flex flex-col gap-4"
                  variants={leftColumnVariants}
                  animate="animate"
                >
                  {/* Duplicate boxes to create seamless loop */}
                  <motion.div
                    variants={fadeIn("right", 0.1)}
                    initial="hidden"
                    animate="show"
                    className="w-40 h-52 rounded-2xl shadow-md overflow-hidden"
                  >
                    <img src="/assets/hero_img1.jpg" alt="Featured content" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    animate="show"
                    className="w-40 h-52 rounded-2xl shadow-md overflow-hidden"
                  >
                    <img src="/assets/hero_img13.jpg" alt="Featured content" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div
                    variants={fadeIn("right", 0.5)}
                    initial="hidden"
                    animate="show"
                    className="w-40 h-52 rounded-2xl shadow-md overflow-hidden"
                  >
                    <img src="/assets/hero_img10.jpg" alt="Featured content" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div
                    variants={fadeIn("right", 0.7)}
                    initial="hidden"
                    animate="show"
                    className="w-40 h-52 rounded-2xl shadow-md overflow-hidden"
                  >
                    <img src="/assets/hero_img9.jpg" alt="Featured content" className="w-full h-full object-cover" />
                  </motion.div>
                  {/* Duplicated boxes for seamless loop */}
                  <motion.div
                    variants={fadeIn("right", 0.1)}
                    initial="hidden"
                    animate="show"
                    className="w-40 h-52 rounded-2xl shadow-md overflow-hidden"
                  >
                    <img src="/assets/hero_img1.jpg" alt="Featured content" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    animate="show"
                    className="w-40 h-52 rounded-2xl shadow-md overflow-hidden"
                  >
                    <img src="/assets/hero_img13.jpg" alt="Featured content" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div
                    variants={fadeIn("right", 0.5)}
                    initial="hidden"
                    animate="show"
                    className="w-40 h-52 rounded-2xl shadow-md overflow-hidden"
                  >
                    <img src="/assets/hero_img10.jpg" alt="Featured content" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div
                    variants={fadeIn("right", 0.7)}
                    initial="hidden"
                    animate="show"
                    className="w-40 h-52 rounded-2xl shadow-md overflow-hidden"
                  >
                    <img src="/assets/hero_img9.jpg" alt="Featured content" className="w-full h-full object-cover" />
                  </motion.div>
                </motion.div>
                
                {/* Right Column */}
                <motion.div
                  className="flex flex-col gap-4"
                  variants={rightColumnVariants}
                  animate="animate"
                >
                  {/* Duplicate boxes to create seamless loop */}
                  <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    animate="show"
                    className="w-40 h-52 rounded-2xl shadow-md overflow-hidden justify-end"
                  >
                    <img src="/assets/hero_img14.jpg" alt="Featured content" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    animate="show"
                    className="w-40 h-52 rounded-2xl shadow-md overflow-hidden justify-end"
                  >
                    <img src="/assets/hero_img7.jpg" alt="Featured content" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div
                    variants={fadeIn("left", 0.6)}
                    initial="hidden"
                    animate="show"
                    className="w-40 h-52 rounded-2xl shadow-md overflow-hidden justify-end"
                  >
                    <img src="/assets/hero_img4.jpg" alt="Featured content" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div
                    variants={fadeIn("left", 0.8)}
                    initial="hidden"
                    animate="show"
                    className="w-40 h-52 rounded-2xl shadow-md overflow-hidden justify-end"
                  >
                    <img src="/assets/hero_img11.jpg" alt="Featured content" className="w-full h-full object-cover" />
                  </motion.div>
                  {/* Duplicated boxes for seamless loop */}
                  <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    animate="show"
                    className="w-40 h-52 rounded-2xl shadow-md overflow-hidden justify-end"
                  >
                    <img src="/assets/hero_img14.jpg" alt="Featured content" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    animate="show"
                    className="w-40 h-52 rounded-2xl shadow-md overflow-hidden justify-end"
                  >
                    <img src="/assets/hero_img7.jpg" alt="Featured content" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div
                    variants={fadeIn("left", 0.6)}
                    initial="hidden"
                    animate="show"
                    className="w-40 h-52 rounded-2xl shadow-md overflow-hidden justify-end"
                  >
                    <img src="/assets/hero_img4.jpg" alt="Featured content" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div
                    variants={fadeIn("left", 0.8)}
                    initial="hidden"
                    animate="show"
                    className="w-40 h-52 rounded-2xl shadow-md overflow-hidden justify-end"
                  >
                    <img src="/assets/hero_img11.jpg" alt="Featured content" className="w-full h-full object-cover" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Mobile Image boxes with horizontal scrolling */}
      {!isDesktop && (
        <AnimatePresence>
          {lastLineComplete && (
            <motion.div 
              className="absolute bottom-8 left-0 right-0 z-10 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* First Row */}
              <motion.div
                className="flex gap-3 w-max mb-3"
                variants={horizontalScrollVariants}
                animate="animate"
              >
                {/* First set of images */}
                <motion.div
                  variants={fadeIn("up", 0.1)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img1.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img3.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img5.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img9.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.5)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img7.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img4.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
                
                {/* Duplicate set for seamless loop */}
                <motion.div
                  variants={fadeIn("up", 0.1)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img1.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img3.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img5.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img9.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.5)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img7.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img4.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
              </motion.div>

              {/* Second Row - Scrolling in opposite direction */}
              <motion.div
                className="flex gap-3 w-max"
                variants={{
                  animate: {
                    x: [-480, 0], // Reverse direction
                    transition: {
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear"
                      }
                    }
                  }
                }}
                animate="animate"
              >
                {/* First set of images */}
                <motion.div
                  variants={fadeIn("up", 0.1)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img8.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img7.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img4.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img6.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.5)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img1.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img3.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
                
                {/* Duplicate set for seamless loop */}
                <motion.div
                  variants={fadeIn("up", 0.1)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img8.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img7.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img4.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img6.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.5)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img1.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  animate="show"
                  className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl shadow-md overflow-hidden flex-shrink-0"
                >
                  <img src="/assets/hero_img3.jpg" alt="Featured content" className="w-full h-full object-cover" />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default HeroSection;