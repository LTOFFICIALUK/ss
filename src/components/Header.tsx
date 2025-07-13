import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Import optimized logo images - WebP versions
import logo279x40_webp from '../assets/images/webp/logo-279x40.webp';
import logo279x40_2x_webp from '../assets/images/webp/logo-279x40@2x.webp';
import logo200x29_webp from '../assets/images/webp/logo-200x29.webp';
import logo200x29_2x_webp from '../assets/images/webp/logo-200x29@2x.webp';
// Import PNG fallbacks
import logo279x40 from '../assets/images/optimized/logo-279x40.png';
import logo279x40_2x from '../assets/images/optimized/logo-279x40@2x.png';
import logo200x29 from '../assets/images/optimized/logo-200x29.png';
import logo200x29_2x from '../assets/images/optimized/logo-200x29@2x.png';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/guides', label: 'Guides' },
    { path: '/about', label: 'About' },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleMenuToggle();
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 relative z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between relative">
          {/* Hamburger Menu Button - Only visible on mobile */}
          <div className="pl-4 flex items-center md:hidden">
            <button
              className="-ml-2 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={handleMenuToggle}
              onKeyDown={handleKeyDown}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
              aria-controls="mobile-menu"
            >
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Logo - Centered on mobile, left-aligned on desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:transform-none md:flex md:items-center">
            <Link 
              to="/" 
              className="block hover:opacity-80 transition-opacity"
              aria-label="Successful Streamer Home"
            >
              <picture>
                {/* Mobile WebP with fallback */}
                <source 
                  media="(max-width: 768px)" 
                  type="image/webp"
                  srcSet={`${logo200x29_webp} 1x, ${logo200x29_2x_webp} 2x`}
                />
                {/* Mobile PNG fallback */}
                <source 
                  media="(max-width: 768px)" 
                  srcSet={`${logo200x29} 1x, ${logo200x29_2x} 2x`}
                />
                {/* Desktop WebP */}
                <source 
                  type="image/webp"
                  srcSet={`${logo279x40_webp} 1x, ${logo279x40_2x_webp} 2x`}
                />
                {/* Desktop PNG fallback */}
                <img 
                  src={logo279x40}
                  srcSet={`${logo279x40} 1x, ${logo279x40_2x} 2x`}
                  alt="Successful Streamer" 
                  className="h-8 w-auto object-contain"
                  width="279"
                  height="40"
                  loading="eager"
                />
              </picture>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-6">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`
                    py-2 px-3 rounded-md transition-colors text-base font-medium
                    hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400
                    ${isActive(path) ? 'text-blue-600' : 'text-gray-600'}
                  `}
                  aria-current={isActive(path) ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Dropdown */}
          <div
            id="mobile-menu"
            className={`
              absolute top-full left-0 right-0 bg-white
              border-b border-gray-200 shadow-lg
              transform transition-all duration-200 ease-in-out md:hidden
              ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-2 opacity-0 invisible'}
            `}
          >
            <ul className="py-2 px-4">
              {navItems.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={`
                      block py-3 px-4 rounded-md transition-colors text-base font-medium
                      hover:bg-gray-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400
                      ${isActive(path) ? 'text-blue-600 bg-gray-50' : 'text-gray-600'}
                    `}
                    aria-current={isActive(path) ? 'page' : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empty div to maintain flex spacing on mobile */}
          <div className="w-10 md:hidden"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 