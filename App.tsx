import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ChatAgent } from './components/ChatAgent';
import { LandingPage } from './components/LandingPage';
import { SearchPage } from './components/SearchPage';
import { AboutPage } from './components/AboutPage';
import { PropertyDetailPage } from './components/PropertyDetailPage';

export default function App() {
  const [route, setRoute] = useState(window.location.pathname);
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    // Scroll behavior setting
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Path router logic
    const handleLocationChange = () => {
      setRoute(window.location.pathname);
      setHash(window.location.hash);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    
    // Custom event for programmatic navigation
    window.addEventListener('pushstate', handleLocationChange);
    window.addEventListener('replacestate', handleLocationChange);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('pushstate', handleLocationChange);
      window.removeEventListener('replacestate', handleLocationChange);
    };
  }, []);

  const isSearchPage = route.startsWith('/cari-rumah');
  const isAboutPage = route.startsWith('/about-us');
  const isPropertyDetailPage = route.startsWith('/properti/');

  return (
    <div className="min-h-screen bg-luxury-offwhite font-sans overflow-x-hidden selection:bg-luxury-green selection:text-luxury-yellow">
      <Navbar />
      
      {/* Route Rendering */}
      {isPropertyDetailPage ? (
        <PropertyDetailPage />
      ) : isSearchPage ? (
        <SearchPage />
      ) : isAboutPage ? (
        <AboutPage />
      ) : (
        <LandingPage currentHash={hash} />
      )}

      <Footer />
      
      {/* Floating AI Agent - Hidden on Property Detail Page */}
      {!isPropertyDetailPage && <ChatAgent />}
    </div>
  );
}