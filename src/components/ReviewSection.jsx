import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function ReviewSection() {
  const sliderRef = useRef(null);
  const controls = useAnimation();
  const sectionRef = useRef(null);
  
  const reviews = [
    {
      id: 1,
      quote: "Their organizational redesign transformed our company culture. We saw a 40% improvement in communication and employee satisfaction within just six months.",
      author: "Michael Chen",
      position: "CEO of Global Logistics Network"
    },
    {
      id: 2,
      quote: "The leadership training program revolutionized how our executives approach challenges. Our decision-making process is now more efficient and collaborative.",
      author: "Sarah Johnson",
      position: "COO of TechInnovate Solutions"
    },
    {
      id: 3,
      quote: "Working with their team helped us identify and nurture talent within our organization. Our internal promotion rate increased by 35% in just one year.",
      author: "David Rodriguez",
      position: "HR Director at FutureBridge Inc."
    },
    {
      id: 4,
      quote: "The culture transformation workshop created a paradigm shift in how our teams collaborate. Project delivery times improved by 28% across all departments.",
      author: "Jennifer Liu",
      position: "VP of Operations at Quantum Enterprises"
    },
    {
      id: 5,
      quote: "Their strategic advisory services helped us navigate a complex merger. The transition was smoother than we could have imagined with minimal disruption.",
      author: "Robert Taylor",
      position: "CFO of Allied Industries"
    }
  ];

  // Clone reviews for infinite scrolling effect
  const duplicatedReviews = [...reviews, ...reviews];

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
    <div ref={sectionRef} className="w-full py-6 md:py-10 bg-white flex items-center">
      {/* Black box flush with the left edge */}
      <motion.div 
        className="bg-black p-4 md:p-8 w-52 md:w-80 flex items-center h-52 md:h-72 z-20 rounded-r-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
              duration: 0.6 
            }
          }
        }}
      >
        <h2 className="text-lg md:text-3xl font-bold text-white text-left leading-tight">
        Discover our<br />clients' feedback<br />and testimonials.
        </h2>
      </motion.div>
      {/* Review cards centered in the main container */}
      <div className="flex-1 -ml-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center">
            <div className="flex-1 overflow-hidden">
              <div className="relative">
                <motion.div 
                  ref={sliderRef}
                  className="flex gap-4 animate-scroll"
                  initial={{ opacity: 0, x: 50 }}
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        delay: 0.3,
                        duration: 0.6 
                      }
                    }
                  }}
                  style={{
                    animation: 'scroll 30s linear infinite'
                  }}
                >
                  {duplicatedReviews.map((review, index) => (
                    <div 
                      key={`${review.id}-${index}`}
                      className="min-w-64 md:min-w-80 max-w-64 md:max-w-80 p-2 flex-shrink-0"
                    >
                      <div 
                        className="p-4 md:p-8 rounded-lg h-48 md:h-64 flex flex-col justify-between shadow-lg"
                        style={{ backgroundColor: '#DBB965' }}
                      >
                        <p className="text-xs md:text-base mb-2 md:mb-4 font-medium">
                          "{review.quote}"
                        </p>
                        <div>
                          <p className="font-bold text-[10px] md:text-sm">-{review.author},</p>
                          <p className="text-[10px] md:text-sm">{review.position}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%));
          }
        }
      `}</style>
    </div>
  );
}