import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HRServices() {
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

  const services = [
    {
      title: "Customised Solutions",
      description: "We understand that every organization is unique, with its own set of challenges and priorities. That's why we collaborate closely with our clients to design and deliver tailored solutions across the entire employee lifecycle. From Talent Acquisition and Talent Development to Talent Management, our expertise enables us to craft strategies that align with your business goals, strengthen people practices, and drive measurable impact.",
      image: "/assets/customised_solution.jpg"
    },
    {
      title: "Leadership Development",
      description: "We design and deliver leadership development solutions that empower individuals and teams to lead with clarity, confidence, and purpose. Our programs focus on enhancing self- awareness, building core leadership competencies. From first-time managers to senior leaders, we support growth at every level through workshops, experiential learning, assessments, coaching, and action planning—ensuring leadership is not just learned, but lived.",
      image: "/assets/leadership_1.jpg"
    },
    {
      title: "Executive Coaching",
      description: "Provide structured coaching solutions for professionals at mid and senior levels—to enhance leadership effectiveness, accelerate performance and unlock potential. Our outcome-driven approach aligns individual development with organizational goals, enabling professionals to lead with clarity, confidence, and impact.",
      image: "/assets/executive_coaching.jpg"
    },
    {
      title: "Setting up and enhancing HR policies and practices",
      description: "Build a strong organizational foundation through well-defined HR frameworks that drive consistency, compliance, and clarity across the workforce. Our solutions foster a resilient, engaged, and high-performing employee base—enabling long-term, sustainable growth and success.",
      image: "/assets/setting_up.jpg"
    },
    {
      title: "Revamping Performance Management Systems",
      description: "Drive a high-performance culture by designing and implementing robust, transparent performance management practices. Our approach ensures clarity in expectations, aligns individual goals with organizational objectives, and provides a structured pathway for continuous feedback, growth, and accountability—for both employees and leaders.",
      image: "/assets/performance.jpg"
    }
  ];

  // Group services into pairs for the carousel
  const slides = [];
  for (let i = 0; i < services.length; i += 2) {
    const slide = services.slice(i, i + 2);
    // If this is the last slide and it has only one item, add a placeholder
    if (slide.length === 1) {
      slide.push({
        title: "",
        description: "",
        image: "/assets/placeholder.jpg"
      });
    }
    slides.push(slide);
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
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">Comprehensive Human Resource Consultancy Services</h2>
          <p className="text-xl text-[#DBB965] text-center max-w-3xl mx-auto">
            We partner with organizations to build sustainable HR frameworks, performance
            systems, and customized talent strategies that drive business success and
            employee engagement.
          </p>
        </motion.div>
        
        {/* Slider container */}
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
                  <div className="flex flex-row gap-6">
                    {slide.map((service, serviceIndex) => (
                      service.title ? (
                        <ServiceCard 
                          key={serviceIndex}
                          title={service.title}
                          description={service.description}
                          image={service.image}
                        />
                      ) : (
                        <div key={serviceIndex} className="flex-1" /> // Empty placeholder div
                      )
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

function ServiceCard({ title, description, image }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="flex-1 border-2 border-[#DBB965] rounded-lg overflow-hidden flex flex-col"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Image Section (top part) with hover effect */}
      <div 
        className="relative h-64 bg-gray-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        
        {/* Hover Overlay - only covers the image area */}
        {isHovered && (
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-80 p-6 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-center text-white text-sm">
              {description}
            </p>
          </motion.div>
        )}
      </div>
      
      {/* Title Section (bottom part) - always visible */}
      <div 
        className="p-4 flex-1 flex items-center justify-center"
        style={{ 
          background: "linear-gradient(to bottom right, #DBB965 0%, #756336 100%)" 
        }}
      >
        <h3 className="text-center text-xl font-bold text-black">{title}</h3>
      </div>
    </motion.div>
  );
}