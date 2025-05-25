import React from 'react'
import { motion } from "framer-motion";
import Link from "next/link";


const Navbar = () => {
    const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  return (
    <nav className="fixed top-0 w-full bg-gray-950 bg-opacity-90 shadow-lg border-b border-emerald-500/30 z-10 py-3">
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
              <Link href="/" className="text-xl font-bold text-emerald-400 flex items-center group">
                <span className="mr-2">$</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  <span className="text-white">ganesh</span>.<span className="text-emerald-400">dev</span>
                </motion.span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                  className="ml-1 bg-emerald-400 w-2 h-5"
                />
              </Link>
    
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="flex space-x-6"
              >
                {["about", "skills", "projects", "contact"].map((item) => (
                  <motion.div key={item} variants={fadeIn}>
                    <Link
                      href={`#${item}`}
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 group flex items-center"
                    >
                      <span className="text-emerald-500 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">&gt;</span>
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </nav>
  )
}

export default Navbar
