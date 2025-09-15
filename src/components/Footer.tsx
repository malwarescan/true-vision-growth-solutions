import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, GithubIcon, ArrowUpIcon } from 'lucide-react';
import { Logo } from './Logo';
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <Logo className="h-16 w-auto mb-6 bg-white p-2 rounded-lg" />
            <p className="text-gray-400 text-sm mb-6">
              True Vision Growth Solutions is a data-driven growth consultancy
              helping innovative companies scale in the digital economy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full" aria-label="Twitter">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full" aria-label="GitHub">
                <GithubIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Growth Strategy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Data Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Market Expansion
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <address className="not-italic text-gray-400 text-sm space-y-3">
              <p>1200 Brickell Avenue, Suite 800</p>
              <p>Miami, FL</p>
              <p>hello@truevisiongrowth.com</p>
              <p>(305) 555-7890</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} True Vision Growth Solutions Inc.
            All rights reserved.
          </p>
          <button onClick={scrollToTop} className="mt-4 md:mt-0 p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white transition-colors" aria-label="Scroll to top">
            <ArrowUpIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>;
};