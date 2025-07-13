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
  'how-much-revenue-can-you-make-from-streaming': {
    title: 'How Much Revenue Can You Make From Streaming?',
    description: 'Explore the various ways to earn income through streaming platforms, including AVIE\'s unique AP reward system, subscriptions, donations, and more.',
    category: 'monetization',
    readTime: '10 min',
    difficulty: 'Intermediate'
  },
  'using-avie-multistreaming-to-earn-more': {
    title: 'Using AVIE Multistreaming To Earn More',
    description: 'Learn how to use AVIE\'s multistreaming feature to earn more from your streaming.',
    category: 'monetization',
    readTime: '10 min',
    difficulty: 'Intermediate'
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
  },
  'stream-setup-guide': {
    title: 'Ultimate Stream Setup Guide: Everything You Need to Start Streaming in 2025',
    description: 'Complete beginner\'s guide to setting up your live stream. Learn about equipment, software, platforms, and get streaming within hours, not days.',
    category: 'stream-setup',
    readTime: '20 min',
    difficulty: 'Beginner'
  },
  'content-strategy-for-streamers': {
    title: 'Complete Content Strategy Guide for Streamers: Build an Engaged Audience in 2025',
    description: 'Master content planning, scheduling, and engagement strategies that successful streamers use to grow their audience and increase revenue.',
    category: 'content-strategy',
    readTime: '18 min',
    difficulty: 'Intermediate'
  },
  'grow-your-stream': {
    title: 'Stream Growth & Marketing Blueprint: Proven Strategies to Build Your Audience in 2025',
    description: 'Master the marketing strategies that successful streamers use to grow from zero to thousands of viewers. Learn audience building, social media marketing, and networking techniques.',
    category: 'growth-marketing',
    readTime: '22 min',
    difficulty: 'Intermediate'
  },
  'streaming-monetization-guide': {
    title: 'The Monetization Master Guide for Streamers: Turn Your Passion into Profit in 2025',
    description: 'Complete guide to streaming monetization including subscriptions, donations, sponsorships, merchandise, and advanced revenue strategies. Learn how to build sustainable income from your streaming content.',
    category: 'monetization',
    readTime: '25 min',
    difficulty: 'Advanced'
  },
  'streamer-community-building-guide': {
    title: 'Complete Community Building Guide for Streamers: Build an Engaged, Loyal Audience in 2025',
    description: 'Master the art of building and managing thriving streaming communities. Learn how to create lasting connections, foster engagement, and turn viewers into a dedicated fanbase.',
    category: 'community-building',
    readTime: '20 min',
    difficulty: 'Intermediate'
  },
  'avie-streaming-guide': {
    title: 'Streaming With AVIE: The Complete Guide to Next-Generation Streaming in 2025',
    description: 'Master AVIE Streaming platform with this comprehensive guide. Learn about unique features, monetization advantages, multi-streaming capabilities, and why AVIE is the future of live streaming.',
    category: 'stream-setup',
    readTime: '15 min',
    difficulty: 'Beginner'
  }
}; 