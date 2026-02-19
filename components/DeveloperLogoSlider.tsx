import React from 'react';
import { motion } from 'framer-motion';

export const DeveloperLogoSlider: React.FC = () => {
  // Using specific Picsum IDs to ensure they look somewhat consistent/distinct as placeholders
  // In a real app, these would be logo URLs
  const logoIds = [20, 45, 60, 80, 100, 120, 140, 160];
  
  // Duplicate sets to create a seamless loop
  // We create 4 copies. Animating from 0% to -25% moves exactly one set length, creating the loop.
  const allLogos = [...logoIds, ...logoIds, ...logoIds, ...logoIds];

  return (
    <section className="py-12 bg-white border-b border-luxury-green/5 overflow-hidden relative z-10">
      
      {/* Section Label */}
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
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
            className="flex gap-16 md:gap-24 items-center min-w-max px-4"
            animate={{ x: ["0%", "-25%"] }}
            transition={{
              repeat: Infinity,
              duration: 30, // Adjust speed here (higher = slower)
              ease: "linear"
            }}
          >
            {allLogos.map((id, index) => (
              <div 
                  key={index} 
                  className="w-28 h-14 md:w-36 md:h-20 relative group flex items-center justify-center transition-all duration-500 cursor-pointer hover:scale-110"
              >
                 {/* Placeholder Image serving as Logo */}
                 <img 
                   src={`https://picsum.photos/id/${id}/300/150`} 
                   alt={`Developer Partner ${id}`} 
                   className="max-w-full max-h-full object-contain" 
                 />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};