import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Import category images
import streamSetupImg from '../assets/images/categories/stream-setup.svg';
import growthMarketingImg from '../assets/images/categories/growth-marketing.svg';
import communityBuildingImg from '../assets/images/categories/community-building.svg';
import monetizationImg from '../assets/images/categories/monetization.svg';
import contentStrategyImg from '../assets/images/categories/content-strategy.svg';
import { ALL_GUIDES, GUIDE_CATEGORIES } from '../constants/guides';

// Category-specific overlay colors
const getCategoryOverlay = (path: string) => {
  switch (path) {
    case '/category/stream-setup':
      return 'bg-blue-900 bg-opacity-20';
    case '/category/growth-marketing':
      return 'bg-green-900 bg-opacity-20';
    case '/category/community-building':
      return 'bg-pink-900 bg-opacity-20';
    case '/category/monetization':
      return 'bg-yellow-900 bg-opacity-20';
    case '/category/content-strategy':
      return 'bg-purple-900 bg-opacity-20';
    default:
      return 'bg-black bg-opacity-30';
  }
};

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
const implementedGuides = Object.entries(ALL_GUIDES)
  .filter(([slug]) => {
    // Only show guides that have actual pages
    return [
      'how-to-start-streaming-on-twitch', 
      'how-to-live-stream', 
      'how-to-live-stream-on-Vibes-Streaming', 
      'best-places-to-live-stream', 
      'how-to-stream-from-mobile', 
      'earn-more-from-live-streaming-with-Vibes',
      'earn-more-multi-streaming',
      'monetize-your-live-stream-content',
      'monetize-your-clips',
      'strategies-to-make-money-from-live-streaming',
      'what-is-the-best-mic-for-streaming',
      'obs-setup-guide',
      'streaming-equipment-guide',
      'content-planning-strategy',
      'content-calendar-creation',
      'growth-hacking-twitch',
      'social-media-for-streamers',
      'twitch-monetization',
      'sponsorship-guide',
      'building-community',
      'discord-server-setup',
      'how-much-revenue-can-you-make-from-streaming',
      'using-Vibes-multistreaming-to-earn-more',
      'stream-setup-guide',
      'content-strategy-for-streamers',
      'grow-your-stream',
      'streaming-monetization-guide',
      'streamer-community-building-guide',
      'Vibes-streaming-guide'
    ].includes(slug);
  });

// Convert to array format for search with correct paths
const availableGuides = implementedGuides.map(([slug, guide]) => {
  // Use correct paths for pillar pages
  const pillarPagePaths: Record<string, string> = {
    'stream-setup-guide': '/stream-setup-guide',
    'content-strategy-for-streamers': '/content-strategy-for-streamers',
    'grow-your-stream': '/grow-your-stream',
    'streaming-monetization-guide': '/streaming-monetization-guide',
    'streamer-community-building-guide': '/streamer-community-building-guide',
    'Vibes-streaming-guide': '/Vibes-streaming-guide'
  };
  
  return {
    title: guide.title,
    description: guide.description,
    path: pillarPagePaths[slug] || `/guides/${slug}`,
    readTime: guide.readTime,
    difficulty: guide.difficulty,
    category: guide.category
  };
});

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Memoize search results to avoid unnecessary recalculations
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    
    // Search through guides
    return availableGuides.filter(guide => 
      guide.title.toLowerCase().includes(query) || 
      guide.description.toLowerCase().includes(query) ||
      GUIDE_CATEGORIES[guide.category].toLowerCase().includes(query)
    );
  }, [searchQuery, availableGuides]);

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
              placeholder="Search guides... Try 'monetization' or 'streaming setup'"
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
                {searchResults.length === 0 ? (
                  <div className="p-4 text-gray-500 text-center">
                    No results found for "{searchQuery}"
                  </div>
                ) : (
                  <div className="p-2">
                    {searchResults.map((guide) => (
                      <Link
                        key={guide.path}
                        to={guide.path}
                        className="block px-3 py-2 hover:bg-gray-100 rounded-lg"
                      >
                        <div className="flex justify-between items-start text-left">
                          <div className="flex-1">
                            <div className="font-medium text-left">{guide.title}</div>
                            <div className="text-sm text-gray-500 mt-1">{guide.description}</div>
                            <div className="text-xs text-blue-600 mt-1">
                              {GUIDE_CATEGORIES[guide.category]}
                            </div>
                          </div>
                          <div className="flex flex-col items-end space-y-1 ml-4">
                            {guide.readTime && (
                              <span className="text-xs text-gray-500">
                                {guide.readTime}
                              </span>
                            )}
                            {guide.difficulty && (
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                                guide.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                                'bg-purple-100 text-purple-800'
                              }`}>
                                {guide.difficulty}
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
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
              alt={title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className={`absolute inset-0 ${getCategoryOverlay(path)} flex items-center justify-center`}>
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