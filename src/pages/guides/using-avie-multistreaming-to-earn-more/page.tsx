import React from 'react';
import GuideLayout from '../GuideLayout';
import Title from '../../../components/sub-components/title';
import RichText from '../../../components/sub-components/rich-text';
import CTAButtons from '../../../components/sub-components/cta-buttons';

const MultiStreamRevenue: React.FC = () => {
  const today = new Date().toISOString();

  return (
    <GuideLayout
      title="Maximize Your Income with AVIE's Free Multistreaming"
      description="Learn how to leverage AVIE's free multistreaming feature to earn revenue from multiple platforms simultaneously while growing your audience across different platforms."
      publishDate={today}
      category="monetization"
    >

      <RichText
        heading="1. What is AVIE Multistreaming?"
        content={
          <div>
            <p>AVIE offers completely free multistreaming capabilities, allowing you to broadcast your content to multiple platforms simultaneously without any additional cost. This means you can:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Stream to AVIE, Twitch, YouTube, and other platforms at the same time</li>
              <li>Maintain your existing audience while growing on new platforms</li>
              <li>Collect revenue from multiple platforms in parallel</li>
              <li>Save money on third-party multistreaming services that can cost $20-100/month</li>
            </ul>
            <p className="mt-4"><strong>Best part:</strong> Unlike other multistreaming services that charge monthly fees, AVIE's multistreaming feature is completely free for all users.</p>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="2. Multiple Revenue Streams"
        content={
          <div>
            <p>By streaming to multiple platforms, you can take advantage of each platform's unique monetization features:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>AVIE:</strong> Earn from the 90/10 subscription split and 97/3 donation split</li>
              <li><strong>Twitch:</strong> Receive bits, subscriptions, and ad revenue</li>
              <li><strong>YouTube:</strong> Earn from Super Chats, channel memberships, and ad revenue</li>
              <li><strong>Other Platforms:</strong> Collect platform-specific donations and rewards</li>
            </ul>
            <p className="mt-4">Instead of choosing between platforms, multistreaming lets you earn from all of them simultaneously!</p>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="3. Growing Your Audience Across Platforms"
        content={
          <div>
            <p>Multistreaming isn't just about immediate revenue - it's also a powerful growth strategy:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Reach viewers who prefer different platforms</li>
              <li>Increase your discoverability through multiple platform algorithms</li>
              <li>Cross-pollinate your audience between platforms</li>
              <li>Build platform-specific communities while maintaining a unified brand</li>
            </ul>
            <p className="mt-4">Each additional platform exponentially increases your potential reach and earning potential.</p>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="4. Setting Up Multistreaming on AVIE"
        content={
          <div>
            <p>Getting started with AVIE's multistreaming is simple:</p>
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              <li>Log into your AVIE dashboard</li>
              <li>Navigate to the Stream Settings</li>
              <li>Add your stream keys from other platforms</li>
              <li>Start streaming once to reach all platforms</li>
            </ol>
            <p className="mt-4"><strong>Pro Tip:</strong> AVIE's smart bandwidth management ensures high-quality streams to all platforms without requiring excessive upload speed.</p>
          </div>
        }
        className="mb-8"
      />

      <CTAButtons
        title="Ready to Multiply Your Streaming Revenue?"
        description="Start multistreaming with AVIE today and tap into multiple revenue streams without any additional costs!"
        buttons={[
          {
            label: "Create Your Free AVIE Account",
            href: "https://https://avie.live",
            variant: "primary",
            isExternal: true
          },
          {
            label: "Learn More About Streaming Revenue",
            href: "/guides/monetize-your-live-stream-content",
            variant: "secondary",
            isExternal: false
          }
        ]}
        align="left"
        className="mt-12"
      />
    </GuideLayout>
  );
};

export default MultiStreamRevenue;
