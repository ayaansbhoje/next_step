import React, { useEffect, useRef } from 'react';
import { Globe, Lightbulb, Users, Zap } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

const values = [   
  {     
    title: "Integrity",     
    icon: <Zap size={28} className="text-inherit" />,     
    description: "We are guided by the highest ethical standards. We practice transparency and honesty in all that we undertake."   
  },   
  {     
    title: "Excellence",     
    icon: <Users size={28} className="text-inherit" />,     
    description: "We continuously strive for excellence in everything we do, pushing our capabilities, potential, and continuous improvement."   
  },   
  {     
    title: "Partnership",     
    icon: <Users size={28} className="text-inherit" />,     
    description: "We believe in collaborative partnerships. We work together to achieve our goals and lasting success."   
  },   
  {     
    title: "Innovation",     
    icon: <Lightbulb size={28} className="text-inherit" />,     
    description: "We embrace creative solutions and forward-thinking approaches. We constantly seek to create new value."   
  },   
  {     
    title: "Empowerment",     
    icon: <Globe size={28} className="text-inherit" />,     
    description: "We invest in people and their development. We inspire them to reach their maximum potential."   
  } 
];  

const OurValuesComponent = () => {   
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (     
    <div className="bg-[#DBB965] min-h-[400px] flex items-center py-16">       
      <div className="max-w-5xl mx-auto w-full flex flex-row items-center gap-12">         
        {/* Left: Header */}         
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex-shrink-0 flex flex-col justify-center items-center pr-8"
        >           
          <motion.h2
            variants={itemVariants}
            className="text-white text-5xl font-bold whitespace-nowrap"
          >
            OUR VALUES
          </motion.h2>         
        </motion.div>         
        {/* Right: Value Boxes */}         
        <motion.div
          variants={containerVariants}
          className="flex-1 flex justify-start"
        >           
          <div className="grid grid-cols-2 gap-8 w-[600px]">             
            {values.map((val, idx) => (               
              <motion.div                 
                key={val.title}                 
                variants={itemVariants}                 
                className={`border border-white rounded-xl p-6 flex items-center bg-transparent hover:!bg-black transition-all duration-300 group min-w-[260px] max-w-[320px] ${idx === 4 ? "col-span-2 mx-auto w-2/3" : ""}`}                 
                style={{ cursor: 'pointer' }}               
              >                 
                {/* Icon in circle */}                 
                <div className="flex-shrink-0 mr-5">                   
                  <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-white group-hover:border-[#DBB965] transition-all duration-300">                     
                    {/* Icon color changes on hover via group-hover:text-[#DBB965] */}                     
                    <span className="text-white group-hover:text-[#DBB965] transition-all duration-300">{val.icon}</span>                   
                  </div>                 
                </div>                 
                {/* Text content */}                 
                <div className="flex flex-col items-start">                   
                  <div className="text-white text-xl font-bold mb-1 group-hover:text-[#DBB965] transition-all duration-300">{val.title}</div>                   
                  <div className="text-white text-xs group-hover:text-[#DBB965] transition-all duration-300">{val.description}</div>                 
                </div>               
              </motion.div>             
            ))}           
          </div>         
        </motion.div>       
      </div>     
    </div>   
  ); 
};  

export default OurValuesComponent;