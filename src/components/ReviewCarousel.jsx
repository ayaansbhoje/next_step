import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="bg-black text-white py-16 px-4">
      <div className="w-full max-w-6xl mx-auto relative">
        <h1 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h1>
        
        <div className="relative overflow-hidden rounded-lg">
          <div className="flex h-[800px] transition-transform duration-500 ease-in-out" 
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {reviews.map((review) => (
              <div key={review.id} className="min-w-full flex flex-col bg-gradient-to-r from-[#DBB965] to-[#756336] rounded-lg overflow-hidden shadow-2xl">
                <div className="w-full h-[500px] relative">
                  <img 
                    src={review.image} 
                    alt={`${review.name}'s review`} 
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 30%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="w-full p-8 flex flex-col justify-center relative">
                  <div className="absolute left-8 top-0 w-1 h-16 bg-white/30"></div>
                  <h2 className="text-2xl font-bold text-white mb-4">{review.name}</h2>
                  <div className="w-16 h-1 bg-white/80 mb-6"></div>
                  <p className="text-white italic font-medium leading-relaxed">"{review.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          aria-label="Previous review"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          aria-label="Next review"
        >
          <ChevronRight size={24} />
        </button>
        
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