import React from 'react';
import { motion } from 'framer-motion';
import interests from '@/data/interests';

const Interest = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section
      id="interests"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="py-20 px-4 md:px-6 bg-gray-900 border-t border-gray-700"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          <span className="text-emerald-400">&lt;</span> Areas of Interest <span className="text-emerald-400">/&gt;</span>
        </h2>
        <div className="h-1 w-20 bg-emerald-500 mx-auto mb-12 rounded"></div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {interests.map((interest) => (
            <motion.div 
              key={interest.id}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 border border-gray-700 p-6 rounded-lg shadow-md hover:border-emerald-500 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-emerald-500 bg-opacity-20 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={interest.icon} />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-white">{interest.title}</h4>
              </div>
              <p className="text-gray-400">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Interest;