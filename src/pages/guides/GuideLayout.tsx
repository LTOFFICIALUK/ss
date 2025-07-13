import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
import { GuideCategory } from '../../types';
import { ALL_GUIDES } from '../../constants/guides';

interface GuideLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  publishDate?: string;
  lastModified?: string; // New prop for dateModified
  author?: string;
  category: GuideCategory;
  featuredImage?: string; // New prop for article image
  keywords?: string[]; // New prop for keywords
  wordCount?: number; // New prop for word count
  readingTime?: string; // New prop for reading time estimate
}

interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

const GuideLayout: React.FC<GuideLayoutProps> = ({
  children,
  title,
  description,
  publishDate,
  lastModified,
  author = 'Successful Streamer Team',
  category,
  featuredImage,
  keywords = [],
  wordCount,
  readingTime
}) => {
  const [tableOfContents, setTableOfContents] = useState<TableOfContentsItem[]>([]);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const location = useLocation();
  const currentSlug = location.pathname.split('/').pop() || '';
  
  // Generate full URL for the current page
  const fullUrl = `https://successfulstreamer.com${location.pathname}`;
  
  // Default featured image if none provided
  const defaultFeaturedImage = 'https://successfulstreamer.com/images/default-guide-cover.jpg';
  
  // Calculate reading time if word count is provided
  const estimatedReadingTime = wordCount ? Math.ceil(wordCount / 200) : null;
  
  // Get related guides from the same category that have actual pages
  const relatedGuides = Object.entries(ALL_GUIDES)
    .filter(([slug, guide]) => {
      // Only show guides that have actual pages
      return guide.category === category && 
             slug !== currentSlug && 
             [
              'how-to-start-streaming-on-twitch', 
              'how-to-live-stream', 
              'how-to-live-stream-on-AVIE-Streaming', 
              'best-places-to-live-stream', 
              'how-to-stream-from-mobile',
              'earn-more-from-live-streaming-with-avie',
              'earn-more-multi-streaming',
              'monetize-your-live-stream-content',
              'monetize-your-clips',
              'strategies-to-make-money-from-live-streaming',
              'what-is-the-best-mic-for-streaming',
              'streaming-equipment-guide',
              'obs-setup-guide',
              'how-much-revenue-can-you-make-from-streaming',
              'using-avie-multistreaming-to-earn-more',
              'content-planning-strategy',
              'content-calendar-creation',
              'growth-hacking-twitch',
              'social-media-for-streamers',
              'twitch-monetization',
              'sponsorship-guide',
              'building-community',
              'discord-server-setup'
            ].includes(slug);
    })
    .slice(0, 3); // Limit to 3 related guides

  // Generate Article structured data
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl
    },
    headline: title,
    description: description,
    image: featuredImage || defaultFeaturedImage,
    author: {
      '@type': 'Organization',
      name: author,
      url: 'https://successfulstreamer.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Successful Streamer',
      logo: {
        '@type': 'ImageObject',
        url: 'https://successfulstreamer.com/images/logo.png'
      },
      url: 'https://successfulstreamer.com'
    },
    datePublished: publishDate || new Date().toISOString(),
    dateModified: lastModified || publishDate || new Date().toISOString(),
    ...(keywords.length > 0 && { keywords: keywords.join(', ') }),
    ...(wordCount && { wordCount }),
    ...(estimatedReadingTime && { 
      timeRequired: `PT${estimatedReadingTime}M`,
      // Add reading time in a more readable format
      additionalProperty: {
        '@type': 'PropertyValue',
        name: 'readingTime',
        value: `${estimatedReadingTime} min read`
      }
    }),
    about: {
      '@type': 'Thing',
      name: getCategoryName(category),
      description: `Learn about ${getCategoryName(category).toLowerCase()} for streaming`
    },
    articleSection: getCategoryName(category),
    inLanguage: 'en-US',
    ...(relatedGuides.length > 0 && {
      relatedLink: relatedGuides.map(([slug]) => `https://successfulstreamer.com/guides/${slug}`)
    })
  };

  useEffect(() => {
    // Get all h2 headings from the article
    const article = document.querySelector('article');
    if (!article) return;

    const headings = Array.from(article.querySelectorAll('h2'))
      .filter(heading => !heading.closest('[data-cta-buttons]')) as HTMLElement[];
    const toc: TableOfContentsItem[] = [];

    headings.forEach((heading, index) => {
      // Create an ID if none exists
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }

      toc.push({
        id: heading.id,
        text: heading.textContent || '',
        level: 2 // All headings are h2
      });
    });

    setTableOfContents(toc);

    // Set up intersection observer for active section highlighting
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px'
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  // Get category name for breadcrumbs
  function getCategoryName(category: GuideCategory): string {
    const names: Record<GuideCategory, string> = {
      'stream-setup': 'Stream Setup',
      'growth-marketing': 'Growth Marketing',
      'community-building': 'Community Building',
      'monetization': 'Monetization',
      'content-strategy': 'Content Strategy'
    };
    return names[category] || category;
  }

  const handleTocToggle = () => {
    setIsTocOpen(!isTocOpen);
  };

  return (
    <>
      <Helmet>
        <title>{`${title} | Successful Streamer Guides`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={featuredImage || defaultFeaturedImage} />
        <meta property="article:published_time" content={publishDate || new Date().toISOString()} />
        <meta property="article:modified_time" content={lastModified || publishDate || new Date().toISOString()} />
        <meta property="article:author" content={author} />
        <meta property="article:section" content={getCategoryName(category)} />
        {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
        {keywords.map((keyword, index) => (
          <meta key={index} property="article:tag" content={keyword} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={featuredImage || defaultFeaturedImage} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={fullUrl} />
        
        {/* Article Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
        
        <style>
          {`
            article h2 {
              scroll-margin-top: 2rem;
            }
          `}
        </style>
      </Helmet>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="py-6 sm:py-12 lg:pr-80" itemScope itemType="https://schema.org/Article">
          <div className="max-w-4xl">
            {/* Breadcrumbs */}
            <nav className="mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-gray-500">
                <li>
                  <Link to="/" className="hover:text-gray-700">Home</Link>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li>
                  <Link to="/guides" className="hover:text-gray-700">Guides</Link>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li>
                  <Link to={`/category/${category}`} className="hover:text-gray-700">
                    {getCategoryName(category)}
                  </Link>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-gray-900 font-medium" aria-current="page">
                  {title}
                </li>
              </ol>
            </nav>

            {/* Article Header with Metadata */}
            <header className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" itemProp="headline">
                {title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6" itemProp="description">
                {description}
              </p>
              
              {/* Article Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                {publishDate && (
                  <time dateTime={publishDate} itemProp="datePublished">
                    Published: {new Date(publishDate).toLocaleDateString()}
                  </time>
                )}
                {lastModified && lastModified !== publishDate && (
                  <time dateTime={lastModified} itemProp="dateModified">
                    Updated: {new Date(lastModified).toLocaleDateString()}
                  </time>
                )}
                <span itemProp="author" itemScope itemType="https://schema.org/Organization">
                  By <span itemProp="name">{author}</span>
                </span>
                {(readingTime || estimatedReadingTime) && (
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {readingTime || `${estimatedReadingTime} min read`}
                  </span>
                )}
              </div>
              
              {/* Keywords/Tags */}
              {keywords.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                      itemProp="keywords"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* Mobile ToC Toggle Button */}
            <button
              onClick={handleTocToggle}
              className="lg:hidden mb-6 flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
              aria-expanded={isTocOpen}
              aria-controls="mobile-toc"
            >
              <svg
                className={`w-5 h-5 mr-2 transform transition-transform ${isTocOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Table of Contents
            </button>

            {/* Mobile ToC Panel */}
            <div
              id="mobile-toc"
              className={`lg:hidden mb-6 bg-gray-50 rounded-lg p-4 ${isTocOpen ? 'block' : 'hidden'}`}
            >
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsTocOpen(false)}
                    className={`block text-sm ${
                      activeSection === item.id
                        ? 'text-blue-600 font-medium'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>

            {/* Article Content */}
            <div itemProp="articleBody">
              {children}
            </div>
            
            {/* Mobile Related Guides */}
            {relatedGuides.length > 0 && (
              <div className="lg:hidden mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  Related Guides
                </h4>
                <div className="space-y-3">
                  {relatedGuides.map(([slug, guide]) => (
                    <Link
                      key={slug}
                      to={`/guides/${slug}`}
                      className="block text-sm text-gray-600 hover:text-gray-900"
                    >
                      {guide.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Guide Footer */}
            <footer className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600 space-y-2 sm:space-y-0">
                {publishDate && (
                  <time dateTime={publishDate} itemProp="datePublished">
                    Published: {new Date(publishDate).toLocaleDateString()}
                  </time>
                )}
                <span itemProp="author" itemScope itemType="https://schema.org/Organization">
                  Written by <span itemProp="name">{author}</span>
                </span>
              </div>
            </footer>
          </div>
        </article>

        {/* Desktop Table of Contents Sidebar */}
        <div className="hidden lg:block fixed top-24 right-8 xl:right-60 w-72 overflow-auto max-h-[calc(100vh-8rem)]">
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Table of contents
            </h4>
            <nav className="space-y-2">
              {tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block text-sm ${
                    activeSection === item.id
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.text}
                </a>
              ))}
            </nav>

            {relatedGuides.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  Related Guides
                </h4>
                <div className="space-y-3">
                  {relatedGuides.map(([slug, guide]) => (
                    <Link
                      key={slug}
                      to={`/guides/${slug}`}
                      className="block text-sm text-gray-600 hover:text-gray-900"
                    >
                      {guide.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GuideLayout; 