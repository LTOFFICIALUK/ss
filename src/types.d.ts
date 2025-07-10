declare module '*.jpg' {
  const content: string;
  export default content;
}

// SVG module declarations
declare module '*.svg' {
  const content: string;
  export default content;
}

// PNG module declarations
declare module '*.png' {
  const value: any;
  export default value;
}

export type GuideCategory = 'stream-setup' | 'content-strategy' | 'growth-marketing' | 'monetization' | 'community-building';

export interface GuideMetadata {
  slug: string;
  title: string;
  description: string;
  category: GuideCategory;
  publishDate: string;
  author?: string;
} 