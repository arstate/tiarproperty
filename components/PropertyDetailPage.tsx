import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, ArrowLeft, CheckCircle2, Phone, MessageCircle, Maximize, ShieldCheck, Share2 } from 'lucide-react';

// Mock Database for Detail Page
const propertyDB = [
  {
    id: 1,
    title: "The Grand Dhika",
    location: "Sidoarjo Kota (Nempel Surabaya)",
    priceDisplay: "Start 500jt-an",
    fullPrice: "Rp 500.000.000",
    beds: 3,
    baths: 2,
    landSize: "90m²",
    buildingSize: "45m²",
    type: "Tropical Modern",
    description: "Hunian modern tropis yang terletak strategis di perbatasan Sidoarjo dan Surabaya. Dilengkapi dengan fasilitas one gate system, taman bermain anak, dan keamanan 24 jam. Desain ceiling tinggi membuat sirkulasi udara sangat lancar, cocok untuk keluarga muda yang menginginkan hunian sehat.",
    features: ["One Gate System", "CCTV 24 Jam", "Taman Bermain", "Masjid Complex", "Row Jalan 8 Meter", "Smart Door Lock"],
    mainImage: "https://picsum.photos/1200/800?random=10",
    gallery: [
      "https://picsum.photos/800/600?random=101",
      "https://picsum.photos/800/600?random=102",
      "https://picsum.photos/800/600?random=103",
      "https://picsum.photos/800/600?random=104"
    ]
  },
  {
    id: 2,
    title: "Urban Living Trosobo",
    location: "Krian, Sidoarjo",
    priceDisplay: "Cicilan 2jt-an",
    fullPrice: "Rp 300.000.000",
    beds: 2,
    baths: 1,
    landSize: "72m²",
    buildingSize: "36m²",
    type: "Scandinavian",
    description: "Konsep hunian Scandinavian yang minimalis dan fungsional. Terletak di kawasan berkembang Krian dengan akses mudah ke jalan bypass. Sangat cocok untuk milenial yang mencari rumah pertama dengan cicilan yang sangat terjangkau setara biaya kos.",
    features: ["Minimalist Garden", "Carport Luas", "Dekat Pasar Krian", "Bebas Banjir", "Air PDAM"],
    mainImage: "https://picsum.photos/1200/800?random=11",
    gallery: [
      "https://picsum.photos/800/600?random=111",
      "https://picsum.photos/800/600?random=112",
      "https://picsum.photos/800/600?random=113"
    ]
  },
  {
    id: 3,
    title: "Royal Juanda",
    location: "Sedati, Dekat Bandara",
    priceDisplay: "Start 800jt-an",
    fullPrice: "Rp 850.000.000",
    beds: 4,
    baths: 3,
    landSize: "120m²",
    buildingSize: "100m²",
    type: "Classic Premium",
    description: "Hunian prestisius selangkah dari Bandara Juanda T2. Menawarkan kemewahan desain klasik dengan sentuhan modern. Lingkungan sangat eksklusif dengan tetangga terpilih. Nilai investasi yang sangat tinggi karena lokasi premium.",
    features: ["Club House", "Kolam Renang", "Underground Cable", "Fiber Optic Ready", "Gym Center"],
    mainImage: "https://picsum.photos/1200/800?random=12",
    gallery: [
      "https://picsum.photos/800/600?random=121",
      "https://picsum.photos/800/600?random=122",
      "https://picsum.photos/800/600?random=123"
    ]
  },
  {
    id: 4,
    title: "Sapphire Residence",
    location: "Waru, Sidoarjo",
    priceDisplay: "Start 600jt-an",
    fullPrice: "Rp 600.000.000",
    beds: 3,
    baths: 2,
    landSize: "90m²",
    buildingSize: "50m²",
    type: "Industrial",
    description: "Cluster baru dengan desain Industrial yang kekinian. Lokasi sangat strategis di Waru, pintu gerbang Surabaya-Sidoarjo. Dekat dengan terminal Bungurasih dan akses tol.",
    features: ["Smart Home System", "Rooftop Garden Option", "Security 24H", "Dekat Mall Cito"],
    mainImage: "https://picsum.photos/1200/800?random=13",
    gallery: [
      "https://picsum.photos/800/600?random=131",
      "https://picsum.photos/800/600?random=132",
      "https://picsum.photos/800/600?random=133"
    ]
  },
  {
    id: 5,
    title: "Green View Regency",
    location: "Sidoarjo Kota",
    priceDisplay: "Start 450jt-an",
    fullPrice: "Rp 450.000.000",
    beds: 2,
    baths: 1,
    landSize: "84m²",
    buildingSize: "40m²",
    type: "Minimalist",
    description: "Perumahan asri di jantung kota Sidoarjo. Lingkungan hijau dengan banyak pepohonan rindang. Akses mudah ke Alun-alun Sidoarjo dan pusat pemerintahan.",
    features: ["Taman Hijau", "Jogging Track", "Playground", "One Gate"],
    mainImage: "https://picsum.photos/1200/800?random=14",
    gallery: [
      "https://picsum.photos/800/600?random=141",
      "https://picsum.photos/800/600?random=142"
    ]
  },
  {
    id: 6,
    title: "Citra Garden Estate",
    location: "Waru",
    priceDisplay: "Start 1.2M",
    fullPrice: "Rp 1.200.000.000",
    beds: 4,
    baths: 3,
    landSize: "150m²",
    buildingSize: "120m²",
    type: "Modern Luxury",
    description: "The epitome of luxury living. Kawasan elite dengan fasilitas bintang lima. Desain arsitektur kelas dunia dengan material premium. Privasi dan kenyamanan penghuni adalah prioritas utama.",
    features: ["Private Pool Option", "Golf Course View", "Luxury Club House", "International School Nearby"],
    mainImage: "https://picsum.photos/1200/800?random=15",
    gallery: [
      "https://picsum.photos/800/600?random=151",
      "https://picsum.photos/800/600?random=152"
    ]
  }
];

