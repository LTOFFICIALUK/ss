import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ALL_GUIDES, GUIDE_CATEGORIES } from '../../constants/guides';
import { GuideCategory } from '../../types';

const GuidesIndex: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Filter to only include guides that have actual pages
  const implementedGuides = Object.entries(ALL_GUIDES).filter(([slug]) => {
    // Only show guides that have actual pages
    return [
      'how-to-start-streaming-on-twitch', 
      'how-to-live-stream', 
      'how-to-live-stream-on-AVIE-Streaming', 
      'best-places-to-live-stream', 'how-to-stream-from-mobile', 
      'earn-more-from-live-streaming-with-avie',
      'earn-more-multi-streaming',
      'monetize-your-live-stream-content',
      'monetize-your-clips',
      'strategies-to-make-money-from-live-streaming',
      'what-is-the-best-mic-for-streaming',
      'obs-setup-guide',
      'streaming-equipment-guide'
    ].includes(slug);
  });

  // Convert to array format for search
  const availableGuides = implementedGuides.map(([slug, guide]) => ({
    title: guide.title,
    description: guide.description,
    path: `/guides/${slug}`,
    readTime: guide.readTime,
    difficulty: guide.difficulty,
    category: guide.category
  }));

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

  // Group implemented guides by category
  const guidesByCategory = implementedGuides.reduce((acc, [slug, guide]) => {
    if (!acc[guide.category]) {
      acc[guide.category] = [];
    }
    acc[guide.category].push({ slug, ...guide });
    return acc;
  }, {} as Record<GuideCategory, Array<{ slug: string } & typeof ALL_GUIDES[keyof typeof ALL_GUIDES]>>);

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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Streaming Guides
      </h1>
      
      {/* Search Section */}
      <div className="max-w-2xl mx-auto mb-12">
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
                      <div className="flex justify-between items-start">
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
      
      <div className="space-y-12">
        {(Object.keys(GUIDE_CATEGORIES) as GuideCategory[])
          .filter(category => guidesByCategory[category]?.length > 0) // Only show categories that have guides
          .map((category) => {
            const guides = guidesByCategory[category] || [];

            return (
              <section key={category}>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  {GUIDE_CATEGORIES[category]}
                </h2>
                <div className="space-y-4">
                  {guides.map(({ slug, title, description, readTime, difficulty }) => (
                    <Link
                      key={slug}
                      to={`/guides/${slug}`}
                      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {title}
                          </h3>
                          <p className="text-gray-600">
                            {description}
                          </p>
                        </div>
                        <div className="flex flex-col items-end space-y-2 ml-4">
                          {readTime && (
                            <span className="text-sm text-gray-500">
                              {readTime}
                            </span>
                          )}
                          {difficulty && (
                            <span className={`text-sm px-3 py-1 rounded-full ${
                              difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                              difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                              'bg-purple-100 text-purple-800'
                            }`}>
                              {difficulty}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
      </div>
    </div>
  );
};

export default GuidesIndex; 