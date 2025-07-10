import React from 'react';
import CategoryLayout from '../CategoryLayout';
import FeaturedGuides from '../../../components/FeaturedGuides';
import streamSetupImg from '../../../assets/images/categories/stream-setup.svg';

const StreamSetupPage = () => {
  const guides = [
    {
      title: 'Setting Up OBS Studio',
      description: 'Learn how to configure OBS Studio for optimal streaming performance',
      readTime: '10 min read',
      difficulty: 'Beginner',
    },
    {
      title: 'Choosing Your Streaming Hardware',
      description: 'A comprehensive guide to selecting the right streaming equipment',
      readTime: '15 min read',
      difficulty: 'Intermediate',
    },
    {
      title: 'Audio Setup for Streaming',
      description: 'Perfect your stream audio with proper microphone and mixer settings',
      readTime: '12 min read',
      difficulty: 'Beginner',
    },
  ];

  return (
    <CategoryLayout
      title="Stream Setup"
      description="Everything you need to know about setting up your streaming equipment and software"
      headerImage={streamSetupImg}
    >
      <div className="space-y-12">
        {/* Quick Start Guide */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Quick Start Guide</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg">Choose your streaming software (OBS, Streamlabs, etc.)</li>
              <li className="text-lg">Set up your basic audio and video equipment</li>
              <li className="text-lg">Configure your stream settings</li>
              <li className="text-lg">Design your stream overlay</li>
              <li className="text-lg">Test your stream setup</li>
            </ol>
          </div>
        </section>

        {/* Featured Guides */}
        <FeaturedGuides category="stream-setup" />

        {/* Essential Equipment */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Essential Equipment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Basic Setup</h3>
              <ul className="space-y-2">
                <li>• Webcam (720p minimum)</li>
                <li>• USB Microphone</li>
                <li>• Stable Internet Connection</li>
                <li>• Streaming Software</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Advanced Setup</h3>
              <ul className="space-y-2">
                <li>• HD/4K Camera</li>
                <li>• XLR Microphone + Audio Interface</li>
                <li>• Stream Deck</li>
                <li>• Capture Card</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </CategoryLayout>
  );
};

export default StreamSetupPage;
