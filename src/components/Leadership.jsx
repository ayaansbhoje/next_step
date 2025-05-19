import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Leadership() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
      title: "Legacy Leadership",
      description: "Augment leadership skills of senior subject matter experts into well-rounded, visionary leaders who can propel the organization towards enduring success and a meaningful impact for the future",
      image: "/assets/leadership_2.jpeg"
    },
    {
      title: "Leadership Momentum",
      description: "Develop mid-level managers' strategic, operational, and people-leadership skills, equipping them to drive impactful business results and foster a high-performance culture within their teams.",
      image: "/assets/leadership_11.jpg"
    },
    {
      title: "Manager Launchpad",
      description: "Equip new managers with the foundational skills, knowledge, and mindset needed to successfully transition from individual contributors to effective leaders.",
      image: "/assets/leadership_3.jpeg"
    }
  ];

  return (
    <div ref={sectionRef} className="bg-[#DBB965] rounded-lg p-6">
      <motion.div 
        className="flex justify-between mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <div className="w-1/3">
          <h1 className="text-white text-4xl font-bold tracking-widest leading-tight">
            Leadership<br/>Development<br/>Programs
          </h1>
        </div>
        <div className="w-1/2">
          <p className="text-white text-xl text-right mt-4">
            Develop a strong leadership team as part of succession
            planning and retention strategy, to support the
            organization's strategic goals for
            business expansion.
          </p>
        </div>
      </motion.div>

      <motion.hr 
        className="border-white my-6"
        initial={{ scaleX: 0 }}
        animate={controls}
        variants={{
          hidden: { scaleX: 0 },
          visible: { 
            scaleX: 1, 
            transition: { 
              delay: 0.3,
              duration: 0.6 
            }
          }
        }}
      />

      {programs.map((program, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                delay: 0.4 + (index * 0.2),
                duration: 0.6 
              }
            }
          }}
        >
          <motion.div 
            className={`flex items-center mb-8 p-4 rounded-lg transition-all duration-300 ${
              hoveredIndex === index 
                ? index % 2 === 0 
                  ? 'bg-black bg-opacity-50' 
                  : 'bg-white bg-opacity-60'
                : ''
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex-1 pr-8">
              <h2 className={`text-3xl font-medium mb-3 ${
                hoveredIndex === index 
                  ? index % 2 === 0 
                    ? 'text-white' 
                    : 'text-black'
                  : 'text-black'
              }`}>
                {program.title}
              </h2>
              <p className={
                hoveredIndex === index 
                  ? index % 2 === 0 
                    ? 'text-white' 
                    : 'text-black'
                  : 'text-white'
              }>
                {program.description}
              </p>
            </div>
            <div className="w-16 h-16 flex-shrink-0">
              <img 
                src={program.image} 
                alt={`Team for ${program.title}`} 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>
          
          {index < programs.length - 1 && (
            <motion.hr 
              className="border-white my-6"
              initial={{ scaleX: 0 }}
              animate={controls}
              variants={{
                hidden: { scaleX: 0 },
                visible: { 
                  scaleX: 1, 
                  transition: { 
                    delay: 0.5 + (index * 0.2),
                    duration: 0.6 
                  }
                }
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}