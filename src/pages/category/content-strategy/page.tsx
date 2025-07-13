import React from 'react';
import CategoryLayout from '../CategoryLayout';
import FeaturedGuides from '../../../components/FeaturedGuides';
import contentStrategyImg from '../../../assets/images/categories/content-strategy.svg';

const ContentStrategyPage = () => {
  const contentTypes = [
    {
      title: 'Live Streams',
      description: 'Your primary content format',
      elements: [
        'Gaming sessions',
        'Just chatting',
        'IRL streams',
        'Special events',
      ],
    },
    {
      title: 'VOD Content',
      description: 'Repurposed and edited content',
      elements: [
        'Stream highlights',
        'Best moments compilation',
        'Tutorial videos',
        'Behind-the-scenes',
      ],
    },
    {
      title: 'Social Media',
      description: 'Supplementary content platforms',
      elements: [
        'Short-form videos',
        'Community posts',
        'Stories/Reels',
        'Engagement posts',
      ],
    },
  ];

  return (
    <CategoryLayout
      title="Content Strategy"
      description="Develop a winning content strategy that engages your audience and grows your channel"
      headerImage={contentStrategyImg}
      category="content-strategy"
    >
      <div className="space-y-12">
        {/* Content Planning */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Content Planning</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Research</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-purple-900 mr-2">•</span>
                  Analyze successful streams
                </li>
                <li className="flex items-center">
                  <span className="text-purple-900 mr-2">•</span>
                  Identify target audience
                </li>
                <li className="flex items-center">
                  <span className="text-purple-9000 mr-2">•</span>
                  Track trending topics
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Schedule</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-purple-900 mr-2">•</span>
                  Create content calendar
                </li>
                <li className="flex items-center">
                  <span className="text-purple-900 mr-2">•</span>
                  Plan stream segments
                </li>
                <li className="flex items-center">
                  <span className="text-purple-900 mr-2">•</span>
                  Set consistent times
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Execute</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-purple-900 mr-2">•</span>
                  Prepare stream assets
                </li>
                <li className="flex items-center">
                  <span className="text-purple-900 mr-2">•</span>
                  Create promotional content
                </li>
                <li className="flex items-center">
                  <span className="text-purple-900 mr-2">•</span>
                  Monitor performance
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <FeaturedGuides category="content-strategy" />

        {/* Content Types */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Content Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contentTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.elements.map((element) => (
                    <li key={element} className="flex items-center">
                      <span className="text-purple-900 mr-2">•</span>
                      {element}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Content Optimization */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Content Optimization</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Stream Optimization</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-purple-900 mr-2">•</span>
                    Engaging titles and thumbnails
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-900 mr-2">•</span>
                    Proper tags and categories
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-900 mr-2">•</span>
                    Stream schedule optimization
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-900 mr-2">•</span>
                    Quality and performance
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Content Distribution</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-purple-900 mr-2">•</span>
                    Cross-platform promotion
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-900 mr-2">•</span>
                    Social media integration
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-900 mr-2">•</span>
                    Community engagement
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-900 mr-2">•</span>
                    Analytics tracking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </CategoryLayout>
  );
};

export default ContentStrategyPage;
