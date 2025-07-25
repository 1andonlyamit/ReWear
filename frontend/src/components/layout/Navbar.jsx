import React, { useState } from 'react';
import { Menu, X, Shirt } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Shirt className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-xl font-bold text-slate-800">ReWear</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-slate-600 hover:text-emerald-600 transition-colors duration-200"
            >
              Home
            </a>
            <a 
              href="#browse" 
              className="text-slate-600 hover:text-emerald-600 transition-colors duration-200"
            >
              Browse
            </a>
            <a 
              href="#login" 
              className="text-slate-600 hover:text-emerald-600 transition-colors duration-200"
            >
              Login
            </a>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-50 transition-colors"
          >
            {mobileMenuOpen ? 
              <X className="h-6 w-6 text-slate-600" /> : 
              <Menu className="h-6 w-6 text-slate-600" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#home" 
              className="block px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#browse" 
              className="block px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse
            </a>
            <a 
              href="#login" 
              className="block px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </a>
            <button className="w-full text-left px-3 py-2 bg-emerald-600 text-white rounded-lg mt-2 hover:bg-emerald-700 transition-colors font-medium">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;