"use client";
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
  
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <nav className="fixed top-0 w-full bg-gray-950 bg-opacity-90 shadow-lg border-b border-emerald-500/30 z-10 py-3">
      <div className="container mx-auto px-4 md:px-6 flex flex-wrap justify-between items-center">
        {/* Logo */}
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
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-400 hover:text-emerald-400 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {!isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
        
        {/* Desktop Navigation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="hidden md:flex md:space-x-6"
        >
          {["about", "skills", "projects", "experience",  "contact"].map((item) => (
            <motion.div key={item} variants={fadeIn}>
              <Link
                href={`#${item}`}
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 group flex items-center"
                onClick={() => {
                  document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="text-emerald-500 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">&gt;</span>
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="w-full md:hidden overflow-hidden bg-gray-900 border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-2">
              {["about", "skills", "projects", "experience", "contact"].map((item) => (
                <motion.div 
                  key={item} 
                  variants={fadeIn}
                  className="py-2 border-b border-gray-800 last:border-0"
                >
                  <Link
                    href={`#${item}`}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 group flex items-center"
                    onClick={() => {
                      setIsMenuOpen(false);
                      document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span className="text-emerald-500 mr-1">&gt;</span>
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar