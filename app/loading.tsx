"use client";
import React from 'react';
import { Geist_Mono } from 'next/font/google';

const geistMono = Geist_Mono({
  weight: ['400'],
  subsets: ['latin'],
});

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative p-8 bg-gray-800 border border-gray-700 rounded-md shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-xs text-gray-400">loading.sh</div>
          </div>
          
          <div className={`${geistMono.className} text-gray-300`}>
            <div className="flex">
              <span className="text-emerald-400 mr-2">$</span>
              <span className="typing-text text-gray-300">
                Loading portfolio
                <span className="inline-block animate-pulse">_</span>
              </span>
            </div>
            
            <div className="mt-2 flex items-center">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-2 h-2 bg-emerald-400 rounded-full"
                    style={{ 
                      animation: `pulse 1.5s infinite ease-in-out`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  ></div>
                ))}
              </div>
              <div className="ml-3 text-xs text-gray-400">
                Initializing components...
              </div>
            </div>
          </div>
          
          <style jsx>{`
            @keyframes pulse {
              0%, 100% { opacity: 0.2; }
              50% { opacity: 1; }
            }
          `}</style>
        </div>
        <p className="text-sm text-gray-400">Please wait while content loads</p>
      </div>
    </div>
  );
}