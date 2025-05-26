import { motion } from "framer-motion";
const Interest = () => {

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
    // Add this after the existing content in your About section
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
  viewport={{ once: true }}
  className="max-w-4xl mx-auto mt-12 mb-12"
>
  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
    <span className="text-emerald-400 mr-2">&gt;</span>
    Areas of Interest
  </h3>
  
  <div className="grid md:grid-cols-2 gap-6">
    <motion.div 
      whileHover={{ scale: 1.03 }}
      className="bg-gray-900 border border-gray-700 p-6 rounded-lg shadow-md hover:border-emerald-500 transition-colors duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="bg-emerald-500 bg-opacity-20 p-3 rounded-lg mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h4 className="text-lg font-medium text-white">Artificial Intelligence & Machine Learning</h4>
      </div>
      <p className="text-gray-400">
        Fascinated by the potential of AI/ML to solve complex problems. Currently exploring neural networks, NLP, and computer vision applications while building projects that leverage these technologies.
      </p>
    </motion.div>
    
    <motion.div 
      whileHover={{ scale: 1.03 }}
      className="bg-gray-900 border border-gray-700 p-6 rounded-lg shadow-md hover:border-emerald-500 transition-colors duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="bg-emerald-500 bg-opacity-20 p-3 rounded-lg mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h4 className="text-lg font-medium text-white">Cybersecurity</h4>
      </div>
      <p className="text-gray-400">
        Deeply interested in cybersecurity principles and practices. Continuously learning about network security, ethical hacking, and secure coding practices to build robust and protected applications.
      </p>
    </motion.div>
  </div>
</motion.div>
  )
}

export default Interest
