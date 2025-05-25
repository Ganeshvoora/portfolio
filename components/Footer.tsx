import React from 'react'


const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col justify-center bg-gray-950 text-gray-400 py-8 px-4 md:px-6 border-t border-gray-800 min-h-[300px]">
        <div className="container mx-auto text-center">
          <p className="mb-2">© {new Date().getFullYear()} Your Voora Venkata Sai Ganesh. All rights reserved.</p>
          <p className="text-gray-500 text-xs">Built with Next.js, TailwindCSS & Framer Motion</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
