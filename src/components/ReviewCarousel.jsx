import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  // Sample review data
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "/assets/review-1.jpg",
      text: "The service was exceptional from start to finish. The team went above and beyond to ensure our needs were met. I would highly recommend them to anyone looking for quality and reliability."
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "/assets/review_4.jpg",
      text: "I was impressed by the attention to detail and professionalism. They delivered exactly what they promised and on time. Will definitely be using their services again in the future."
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      image: "/assets/review_2.jpg",
      text: "Absolutely incredible experience! The product quality exceeded my expectations and the customer service was top-notch. They made the entire process smooth and enjoyable."
    },
    {
      id: 4,
      name: "David Thompson",
      image: "/assets/review_3.jpg",
      text: "I've been a customer for years and have never been disappointed. Their commitment to excellence is evident in everything they do. I couldn't imagine going anywhere else."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div ref={sectionRef} className="w-full bg-black">
      <div className="max-w-6xl mx-auto px-12 py-24 bg-black text-white">
        {/* Header */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
          <p className="text-xl text-[#DBB965] text-center max-w-3xl mx-auto">
            Discover how our solutions have helped organizations transform their HR practices
            and achieve their business objectives.
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div className="flex h-[650px] transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {reviews.map((review) => (
                <div key={review.id} className="min-w-full flex flex-col bg-gradient-to-r from-[#DBB965] to-[#756336] rounded-lg overflow-hidden shadow-2xl">
                  <div className="w-full h-[420px] relative">
                    <img 
                      src={review.image} 
                      alt={`${review.name}'s review`} 
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 30%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="w-full p-4 flex flex-col justify-center relative">
                    <div className="absolute left-4 top-0 w-1 h-10 bg-white/30"></div>
                    <h2 className="text-2xl font-bold text-white mb-3">{review.name}</h2>
                    <div className="w-12 h-1 bg-white/80 mb-3"></div>
                    <p className="text-white italic font-medium leading-relaxed text-lg">"{review.text}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-[200px] -left-16 bg-black p-3 rounded-full transition-all duration-300 hover:border-2 hover:border-[#DBB965] z-10"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} className="text-[#DBB965]" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-[200px] -right-16 bg-black p-3 rounded-full transition-all duration-300 hover:border-2 hover:border-[#DBB965] z-10"
            aria-label="Next review"
          >
            <ChevronRight size={24} className="text-[#DBB965]" />
          </button>
        </div>
        
        {/* Indicator dots */}
        <div className="flex justify-center mt-6 space-x-4">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-[#DBB965] scale-125 ring-4 ring-[#DBB965]/30" 
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}