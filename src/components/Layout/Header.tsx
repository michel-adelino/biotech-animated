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
    <nav className={`fixed top-0 z-50 transition-all w-full duration-300 ${
      isScrolled 
        ? 'bg-purple-900/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-purple-500 font-display">
              <img src="/images/logo.png" alt="Biomol Visual" className="h-8 w-auto" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-12">
              <a href="/" className="text-gray-300 py-2 rounded-md text-small font-text transition-colors relative group hover:text-orange-500">
                <span className="relative z-10">Home</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/case-studies" className="text-gray-300 py-2 rounded-md text-small font-text transition-colors relative group hover:text-orange-500">
                <span className="relative z-10">Case Studies</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/team" className="text-gray-300 py-2 rounded-md text-small font-text transition-colors relative group hover:text-orange-500">
                <span className="relative z-10">Team</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/slab" className="text-gray-300 py-2 rounded-md text-small font-text transition-colors relative group hover:text-orange-500">
                <span className="relative z-10">SLAB</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/contact" className="text-gray-300 py-2 rounded-md text-small font-text transition-colors relative group hover:text-orange-500">
                <span className="relative z-10">Contact</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
