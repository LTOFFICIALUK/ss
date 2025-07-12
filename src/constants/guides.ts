import { GuideCategory } from '../types';

export const GUIDE_CATEGORIES: Record<GuideCategory, string> = {
  'stream-setup': 'Stream Setup',
  'content-strategy': 'Content Strategy',
  'growth-marketing': 'Growth & Marketing',
  'monetization': 'Monetization',
  'community-building': 'Community Building'
};

export const ALL_GUIDES: Record<string, { title: string; description: string; category: GuideCategory; readTime?: string; difficulty?: 'Beginner' | 'Intermediate' | 'Advanced' }> = {
  'how-to-live-stream': {
    title: 'How To Set Up Your Live Stream',
    description: 'Learn how to set up your live stream with our comprehensive guide. From setting up your account to going live, discover everything you need to become a successful streamer.',
    category: 'stream-setup',
    readTime: '7 min',
    difficulty: 'Beginner'
  },
  'obs-setup-guide': {
    title: 'OBS Setup Guide',
    description: 'Learn how to setup OBS Studio for streaming with our comprehensive guide.',
    category: 'stream-setup',
    readTime: '5 min',
    difficulty: 'Beginner'
  },
  'what-is-the-best-mic-for-streaming': {
    title: 'What is the Best Mic for Streaming?',
    description: 'Learn about the best mic for streaming with our comprehensive guide. We\'ll discuss the pros and cons of each mic and help you decide which one is right for you.',
    category: 'stream-setup',
    readTime: '5 min',
    difficulty: 'Beginner'
  },
  'monetize-your-clips': {
    title: 'Monetize Your Clips',
    description: 'Learn how to monetize your clips with our comprehensive guide. From setting up your account to going live, discover everything you need to become a successful streamer.',
    category: 'monetization',
    readTime: '10 min',
    difficulty: 'Intermediate'
  },
  'strategies-to-make-money-from-live-streaming': {
    title: 'Strategies To Make Money From Live Streaming',
    description: 'Maximize your income as a live streamer—on platforms like AVIE Streaming, from any device. Whether you are a gamer, musician, educator, or content creator, discover proven strategies to turn your passion into profit.',
    category: 'monetization',
    readTime: '16 min',
    difficulty: 'Advanced'
  },
  'monetize-your-live-stream-content': {
    title: 'How To Monetize Your Live Stream Content',
    description: 'Learn how to monetize your live stream content with our comprehensive guide. From setting up your account to going live, discover everything you need to become a successful streamer.',
    category: 'monetization',
    readTime: '10 min',
    difficulty: 'Intermediate'
  },
  'earn-more-multi-streaming': {
    title: 'How To Earn More With MultiStreaming',
    description: 'Learn how to earn more as a live streamer by multistreaming with our comprehensive guide. This guide will explain how to multistream for free.',
    category: 'growth-marketing',
    readTime: '5 min',
    difficulty: 'Intermediate'
  },
  'earn-more-from-live-streaming-with-avie': {
    title: 'How To Earn More From Live Streaming With AVIE',
    description: 'Learn how to earn more as a live streamer on AVIE with our comprehensive guide. This guide will explain why its better than other platforms.',
    category: 'growth-marketing',
    readTime: '10 min',
    difficulty: 'Beginner'
  },
  'how-to-stream-from-mobile': {
    title: 'How To Stream From Mobile',
    description: 'Learn how to easily stream from mobile with our comprehensive guide.',
    category: 'stream-setup',
    readTime: '5 min',
    difficulty: 'Beginner'
  },
  'best-places-to-live-stream': {
    title: 'Best Places To Live Stream',
    description: 'Learn about the best places to live stream with our comprehensive guide. We\'ll discuss the pros and cons of each platform and help you decide which one is right for you.',
    category: 'content-strategy',
    readTime: '5 min',
    difficulty: 'Beginner'
  },
  'how-to-live-stream-on-AVIE-Streaming': {
    title: 'How To Live Stream On AVIE Streaming',
    description: 'Learn how to live stream on AVIE Streaming with our comprehensive guide. From setting up your account to going live, discover everything you need to become a successful streamer.',
    category: 'stream-setup',
    readTime: '5 min',
    difficulty: 'Beginner'
  },
  'how-to-start-streaming-on-twitch': {
    title: 'How to Start Streaming on Twitch: Complete Beginner\'s Guide',
    description: 'Learn how to start streaming on Twitch with our comprehensive guide. From setting up your account to going live, discover everything you need to become a successful Twitch streamer.',
    category: 'stream-setup',
    readTime: '10 min',
    difficulty: 'Beginner'
  },
  'streaming-equipment-guide': {
    title: 'Essential Streaming Equipment Guide',
    description: 'A complete guide to all the equipment you need for a professional streaming setup.',
    category: 'stream-setup',
    readTime: '12 min',
    difficulty: 'Intermediate'
  },
  'content-planning-strategy': {
    title: 'Content Planning for Streamers',
    description: 'Learn how to plan and organize your streaming content for maximum impact.',
    category: 'content-strategy',
    readTime: '10 min',
    difficulty: 'Beginner'
  },
  'content-calendar-creation': {
    title: 'Creating an Effective Content Calendar',
    description: 'Build a content calendar that keeps you organized and consistent.',
    category: 'content-strategy',
    readTime: '8 min',
    difficulty: 'Beginner'
  },
  'growth-hacking-twitch': {
    title: 'Growth Hacking Your Twitch Channel',
    description: 'Proven strategies to grow your Twitch channel and increase viewership.',
    category: 'growth-marketing',
    readTime: '15 min',
    difficulty: 'Intermediate'
  },
  'social-media-for-streamers': {
    title: 'Social Media Strategy for Streamers',
    description: 'Leverage social media to grow your streaming audience.',
    category: 'growth-marketing',
    readTime: '12 min',
    difficulty: 'Beginner'
  },
  'twitch-monetization': {
    title: 'How to Monetize Your Twitch Stream',
    description: 'Learn all the ways to monetize your Twitch stream and turn your passion into income.',
    category: 'monetization',
    readTime: '18 min',
    difficulty: 'Intermediate'
  },
  'sponsorship-guide': {
    title: 'Complete Guide to Stream Sponsorships',
    description: 'Everything you need to know about getting and maintaining sponsorships.',
    category: 'monetization',
    readTime: '15 min',
    difficulty: 'Advanced'
  },
  'building-community': {
    title: 'Building a Strong Stream Community',
    description: 'Create and nurture an engaged community around your stream.',
    category: 'community-building',
    readTime: '10 min',
    difficulty: 'Beginner'
  },
  'discord-server-setup': {
    title: 'Setting Up a Discord Community',
    description: 'Learn how to create and manage a Discord server for your stream.',
    category: 'community-building',
    readTime: '12 min',
    difficulty: 'Intermediate'
  }
}; 