import React from 'react';
import { motion } from 'framer-motion';
import { Sparkle } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const items = [
    "Rumah di Sidoarjo Sold Out!",
    "Unit Terakhir di Cluster A",
    "Pak Budi - Approved KPR",
    "Ibu Siti - Serah Terima Kunci",
    "Kenaikan Harga Minggu Depan",
    "Diskon 50% Biaya Admin",
    "Type 36 - Sisa 2 Unit",
    "Promo Merdeka Berakhir Segera"
  ];

  // Create 4 sets to ensure seamless looping on large screens
  // We animate x from 0% to -25% (the width of one full set), which creates a perfect loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <section className="py-3 bg-gradient-to-r from-[#C5A059] via-[#E3C67B] to-[#C5A059] border-y border-luxury-green/10 overflow-hidden relative z-20 shadow-md">
      
      {/* Smooth Shimmer/Light Reflection Animation */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          repeat: Infinity,
          duration: 3, 
          repeatDelay: 2,
          ease: "easeInOut"
        }}
      >
        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 blur-md" />
      </motion.div>

      <div className="flex whitespace-nowrap relative z-10">
        <motion.div
          animate={{ x: ["0%", "-25%"] }}
          transition={{
            repeat: Infinity,
            duration: 20, // Faster speed (reduced from 30)
            ease: "linear"
          }}
          className="flex gap-16 items-center min-w-full"
        >
          {duplicatedItems.map((text, i) => (
            <div key={i} className="flex items-center gap-16 select-none flex-shrink-0">
              <span className="text-sm font-sans font-extrabold text-luxury-green tracking-[0.2em] uppercase antialiased drop-shadow-sm">
                {text}
              </span>
              <Sparkle 
                size={12} 
                className="text-luxury-green/70" 
                fill="currentColor"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};