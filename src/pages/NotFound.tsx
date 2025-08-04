import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | SuccessfulStreamer</title>
        <meta name="description" content="The page you're looking for doesn't exist. Find streaming guides, tips, and resources on our homepage." />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="404 - Page Not Found | SuccessfulStreamer" />
        <meta property="og:description" content="The page you're looking for doesn't exist. Find streaming guides, tips, and resources on our homepage." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://successfulstreamer.com/404" />
        <link rel="canonical" href="https://successfulstreamer.com/404" />
      </Helmet>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Page Not Found
      </h2>
      <p className="text-gray-600 max-w-md mb-8">
        Oops! The page you're looking for doesn't exist. It might have been moved
        or deleted. Don't worry though, you can find plenty of great content on our
        homepage.
      </p>
      <div className="space-x-4">
        <Link
          to="/"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg
            hover:bg-blue-600 transition-colors font-semibold"
          aria-label="Return to homepage"
        >
          Go Home
        </Link>
        <Link
          to="/guides"
          className="inline-block bg-gray-100 text-gray-700 px-6 py-3 rounded-lg
            hover:bg-gray-200 transition-colors font-semibold"
          aria-label="Browse our guides"
        >
          Browse Topics
        </Link>
      </div>
    </div>
    </>
  );
};

export default NotFound; 