import React from 'react';
import CategoryLayout from '../CategoryLayout';
import FeaturedGuides from '../../../components/FeaturedGuides';
import growthMarketingImg from '../../../assets/images/categories/growth-marketing.svg';

const GrowthMarketingPage = () => {
  const strategies = [
    {
      title: 'Social Media Growth',
      description: 'Build your presence across multiple platforms',
      tips: [
        'Consistent posting schedule',
        'Cross-platform promotion',
        'Engage with your audience',
        'Use platform-specific features',
      ],
    },
    {
      title: 'Content Strategy',
      description: 'Create content that attracts and retains viewers',
      tips: [
        'Develop a content calendar',
        'Analyze successful streams',
        'Create highlight clips',
        'Optimize stream titles and tags',
      ],
    },
    {
      title: 'Community Building',
      description: 'Foster an engaged and loyal community',
      tips: [
        'Regular community events',
        'Discord server management',
        'Viewer recognition programs',
        'Collaborative content',
      ],
    },
  ];

  return (
    <CategoryLayout
      title="Growth & Marketing"
      description="Proven strategies to grow your streaming channel and build your audience"
      headerImage={growthMarketingImg}
      category="growth-marketing"
      metaTitle="Streaming Growth & Marketing Strategies - Grow Your Channel in 2024"
      metaDescription="Discover proven strategies to grow your streaming channel and build a loyal audience. Learn social media marketing, content strategy, and community building techniques."
      metaKeywords="streaming growth, streamer marketing, grow twitch channel, streaming audience, streamer promotion, streaming strategy, channel growth tips"
    >
      <div className="space-y-12">
        {/* Growth Statistics */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Channel Growth Essentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Consistency</h3>
              <p className="text-4xl font-bold text-green-600">+127%</p>
              <p className="text-gray-600 mt-2">Average growth with regular schedule</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Engagement</h3>
              <p className="text-4xl font-bold text-green-600">+85%</p>
              <p className="text-gray-600 mt-2">Viewer retention with interaction</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Network</h3>
              <p className="text-4xl font-bold text-green-600">+243%</p>
              <p className="text-gray-600 mt-2">Growth through collaborations</p>
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <FeaturedGuides category="growth-marketing" />

        {/* Growth Strategies */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Growth Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strategies.map((strategy) => (
              <div key={strategy.title} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{strategy.title}</h3>
                <p className="text-gray-600 mb-4">{strategy.description}</p>
                <ul className="space-y-2">
                  {strategy.tips.map((tip) => (
                    <li key={tip} className="flex items-center">
                      <span className="text-green-500 mr-2">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Marketing Tools */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Essential Marketing Tools</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Analytics</h3>
                <p className="text-gray-600">Track your growth and engagement</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Social Media</h3>
                <p className="text-gray-600">Build your online presence</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Email Marketing</h3>
                <p className="text-gray-600">Keep your audience informed</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Content Calendar</h3>
                <p className="text-gray-600">Stay organized and consistent</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </CategoryLayout>
  );
};

export default GrowthMarketingPage;
