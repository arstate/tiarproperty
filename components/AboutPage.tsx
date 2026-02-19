import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, MapPin, FileCheck, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const team = [
        {
            name: "Bachtiar Aryansyah",
            role: "Founder & CEO / Chief Creative Technologist",
            desc: "Sang visioner di balik ekosistem digital Tiar Property. Menggabungkan keahlian programming, high-end design, dan strategi media sosial untuk memastikan pengalaman pencarian rumah yang futuristik.",
            icon: <Code size={24} />,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Aries Kusheryana",
            role: "Senior Property Consultant & Marketing Agent",
            desc: "Ahli negosiasi lapangan yang memastikan Anda mendapatkan unit terbaik dengan harga paling kompetitif. Aries adalah kompas Anda dalam menjelajahi kawasan urban Surabaya-Sidoarjo.",
            icon: <MapPin size={24} />,
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Darningsih",
            role: "Head of Operations & Document Specialist",
            desc: "Sosok di balik layar yang memastikan semua berkas KPR dan administrasi berjalan smooth tanpa hambatan. Dari pengecekan berkas hingga akad.",
            icon: <FileCheck size={24} />,
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <div className="bg-luxury-offwhite min-h-screen pb-0 font-sans text-luxury-green pt-32">
            {/* Section 1: The Vision */}
            <section className="px-6 mb-24 max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center md:text-left"
                >
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none mb-12">
                        Definisi Baru <br/> 
                        <span className="italic text-luxury-gold">Memiliki Hunian.</span>
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start border-t border-luxury-green/10 pt-12">
                        <div>
                             <p className="text-2xl md:text-3xl font-serif leading-tight text-luxury-green">
                                Tiar Property hadir untuk menjembatani mimpi milenial Surabaya & Sidoarjo.
                            </p>
                        </div>
                        <div>
                            <p className="text-luxury-slate leading-relaxed text-lg mb-6">
                                Kami bukan sekadar agen. Kami adalah kurator hunian yang mengkurasi "Hidden Gem" di kawasan urban Sidoarjo dan pinggiran Surabaya. 
                            </p>
                            <p className="text-luxury-slate leading-relaxed text-lg">
                                Kami percaya bahwa setiap orang layak berhenti mengontrak dan mulai membangun aset masa depan mereka hari ini. Tanpa kerumitan birokrasi, tanpa DP yang mencekik.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Section 2: The Masterminds */}
            <section className="px-6 mb-32 max-w-7xl mx-auto">
                <div className="mb-12 flex items-end justify-between">
                    <h2 className="font-serif text-4xl md:text-5xl">The <span className="text-luxury-gold italic">Masterminds</span></h2>
                    <div className="hidden md:block w-1/3 h-px bg-luxury-green/20 mb-4"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group relative rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:shadow-luxury-gold/20 transition-all duration-500 overflow-hidden h-[500px] flex flex-col justify-end bg-luxury-green"
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0 z-0">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                {/* Gradient Overlay: Dark at bottom for text, transparent at top */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a221a] via-[#1a221a]/60 to-transparent opacity-90" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-8">
                                <div className="mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 origin-bottom-left w-fit p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-luxury-yellow">
                                    {member.icon}
                                </div>
                                
                                <h3 className="font-serif text-2xl font-bold mb-1 text-white">{member.name}</h3>
                                <p className="text-xs font-bold tracking-widest uppercase mb-4 text-luxury-gold">{member.role}</p>
                                
                                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                    <p className="text-sm text-gray-300 leading-relaxed pt-4 border-t border-white/20">
                                        {member.desc}
                                    </p>
                                </div>
                                <div className="group-hover:hidden text-sm text-luxury-gold flex items-center gap-1 mt-2 font-medium">
                                    View Profile <ArrowRight size={14} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Section 3: Our Base */}
            <section className="relative h-[600px] w-full bg-[#283428] overflow-hidden">
                <div className="absolute inset-0 opacity-60">
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253292.5694263623!2d112.5714396263539!3d-7.346853755455822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb30e75a342b%3A0xc48645062c3f87b8!2sSidoarjo%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1708579000000!5m2!1sen!2sid" 
                        width="100%" 
                        height="100%" 
                        style={{border:0, filter: 'grayscale(100%) invert(92%) contrast(83%)'}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Tiar Property Map"
                     />
                </div>
                
                {/* Floating Contact Box */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-auto z-10">
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        whileInView={{ scale: 1, opacity: 1, y: 0 }}
                        className="bg-white/95 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl max-w-md mx-auto text-center border border-white/40"
                    >
                        <h3 className="font-serif text-3xl mb-4 text-luxury-green">Mari Berdiskusi <br/> <span className="italic text-luxury-gold">Sambil Ngopi.</span></h3>
                        <p className="text-gray-500 mb-8 leading-relaxed">
                            Central Urban Office<br/>
                            Jl. Raya Surabaya-Sidoarjo No. 123<br/>
                            Jawa Timur
                        </p>
                        <button className="inline-flex items-center gap-2 bg-luxury-green text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-black transition-all hover:scale-105 shadow-lg shadow-luxury-green/20 cursor-pointer">
                            Get Directions <ArrowRight size={18} />
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};