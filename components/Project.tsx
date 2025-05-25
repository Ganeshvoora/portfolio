import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Define TypeScript interface for the project details
interface ProjectProps {
  details: {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    isFeatured?: boolean;
    links: {
      demo?: string;
      code?: string;
    }
  }
}

const Project = ({ details }: ProjectProps) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ y: -10 }}
      className="bg-gray-900 rounded-lg overflow-hidden shadow-md border border-gray-700 hover:border-emerald-500 transition-colors duration-300"
    >
      <div className="relative h-48">
        <Image
          src={details.image}
          alt={details.title}
          fill
          className="object-cover"
          loading='lazy'
        />
        {details.isFeatured && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="bg-emerald-500 text-white text-xs font-medium px-2 py-1 rounded">Featured</div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{details.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {details.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-emerald-500 bg-opacity-20 text-white px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-400 mb-4">
          {details.description}
        </p>
        <div className="flex space-x-3">
          {details.links.demo && (
            <Link href={details.links.demo} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              Demo
            </Link>
          )}
          {details.links.code && (
            <Link href={details.links.code} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 flex items-center">
              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Code
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Project