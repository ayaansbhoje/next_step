import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HRServices() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  const services = [
    {
      title: "Customised Solutions",
      content: "Tailored HR Solutions: Developing Comprehensive People Strategies Precisely Aligned with Your Unique Organizational Goals Across Talent Acquisition, Development, and Management Ecosystems",
      image: "/assets/customised.jpg"
    },
    {
      title: "Leadership Development",
      content: "We design and deliver leadership development solutions that empower individuals and teams to lead with clarity, confidence, and purpose. Our programs focus on enhancing self-awareness, building core leadership competencies.",
      image: "/assets/leadership.jpg"
    },
    {
      title: "Executive Coaching",
      content: "Provide structured coaching solutions for professionals at mid and senior levels—to enhance leadership effectiveness, accelerate performance and unlock potential. Our outcome-driven approach aligns individual development with organizational goals, enabling professionals to lead with clarity, confidence, and impact.",
      image: "/assets/coaching.jpg"
    },
    {
      title: "Setting-up and enhancing existing HR Practices",
      content: "Establish a structured HR framework that ensures organizational consistency, drives compliance, and cultivates a high-performing workforce, enabling sustainable business growth.",
      image: "/assets/hr_practices.jpg"
    },
    {
      title: "Revamping Performance Management Systems",
      content: "Drive a high-performance culture by designing and implementing robust, transparent performance management practices. Our approach ensures clarity in expectations, aligns individual goals with organizational objectives, and provides a structured pathway for continuous feedback, growth, and accountability—for both employees and leaders.",
      image: "/assets/performance.jpg"
    }
  ];

  // Group services into pairs for the carousel
  const slides = [];
  for (let i = 0; i < services.length; i += 2) {
    slides.push(services.slice(i, i + 2));
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
    <div ref={sectionRef} className="w-full bg-black">
      <div className="max-w-6xl mx-auto px-12 py-12 bg-black text-white">
        {/* Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">HR Services</h2>
          <p className="text-base text-[#DBB965] text-center max-w-3xl mx-auto">
            We provide comprehensive HR solutions tailored to your organization's unique needs, helping you build and maintain a high-performing workforce.
          </p>
        </motion.div>
        
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
                    {slide.map((service, serviceIndex) => (
                      <motion.div 
                        key={serviceIndex}
                        className="p-5 rounded-lg text-white min-h-[220px] flex flex-col"
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
                              delay: 0.4 + (serviceIndex * 0.1),
                              duration: 0.6 
                            }
                          }
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <div className="flex-1 flex items-center justify-center">
                          <h3 className="text-xl font-bold text-center">{service.title}</h3>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                          <p className="text-sm text-center leading-relaxed">{service.content}</p>
                        </div>
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