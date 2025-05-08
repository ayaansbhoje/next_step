import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../variant';

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

  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 pt-48 bg-transparent relative overflow-hidden">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-white z-10 mt-20 ml-60">
        <AnimatePresence>
          {showTypewriter && (
            <motion.h1 
              className="text-3xl md:text-3xl font-bold leading-tight mb-4 -mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <TypewriterText text="Cultivating leaders, " delay={0} />
              <br />
              <TypewriterText 
                text="Strengthening Organisations." 
                delay={2.3} 
                onComplete={handleFinalLineComplete}
              />
            </motion.h1>
          )}
        </AnimatePresence>
        
        {/* Paragraph - completely hidden until typing is complete */}
        <AnimatePresence>
          {lastLineComplete && (
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              className="text-base md:text-lg mb-6"
            >
              Elevating Companies by Unleashing the Full Potential of Their People.
            </motion.p>
          )}
        </AnimatePresence>
        
        {/* Button - completely hidden until typing is complete */}
        <AnimatePresence>
          {lastLineComplete && (
            <motion.button
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded text-sm transition-colors"
            >
              Get in touch
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      
      {/* Grey boxes */}
      <AnimatePresence>
        {lastLineComplete && (
          <motion.div 
            className="absolute right-32 top-1/2 transform -translate-y-1/2 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Right Grey Boxes with vertical scrolling */}
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
                  className="w-40 h-52 bg-gray-400 rounded-2xl shadow-md"
                ></motion.div>
                <motion.div
                  variants={fadeIn("right", 0.3)}
                  initial="hidden"
                  animate="show"
                  className="w-40 h-52 bg-gray-300 rounded-2xl shadow-md"
                ></motion.div>
                <motion.div
                  variants={fadeIn("right", 0.5)}
                  initial="hidden"
                  animate="show"
                  className="w-40 h-52 bg-gray-400 rounded-2xl shadow-md"
                ></motion.div>
                <motion.div
                  variants={fadeIn("right", 0.7)}
                  initial="hidden"
                  animate="show"
                  className="w-40 h-52 bg-gray-300 rounded-2xl shadow-md"
                ></motion.div>
                {/* Duplicated boxes for seamless loop */}
                <motion.div
                  variants={fadeIn("right", 0.1)}
                  initial="hidden"
                  animate="show"
                  className="w-40 h-52 bg-gray-400 rounded-2xl shadow-md"
                ></motion.div>
                <motion.div
                  variants={fadeIn("right", 0.3)}
                  initial="hidden"
                  animate="show"
                  className="w-40 h-52 bg-gray-300 rounded-2xl shadow-md"
                ></motion.div>
                <motion.div
                  variants={fadeIn("right", 0.5)}
                  initial="hidden"
                  animate="show"
                  className="w-40 h-52 bg-gray-400 rounded-2xl shadow-md"
                ></motion.div>
                <motion.div
                  variants={fadeIn("right", 0.7)}
                  initial="hidden"
                  animate="show"
                  className="w-40 h-52 bg-gray-300 rounded-2xl shadow-md"
                ></motion.div>
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
                  className="w-40 h-52 bg-gray-300 rounded-2xl shadow-md justify-end"
                ></motion.div>
                <motion.div
                  variants={fadeIn("left", 0.4)}
                  initial="hidden"
                  animate="show"
                  className="w-40 h-52 bg-gray-400 rounded-2xl shadow-md justify-end"
                ></motion.div>
                <motion.div
                  variants={fadeIn("left", 0.6)}
                  initial="hidden"
                  animate="show"
                  className="w-40 h-52 bg-gray-300 rounded-2xl shadow-md justify-end"
                ></motion.div>
                <motion.div
                  variants={fadeIn("left", 0.8)}
                  initial="hidden"
                  animate="show"
                  className="w-40 h-52 bg-gray-400 rounded-2xl shadow-md justify-end"
                ></motion.div>
                {/* Duplicated boxes for seamless loop */}
                <motion.div
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  animate="show"
                  className="w-40 h-52 bg-gray-300 rounded-2xl shadow-md justify-end"
                ></motion.div>
                <motion.div
                  variants={fadeIn("left", 0.4)}
                  initial="hidden"
                  animate="show"
                  className="w-40 h-52 bg-gray-400 rounded-2xl shadow-md justify-end"
                ></motion.div>
                <motion.div
                  variants={fadeIn("left", 0.6)}
                  initial="hidden"
                  animate="show"
                  className="w-40 h-52 bg-gray-300 rounded-2xl shadow-md justify-end"
                ></motion.div>
                <motion.div
                  variants={fadeIn("left", 0.8)}
                  initial="hidden"
                  animate="show"
                  className="w-40 h-52 bg-gray-400 rounded-2xl shadow-md justify-end"
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;