import React from 'react';
import { motion } from 'framer-motion';

export const DeveloperLogoSlider: React.FC = () => {
  // Using specific Picsum IDs to ensure they look somewhat consistent/distinct as placeholders
  // In a real app, these would be logo URLs
  // Using specific Picsum IDs and realistic developer names
  const developers = [
    { id: 20, name: "Ciputra Group" },
    { id: 45, name: "Pakuwon Group" },
    { id: 60, name: "Sinarmas Land" },
    { id: 80, name: "Intiland" },
    { id: 100, name: "BSA Land" },
    { id: 120, name: "Jayaland" },
    { id: 140, name: "Graha Family" },
    { id: 160, name: "CitraHarmoni" }
  ];
  
  // Duplicate sets to create a seamless loop
  const allDevelopers = [...developers, ...developers, ...developers, ...developers];

  return (
    <section className="py-16 bg-white border-b border-luxury-green/5 overflow-hidden relative z-10">
      
      {/* Section Label */}
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="text-[10px] md:text-xs font-bold text-luxury-gold uppercase tracking-[0.3em] border border-luxury-gold/20 px-4 py-2 rounded-full bg-luxury-offwhite/50 backdrop-blur-sm">
          Official Developer Partners
        </span>
      </div>

      <div className="relative w-full">
        {/* Gradient Masks for Smooth Edges */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="flex">
          <motion.div
            className="flex gap-12 md:gap-20 items-start min-w-max px-4"
            animate={{ x: ["0%", "-25%"] }}
            transition={{
              repeat: Infinity,
              duration: 40, // Slower speed for better readability
              ease: "linear"
            }}
          >
            {allDevelopers.map((dev, index) => (
              <div 
                  key={index} 
                  className="flex flex-col items-center gap-4 group transition-all duration-500 cursor-pointer hover:scale-105"
              >
                 {/* 1:1 Logo Container */}
                 <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow bg-luxury-offwhite flex items-center justify-center">
                    <img 
                      src={`https://picsum.photos/id/${dev.id}/200/200`} 
                      alt={dev.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                 </div>
                 {/* Developer Name */}
                 <span className="text-[10px] md:text-xs font-bold text-luxury-green/60 group-hover:text-luxury-gold transition-colors uppercase tracking-wider">
                    {dev.name}
                 </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};