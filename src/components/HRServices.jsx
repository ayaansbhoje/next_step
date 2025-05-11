import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function HRServices() {
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
      title: "Setting up and enhancing HR policies and practices",
      description: "Build a strong organizational foundation through well-defined HR frameworks that drive consistency, compliance, and clarity across the workforce. Our solutions foster a resilient, engaged, and high-performing employee base—enabling long-term, sustainable growth and success.",
      image: "/assets/setting_up.jpg"
    },
    {
      title: "Revamping Performance Management Systems",
      description: "Drive a high-performance culture by designing and implementing robust, transparent performance management practices. Our approach ensures clarity in expectations, aligns individual goals with organizational objectives, and provides a structured pathway for continuous feedback, growth, and accountability—for both employees and leaders.Cultivate a high-performance culture through establishment of robust and transparent practices that provide clarity and a defined pathway for both employees and leaders.",
      image: "/assets/performance.jpg"
    },
    {
      title: "Customised Solutions",
      description: "We understand that every organization is unique, with its own set of challenges and priorities. That's why we collaborate closely with our clients to design and deliver tailored solutions across the entire employee lifecycle. From Talent Acquisition and Talent Development to Talent Management, our expertise enables us to craft strategies that align with your business goals, strengthen people practices, and drive measurable impact.",
      image: "/assets/customised_solution.jpg"
    },
    {
      title: "Executive Coaching",
      description: "Provide structured coaching solutions for professionals at mid and senior levels—to enhance leadership effectiveness, accelerate performance and unlock potential. Our outcome-driven approach aligns individual development with organizational goals, enabling professionals to lead with clarity, confidence, and impact.",
      image: "/assets/executive_coaching.jpg"
    },
    {
      title: "Offerings for Education Institutions",
      description: "We collaborate with educational institutions to support both student and faculty development. For students, we offer customized programs that build the skills, mindset, and confidence needed to transition from campus to corporate life. These sessions focus on leadership, communication, self-awareness, goal setting, and teamwork—empowering students to navigate their career paths with clarity and competence. For faculty members, we conduct specialized training sessions to enhance facilitation skills, mentoring mindsets and leadership presence.",
      image: "/assets/education.jpg"
    },
    {
      title: "Leadership Development",
      description: "We design and deliver leadership development solutions that empower individuals and teams to lead with clarity, confidence, and purpose. Our programs focus on enhancing self- awareness, building core leadership competencies. From first-time managers to senior leaders, we support growth at every level through workshops, experiential learning, assessments, coaching, and action planning—ensuring leadership is not just learned, but lived.",
      image: "/assets/leadership_1.jpg"
    }
  ];

  // First row services (first 3)
  const firstRowServices = services.slice(0, 3);
  // Second row services (remaining 3)
  const secondRowServices = services.slice(3);

  return (
    <div ref={sectionRef} className="w-full bg-white">
      {/* Header and paragraph moved outside the container and slightly down */}
      <motion.div 
        className="pl-12 mb-12 pt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <h2 className="text-4xl text-black font-bold mb-4">Comprehensive Human Resource Consultancy Services</h2>
        <p className="text-xl text-yellow-600 max-w-3xl">
          We partner with organizations to build sustainable HR frameworks, performance
          systems, and customized talent strategies that drive business success and
          employee engagement.
        </p>
      </motion.div>
      
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* First row of services */}
        <motion.div 
          className="flex flex-row gap-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                delay: 0.2,
                duration: 0.6 
              }
            }
          }}
        >
          {firstRowServices.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </motion.div>

        {/* Second row of services */}
        <motion.div 
          className="flex flex-row gap-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                delay: 0.4,
                duration: 0.6 
              }
            }
          }}
        >
          {secondRowServices.map((service, index) => (
            <ServiceCard 
              key={index + 3}
              title={service.title}
              description={service.description}
              image={service.image}
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
      className="w-1/3 border-2 border-black rounded-lg overflow-hidden flex flex-col"
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
            className="absolute inset-0 bg-yellow-100 bg-opacity-80 p-6 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-center text-black text-sm">
              {description}
            </p>
          </motion.div>
        )}
      </div>
      
      {/* Title Section (bottom part) - always visible */}
      <div className="bg-[#DBB965] p-4 flex-1 flex items-center justify-center">
        <h3 className="text-center text-xl font-bold">{title}</h3>
      </div>
    </motion.div>
  );
}