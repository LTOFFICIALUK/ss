import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

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
              <img 
                src={logo} 
                alt="Successful Streamer" 
                className="h-8 w-auto object-contain"
              />
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