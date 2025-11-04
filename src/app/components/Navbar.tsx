'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">
            Sambhav Magotra
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors">Home</a>
            <a href="#experience" className="text-gray-300 hover:text-orange-400 transition-colors">Experience</a>
            <a href="#projects" className="text-gray-300 hover:text-orange-400 transition-colors">Projects</a>
            <a href="#achievements" className="text-gray-300 hover:text-orange-400 transition-colors">Achievements</a>
            <a href="#skills" className="text-gray-300 hover:text-orange-400 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <a href="#home" className="block text-gray-300 hover:text-orange-400 transition-colors py-2">Home</a>
            <a href="#experience" className="block text-gray-300 hover:text-orange-400 transition-colors py-2">Experience</a>
            <a href="#projects" className="block text-gray-300 hover:text-orange-400 transition-colors py-2">Projects</a>
            <a href="#achievements" className="block text-gray-300 hover:text-orange-400 transition-colors py-2">Achievements</a>
            <a href="#skills" className="block text-gray-300 hover:text-orange-400 transition-colors py-2">Skills</a>
            <a href="#contact" className="block text-gray-300 hover:text-orange-400 transition-colors py-2">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}