import { motion } from "framer-motion";
import skills from "@/data/skils";
import Image from "next/image";


export default function Skils() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };


  return (
    <motion.section 
      id="skills" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="py-20 px-4 md:px-6 bg-gray-800 border-t border-gray-700"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          <span className="text-emerald-400">&lt;</span> My Skills <span className="text-emerald-400">/&gt;</span>
        </h2>
        <div className="h-1 w-20 bg-emerald-500 mx-auto mb-12 rounded"></div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {skills.map((skill) => (
            <motion.div 
              key={skill.name} 
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 border border-gray-700 p-5 rounded-lg shadow-md text-center hover:border-emerald-500 transition-colors duration-300"
            >
              <div className="text-2xl mb-2">{skill.icon}</div>
              <Image 
                src={`/${skill.icon}.png`} 
                alt={`${skill.name} icon`} 
                width={40} 
                height={40} 
                className="mx-auto mb-2"
                loading="lazy"
              />
              <div className="text-gray-200 font-medium">{skill.name}</div>
              <div className="mt-2 bg-gray-700 h-2 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-emerald-500"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}