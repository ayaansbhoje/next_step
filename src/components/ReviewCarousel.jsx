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
      name: "Mr. HP Shetty",
      position: "Director at Intexso Biochem Pvt Ltd",
      image: "/assets/test_3.jpg",
      text: "The Next Step brings professional expertise and exceptional communications to every engagement. They offer tailored solutions, efficient talent acquisition, and impactful employee development programmes. Over time, they have become an extension of our own team—a trusted HR and strategic partner for exponential growth."
    },
    {
      id: 2,
      name: "Prof. Milind J. Umekar",
      position: "President, IPCA",
      image: "/assets/test_6.jpg",
      text: "Working with The Next Step has been a smooth, insightful, and genuinely supportive experience. Their professionalism, clarity of communication, and dedication to delivering real value truly stand out. I always felt like I was in capable hands, with a team that not only understood my goals but also brought creative and practical solutions to the table."
    },
    {
      id: 3,
      name: "Dr. Vandana Patravale",
      position: "APTI",
      image: "/assets/test_5.jpg",
      text: "Working with SJG has been an inspiring experience. Her pleasant manner and friendly demeanor creates an immediate connection with participants, setting the tone for a collaborative and engaging learning environment. With an exceptional command over language and a natural flair for leadership, she not only delivers powerful content but also models the very qualities they teach. What truly sets SJG apart is her mastery in facilitating group activities that bring out the best in every participant. Her sessions are high-energy, well-structured, and thought-provoking. As a true taskmaster, she ensures that goals are met without compromising on fun or learning."
    },
    {
      id: 4,
      name: "Priyanka Verma",
      position: "Federation of Gujarat Industries",
      image: "/assets/test_4.jpg",
      text: "We had the privilege of hosting Ms. Shabnam Gaitonde for a session at the Federation of Gujarat Industries. Her presentation was articulate, insightful, and highly relevant to the professional landscape. She skillfully blended theory with practical examples, making the session both engaging and impactful. Ms. Shabnam ensured active participation from attendees, fostering meaningful discussions and leaving participants with clear, actionable takeaways to apply this in their respective workplaces."
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
          <h2 className="text-5xl font-bold text-center mb-4">Clients' Feedback And Testimonials.</h2>
          
        </motion.div>
        
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div className="flex h-[650px] transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {reviews.map((review) => (
                <div key={review.id} className="min-w-full flex flex-col bg-gradient-to-r from-[#DBB965] to-[#756336] rounded-lg overflow-hidden shadow-2xl">
                  <div className="w-full h-[340px] relative">
                    <img 
                      src={review.image} 
                      alt={`${review.name}'s review`} 
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 25%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="w-full p-6 flex flex-col justify-center relative -mt-2">
                    <div className="absolute left-6 top-0 w-1 h-10 bg-white/30"></div>
                    <h2 className="text-2xl font-bold text-white mb-1">{review.name}</h2>
                    <p className="text-white/80 text-sm mb-3">{review.position}</p>
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