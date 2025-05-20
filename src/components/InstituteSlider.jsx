import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function InstituteSlider() {
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
      title: "Career Readiness Workshops",
      content: "Focusing on Resume writing, Interview skills, including mock interviews and networking strategies to create avenues for job opportunities."
    },
    {
      title: "Communication Skills Training",
      content: "Focusing on Verbal and written communication, Active listening, Public speaking and Professional Etiquette."
    },
    {
      title: "Personal Development Plans",
      content: "Creating Self-Awareness to help students identify their strengths and areas for improvement. Goal Setting Workshops, teaching students how to set a vision for themselves and achieve career-related goals."
    },
    {
      title: "Corporate Culture Exposure",
      content: "Preparing students for work environment and helping them develop the competencies required to succeed."
    },
    {
      title: "Research Initiatives",
      content: "Collaborative research projects that explore emerging trends in workforce management, providing evidence-based insights for HR practitioners and organizational leaders."
    },
    {
      title: "Developing Leadership Capability",
      content: "Amongst students to ensure that they develop the mindset and competencies required to emerge as future leaders. The workshop will cover what is leadership, different leadership styles and how to develop leadership capability."
    },
    {
      title: "Faculty Training Program",
      content: "To develop essential skills required to succeed in VUCA (volatile, uncertain, complex and ambiguous) environment."
    },
    {
      title: "Customised Programs",
      content: "Designed as per Institute's specific needs catering to the specific requirement of the Institute and its students. Programs are co-created with the institute, engaging faculty members to ensure continuity."
    },
    {
      title: "Mentorship Programs",
      content: "Structured mentoring relationships that facilitate knowledge transfer between experienced HR professionals and emerging talent, fostering continuous learning and professional growth."
    }
  ];

  return (
    <div ref={sectionRef} className="w-full bg-black">
      <div className="max-w-6xl mx-auto px-12 py-12 bg-black text-white">
        {/* Header */}
        <motion.h1 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          Signature Programs for Institutes
        </motion.h1>
        
        {/* Grid Container */}
        <div className="grid grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div 
              key={index}
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
                    delay: 0.4 + (index * 0.1),
                    duration: 0.6 
                  }
                }
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <h3 className="text-xl font-bold mb-4 text-center">{program.title}</h3>
              <p className="text-sm text-center leading-tight">{program.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}