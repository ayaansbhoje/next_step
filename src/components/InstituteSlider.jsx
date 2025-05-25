import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function InstituteSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();
  const sectionRef = useRef(null);

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

  const programs = [
    {
      title: "Customised Programs",
      content: "Designed as per Institute's specific needs catering to the specific requirement of the Institute and its students. Programs are co-created with the institute, engaging faculty members to ensure continuity."
    },
    {
      title: "Developing Leadership Capability",
      content: "Amongst students to ensure that they develop the mindset and competencies required to emerge as future leaders. The workshop will cover what is leadership, different leadership styles and how to develop leadership capability."
    },
    {
      title: "Communication Skills Training",
      content: "Focusing on Verbal and written communication, Active listening, Public speaking and Professional Etiquette."
    },
    {
      title: "Corporate Culture Exposure",
      content: "Preparing students for work environment and helping them develop the competencies required to succeed."
    },
    {
      title: "Career Readiness Workshops",
      content: "Focusing on Resume writing, Interview skills, including mock interviews and networking strategies to create avenues for job opportunities."
    },
    {
      title: "Faculty Training Program",
      content: "To develop essential skills required to succeed in VUCA (volatile, uncertain, complex and ambiguous) environment."
    }
  ];

  // Group programs into pairs for the carousel
  const slides = [];
  for (let i = 0; i < programs.length; i += 2) {
    slides.push(programs.slice(i, i + 2));
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div ref={sectionRef} className="w-full bg-black">
      <div className="max-w-6xl mx-auto px-12 py-12 bg-black text-white">
        {/* Header */}
        <motion.h1 
          className="text-xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          Signature Programs for Institutes
        </motion.h1>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation arrows */}
          <motion.button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-black p-2 rounded-full shadow-md z-10 border border-[#DBB965]"
            aria-label="Previous slide"
            initial={{ opacity: 0, x: -20 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { 
                opacity: 1, 
                x: 0, 
                transition: { 
                  delay: 0.3,
                  duration: 0.6 
                }
              }
            }}
          >
            <ChevronLeft className="w-6 h-6 text-[#DBB965]" />
          </motion.button>
          
          {/* Slides */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-2 gap-6">
                    {slide.map((program, programIndex) => (
                      <motion.div 
                        key={programIndex}
                        className="p-6 rounded-lg text-white"
                        style={{ 
                          background: "linear-gradient(to bottom right, #DBB965 0%, #756336 100%)" 
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={controls}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { 
                            opacity: 1, 
                            y: 0, 
                            transition: { 
                              delay: 0.4 + (programIndex * 0.1),
                              duration: 0.6 
                            }
                          }
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <h3 className="text-lg font-bold mb-4 text-center">{program.title}</h3>
                        <p className="text-xs text-center leading-tight">{program.content}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <motion.button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-black p-2 rounded-full shadow-md z-10 border border-[#DBB965]"
            aria-label="Next slide"
            initial={{ opacity: 0, x: 20 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { 
                opacity: 1, 
                x: 0, 
                transition: { 
                  delay: 0.3,
                  duration: 0.6 
                }
              }
            }}
          >
            <ChevronRight className="w-6 h-6 text-[#DBB965]" />
          </motion.button>
        </div>
        
        {/* Navigation dots */}
        <motion.div 
          className="flex justify-center gap-2 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                delay: 0.6,
                duration: 0.6 
              }
            }
          }}
        >
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-colors border ${
                currentSlide === index ? 'bg-[#DBB965] border-[#DBB965]' : 'bg-white border-[#DBB965]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}