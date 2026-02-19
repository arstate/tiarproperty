import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export const ChatAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body and html scroll when chat is open to "lock control" of the background
  // Relies on `scrollbar-gutter: stable` in CSS to prevent layout shift
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Blur Overlay - Locks control of the page behind */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-luxury-green/30 backdrop-blur-md"
            />
            
            {/* Chat Modal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
              transition={{ 
                type: "spring", 
                stiffness: 350, 
                damping: 30,
                mass: 0.8
              }}
              style={{ transformOrigin: 'bottom right' }}
              className="fixed z-[70] bottom-24 right-4 md:right-8 w-[90vw] md:w-[450px] h-[600px] md:h-[700px] max-h-[80vh] bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#C5A059]/40 flex flex-col"
            >
              {/* Iframe Container */}
              <div className="flex-1 bg-gray-50 relative">
                 <iframe 
                    src="https://agenttiar.vercel.app/#/chat/agentaitiar"
                    className="absolute inset-0 w-full h-full border-0"
                    title="Tiar Property AI Agent"
                 />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
             borderColor: isOpen ? '#C5A059' : 'rgba(255,255,255,0.4)',
        }}
        className="fixed bottom-6 right-6 z-[80] w-16 h-16 rounded-full shadow-[0_8px_30px_rgba(197,160,89,0.4)] flex items-center justify-center border outline-none overflow-hidden group transition-colors duration-300"
      >
        {/* State 1: Closed - Gold Gradient Background */}
        <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#C5A059] via-[#E3C67B] to-[#C5A059]"
            initial={false}
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
        />

        {/* State 2: Open - White Background (Matching Chat Modal) */}
        <motion.div
            className="absolute inset-0 bg-white"
            initial={false}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
        />

        {/* Shimmer Effect (Only visible when closed/gold) */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ x: '-150%' }}
          animate={{ 
            x: '150%',
            opacity: isOpen ? 0 : 1 
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            repeatDelay: 2,
            ease: "easeInOut",
            opacity: { duration: 0.2 }
          }}
        >
          <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 blur-sm" />
        </motion.div>

        {/* Icons */}
        <div className="relative z-10 w-full h-full flex items-center justify-center text-luxury-green">
            <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                    <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute"
                    >
                        <X size={32} strokeWidth={2.5} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="chat"
                        initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute flex items-center justify-center"
                    >
                        <div className="relative">
                            <MessageCircle size={32} strokeWidth={2.5} />
                            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-600 border-2 border-[#E3C67B]"></span>
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      </motion.button>
    </>
  );
};