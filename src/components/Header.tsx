import React, { useState } from 'react';
import { Menu, X, Type } from 'lucide-react';
import { useTheme } from './theme-provider';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { adjustFontSize } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-800 shadow-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-full mx-auto px-6">
        <div className="flex items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="/Do You See The Sparkle Logo.png"
                alt="Do You See The Sparkle Logo"
                className="w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation & Actions */}
          <div className="hidden md:flex items-center ml-auto space-x-4">
            <nav className="flex space-x-2">
              <a
                href="/"
                className="text-gray-300 hover:text-yellow-600 px-3 py-2 text-xl font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#articles"
                className="text-gray-300 hover:text-yellow-600 px-3 py-2 text-xl font-medium transition-colors"
              >
                Articles
              </a>
              <a
                href="#shop"
                className="text-gray-300 hover:text-yellow-600 px-3 py-2 text-xl font-medium transition-colors"
              >
                Shop
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-yellow-600 px-3 py-2 text-xl font-medium transition-colors"
              >
                About
              </a>
            </nav>

            <div className="flex items-center space-x-2">
              <div className="hidden lg:flex items-center">
                <button
                  onClick={adjustFontSize}
                  className="p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  aria-label="Adjust font size"
                >
                  <Type className="h-5 w-5" />
                </button>
              </div>
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 shadow-md hover:shadow-lg text-base">
                Free Guide
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 border-t border-gray-700">
            <a href="/" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
              Home
            </a>
            <a href="#articles" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
              Articles
            </a>
            <a href="#shop" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
              Shop
            </a>
            <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
              About
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
