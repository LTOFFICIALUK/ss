export const BLOG_CATEGORIES = {
  'news': 'News & Updates',
  'platform-updates': 'Platform Updates',
  'creator-economy': 'Creator Economy',
  'streaming-tips': 'Streaming Tips',
  'industry-insights': 'Industry Insights',
  'announcements': 'Announcements',
  'community-building': 'Community Building',
  'stream-setup': 'Stream Setup',
  'monetization': 'Monetization'
} as const;

export type BlogCategory = keyof typeof BLOG_CATEGORIES;

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  publishDate: string;
  modifiedDate?: string;
  author: {
    name: string;
    url?: string;
  };
  category: BlogCategory;
  readTime?: string;
  featuredImage: string;
  keywords: string[];
  slug: string;
  content?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Vibes Streaming Launches "Watch-to-Earn" Feature',
    description: 'Vibes Streaming today announced the rollout of its "Watch-to-Earn" feature, a new engagement model that rewards viewers in real time for watching live streams.',
    publishDate: '2025-08-04T10:00:00Z',
    author: {
      name: 'Successful Streamer Team',
      url: 'https://successfulstreamer.com'
    },
    category: 'announcements',
    readTime: '8 min',
    featuredImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    keywords: [
      'vibes streaming',
      'watch to earn',
      'streaming platform',
      'creator economy',
      'web3 streaming',
      'streaming rewards',
      'live streaming news',
      'vibe points',
      'phantom wallet',
      'solana blockchain'
    ],
    slug: 'vibes-streaming-launches-watch-to-earn-feature'
  },
  {
    id: '2',
    title: 'The Future of Multi-Platform Streaming: What Creators Need to Know',
    description: 'Explore the latest trends in multi-platform streaming and how creators can maximize their reach across multiple platforms simultaneously.',
    publishDate: '2025-01-10T14:30:00Z',
    author: {
      name: 'Successful Streamer Team',
      url: 'https://successfulstreamer.com'
    },
    category: 'industry-insights',
    readTime: '8 min',
    featuredImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    keywords: [
      'multi-platform streaming',
      'streaming strategy',
      'creator tips',
      'streaming platforms',
      'audience growth',
      'content distribution'
    ],
    slug: 'future-of-multi-platform-streaming'
  },
  {
    id: '3',
    title: 'New Streaming Platform Regulations: What You Need to Know',
    description: 'As the live-streaming industry matures, regulators around the world are introducing new rules to protect viewers, creators, and digital marketplaces.',
    publishDate: '2025-08-04T09:15:00Z',
    author: {
      name: 'Successful Streamer Team',
      url: 'https://successfulstreamer.com'
    },
    category: 'news',
    readTime: '12 min',
    featuredImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    keywords: [
      'streaming regulations',
      'platform policies',
      'content moderation',
      'streaming news',
      'digital content laws',
      'creator rights',
      'DSA',
      'COPPA',
      'AML',
      'KYC',
      'DMCA',
      'privacy laws'
    ],
    slug: 'new-streaming-platform-regulations'
  },
  {
    id: '4',
    title: 'How to Build a Loyal Streaming Community in 2025',
    description: 'Discover proven strategies for building and maintaining a loyal streaming community in today\'s competitive landscape.',
    publishDate: '2024-12-28T16:45:00Z',
    author: {
      name: 'Successful Streamer Team',
      url: 'https://successfulstreamer.com'
    },
    category: 'community-building',
    readTime: '7 min',
    featuredImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    keywords: [
      'streaming community',
      'audience building',
      'community engagement',
      'streamer tips',
      'loyal viewers',
      'community management'
    ],
    slug: 'how-to-build-loyal-streaming-community-2025'
  },
  {
    id: '5',
    title: 'Top 10 Streaming Equipment Upgrades for 2025',
    description: 'Essential streaming equipment upgrades that will enhance your production quality and viewer experience this year.',
    publishDate: '2024-12-20T11:30:00Z',
    author: {
      name: 'Successful Streamer Team',
      url: 'https://successfulstreamer.com'
    },
    category: 'stream-setup',
    readTime: '10 min',
    featuredImage: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80',
    keywords: [
      'streaming equipment',
      'streaming setup',
      'streaming gear',
      'production quality',
      'streaming hardware',
      'equipment upgrades'
    ],
    slug: 'top-10-streaming-equipment-upgrades-2025'
  },
  {
    id: '6',
    title: 'Monetization Strategies That Actually Work in 2025',
    description: 'Real-world monetization strategies that successful streamers are using to generate sustainable income in 2025.',
    publishDate: '2024-12-15T13:20:00Z',
    author: {
      name: 'Successful Streamer Team',
      url: 'https://successfulstreamer.com'
    },
    category: 'monetization',
    readTime: '9 min',
    featuredImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80',
    keywords: [
      'streaming monetization',
      'streamer income',
      'revenue strategies',
      'streaming business',
      'monetization tips',
      'streaming revenue'
    ],
    slug: 'monetization-strategies-that-actually-work-2025'
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return BLOG_POSTS.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: BlogCategory): BlogPost[] => {
  return BLOG_POSTS.filter(post => post.category === category);
};

export const getRecentBlogPosts = (limit: number = 6): BlogPost[] => {
  return BLOG_POSTS
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
}; 