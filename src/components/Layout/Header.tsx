'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark-highlighted/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-pink-primary font-heading">
              Biomol Visual
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-white hover:text-pink-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#case-studies" className="text-gray-300 hover:text-pink-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Case Studies</a>
              <a href="#team" className="text-gray-300 hover:text-pink-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Team</a>
              <a href="#slab" className="text-gray-300 hover:text-pink-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">SLAB</a>
              <a href="#contact" className="text-gray-300 hover:text-pink-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
