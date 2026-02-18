import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Area', href: '#area' },
    { name: 'Promo', href: '#promo' },
    { name: 'Konsultasi', href: '#footer' },
  ];

  return (
    <>
      {/* 
        Outer Container: Fixed position, establishes Z-index context.
        We DO NOT animate this container to avoid 'transform' breaking 'fixed' children context (the backdrop).
        pointer-events-none ensures clicks pass through the empty areas of this container.
      */}
      <div className="fixed top-6 inset-x-0 z-50 mx-auto max-w-5xl px-4 md:px-0 pointer-events-none">
        
        {/* The Animated Navbar Pill - pointer-events-auto to re-enable clicking on the navbar itself */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-50 flex items-center justify-between rounded-full border border-luxury-gold/20 bg-luxury-green/95 px-6 py-3 backdrop-blur-xl shadow-2xl shadow-luxury-green/20 pointer-events-auto"
        >
          {/* Logo */}
          <a href="#" className="font-serif text-xl font-bold tracking-tight text-white">
            TIAR<span className="text-luxury-yellow">.</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-luxury-yellow transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-yellow transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#footer"
              className="rounded-full bg-luxury-yellow px-5 py-2 text-xs font-bold text-luxury-green transition-transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,234,0,0.3)] active:scale-95"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-luxury-yellow p-1 active:scale-95 transition-transform"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </motion.div>

        {/* Mobile Menu Overlay & Popup - Siblings to the Navbar Pill, not children */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop: Fixed inset-0 relative to viewport because parent has no transform */}
              <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm pointer-events-auto" 
                  onClick={() => setMobileMenuOpen(false)}
              />
              
              {/* Popup Card: Absolute relative to the container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -20, x: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10, x: 10 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                className="absolute top-full right-4 md:right-0 mt-2 w-64 bg-luxury-green rounded-2xl shadow-2xl border border-luxury-gold/30 p-2 z-50 flex flex-col overflow-hidden md:hidden origin-top-right pointer-events-auto"
              >
                {/* Decorative faint glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 rounded-full blur-2xl pointer-events-none" />

                <div className="flex flex-col relative z-10">
                  {links.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="font-serif text-lg text-white hover:bg-white/5 px-4 py-3 rounded-xl transition-all flex items-center justify-between group"
                    >
                      {link.name}
                      <ArrowRight size={16} className="text-luxury-yellow opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    </motion.a>
                  ))}
                </div>

                <div className="mt-2 pt-2 border-t border-white/10 px-2 pb-2">
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    href="#footer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full py-3 bg-luxury-yellow text-luxury-green font-bold text-center rounded-xl text-sm hover:shadow-[0_0_15px_rgba(255,234,0,0.4)] transition-shadow"
                  >
                    Hubungi Kami
                  </motion.a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};