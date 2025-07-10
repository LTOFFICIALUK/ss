import React from 'react';
import { Link } from 'react-router-dom';
import { ALL_GUIDES, GUIDE_CATEGORIES } from '../../constants/guides';
import { GuideCategory } from '../../types';

const GuidesIndex: React.FC = () => {
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
      'strategies-to-make-money-from-live-streaming'
    ].includes(slug);
  });

  // Group implemented guides by category
  const guidesByCategory = implementedGuides.reduce((acc, [slug, guide]) => {
    if (!acc[guide.category]) {
      acc[guide.category] = [];
    }
    acc[guide.category].push({ slug, ...guide });
    return acc;
  }, {} as Record<GuideCategory, Array<{ slug: string } & typeof ALL_GUIDES[keyof typeof ALL_GUIDES]>>);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Streaming Guides
      </h1>
      
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