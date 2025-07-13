import React from 'react';
import { Link } from 'react-router-dom';
import { GUIDE_CATEGORIES } from '../constants/guides';
// Import optimized logo images - WebP versions
import logo300x43_webp from '../assets/images/webp/logo-300x43.webp';
import logo223x32_mobile_webp from '../assets/images/webp/logo-223x32-mobile.webp';
import logo223x32_mobile_2x_webp from '../assets/images/webp/logo-223x32-mobile@2x.webp';
// Import PNG fallbacks
import logo300x43 from '../assets/images/optimized/logo-300x43.png';
import logo223x32_mobile from '../assets/images/optimized/logo-223x32-mobile.png';
import logo223x32_mobile_2x from '../assets/images/optimized/logo-223x32-mobile@2x.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { path: '/about', label: 'About' },
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms of Service' },
  ];

  const streamingPlatforms = [
    { name: 'AVIE Streaming', url: 'https://avie.tv', description: 'Multi-stream with AVIE' },
    { name: 'Twitch', url: 'https://twitch.tv', description: 'Live streaming platform' },
    { name: 'YouTube', url: 'https://youtube.com', description: 'Video and live streaming' },
    { name: 'Kick', url: 'https://kick.com', description: 'Creator-focused streaming' },
  ];

  const categoryEntries = Object.entries(GUIDE_CATEGORIES);

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <picture>
                {/* Mobile WebP with fallback */}
                <source 
                  media="(max-width: 768px)" 
                  type="image/webp"
                  srcSet={`${logo223x32_mobile_webp} 1x, ${logo223x32_mobile_2x_webp} 2x`}
                />
                {/* Mobile PNG fallback */}
                <source 
                  media="(max-width: 768px)" 
                  srcSet={`${logo223x32_mobile} 1x, ${logo223x32_mobile_2x} 2x`}
                />
                {/* Desktop WebP */}
                <source 
                  type="image/webp"
                  srcSet={`${logo300x43_webp} 1x`}
                />
                {/* Desktop PNG fallback */}
                <img 
                  src={logo300x43}
                  alt="SuccessfulStreamer Logo" 
                  className="h-10 w-auto object-contain"
                  width="300"
                  height="43"
                  loading="lazy"
                />
              </picture>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your comprehensive resource for streaming success. Learn from expert guides, 
              build your community, and grow your streaming career with proven strategies.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              {categoryEntries.map(([slug, name]) => (
                <li key={slug}>
                  <Link
                    to={`/category/${slug}`}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label={`Browse ${name} guides`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Streaming Platforms */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Streaming Platforms</h3>
            <ul className="space-y-2">
              {streamingPlatforms.map(({ name, url, description }) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label={`Visit ${name} - ${description}`}
                  >
                    <span className="font-medium">{name}</span>
                    <span className="block text-xs text-gray-500">{description}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label={`Go to ${label}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                to="/guides"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="View all streaming guides"
              >
                View All Guides
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © {currentYear} SuccessfulStreamer. All rights reserved. Not affiliated with any streaming platform.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Made for streamers, by streamers</span>
              <span>•</span>
              <span>Powered by community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 