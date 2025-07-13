import React from 'react';
import CategoryLayout from '../CategoryLayout';
import FeaturedGuides from '../../../components/FeaturedGuides';
import communityBuildingImg from '../../../assets/images/categories/community-building.svg';

const CommunityBuildingPage = () => {
  const communityFeatures = [
    {
      title: 'Discord Integration',
      description: 'Connect your stream with a thriving Discord community',
      features: [
        'Custom roles and channels',
        'Stream notifications',
        'Community events',
        'Exclusive content',
      ],
    },
    {
      title: 'Viewer Engagement',
      description: 'Keep your audience active and involved',
      features: [
        'Chat interaction',
        'Viewer rewards',
        'Community challenges',
        'Subscriber perks',
      ],
    },
    {
      title: 'Moderation',
      description: 'Maintain a positive and safe environment',
      features: [
        'Clear guidelines',
        'Trusted moderators',
        'Automated tools',
        'Conflict resolution',
      ],
    },
  ];

  return (
    <CategoryLayout
      title="Community Building"
      description="Create and nurture an engaged streaming community that grows together"
      headerImage={communityBuildingImg}
      category="community-building"
    >
      <div className="space-y-12">
        {/* Community Values */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Community Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
              <p className="text-gray-600">Welcome everyone with open arms</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Respect</h3>
              <p className="text-gray-600">Foster mutual respect and understanding</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Engagement</h3>
              <p className="text-gray-600">Encourage active participation</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Growth</h3>
              <p className="text-gray-600">Support each other's journey</p>
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <FeaturedGuides category="community-building" />

        {/* Community Features */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Building Your Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityFeatures.map((feature) => (
              <div key={feature.title} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="text-pink-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Community Events */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Community Events</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Regular Events</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-pink-500 mr-2">•</span>
                    Subscriber Game Nights
                  </li>
                  <li className="flex items-center">
                    <span className="text-pink-500 mr-2">•</span>
                    Community Tournaments
                  </li>
                  <li className="flex items-center">
                    <span className="text-pink-500 mr-2">•</span>
                    Q&A Sessions
                  </li>
                  <li className="flex items-center">
                    <span className="text-pink-500 mr-2">•</span>
                    Watch Parties
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Special Events</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-pink-500 mr-2">•</span>
                    Charity Streams
                  </li>
                  <li className="flex items-center">
                    <span className="text-pink-500 mr-2">•</span>
                    Community Milestones
                  </li>
                  <li className="flex items-center">
                    <span className="text-pink-500 mr-2">•</span>
                    Seasonal Celebrations
                  </li>
                  <li className="flex items-center">
                    <span className="text-pink-500 mr-2">•</span>
                    Collaborative Projects
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

export default CommunityBuildingPage;
