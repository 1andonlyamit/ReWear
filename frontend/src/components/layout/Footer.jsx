import React from 'react';
import { Shirt } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <Shirt className="h-8 w-8 text-emerald-400" />
              <span className="ml-2 text-xl font-bold">ReWear</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Sustainable fashion through community clothing exchange. Join us in creating a more sustainable future, one swap at a time.
            </p>
          </div>
          
          {/* Platform Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Platform</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="/" className="hover:text-white transition-colors duration-200">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors duration-200">
                  Browse Items
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors duration-200">
                  Upload Items
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors duration-200">
                  Point System
                </a>
              </li>
            </ul>
          </div>
          
          {/* Community Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Community</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="/" className="hover:text-white transition-colors duration-200">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors duration-200">
                  Support
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors duration-200">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="/" className="hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors duration-200">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              &copy; 2025 ReWear. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/" className="text-slate-400 hover:text-white transition-colors text-sm">
                Privacy
              </a>
              <a href="/" className="text-slate-400 hover:text-white transition-colors text-sm">
                Terms
              </a>
              <a href="/" className="text-slate-400 hover:text-white transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;