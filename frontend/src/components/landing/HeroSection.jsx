import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';

// Hero Section Component
export default function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-br from-slate-50 to-emerald-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            Swap, Share, 
            <span className="text-emerald-600"> Sustain</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Join ReWear's community clothing exchange. Give your unused clothes a new life and discover unique pieces from others.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105 flex items-center justify-center shadow-lg">
              Start Swapping <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-all transform hover:scale-105 flex items-center justify-center shadow-lg">
              Browse Items <ShoppingBag className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};