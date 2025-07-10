import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Mission Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-6">About SuccessfulStreamer</h1>
        <p className="text-xl text-gray-600">
          We're dedicated to helping content creators build successful streaming careers
          through comprehensive guides, expert advice, and community support.
        </p>
      </section>

      {/* Our Story */}
      <section className="bg-white rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-4">
          SuccessfulStreamer was born from a simple observation: while streaming platforms
          have made it easier than ever to start broadcasting, building a successful
          channel remains challenging. We saw many talented creators struggling to grow
          their audience and monetize their content.
        </p>
        <p className="text-gray-600">
          That's why we created this platform - to provide streamers with the knowledge,
          tools, and strategies they need to succeed. Our team of experienced content
          creators and industry experts work together to deliver actionable insights
          and proven techniques.
        </p>
      </section>

      {/* What We Offer */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              Comprehensive streaming guides
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              Technical setup tutorials
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              Growth strategies
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              Monetization tips
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              Community support
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">♦</span>
              Quality over quantity
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">♦</span>
              Practical, actionable advice
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">♦</span>
              Community-driven learning
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">♦</span>
              Continuous improvement
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">♦</span>
              Transparency and honesty
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gradient-to-r from-blue-500 to-blue-600 
        text-white rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-lg mb-6">
          Join our community of successful streamers and take your content creation
          to the next level.
        </p>
        <Link
          to="/guides"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg
            hover:bg-gray-100 transition-colors font-semibold"
          aria-label="Browse our streaming guides"
        >
          Explore Our Guides
        </Link>
      </section>
    </div>
  );
};

export default About; 