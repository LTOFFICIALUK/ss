import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getRecentBlogPosts } from '../../constants/blog';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  publishDate: string;
  author: {
    name: string;
    url?: string;
  };
  category: string;
  readTime?: string;
  featuredImage: string;
  keywords: string[];
  slug: string;
}

interface BlogIndexProps {
  posts: BlogPost[];
}

const BlogIndex: React.FC<BlogIndexProps> = ({ posts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(posts.map(post => post.category)))];

  // Get latest posts for sidebar
  const latestPosts = getRecentBlogPosts(5);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link to="/" className="hover:text-gray-700">Home</Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-900 font-medium" aria-current="page">
            Blog
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Latest news, updates, and insights about streaming platforms, creator economy, and digital content creation.
        </p>
      </header>

      {/* Flex Layout Container */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="flex-1">
          {/* Search and Filter */}
          <div className="mb-8 space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-label="Search blog posts"
              />
            </div>
            <div className="sm:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-label="Filter by category"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No blog posts found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    {/* Featured Image */}
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        itemProp="image"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <h2
                        className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors"
                        itemProp="headline"
                      >
                        {post.title}
                      </h2>
                      <p
                        className="text-gray-600 text-sm mb-4 line-clamp-3"
                        itemProp="description"
                      >
                        {post.description}
                      </p>
                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-4">
                          <time
                            dateTime={post.publishDate}
                            itemProp="datePublished"
                          >
                            {new Date(post.publishDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </time>
                          <span itemProp="author" itemScope itemType="https://schema.org/Person">
                            <span itemProp="name">by {post.author.name}</span>
                          </span>
                        </div>
                        {post.readTime && (
                          <span itemProp="timeRequired">{post.readTime}</span>
                        )}
                      </div>
                      {/* Hidden structured data */}
                      <meta itemProp="url" content={`https://successfulstreamer.com/blog/${post.slug}`} />
                      <meta itemProp="publisher" content="Successful Streamer" />
                      <meta itemProp="inLanguage" content="en-US" />
                      <meta itemProp="isAccessibleForFree" content="true" />
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
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
  );
};

export default BlogIndex; 