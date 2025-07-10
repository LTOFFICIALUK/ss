import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/guides', label: 'Guides' },
    { path: '/about', label: 'About' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="hover:opacity-80 transition-opacity"
            aria-label="Successful Streamer Home"
          >
            <img 
              src={logo} 
              alt="Successful Streamer" 
              className="h-10 w-auto"
            />
          </Link>
          
          <ul className="flex space-x-6">
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
        </div>
      </nav>
    </header>
  );
};

export default Header; 