export const PropertyDetailPage: React.FC = () => {
  const [property, setProperty] = useState<any>(null);

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);

    // Parse ID from URL hash: #/properti/1
    const hash = window.location.hash;
    const id = parseInt(hash.split('/').pop() || "0");
    const found = propertyDB.find(p => p.id === id);
    
    if (found) {
        setProperty(found);
    }
  }, []);

  if (!property) {
    return (
        <div className="min-h-screen pt-32 flex items-center justify-center">
            <p>Loading Property Details...</p>
        </div>
    );
  }

  const whatsappMessage = `Halo Admin Tiar Property, saya tertarik dengan unit *${property.title}* di ${property.location} yang harganya ${property.priceDisplay}. Boleh minta info pricelist dan simulasi KPR?`;
  const whatsappLink = `https://wa.me/6282227896809?text=${encodeURIComponent(whatsappMessage)}`;

  // Safe access to gallery items
  const galleryImage1 = property.gallery.length > 0 ? property.gallery[0] : property.mainImage;
  const galleryImage2 = property.gallery.length > 1 ? property.gallery[1] : null;
  const remainingCount = property.gallery.length > 2 ? property.gallery.length - 2 : 0;

  return (
    <div className="bg-white min-h-screen pt-24 pb-24 md:pb-12 font-sans relative">
        
        {/* Breadcrumb / Back */}
        <div className="max-w-7xl mx-auto px-6 mb-6">
            <button 
                onClick={() => window.history.back()}
                className="flex items-center gap-2 text-luxury-slate hover:text-luxury-green transition-colors text-sm font-semibold uppercase tracking-wider cursor-pointer"
            >
                <ArrowLeft size={16} /> Kembali ke Katalog
            </button>
        </div>

        {/* Hero Image Grid */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-auto lg:h-[60vh]">
                {/* Main Image (Left) */}
                <div className="lg:col-span-8 h-[40vh] lg:h-full rounded-3xl overflow-hidden relative group">
                     <img src={property.mainImage} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Main" />
                     <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-luxury-green font-bold text-sm uppercase tracking-wide">
                        {property.type}
                     </div>
                </div>

                {/* Side Images (Right) - Fixed Flex Layout for Desktop, Hidden/Different for Mobile? No, keep stacked on mobile */}
                <div className="lg:col-span-4 flex lg:flex-col gap-4 h-[20vh] lg:h-full">
                    {/* Top Right */}
                    <div className="flex-1 rounded-3xl overflow-hidden relative group">
                        <img src={galleryImage1} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Gallery 1" />
                    </div>
                    
                    {/* Bottom Right (with Overlay if needed) */}
                    {galleryImage2 ? (
                         <div className="flex-1 rounded-3xl overflow-hidden relative group cursor-pointer">
                            <img src={galleryImage2} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Gallery 2" />
                            {remainingCount > 0 && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold text-xl hover:bg-black/40 transition-colors backdrop-blur-[2px]">
                                    +{remainingCount} More Photos
                                </div>
                            )}
                        </div>
                    ) : (
                         <div className="flex-1 rounded-3xl overflow-hidden relative bg-gray-100 flex items-center justify-center text-gray-400">
                             <p className="text-sm">No more photos</p>
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* Main Content Grid - Using XL breakpoint to prevent overlapping on small desktops (iPad Pro, Laptop 13") */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 xl:grid-cols-12 gap-12">
            
            {/* Left Content: Details */}
            <div className="xl:col-span-8">
                
                {/* Title Section */}
                <div className="mb-8 border-b border-gray-100 pb-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
                        <div>
                            <h1 className="font-serif text-4xl md:text-5xl text-luxury-green mb-2">{property.title}</h1>
                            <div className="flex items-center gap-2 text-luxury-slate text-lg">
                                <MapPin size={18} /> {property.location}
                            </div>
                        </div>
                        <div className="flex gap-2">
                             <button className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 text-luxury-slate transition-colors cursor-pointer">
                                <Share2 size={20} />
                             </button>
                        </div>
                    </div>

                    {/* Quick Specs Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        <div className="bg-luxury-offwhite p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                            <Bed size={24} className="text-luxury-gold mb-2" />
                            <span className="font-bold text-luxury-green text-lg">{property.beds}</span>
                            <span className="text-xs text-gray-500 uppercase">Kamar Tidur</span>
                        </div>
                        <div className="bg-luxury-offwhite p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                            <Bath size={24} className="text-luxury-gold mb-2" />
                            <span className="font-bold text-luxury-green text-lg">{property.baths}</span>
                            <span className="text-xs text-gray-500 uppercase">Kamar Mandi</span>
                        </div>
                         <div className="bg-luxury-offwhite p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                            <Maximize size={24} className="text-luxury-gold mb-2" />
                            <span className="font-bold text-luxury-green text-lg">{property.landSize}</span>
                            <span className="text-xs text-gray-500 uppercase">Luas Tanah</span>
                        </div>
                         <div className="bg-luxury-offwhite p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                            <ShieldCheck size={24} className="text-luxury-gold mb-2" />
                            <span className="font-bold text-luxury-green text-lg">SHM</span>
                            <span className="text-xs text-gray-500 uppercase">Sertifikat</span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="mb-10">
                    <h2 className="font-serif text-2xl text-luxury-green mb-4">Deskripsi Hunian</h2>
                    <p className="text-gray-600 leading-loose text-lg">
                        {property.description}
                    </p>
                </div>

                {/* Facilities */}
                <div className="mb-10">
                    <h2 className="font-serif text-2xl text-luxury-green mb-6">Fasilitas Unggulan</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {property.features.map((feature: string, i: number) => (
                            <div key={i} className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl hover:border-luxury-gold/30 transition-colors">
                                <CheckCircle2 size={20} className="text-luxury-green" />
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Right Sidebar: Sticky Pricing & CTA (Hidden on Mobile/Tablet/Small Desktop, Shown on Large Desktop) */}
            <div className="hidden xl:block xl:col-span-4">
                <div className="sticky top-32 bg-white p-8 rounded-3xl shadow-xl border border-luxury-gold/20 z-10">
                    <div className="text-center mb-6">
                         <p className="text-gray-500 text-sm mb-1">Harga Mulai</p>
                         <div className="font-serif text-4xl text-luxury-green mb-2">{property.priceDisplay}</div>
                         <p className="text-xs text-red-500 font-semibold bg-red-50 inline-block px-2 py-1 rounded">
                            *Harga dapat berubah sewaktu-waktu
                         </p>
                    </div>

                    <div className="space-y-4">
                        <motion.a 
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 bg-luxury-green text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-lg shadow-luxury-green/20"
                        >
                            <MessageCircle size={20} />
                            Chat Admin WhatsApp
                        </motion.a>
                        
                        <button className="w-full py-4 border border-luxury-green text-luxury-green rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-luxury-offwhite transition-colors cursor-pointer">
                            <Phone size={20} />
                            Jadwalkan Survey
                        </button>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-luxury-gold overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" alt="Agent" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Listed by</p>
                                <p className="font-bold text-luxury-green">Aries Kusheryana</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* Mobile/Tablet/Small Desktop Fixed Bottom CTA Bar (Visible only when sidebar is hidden) */}
        <div className="xl:hidden fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 p-4 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-40 flex items-center justify-between gap-4">
            <div className="flex-1">
                 <p className="text-xs text-gray-500">Harga Mulai</p>
                 <p className="font-serif text-xl font-bold text-luxury-green">{property.priceDisplay}</p>
            </div>
            <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-luxury-green text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg"
            >
                <MessageCircle size={20} />
                Chat WhatsApp
            </a>
        </div>

    </div>
  );
};