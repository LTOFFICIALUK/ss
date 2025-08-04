import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { getRecentBlogPosts } from '../../constants/blog';

interface BlogLayoutProps {
  title: string;
  description: string;
  publishDate: string;
  modifiedDate?: string;
  author: {
    name: string;
    url?: string;
  };
  keywords: string[];
  featuredImage: string;
  category: string;
  readTime?: string;
  slug?: string;
  children: React.ReactNode;
  schema?: object;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({
  title,
  description,
  publishDate,
  modifiedDate,
  author,
  keywords,
  featuredImage,
  category,
  readTime,
  slug,
  children,
  schema
}) => {
  // Get latest posts for sidebar
  const latestPosts = getRecentBlogPosts(5);

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": featuredImage,
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Person",
      "name": author.name,
      ...(author.url && { "url": author.url })
    },
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
    "datePublished": publishDate,
    "dateModified": modifiedDate || publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://successfulstreamer.com/blog/${slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
    },
    "articleSection": category,
    "keywords": keywords.join(', '),
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "isFamilyFriendly": true,
    "audience": {
      "@type": "Audience",
      "audienceType": "Content Creators, Streamers, Digital Entrepreneurs"
    },
    "isPartOf": {
      "@type": "Blog",
      "@id": "https://successfulstreamer.com/blog",
      "name": "Successful Streamer Blog",
      "description": "Latest news, updates, and insights about streaming platforms, creator economy, and digital content creation.",
      "publisher": {
        "@type": "Organization",
        "name": "Successful Streamer",
        "url": "https://successfulstreamer.com"
      }
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
    ...(readTime && { "timeRequired": `PT${readTime.replace(/\s*min\s*/, 'M')}` })
  };

  const finalSchema = schema || defaultSchema;

  return (
    <>
      <Helmet>
        <title>{title} | Successful Streamer Blog</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta name="author" content={author.name} />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={featuredImage} />
        <meta property="og:url" content={`https://successfulstreamer.com/blog/${slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} />
        <meta property="og:site_name" content="Successful Streamer" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={modifiedDate || publishDate} />
        <meta property="article:author" content={author.name} />
        <meta property="article:section" content={category} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={featuredImage} />
        
        {/* News-specific meta tags */}
        <meta name="news_keywords" content={keywords.join(', ')} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(finalSchema)}
        </script>
      </Helmet>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex Layout Container */}
        <div className="flex flex-col lg:flex-row gap-12 py-6 sm:py-12">
          {/* Main Content */}
          <div className="flex-1">
            <article itemScope itemType="https://schema.org/BlogPosting">
              <div className="max-w-4xl mx-auto">
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
                      <Link to="/blog" className="hover:text-gray-700">Blog</Link>
                    </li>
                    <li>
                      <span className="mx-2">/</span>
                    </li>
                    <li className="text-gray-900 font-medium" aria-current="page">
                      {title}
                    </li>
                  </ol>
                </nav>

                {/* Blog Header */}
                <header className="mb-8">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {category}
                    </span>
                  </div>
                  
                  <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight" itemProp="headline">
                    {title}
                  </h1>
                  
                  <div className="flex items-center text-gray-600 text-sm mb-6">
                    <time dateTime={publishDate} className="mr-4" itemProp="datePublished">
                      {new Date(publishDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span className="mr-4" itemProp="author" itemScope itemType="https://schema.org/Person">
                      by <span itemProp="name">{author.name}</span>
                    </span>
                    {readTime && <span itemProp="timeRequired">{readTime} read</span>}
                  </div>
                  
                  <p className="text-xl text-gray-700 leading-relaxed" itemProp="description">
                    {description}
                  </p>
                </header>

                {/* Featured Image */}
                {featuredImage && (
                  <div className="mb-8">
                    <img
                      src={featuredImage}
                      alt={title}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                      itemProp="image"
                    />
                  </div>
                )}

                {/* Blog Content */}
                <div className="prose prose-lg max-w-none" itemProp="articleBody">
                  {children}
                </div>

                {/* Blog Footer */}
                <footer className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div>
                      <span>Published on {new Date(publishDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                      {modifiedDate && modifiedDate !== publishDate && (
                        <span className="ml-4">
                          Updated on {new Date(modifiedDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-4">
                      {keywords.slice(0, 3).map((keyword, index) => (
                        <span key={index} className="bg-gray-100 px-2 py-1 rounded text-xs">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </footer>
              </div>
            </article>
          </div>

          {/* Latest Posts Sidebar - Hidden on mobile */}
          <div className="lg:w-80 lg:flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Latest Posts</h3>
              <div className="space-y-4">
                {latestPosts.map((post) => (
                  <article key={post.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0" itemScope itemType="https://schema.org/BlogPosting">
                    <Link to={`/blog/${post.slug}`} className="block group">
                      {/* Featured Image */}
                      <div className="aspect-video overflow-hidden rounded-lg mb-3">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          itemProp="image"
                          loading="lazy"
                        />
                      </div>
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2" itemProp="headline">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-600 line-clamp-2 mb-2" itemProp="description">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <time dateTime={post.publishDate} itemProp="datePublished">
                          {new Date(post.publishDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </time>
                        {post.readTime && <span itemProp="timeRequired">{post.readTime}</span>}
                      </div>
                      {/* Hidden structured data */}
                      <meta itemProp="url" content={`https://successfulstreamer.com/blog/${post.slug}`} />
                      <meta itemProp="publisher" content="Successful Streamer" />
                      <meta itemProp="inLanguage" content="en-US" />
                      <meta itemProp="isAccessibleForFree" content="true" />
                      <meta itemProp="author" content={post.author.name} />
                    </Link>
                  </article>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link 
                  to="/blog" 
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  View All Posts →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogLayout; 