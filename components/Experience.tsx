"use client";
import React from 'react';
import { motion } from 'framer-motion';
import experienceData from '@/data/experince';
import Image from 'next/image';

const Experience = () => {
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
                staggerChildren: 0.3,
                delayChildren: 0.2,
            }
        }
    };

    const { experience } = experienceData;

    return (
        <motion.section
            id="experience"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="py-20 px-4 md:px-6 bg-gray-900 border-t border-gray-700"
        >
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-white mb-4">
                    <span className="text-emerald-400">&lt;</span> Work Experience <span className="text-emerald-400">/&gt;</span>
                </h2>
                <div className="h-1 w-20 bg-emerald-500 mx-auto mb-12 rounded"></div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="relative max-w-4xl mx-auto"
                >
                    {/* Timeline line */}
                    <div className="absolute left-9 top-0 h-full w-0.5 bg-gray-700" aria-hidden="true"></div>
                    
                    {experience.map((job, index) => (
                        <motion.div key={index} variants={fadeIn} className="mb-12 pl-20 relative">
                            {/* Timeline dot */}
                            <div className="absolute left-[27px] top-1 w-6 h-6 bg-gray-900 border-2 border-emerald-500 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            </div>

                            <motion.div 
                                whileHover={{ y: -5, borderColor: 'rgb(16 185 129)' }}
                                className="bg-gray-900 border border-gray-700 p-6 rounded-lg shadow-lg transition-colors duration-300"
                            >
                                <div className="flex flex-col sm:flex-row justify-between items-start mb-3">
                                    <div className="flex items-center space-x-4">
                                        {job.image_url && (
                                            <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden bg-gray-100 border border-gray-700 flex items-center justify-center">
                                                <Image src={job.image_url} alt={`${job.company} logo`} width={48} height={48} className="object-contain" />
                                            </div>
                                        )}
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                                            <p className="text-emerald-400 font-medium">{job.company}</p>
                                            <p className="text-sm text-gray-400 mt-1">{job.location}</p>
                                        </div>
                                    </div>
                                    <span className="text-sm text-gray-400 mt-2 sm:mt-0 sm:text-right whitespace-nowrap">{job.duration}</span>
                                </div>
                                <p className="text-gray-300 mb-4">{job.description}</p>
                                
                                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-400">
                                    {(job.responsibilities || job.key_contributions)?.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {job.skills.map((skill, i) => (
                                        <span key={i} className="text-xs bg-emerald-600 bg-opacity-20 text-emerald-100 px-2 py-1 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Experience;
