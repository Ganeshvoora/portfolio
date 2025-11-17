"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Skils from "@/components/Skils";
import Projects from "@/components/Projects";
import Interest from "@/components/Interest";
import Contact from "@/components/Contact";
import Experience from '@/components/Experience';

export default function Home() {



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
    <main className="min-h-screen bg-gray-900 text-gray-200 font-mono">
      {/* Terminal-style navigation */}
      <Navbar />

      {/* Hero Section with Code Animation */}
      <section className="pt-32 pb-20 px-4 md:px-6 bg-gray-950 relative overflow-hidden">
        {/* Animated code background */}
        <div className="absolute inset-0 opacity-5">
          <pre className="text-xs md:text-sm leading-loose text-center">
            {Array(20).fill(0).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 1 }}
              >
                {`const developer = { name: "Voora Venkata Sai Ganesh",\n\t skills: ["JavaScript", "MERN Stack","Next.js",],\n\t passion: "Building amazing web experiences,Learning AIML,CyberSecurity" };`}
              </motion.div>
            ))}
          </pre>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8 ring-4 ring-emerald-500 shadow-lg shadow-emerald-500/20"
          >
            <Image
              src="/profile.png"
              alt="Voora Venkata Sai Ganesh"
              width={128}
              height={128}
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
          >
            Hi, I&apos;m <span className="text-emerald-400">Voora Venkata Sai Ganesh</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-gray-800 rounded-md p-2 px-4 inline-block border border-gray-700">
              <span className="text-xl text-gray-300">&gt; <span className="typing-text text-emerald-400">Full-Stack Developer</span></span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 text-center"
          >
            Building performant web applications with modern technologies.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div variants={fadeIn}>
              <Link href="#contact"
                className="px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors duration-300 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Contact Me
              </Link>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Link href="#projects"
                className="px-6 py-3 bg-gray-800 border border-emerald-500 text-emerald-500 rounded-md hover:bg-gray-700 transition-colors duration-300 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                View My Work
              </Link>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Link href="https://github.com/Ganeshvoora" target="_blank"
                className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300 flex items-center"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 px-4 md:px-6 bg-gray-800 border-t border-gray-700"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            <span className="text-emerald-400">&lt;</span> About Me <span className="text-emerald-400">/&gt;</span>
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto mb-12 rounded"></div>

          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg shadow-xl">
                <p className="text-gray-300 mb-4">
                  <span className="text-emerald-400">&#47;**</span><br />
                  * I'm a passionate developer specializing in full-stack development, backend engineering, and AI-driven automation.<br />
                  * I build scalable solutions using FastAPI, Next.js, PostgreSQL, and automation tools like n8n.<br />
                  * Experienced in creating intelligent workflows, hiring platforms, social media automation, and real-world production systems.<br />
                  * With a strong foundation in Python, JavaScript, C++, and the MERN stack,<br />
                  * I enjoy crafting impactful, user-centric applications that merge innovation with usability.<br />
                  <span className="text-emerald-400">**&#47;</span>
                </p>

                <p className="text-gray-300 mb-4">
                  My journey in tech began with a deep curiosity for problem-solving and programming. Since then, I&apos;ve worked on diverse projects—from a travel website to a course-selling platform—while also exploring AI, ML and cybersecurity.
                </p>
                <p className="text-gray-300">
                  When I&apos;m not coding, I enjoy playing chess, diving into new tech trends, and continuously expanding my knowledge in AI.
                </p>
              </div>

            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-lg relative">
                <div className="h-8 bg-gray-800 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <Image
                  src="/profile.png"
                  alt="About me"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Intrest */}
      <Interest />
      {/* Skills Section */}
      <Skils />
      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />


      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}