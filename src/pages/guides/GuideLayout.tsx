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
  author?: string;
  category: GuideCategory;
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
  author = 'Successful Streamer Team',
  category
}) => {
  const [tableOfContents, setTableOfContents] = useState<TableOfContentsItem[]>([]);
  const [activeSection, setActiveSection] = useState<string>('');
  const location = useLocation();
  const currentSlug = location.pathname.split('/').pop() || '';

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
              'strategies-to-make-money-from-live-streaming'
            ].includes(slug);
    })
    .slice(0, 3); // Limit to 3 related guides

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
  const getCategoryName = (category: GuideCategory): string => {
    const names: Record<GuideCategory, string> = {
      'stream-setup': 'Stream Setup',
      'growth-marketing': 'Growth Marketing',
      'community-building': 'Community Building',
      'monetization': 'Monetization',
      'content-strategy': 'Content Strategy'
    };
    return names[category] || category;
  };

  return (
    <>
      <Helmet>
        <title>{`${title} | Successful Streamer Guides`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:author" content={author} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <style>
          {`
            article h2 {
              scroll-margin-top: 2rem;
            }
          `}
        </style>
      </Helmet>
      
      <div className="relative max-w-7xl mx-auto">
        <article className="py-8 sm:py-12 pr-0 lg:pr-80">
          <div className="max-w-4xl">

            {/* Breadcrumbs */}
            <nav className="mb-8 pl-8" aria-label="Breadcrumb">
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

            {children}
            
            {/* Guide Footer */}
            <footer className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                {publishDate && (
                  <time dateTime={publishDate}>
                    Published: {new Date(publishDate).toLocaleDateString()}
                  </time>
                )}
                <span>Written by {author}</span>
              </div>
            </footer>
          </div>
        </article>

        {/* Table of Contents Sidebar */}
        <div className="hidden lg:block fixed top-24 right-60 w-72 overflow-auto max-h-[calc(100vh-8rem)]">
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