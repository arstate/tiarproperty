import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 border border-luxury-gold/20 rounded-2xl pointer-events-none group-hover:scale-105 transition-transform duration-500" />
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Real Estate Experience" 
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-luxury-green/20 mix-blend-multiply" />
            </div>
            
            {/* Overlay Experience Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-luxury-yellow p-8 rounded-2xl shadow-xl hidden md:block"
            >
              <p className="text-luxury-green text-5xl font-bold font-serif">10+</p>
              <p className="text-luxury-green/80 font-bold text-sm tracking-widest uppercase mt-1">Years Excellence</p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-luxury-gold font-bold tracking-[0.3em] text-sm uppercase mb-4 block">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-luxury-green mb-8 leading-tight">
              Lebih Dari Sekadar <br />
              <span className="italic text-luxury-gold">Agen Properti.</span>
            </h2>
            <p className="text-luxury-slate text-lg mb-6 leading-relaxed">
              Tiar Property hadir untuk menjawab keresahan masyarakat yang merasa hunian layak sulit digapai. Kami bukan sekadar menjual unit, kami mendesain kemudahan finansial.
            </p>
            <p className="text-luxury-slate text-lg mb-10 leading-relaxed">
              Berfokus di Surabaya & Sidoarjo, kami telah membantu lebih dari 500 keluarga memiliki aset pertama mereka melalui skema pembayaran yang inovatif dan pendampingan legalitas yang transparan.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100 mb-8">
              <div>
                <p className="text-3xl font-bold text-luxury-green mb-1">500+</p>
                <p className="text-sm text-luxury-slate uppercase tracking-wider font-medium">Happy Families</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-luxury-green mb-1">12+</p>
                <p className="text-sm text-luxury-slate uppercase tracking-wider font-medium">Prime Areas</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.hash = '#/about-us'}
              className="inline-flex items-center gap-2 px-8 py-4 bg-luxury-green text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-black transition-colors shadow-xl shadow-luxury-green/20 cursor-pointer"
            >
              Lihat Lengkap About Us <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};