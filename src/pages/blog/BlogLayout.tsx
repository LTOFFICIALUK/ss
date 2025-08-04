import React from 'react';
import { Helmet } from 'react-helmet-async';
import BlogIndex from '../../components/blog-specific/BlogIndex';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../../constants/blog';

const BlogLayoutPage: React.FC = () => {
  // Enhanced Schema.org markup for better news discovery
  const enhancedBlogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://successfulstreamer.com/blog",
    "name": "Successful Streamer Blog",
    "description": "Latest news, updates, and insights about streaming platforms, creator economy, and digital content creation.",
    "url": "https://successfulstreamer.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Successful Streamer",
      "url": "https://successfulstreamer.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://successfulstreamer.com/images/logo.png",
        "width": 279,
        "height": 40
      },
      "sameAs": [
        "https://twitter.com/successfulstreamer",
        "https://linkedin.com/company/successfulstreamer"
      ]
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": BLOG_POSTS.length,
      "itemListElement": BLOG_POSTS.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "image": {
            "@type": "ImageObject",
            "url": post.featuredImage,
            "width": 1200,
            "height": 630
          },
          "author": {
            "@type": "Person",
            "name": post.author.name,
            ...(post.author.url && { "url": post.author.url })
          },
          "publisher": {
            "@type": "Organization",
            "name": "Successful Streamer",
            "url": "https://successfulstreamer.com"
          },
          "datePublished": post.publishDate,
          "dateModified": post.modifiedDate || post.publishDate,
          "articleSection": BLOG_CATEGORIES[post.category],
          "keywords": post.keywords.join(', '),
          "url": `https://successfulstreamer.com/blog/${post.slug}`,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://successfulstreamer.com/blog/${post.slug}`
          },
          "about": [
            {
              "@type": "Thing",
              "name": "Live Streaming"
            },
            {
              "@type": "Thing",
              "name": "Creator Economy"
            }
          ],
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "isFamilyFriendly": true,
          "audience": {
            "@type": "Audience",
            "audienceType": "Content Creators, Streamers, Digital Entrepreneurs"
          }
        }
      }))
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Live Streaming"
      },
      {
        "@type": "Thing",
        "name": "Creator Economy"
      },
      {
        "@type": "Thing",
        "name": "Digital Content Creation"
      }
    ],
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "isFamilyFriendly": true,
    "audience": {
      "@type": "Audience",
      "audienceType": "Content Creators, Streamers, Digital Entrepreneurs"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://successfulstreamer.com/blog?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Helmet>
        <title>Blog | Latest Streaming News & Creator Economy Updates | Successful Streamer</title>
        <meta name="description" content="Stay updated with the latest streaming news, platform updates, and creator economy insights. Expert analysis on Twitch, YouTube, Vibes Streaming, and emerging platforms." />
        <meta name="keywords" content="streaming news, creator economy, live streaming updates, twitch news, youtube streaming, vibes streaming, platform updates, streaming industry, content creation news" />
        <meta name="author" content="Successful Streamer Team" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Enhanced Open Graph for better CTR */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog | Latest Streaming News & Creator Economy Updates" />
        <meta property="og:description" content="Stay updated with the latest streaming news, platform updates, and creator economy insights. Expert analysis on Twitch, YouTube, Vibes Streaming, and emerging platforms." />
        <meta property="og:url" content="https://successfulstreamer.com/blog" />
        <meta property="og:site_name" content="Successful Streamer" />
        <meta property="og:image" content="https://successfulstreamer.com/images/blog-og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Successful Streamer Blog - Latest Streaming News" />
        <meta property="og:locale" content="en_US" />
        
        {/* Enhanced Twitter Card for better CTR */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Latest Streaming News & Creator Economy Updates" />
        <meta name="twitter:description" content="Stay updated with the latest streaming news, platform updates, and creator economy insights." />
        <meta name="twitter:image" content="https://successfulstreamer.com/images/blog-twitter-image.jpg" />
        <meta name="twitter:image:alt" content="Successful Streamer Blog - Latest Streaming News" />
        <meta name="twitter:site" content="@successfulstreamer" />
        <meta name="twitter:creator" content="@successfulstreamer" />
        
        {/* News-specific meta tags for Google News */}
        <meta name="news_keywords" content="streaming news, creator economy, twitch, youtube, vibes streaming, platform updates, live streaming, content creation" />
        <meta name="article:publisher" content="https://successfulstreamer.com" />
        
        {/* Canonical and alternate languages */}
        <link rel="canonical" href="https://successfulstreamer.com/blog" />
        <link rel="alternate" type="application/rss+xml" title="Successful Streamer Blog RSS" href="https://successfulstreamer.com/blog/rss.xml" />
        
        {/* Enhanced Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(enhancedBlogSchema)}
        </script>
      </Helmet>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogIndex posts={BLOG_POSTS} />
      </div>
    </>
  );
};

export default BlogLayoutPage; 