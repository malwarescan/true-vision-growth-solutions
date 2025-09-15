import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { Logo } from './Logo';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Logo className="h-16 w-auto" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#about" className={`${scrolled ? 'text-gray-700 hover:text-red-800' : 'text-white hover:text-red-200'} font-medium transition-colors`}>
              About Us
            </Link>
            <Link to="/#careers" className={`${scrolled ? 'text-gray-700 hover:text-red-800' : 'text-white hover:text-red-200'} font-medium transition-colors`}>
              Careers
            </Link>
            <Link to="/#contact" className={`${scrolled ? 'text-gray-700 hover:text-red-800' : 'text-white hover:text-red-200'} font-medium transition-colors`}>
              Contact
            </Link>
            <Link to="/#careers" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 shadow-sm hover:shadow-md transition-all duration-300">
              Join Our Team
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`inline-flex items-center justify-center p-2 rounded-md ${scrolled ? 'text-gray-700 hover:text-red-800 hover:bg-gray-100' : 'text-white hover:text-red-200 hover:bg-gray-800/20'} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-700 transition-colors`} aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md shadow-lg">
            <Link to="/#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-800 hover:bg-gray-50 transition-colors" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link to="/#careers" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-800 hover:bg-gray-50 transition-colors" onClick={() => setIsOpen(false)}>
              Careers
            </Link>
            <Link to="/#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-800 hover:bg-gray-50 transition-colors" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link to="/#careers" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 transition-colors" onClick={() => setIsOpen(false)}>
              Join Our Team
            </Link>
          </div>
        </div>}
    </nav>;
};