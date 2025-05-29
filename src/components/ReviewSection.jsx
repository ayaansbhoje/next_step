import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function ReviewSection() {
  const sliderRef = useRef(null);
  const controls = useAnimation();
  const sectionRef = useRef(null);
  
  const reviews = [
    {
      id: 1,
      quote: "The Next Step brings professional expertise and exceptional communications to every engagement. They offer tailored solutions, efficient talent acquisition, and impactful employee development programmes. Over time, they have become an extension of our own team—a trusted HR and strategic partner for exponential growth.",
      author: "Mr. HP Shetty",
      position: "Director at Intexso Biochem Pvt Ltd"
    },
    {
      id: 2,
      quote: "Working with The Next Step has been a smooth, insightful, and genuinely supportive experience. Their professionalism, clarity of communication, and dedication to delivering real value truly stand out. I always felt like I was in capable hands, with a team that not only understood my goals but also brought creative and practical solutions to the table.",
      author: "Prof. Milind J. Umekar",
      position: "President, IPCA"
    },
    {
      id: 3,
      quote: "Working with SJG has been an inspiring experience. Her pleasant manner and friendly demeanor creates an immediate connection with participants, setting the tone for a collaborative and engaging learning environment. With an exceptional command over language and a natural flair for leadership, she not only delivers powerful content but also models the very qualities they teach. What truly sets SJG apart is her mastery in facilitating group activities that bring out the best in every participant. Her sessions are high-energy, well-structured, and thought-provoking. As a true taskmaster, she ensures that goals are met without compromising on fun or learning. Her ability to hold the audience's attention and drive meaningful conversations makes her a standout in the space of leadership development.",
      author: "Dr. Vandana Patravale",
      position: "APTI"
    },
    {
      id: 4,
      quote: "We had the privilege of hosting Ms. Shabnam Gaitonde for a session at the Federation of Gujarat Industries. Her presentation was articulate, insightful, and highly relevant to the professional landscape. She skillfully blended theory with practical examples, making the session both engaging and impactful. Ms. Shabnam ensured active participation from attendees, fostering meaningful discussions and leaving participants with clear, actionable takeaways to apply this in their respective workplaces.",
      author: "Priyanka Verma",
      position: "Federation of Gujarat Industries"
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
        className="bg-black p-4 md:p-8 w-56 md:w-96 flex items-center h-56 md:h-80 z-20 rounded-r-lg"
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
        Clients' Feedback<br />And Testimonials.
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
                      className="min-w-72 md:min-w-96 max-w-72 md:max-w-96 p-2 flex-shrink-0"
                    >
                      <div 
                        className="p-4 md:p-8 rounded-lg h-52 md:h-72 flex flex-col justify-between shadow-lg"
                        style={{ backgroundColor: '#DBB965' }}
                      >
                        <p className="text-[11px] md:text-base mb-2 md:mb-4 font-medium -mt-3">
                          "{review.quote}"
                        </p>
                        <div className="-mt-2">
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