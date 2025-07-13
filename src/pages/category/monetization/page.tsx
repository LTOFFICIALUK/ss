import React from 'react';
import CategoryLayout from '../CategoryLayout';
import FeaturedGuides from '../../../components/FeaturedGuides';
import monetizationImg from '../../../assets/images/categories/monetization.svg';

const MonetizationPage = () => {
  const revenueStreams = [
    {
      title: 'Platform Revenue',
      description: 'Direct income from streaming platforms',
      methods: [
        'Subscriptions',
        'Bits/Donations',
        'Ad Revenue',
        'Channel Points',
      ],
    },
    {
      title: 'External Revenue',
      description: 'Income sources outside the platform',
      methods: [
        'Sponsorships',
        'Merchandise',
        'Affiliate Marketing',
        'Patreon Support',
      ],
    },
    {
      title: 'Content Monetization',
      description: 'Earning from your content',
      methods: [
        'YouTube Videos',
        'Social Media Content',
        'Exclusive Content',
        'Course Creation',
      ],
    },
  ];

  return (
    <CategoryLayout
      title="Monetization"
      description="Learn how to turn your streaming passion into a sustainable income"
      headerImage={monetizationImg}
      category="monetization"
    >
      <div className="space-y-12">
        {/* Income Potential */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Income Potential</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Starting Out</h3>
              <p className="text-4xl font-bold text-amber-600">$100-500</p>
              <p className="text-gray-600 mt-2">Monthly potential for new streamers</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Established</h3>
              <p className="text-4xl font-bold text-amber-600">$1000-5000</p>
              <p className="text-gray-600 mt-2">Monthly potential for regular streamers</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Professional</h3>
              <p className="text-4xl font-bold text-amber-600">$5000+</p>
              <p className="text-gray-600 mt-2">Monthly potential for full-time creators</p>
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <FeaturedGuides category="monetization" />

        {/* Revenue Streams */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Revenue Streams</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {revenueStreams.map((stream) => (
              <div key={stream.title} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{stream.title}</h3>
                <p className="text-gray-600 mb-4">{stream.description}</p>
                <ul className="space-y-2">
                  {stream.methods.map((method) => (
                    <li key={method} className="flex items-center">
                      <span className="text-amber-500 mr-2">•</span>
                      {method}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Monetization Best Practices</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Do's</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Diversify income streams
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Be transparent with your audience
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Provide value to subscribers
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Reinvest in your content
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Don'ts</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">×</span>
                    Over-promote products
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">×</span>
                    Ignore community feedback
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">×</span>
                    Compromise content quality
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">×</span>
                    Focus only on money
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

export default MonetizationPage;
