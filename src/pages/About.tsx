import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HiChartBar, 
  HiBeaker, 
  HiLocationMarker, 
  HiSearch, 
  HiCog, 
  HiTrendingUp, 
  HiCash, 
  HiDesktopComputer, 
  HiUsers, 
  HiAcademicCap, 
  HiStar 
} from 'react-icons/hi';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Mission Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-6">About SuccessfulStreamer</h1>
        <p className="text-xl text-gray-600">
          An independent information resource dedicated to helping content creators 
          make informed decisions and achieve streaming success through research-backed insights.
        </p>
      </section>

      {/* Our Mission */}
      <section className="bg-white rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          SuccessfulStreamer exists to provide streamers with honest, research-based information 
          to help them make better decisions about their streaming careers. We believe that informed 
          creators are successful creators, and our goal is to cut through the noise and deliver 
          practical insights that actually work.
        </p>
        <p className="text-gray-600">
          We're not affiliated with any streaming platform or service provider. Our recommendations 
          and insights are based on extensive research, real-world testing, and genuine experience 
          with various platforms and tools in the streaming ecosystem.
        </p>
      </section>

      {/* Our Approach */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <HiChartBar className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
              Research-driven recommendations
            </li>
            <li className="flex items-start">
              <HiBeaker className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
              Real-world testing and validation
            </li>
            <li className="flex items-start">
              <HiLocationMarker className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
              Focus on actionable insights
            </li>
            <li className="flex items-start">
              <HiSearch className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
              Transparent methodology
            </li>
            <li className="flex items-start">
              <HiCog className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
              Platform-agnostic foundation
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">What We Cover</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <HiCog className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
              Technical setup and optimization
            </li>
            <li className="flex items-start">
              <HiTrendingUp className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
              Growth strategies and audience building
            </li>
            <li className="flex items-start">
              <HiCash className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
              Monetization methods and revenue streams
            </li>
            <li className="flex items-start">
              <HiDesktopComputer className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
              Platform comparisons and recommendations
            </li>
            <li className="flex items-start">
              <HiUsers className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
              Community building and engagement
            </li>
          </ul>
        </div>
      </section>

      {/* Transparency Statement */}
      <section className="bg-amber-50 rounded-xl p-8 border border-amber-200">
        <h2 className="text-2xl font-bold mb-4 text-amber-900">Our Transparency Commitment</h2>
        <div className="space-y-4 text-amber-800">
          <p>
            <strong>Platform Preferences:</strong> We may express preferences for certain streaming 
            platforms or tools over others. These preferences are based on our research, testing, 
            and real-world experience with these platforms' features, creator support, and overall 
            ecosystem health.
          </p>
          <p>
            <strong>Research-Based Opinions:</strong> When we recommend one platform over another, 
            it's because our analysis shows tangible benefits for content creators. We regularly 
            test new platforms and update our recommendations as the landscape evolves.
          </p>
          <p>
            <strong>No Hidden Agendas:</strong> We're not paid by any platform to promote their services. 
            Our goal is to help you succeed, not to serve corporate interests. If we believe a platform 
            offers better opportunities for creators, we'll tell you why.
          </p>
        </div>
      </section>

      {/* Why We Do This */}
      <section className="bg-white rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Why We Do This</h2>
        <p className="text-gray-600 mb-4">
          The streaming landscape is complex and constantly changing. Creators often struggle with 
          information overload, conflicting advice, and platform-specific marketing that doesn't 
          always align with creator success. We saw a need for independent, research-driven guidance 
          that puts the creator first.
        </p>
        <p className="text-gray-600 mb-4">
          Every recommendation we make is tested in real streaming environments. We don't just 
          regurgitate platform marketing materials – we dig deep into the data, test the tools, 
          and provide you with insights that can actually impact your streaming success.
        </p>
        <p className="text-gray-600">
          Our success is measured by your success. When streamers make better-informed decisions 
          about their careers, everyone wins – except perhaps the platforms that rely on creator 
          confusion to maintain unfavorable terms.
        </p>
      </section>

      {/* Key Principles */}
      <section className="bg-white rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Our Key Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <HiLocationMarker className="text-blue-500" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Creator-First</h3>
            <p className="text-gray-600 text-sm">
              Every decision we make prioritizes what's best for content creators, not platforms or sponsors.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <HiAcademicCap className="text-blue-500" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Evidence-Based</h3>
            <p className="text-gray-600 text-sm">
              Our recommendations are backed by research, testing, and real-world data analysis.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <HiStar className="text-blue-500" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Continuously Updated</h3>
            <p className="text-gray-600 text-sm">
              We regularly review and update our guidance as platforms evolve and new data emerges.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gradient-to-r from-blue-500 to-blue-600 
        text-white rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Make Better Streaming Decisions?</h2>
        <p className="text-lg mb-6">
          Explore our research-backed guides and start building your streaming career 
          on a foundation of solid information, not marketing hype.
        </p>
        <Link
          to="/guides"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg
            hover:bg-gray-100 transition-colors font-semibold"
          aria-label="Browse our research-backed streaming guides"
        >
          Explore Our Guides
        </Link>
      </section>
    </div>
  );
};

export default About; 