import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, ArrowRightIcon, CheckCircleIcon } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-red-950 to-gray-950 text-white overflow-hidden pt-32 pb-24">
      {/* Unique geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -left-40 w-80 h-80 border border-red-700/30 rounded-full"></div>
          <div className="absolute top-60 -right-20 w-60 h-60 border border-red-700/40 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-red-600/30 rounded-full"></div>
          {/* Diagonal lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-700/20 to-transparent transform -rotate-12"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent transform rotate-6"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-700/20 to-transparent transform -rotate-3"></div>
          </div>
          {/* Accent shapes */}
          <div className="absolute top-20 right-1/4 w-24 h-24 bg-red-700/10 rounded-xl transform rotate-12"></div>
          <div className="absolute bottom-40 left-1/3 w-16 h-16 bg-red-600/10 rounded-xl transform -rotate-12"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-200">
              Unlock Your Vision
            </span>
            <span className="block mt-1 text-3xl md:text-4xl lg:text-5xl text-red-300/90">
              Accelerate Your Growth
            </span>
          </h1>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-10 text-lg">
            <div className="flex items-center justify-center">
              <CheckCircleIcon className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" />
              <span className="text-red-100">Data-Driven Insights</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircleIcon className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" />
              <span className="text-red-100">Proven Strategies</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircleIcon className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" />
              <span className="text-red-100">Measurable Results</span>
            </div>
          </div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-300">
            We're a team of growth strategists, data scientists, and
            innovation experts helping ambitious companies scale in the
            digital economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/#careers">
              <Button className="text-lg px-8 py-4 w-full sm:w-auto relative overflow-hidden group">
                <span className="relative z-10 flex items-center justify-center">
                  Join Our Team
                  <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
            <Link to="/#about">
              <Button variant="outline" className="text-lg px-8 py-4 text-red-200 border-red-700/70 hover:bg-red-900/20 w-full sm:w-auto">
                Learn More
                <ChevronRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};