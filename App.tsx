import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ChatAgent } from './components/ChatAgent';
import { LandingPage } from './components/LandingPage';
import { SearchPage } from './components/SearchPage';

export default function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    // Scroll behavior setting
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Hash router logic
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const isSearchPage = route.startsWith('#/cari-rumah');

  return (
    <div className="min-h-screen bg-luxury-offwhite font-sans overflow-x-hidden selection:bg-luxury-green selection:text-luxury-yellow">
      <Navbar />
      
      {/* Route Rendering */}
      {isSearchPage ? <SearchPage /> : <LandingPage />}

      <Footer />
      
      {/* Floating AI Agent */}
      <ChatAgent />
    </div>
  );
}