import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Import category images
import streamSetupImg from '../assets/images/categories/stream-setup.svg';
import growthMarketingImg from '../assets/images/categories/growth-marketing.svg';
import communityBuildingImg from '../assets/images/categories/community-building.svg';
import monetizationImg from '../assets/images/categories/monetization.svg';
import contentStrategyImg from '../assets/images/categories/content-strategy.svg';
import { ALL_GUIDES } from '../constants/guides';

// Sample categories data - replace with actual images and data
const categories = [
  {
    title: 'Stream Setup',
    image: streamSetupImg,
    path: '/category/stream-setup',
  },
  {
    title: 'Growth & Marketing',
    image: growthMarketingImg,
    path: '/category/growth-marketing',
  },
  {
    title: 'Community Building',
    image: communityBuildingImg,
    path: '/category/community-building',
  },
  {
    title: 'Monetization',
    image: monetizationImg,
    path: '/category/monetization',
  },
  {
    title: 'Content Strategy',
    image: contentStrategyImg,
    path: '/category/content-strategy',
  },
];

// Get the most recent guides that have actual pages
const availableGuides = Object.entries(ALL_GUIDES)
  .filter(([slug]) => {
    // Only show guides that have actual pages
    return [
      'how-to-start-streaming-on-twitch', 
      'how-to-live-stream', 
      'how-to-live-stream-on-AVIE-Streaming', 
      'best-places-to-live-stream', 
      'how-to-stream-from-mobile', 
      'earn-more-from-live-streaming-with-avie',
      'earn-more-multi-streaming',
      'monetize-your-live-stream-content',
      'monetize-your-clips',
      'strategies-to-make-money-from-live-streaming'
    ].includes(slug);
  })
  .map(([slug, guide]) => ({
    title: guide.title,
    description: guide.description,
    path: `/guides/${slug}`,
    readTime: guide.readTime,
  }));

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Memoize search results to avoid unnecessary recalculations
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return { guides: [], categories: [] };

    const query = searchQuery.toLowerCase();
    
    // Search through guides
    const matchingGuides = availableGuides.filter(guide => 
      guide.title.toLowerCase().includes(query) || 
      guide.description.toLowerCase().includes(query)
    );

    // Search through categories
    const matchingCategories = categories.filter(category =>
      category.title.toLowerCase().includes(query)
    );

    return {
      guides: matchingGuides,
      categories: matchingCategories
    };
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsSearching(true);
  };

  const handleSearchBlur = () => {
    // Only hide results if there's no query
    if (!searchQuery.trim()) {
      setIsSearching(false);
    }
  };

  return (
    <div className="space-y-16">
      {/* Hero Section with Search */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Your non-technical <span className="text-blue-600">streaming</span>
          <br />guide to everything content
        </h1>
        <div className="max-w-2xl mx-auto mt-8">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => setIsSearching(true)}
              onBlur={handleSearchBlur}
              placeholder="Try 'How to grow my audience?'"
              className="w-full px-6 py-4 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              aria-label="Search guides"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
              aria-label="Submit search"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Search Results Dropdown */}
            {isSearching && searchQuery.trim() && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 max-h-96 overflow-y-auto z-50">
                {searchResults.categories.length === 0 && searchResults.guides.length === 0 ? (
                  <div className="p-4 text-gray-500 text-center">
                    No results found for "{searchQuery}"
                  </div>
                ) : (
                  <>
                    {/* Guides Results */}
                    {searchResults.guides.length > 0 && (
                      <div className="p-2 border-t border-gray-100">
                        {searchResults.guides.map((guide) => (
                          <Link
                            key={guide.path}
                            to={guide.path}
                            className="block px-3 py-2 hover:bg-gray-100 rounded-lg"
                          >
                            <div className="font-medium text-left"> <div className={`text-sm text-gray-500 ${guide.readTime}`}>
                              {guide.readTime}
                            </div> {guide.title} </div>                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Categories Section */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map(({ title, image, path }) => (
          <Link
            key={path}
            to={path}
            className="relative group overflow-hidden rounded-xl aspect-video"
            aria-label={`View ${title} category`}
          >
            <img
              src={image}
              alt={`${title} Successful Streamer Guides`}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white font-semibold text-lg text-center px-2">
                {title}
              </h2>
            </div>
          </Link>
        ))}
      </section>

      {/* Recently Added Guides */}
      {availableGuides.length > 0 && (
        <section className="py-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Recently added guides</h2>
            <Link
              to="/guides"
              className="text-blue-500 hover:text-blue-600 font-semibold"
              aria-label="View all guides"
            >
              Show all
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableGuides.map(({ title, description, path }) => (
              <Link
                key={path}
                to={path}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                aria-label={`Read guide: ${title}`}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Home; 