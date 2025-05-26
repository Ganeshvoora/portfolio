import React from 'react'
import { motion } from "framer-motion";
import projects from '@/data/projects';
import Project from './Project';


const Projects = () => {
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
            id="projects"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="py-20 px-4 md:px-6  bg-gray-900 border-t border-gray-700"
        >
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-white mb-4">
                    <span className="text-emerald-400">&lt;</span> My Projects <span className="text-emerald-400">/&gt;</span>
                </h2>
                <div className="h-1 w-20 bg-emerald-500 mx-auto mb-12 rounded"></div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <Project key={project.id} details={project} />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Projects
