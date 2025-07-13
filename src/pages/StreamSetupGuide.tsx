import React from 'react';
import Title from '../components/sub-components/title';
import RichText from '../components/sub-components/rich-text';
import CTAButtons from '../components/sub-components/cta-buttons';
import FAQComponent from '../components/sub-components/faq-component';
import HowToComponent from '../components/sub-components/how-to-component';
import { Link } from 'react-router-dom';

const StreamSetupGuide: React.FC = () => {
  const quickStartSteps = [
    {
      name: 'Choose Your Streaming Platform',
      text: 'Decide between Twitch, YouTube, AVIE, or other platforms based on your audience and goals. Each platform has different features and monetization options.'
    },
    {
      name: 'Set Up Your Hardware',
      text: 'Install your camera, microphone, and lighting equipment. Test each component to ensure they work properly before your first stream.'
    },
    {
      name: 'Download Streaming Software',
      text: 'Install OBS Studio (free) or other streaming software. Configure your scenes, sources, and encoding settings for optimal performance.'
    },
    {
      name: 'Test Your Internet Connection',
      text: 'Ensure you have at least 5 Mbps upload speed for 1080p streaming. Run speed tests at different times to check consistency.'
    },
    {
      name: 'Create Your First Stream',
      text: 'Start with a test stream to friends or private audience. Check audio levels, video quality, and overall performance before going live publicly.'
    }
  ];

  const streamingFaqs = [
    {
      question: 'What equipment do I need to start streaming?',
      answer: 'Essential equipment includes a camera (webcam or DSLR), microphone, proper lighting, a capable PC or console, and streaming software. Start with basic equipment and upgrade as you grow.'
    },
    {
      question: 'How much does it cost to start streaming?',
      answer: 'Basic setup costs $200-400 with a webcam and USB microphone. Intermediate setups range from $500-1000, while professional setups can cost $1500+. Many successful streamers started with minimal equipment.'
    },
    {
      question: 'What internet speed do I need for streaming?',
      answer: 'For 1080p streaming, you need minimum 5 Mbps upload speed, but 10+ Mbps is recommended. For 4K streaming, aim for 20+ Mbps upload. Use wired ethernet for the most stable connection.'
    },
    {
      question: 'Should I stream from PC, console, or mobile?',
      answer: 'PC offers the most flexibility and features. Console streaming is simpler but more limited. Mobile streaming is convenient but has quality limitations. Choose based on your content type and technical comfort level.'
    },
    {
      question: 'Do I need a powerful computer for streaming?',
      answer: 'For 1080p60 streaming, you need at least an Intel i5-8400 or AMD Ryzen 5 2600 with a GTX 1660 or better. For 4K streaming or dual-PC setups, more powerful hardware is required.'
    },
    {
      question: 'What is the best streaming software for beginners?',
      answer: 'OBS Studio is free and most popular, offering extensive features. Streamlabs OBS provides a more user-friendly interface. AVIE MultiStream plugin allows streaming to multiple platforms simultaneously.'
    }
  ];

  const ctaButtons = [
    {
      label: 'Start Streaming on AVIE',
      href: '/guides/how-to-live-stream-on-AVIE-Streaming',
      variant: 'primary' as const,
      ariaLabel: 'Learn how to start streaming on AVIE platform'
    },
    {
      label: 'OBS Setup Guide',
      href: '/guides/obs-setup-guide',
      variant: 'secondary' as const,
      ariaLabel: 'Complete OBS setup tutorial'
    }
  ];

  const equipmentCtaButtons = [
    {
      label: 'Equipment Guide',
      href: '/guides/streaming-equipment-guide',
      variant: 'primary' as const,
      ariaLabel: 'Complete streaming equipment guide'
    },
    {
      label: 'Best Streaming Microphones',
      href: '/guides/what-is-the-best-mic-for-streaming',
      variant: 'outline' as const,
      ariaLabel: 'Find the best microphone for streaming'
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Title 
          title="Ultimate Stream Setup Guide: Everything You Need to Start Streaming in 2025"
          description="Complete beginner's guide to setting up your live stream. Learn about equipment, software, platforms, and get streaming within hours, not days."
          level={1}
          size="large"
          align="center"
          showDivider={true}
          maxWidth="6xl"
        />

        <div className="mt-12 space-y-12">
          <RichText
            heading="Why This Guide Matters"
            headingLevel={2}
            content="Starting your streaming journey can feel overwhelming with countless equipment options, software choices, and technical requirements. This comprehensive guide cuts through the confusion, providing a clear roadmap to get you streaming professionally within hours. Whether you're planning to stream games, talk shows, tutorials, or creative content, this guide covers everything from basic setups costing under $300 to professional configurations exceeding $2000. We'll help you choose the right equipment for your budget and goals."
            maxWidth="6xl"
          />

          <HowToComponent
            title="Quick Start: Stream Setup in 5 Steps"
            description="Follow these essential steps to get your stream up and running quickly"
            steps={quickStartSteps}
            totalTime="PT60M"
            difficulty="Beginner"
            maxWidth="6xl"
          />

          <RichText
            heading="PC vs Console vs Mobile: Which Setup is Right for You?"
            headingLevel={2}
            content="PC streaming offers the most flexibility and features. You can stream games, software, webcam feeds, and mix multiple sources easily. Perfect for gaming streamers who want overlays and alerts, content creators mixing multiple sources, and streamers wanting advanced customization. Console streaming is simpler but more limited. Built-in streaming apps make it easy to start, but customization is restricted. Ideal for pure gaming content without complex overlays, beginners who want simple setup, and streamers focused on gameplay over production. Mobile streaming is convenient but has quality limitations. Great for spontaneous content and on-the-go streaming. Best for IRL (In Real Life) streaming, talk shows and casual content, and streamers who travel frequently."
            maxWidth="6xl"
          />

          <RichText
            heading="Essential Streaming Equipment by Budget"
            headingLevel={2}
            content="Budget Setup ($200-400): Camera - Logitech C920 or C922 ($70-100), Microphone - Audio-Technica ATR2100x-USB ($79), Lighting - Ring light or desk lamp ($30-50), Software - OBS Studio (free). Intermediate Setup ($500-1000): Camera - Canon M50 or Sony A6000 ($400-600), Microphone - Shure SM7B with audio interface ($400-500), Lighting - Two-point lighting setup ($100-200), Capture Card - Elgato HD60 S+ ($180). Professional Setup ($1500+): Camera - Sony A7 III or Canon EOS R ($1500-2000), Microphone - Electro-Voice RE20 with mixer ($600-800), Lighting - Professional 3-point lighting ($300-500), Dual PC Setup - Dedicated streaming PC ($1000-2000)."
            maxWidth="6xl"
          />

          <CTAButtons
            title="Ready to Choose Your Equipment?"
            description="Get detailed recommendations for every budget and streaming style"
            buttons={equipmentCtaButtons}
            align="center"
            maxWidth="6xl"
          />

          <RichText
            heading="Internet Speed Requirements and Optimization"
            headingLevel={2}
            content="Minimum Speed Requirements: 720p 30fps - 2-3 Mbps upload, 1080p 30fps - 3-4 Mbps upload, 1080p 60fps - 5-6 Mbps upload, 4K 30fps - 15-20 Mbps upload, 4K 60fps - 25-30 Mbps upload. Optimization Tips: Use wired ethernet connection instead of Wi-Fi, stream during off-peak hours when possible, close unnecessary applications to free up bandwidth, consider upgrading to business internet for better upload speeds, and test your connection multiple times throughout the day."
            maxWidth="6xl"
          />

          <RichText
            heading="Streaming Software Setup"
            headingLevel={2}
            content="OBS Studio (Free) is the most popular and powerful streaming software. Offers unlimited scenes, sources, and customization options. Perfect for users who want complete control over their stream. Streamlabs OBS is built on OBS but with added features like built-in alerts, themes, and easier setup. Great for beginners who want a more user-friendly interface. AVIE MultiStream allows streaming to multiple platforms simultaneously, maximizing your reach and potential revenue. Essential for serious streamers looking to grow their audience."
            maxWidth="6xl"
          />

          <RichText
            heading="Platform-Specific Setup Guides"
            headingLevel={2}
            content="Twitch Streaming is the most popular gaming platform with built-in monetization features. YouTube Live is excellent for educational content and long-form streams. Built-in audience from regular YouTube videos provides growth opportunities. AVIE Streaming is an emerging platform with innovative features and better revenue sharing. Perfect for streamers looking to diversify their platforms."
            maxWidth="6xl"
          />

          <RichText
            heading="Optional Hardware Accessories"
            headingLevel={2}
            content="Stream Deck provides customizable control panel for managing scenes, alerts, and other stream functions. Increases efficiency and professionalism. Green Screen allows background replacement for more professional-looking streams. Great for streamers with limited space or distracting backgrounds. Multiple Monitors are essential for monitoring chat, stream statistics, and other applications while streaming. Dual monitor setup is minimum for serious streamers. Webcam Mounting Arms provide stable camera positioning and easier angle adjustments. Reduces desk clutter and improves camera stability."
            maxWidth="6xl"
          />

          <CTAButtons
            title="Start Your Streaming Journey Today"
            description="Everything you need to begin streaming professionally is just one click away"
            buttons={ctaButtons}
            align="center"
            maxWidth="6xl"
          />

          <RichText
            heading="Next Steps: Growing Your Stream"
            headingLevel={2}
            content="Once your technical setup is complete, focus on content strategy and audience building. Having great equipment means nothing without engaging content and consistent streaming. Content Planning: Develop a content strategy that aligns with your interests and audience needs. Community Building: Engage with your audience through Discord, social media, and interactive streams. Monetization: Explore various revenue streams including subscriptions, donations, sponsorships, and merchandise."
            maxWidth="6xl"
          />

          <FAQComponent
            title="Stream Setup Frequently Asked Questions"
            faqs={streamingFaqs}
            maxWidth="6xl"
          />
        </div>
      </div>
    </div>
  );
};

export default StreamSetupGuide; 