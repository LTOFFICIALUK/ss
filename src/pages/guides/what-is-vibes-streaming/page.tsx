import React from 'react';
import GuideLayout from '../GuideLayout';
import Title from '../../../components/sub-components/title';
import RichText from '../../../components/sub-components/rich-text';
import CTAButtons from '../../../components/sub-components/cta-buttons';

const WhatIsVibesStreaming: React.FC = () => {
  const today = new Date().toISOString();
  
  return (
    <GuideLayout
      title="What is Vibes Streaming?"
      description="Discover Vibes Streaming - the next-generation creator-first platform that blends Web2 simplicity with Web3 rewards. Learn how creators and viewers can earn together."
      publishDate={today}
      category="content-strategy"
      keywords={[
        'what is vibes streaming',
        'vibes streaming platform',
        'watch to earn streaming',
        'web3 streaming platform',
        'creator rewards platform',
        'vibe points system',
        'solana streaming platform',
        'multistream plugin',
        'phantom wallet streaming',
        'tokenized streaming rewards'
      ]}
      featuredImage="https://successfulstreamer.com/images/vibes-streaming-platform.jpg"
    >
      
      <RichText
        heading="What is Vibes Streaming?"
        content={
          <div>
            <p className="text-lg font-medium mb-4">A next-generation creator-first platform that blends the simplicity of Web2 streaming with transparent Web3 rewards.</p>
            
            <p>Vibes Streaming is built from the ground up to empower both creators and viewers. No crypto experience required—just a wallet connection via Phantom—and you're ready to go live, engage your audience, and earn tokenized rewards in real time.</p>
            
            <p className="mt-4">Unlike traditional streaming platforms that only benefit creators, Vibes creates a two-sided economy where every interaction—watching, chatting, clipping, tipping—creates real value for everyone involved.</p>
          </div>
        }
        className="mb-8"
      />

      <CTAButtons
        buttons={[
          {
            label: "Join Vibes Now",
            href: "https://vibes.stream",
            variant: "primary",
            isExternal: true
          },
          {
            label: "Learn About Web3 Streaming",
            href: "/guides",
            variant: "secondary",
            isExternal: false
          }
        ]}
        align="left"
        className="mb-12"
      />

      <RichText
        heading="Our Mission"
        content={
          <div>
            <p>We remove traditional streaming barriers by combining intuitive UI, walletless viewer flows, and on-chain incentives. Our goal is a two-sided economy where every interaction—watching, chatting, clipping, tipping—creates real value for everyone involved.</p>
            
            <p className="mt-4">Vibes is designed to be the most accessible Web3 streaming platform, requiring no prior crypto knowledge while still providing the benefits of blockchain technology and tokenized rewards.</p>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="For Creators & Viewers"
        content={
          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Creators</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Customizable subscriptions & tiered perks</strong> - Create multiple subscription tiers with unique benefits for your community</li>
              <li><strong>Real-time donations in $SOL, $VIBE or USDC</strong> - Accept cryptocurrency donations with low 3% fees</li>
              <li><strong>Clip tools, overlays & multistream plugin</strong> - Built-in tools for content creation and multi-platform streaming</li>
              <li><strong>Instant dashboard analytics & Payouts</strong> - Real-time insights and automatic payouts to your Phantom wallet</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Viewers</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Earn Vibe Points (VP) for every action</strong> - Get rewarded for watching, chatting, and engaging with creators</li>
              <li><strong>Convert VP → $SOL on Solana</strong> - Exchange your earned points for real cryptocurrency</li>
              <li><strong>Use emotes, badges & chat in live streams</strong> - Full interactive experience with custom community features</li>
              <li><strong>Discover and support new creators</strong> - Find and help grow emerging talent while earning rewards</li>
            </ul>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="Key Features"
        content={
          <div>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>VP Rewards System:</strong> Watch-to-earn engine rewards viewers & creators alike for engagement and participation</li>
              <li><strong>Donations:</strong> Low-fee (3%) Solana tips, auto-settle to Phantom wallets with instant processing</li>
              <li><strong>Subscriptions:</strong> Custom tiers, token-backed loyalty, payouts in $VIBE & creator tokens</li>
              <li><strong>Emotes & Badges:</strong> Free & paid plans unlock custom icons and community flair for enhanced interaction</li>
              <li><strong>Live Chat & Moderation:</strong> 200-char messages, spam filters, AI-powered moderation for safe communities</li>
              <li><strong>Multistream Plugin:</strong> Simulcast to Twitch, Kick, YouTube with unified chat across all platforms</li>
              <li><strong>Overlays & Alerts:</strong> Built-in visual notifications for every on-stream event without third-party tools</li>
            </ul>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="Token & Rewards System"
        content={
          <div>
            <p>The native $VIBE token on Solana powers the Vibes ecosystem. Viewers and creators earn VP (Vibe Points) for engagement, which convert into $VIBE or creator tokens at the end of each period. This creates a sustainable flywheel of buy-pressure, liquidity, and community growth.</p>
            
            <h3 className="text-lg font-medium mt-6 mb-3">The Vibes Flywheel:</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Viewer engages & earns VP</strong> - Every interaction generates Vibe Points</li>
                <li><strong>VP converts into $VIBE & creator tokens</strong> - Points become real cryptocurrency</li>
                <li><strong>On-chain distribution & buy pressure</strong> - Token utility drives demand</li>
                <li><strong>Token utility attracts more creators & viewers</strong> - Growth creates more opportunities</li>
              </ol>
            </div>
            
            <p className="mt-4">This system ensures that as the platform grows, everyone benefits—creators earn more, viewers get rewarded, and the ecosystem becomes more valuable for all participants.</p>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="Getting Started with Vibes"
        content={
          <div>
            <p>Getting started with Vibes is designed to be simple, even if you're new to Web3 technology:</p>
            
            <h3 className="text-lg font-medium mt-4 mb-2">For Viewers:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Visit <a href="https://vibes.stream" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">vibes.stream</a></li>
              <li>Connect your Phantom wallet (free to create)</li>
              <li>Start watching streams and earning VP</li>
              <li>Engage with chat, emotes, and community features</li>
              <li>Convert your VP to $SOL or $VIBE tokens</li>
            </ol>

            <h3 className="text-lg font-medium mt-6 mb-2">For Creators:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Create your Vibes account and connect Phantom wallet</li>
              <li>Set up your channel with custom emotes and badges</li>
              <li>Configure your subscription tiers and donation options</li>
              <li>Download the multistream plugin for OBS or Streamlabs</li>
              <li>Go live and start earning from your community</li>
            </ol>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="Why Choose Vibes Over Traditional Platforms?"
        content={
          <div>
            <p>Vibes offers several advantages over traditional streaming platforms:</p>
            
            <h3 className="text-lg font-medium mt-4 mb-2">For Creators:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Higher Revenue:</strong> Keep more of your earnings with lower platform fees</li>
              <li><strong>Built-in Tools:</strong> No need for expensive third-party software or plugins</li>
              <li><strong>Multi-platform Streaming:</strong> Reach audiences on Twitch, Kick, and YouTube simultaneously</li>
              <li><strong>Token Rewards:</strong> Earn $VIBE tokens in addition to traditional revenue</li>
              <li><strong>Community Ownership:</strong> Build a community that's invested in your success</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-2">For Viewers:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Earn While Watching:</strong> Get paid for your time and engagement</li>
              <li><strong>No Ads:</strong> Enjoy ad-free streaming experience</li>
              <li><strong>Community Rewards:</strong> Earn tokens for supporting creators you love</li>
              <li><strong>Transparent System:</strong> See exactly how rewards are distributed</li>
              <li><strong>Early Access:</strong> Be part of a growing platform from the beginning</li>
            </ul>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="Ready to Watch, Stream, and Earn?"
        content={
          <div>
            <p>Experience the future of streaming today—no ads, no middlemen, just pure community rewards. Vibes is building a new model where creators and viewers succeed together through transparent, on-chain incentives.</p>
            
            <p className="mt-4">Whether you're a creator looking for better tools and higher earnings, or a viewer who wants to be rewarded for your time and engagement, Vibes offers a revolutionary approach to live streaming that benefits everyone.</p>
            
            <p className="mt-4">Join thousands of creators and viewers who are already experiencing the future of streaming on Vibes.</p>
          </div>
        }
        className="mb-8"
      />

      <CTAButtons
        title="Ready to Experience the Future of Streaming?"
        description="Join Vibes today and start earning rewards while building meaningful connections with creators and viewers."
        buttons={[
          {
            label: "Join Vibes Now",
            href: "https://vibes.stream",
            variant: "primary",
            isExternal: true
          },
          {
            label: "Learn More About Web3 Streaming",
            href: "/guides",
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

export default WhatIsVibesStreaming; 