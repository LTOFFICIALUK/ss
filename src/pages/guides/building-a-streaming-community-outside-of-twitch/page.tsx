import React from 'react';
import GuideLayout from '../../guides/GuideLayout';
import Title from '../../../components/sub-components/title';
import RichText from '../../../components/sub-components/rich-text';
import CTAButtons from '../../../components/sub-components/cta-buttons';
import FAQComponent from '../../../components/sub-components/faq-component';
import HowToComponent from '../../../components/sub-components/how-to-component';

const CommunityBuildingGuide: React.FC = () => {
  const communitySteps = [
    {
      name: 'Choose Your Primary Community Platform',
      text: 'Select the main platform where your community will live - Discord, Reddit, Facebook Groups, or custom forums. Consider where your audience is most active and comfortable.'
    },
    {
      name: 'Design Your Community Structure',
      text: 'Create organized channels/sections for different topics, establish clear rules, and set up moderation systems. Good structure encourages participation and prevents chaos.'
    },
    {
      name: 'Create Compelling Community Content',
      text: 'Develop exclusive content for community members - behind-the-scenes posts, early announcements, community challenges, and member-only discussions.'
    },
    {
      name: 'Establish Community Culture and Guidelines',
      text: 'Define your community values, create welcoming onboarding processes, and establish clear guidelines that foster positive interaction and inclusive participation.'
    },
    {
      name: 'Implement Engagement Systems',
      text: 'Set up regular events, discussion prompts, community goals, and recognition systems that keep members active and invested in the community.'
    },
    {
      name: 'Build Cross-Platform Integration',
      text: 'Connect your community to your streams through notifications, exclusive previews, and community-driven stream content to create seamless experiences.'
    },
    {
      name: 'Scale with Moderation and Leadership',
      text: 'Recruit trusted community members as moderators, create leadership roles, and implement systems that maintain community quality as it grows.'
    }
  ];

  const communityFaqs = [
    {
      question: 'Should I use Discord or another platform for my streaming community?',
      answer: 'Discord is ideal for gaming communities due to voice chat integration and gaming-focused features. Consider Reddit for discussion-heavy communities, Facebook Groups for older demographics, or custom platforms for unique needs. Choose based on where your audience is most comfortable.'
    },
    {
      question: 'How do I get my stream viewers to join my Discord server?',
      answer: 'Provide clear value proposition - exclusive content, early access, community events, or member perks. Mention Discord benefits during streams, include links in stream descriptions, and create Discord-only content that viewers can\'t get elsewhere.'
    },
    {
      question: 'What type of content should I post in my community?',
      answer: 'Mix of behind-the-scenes content, community discussions, member spotlights, exclusive announcements, polls for future content, and interactive challenges. Keep 70% community-focused and 30% promotional to maintain engagement without being salesy.'
    },
    {
      question: 'How often should I interact in my own community?',
      answer: 'Aim for daily presence with meaningful interaction, not just promotional posts. Respond to member posts, start discussions, share updates, and participate in community conversations. Quality interaction matters more than constant posting.'
    },
    {
      question: 'How do I handle drama or conflicts in my community?',
      answer: 'Address issues quickly and fairly, have clear escalation procedures, use private messaging for serious discussions, and focus on community values rather than taking sides. Good moderation prevents small issues from becoming major problems.'
    },
    {
      question: 'What perks should I offer to community members?',
      answer: 'Early access to content, exclusive behind-the-scenes updates, input on future content, community-only events, custom emotes/roles, priority support, and special recognition. Avoid perks that create significant extra work without engagement benefits.'
    },
    {
      question: 'How do I grow my community without being spammy?',
      answer: 'Focus on value creation over promotion. Share genuinely useful content, engage authentically with members, encourage organic sharing, collaborate with other creators, and make joining your community feel like joining something special, not just another Discord server.'
    },
    {
      question: 'Should I have separate communities for different content types?',
      answer: 'Generally, one main community with organized sections works better than multiple split communities. Use channels/categories to organize different interests while keeping your audience together. Only split if you have distinctly different audience segments with conflicting interests.'
    }
  ];

  const relatedButtons = [
    {
      label: 'Chat Engagement Guide',
      href: '/guides/top-chat-engagement-techniques-that-work',
      variant: 'primary' as const,
      ariaLabel: 'Learn chat engagement techniques that build community'
    },
    {
      label: 'Networking Guide',
      href: '/guides/how-to-network-with-other-streamers-without-feeling-cringe',
      variant: 'secondary' as const,
      ariaLabel: 'Network with other streamers to grow your community'
    }
  ];

  const today = new Date().toISOString();
  
  return (
    <GuideLayout
      title="Building a Streaming Community Outside of Twitch: Complete 2025 Guide"
      description="Master off-platform community building for streamers. Learn how to create thriving Discord servers, social media communities, and exclusive member experiences that deepen viewer loyalty and drive growth."
      publishDate={today}
      category="community-building"
      keywords={['discord for streamers', 'streaming community building', 'off-platform community', 'streamer discord server', 'community management', 'viewer loyalty', 'streaming social media']}
      readingTime="13 min"
      wordCount={3000}
    >
      <RichText
        heading="Why Off-Platform Communities Are Essential for Streaming Success"
        content={
          <div className="space-y-4">
            <p>
              Relying solely on your streaming platform for community building is like building a house on rented land. 
              Off-platform communities give you direct access to your audience, deeper relationships, and sustainable growth 
              that isn't dependent on algorithm changes or platform policies.
            </p>
            <p>
              Successful streamers use off-platform communities to create year-round engagement, build stronger relationships, 
              and develop revenue streams that exist independently of their streaming platform. This guide shows you how to 
              build communities that enhance your streaming success.
            </p>
            <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-lg mt-6">
              <h4 className="font-semibold text-cyan-800 dark:text-cyan-300 mb-2">What You'll Build:</h4>
              <ul className="list-disc pl-6 space-y-1 text-cyan-700 dark:text-cyan-300">
                <li>Thriving Discord servers or community platforms</li>
                <li>Engaged social media communities across multiple platforms</li>
                <li>Exclusive member experiences that drive loyalty</li>
                <li>Cross-platform integration that amplifies your streaming</li>
              </ul>
            </div>
          </div>
        }
        className="mb-12"
      />

      <HowToComponent
        title="Build Your Off-Platform Community Empire"
        description="Create thriving communities beyond streaming platforms that deepen viewer relationships, provide year-round engagement, and support sustainable streaming careers."
        steps={communitySteps}
        totalTime="4-6 hours initial setup, 1-2 hours daily maintenance"
        difficulty="Intermediate"
        className="mb-12"
      />

      <RichText
        heading="Platform Selection: Choosing Your Community Home"
        content={
          <div className="space-y-6">
            <p>
              Different platforms serve different community needs and demographics. Understanding each platform's strengths 
              helps you choose the right foundation for your community and allocate your time effectively.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Major Community Platform Comparison:</h4>
            
            <div className="space-y-6 mt-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold">D</span>
                  </div>
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white">Discord</h5>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">Best For:</h6>
                    <ul className="text-sm space-y-1 text-green-600 dark:text-green-400">
                      <li>• Gaming communities</li>
                      <li>• Real-time chat and voice</li>
                      <li>• Stream integration</li>
                      <li>• Technical discussions</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Features:</h6>
                    <ul className="text-sm space-y-1 text-blue-600 dark:text-blue-400">
                      <li>• Voice/video channels</li>
                      <li>• Custom bots and automation</li>
                      <li>• Role-based permissions</li>
                      <li>• Screen sharing capabilities</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">Considerations:</h6>
                    <ul className="text-sm space-y-1 text-red-600 dark:text-red-400">
                      <li>• Learning curve for new users</li>
                      <li>• Moderation complexity</li>
                      <li>• Gaming-focused perception</li>
                      <li>• Notification management needed</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold">R</span>
                  </div>
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white">Reddit Community</h5>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">Best For:</h6>
                    <ul className="text-sm space-y-1 text-green-600 dark:text-green-400">
                      <li>• Discussion-focused communities</li>
                      <li>• Content sharing and feedback</li>
                      <li>• Question and answer formats</li>
                      <li>• Long-form discussions</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Features:</h6>
                    <ul className="text-sm space-y-1 text-blue-600 dark:text-blue-400">
                      <li>• Upvoting system</li>
                      <li>• Threaded discussions</li>
                      <li>• Post scheduling</li>
                      <li>• Built-in search functionality</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">Considerations:</h6>
                    <ul className="text-sm space-y-1 text-red-600 dark:text-red-400">
                      <li>• Less real-time interaction</li>
                      <li>• Reddit-specific culture</li>
                      <li>• Promotional content restrictions</li>
                      <li>• Requires consistent posting</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold">F</span>
                  </div>
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white">Facebook Groups</h5>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">Best For:</h6>
                    <ul className="text-sm space-y-1 text-green-600 dark:text-green-400">
                      <li>• Older demographics (25+)</li>
                      <li>• Local/regional communities</li>
                      <li>• Photo and video sharing</li>
                      <li>• Event organization</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Features:</h6>
                    <ul className="text-sm space-y-1 text-blue-600 dark:text-blue-400">
                      <li>• Native video support</li>
                      <li>• Event creation tools</li>
                      <li>• Member approval systems</li>
                      <li>• Integration with Facebook ecosystem</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">Considerations:</h6>
                    <ul className="text-sm space-y-1 text-red-600 dark:text-red-400">
                      <li>• Algorithm-dependent reach</li>
                      <li>• Less popular with younger audiences</li>
                      <li>• Facebook policy restrictions</li>
                      <li>• Privacy concerns for some users</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        className="mb-12"
      />

      <RichText
        heading="Discord Community Setup: The Ultimate Guide"
        content={
          <div className="space-y-6">
            <p>
              Discord has become the gold standard for streaming communities, especially in gaming. Here's how to set up 
              a Discord server that becomes the heart of your community and drives long-term engagement.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Essential Discord Server Structure:</h4>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mt-6">
              <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Recommended Channel Layout:</h5>
              <div className="space-y-6">
                <div>
                  <h6 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">📋 Information Category</h6>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• #welcome - Server rules and introduction</li>
                    <li>• #announcements - Stream schedule and important updates</li>
                    <li>• #stream-notifications - Automated go-live alerts</li>
                    <li>• #faq - Frequently asked questions</li>
                  </ul>
                </div>
                
                <div>
                  <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">💬 Community Category</h6>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• #general-chat - Main community discussion</li>
                    <li>• #introduce-yourself - New member introductions</li>
                    <li>• #member-highlights - Showcase community achievements</li>
                    <li>• #off-topic - Non-stream related discussions</li>
                  </ul>
                </div>

                <div>
                  <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">🎮 Content Category</h6>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• #stream-discussion - Live stream chat overflow</li>
                    <li>• #content-suggestions - Community input on future content</li>
                    <li>• #fan-art - Community creations and submissions</li>
                    <li>• #clips-and-highlights - Share favorite stream moments</li>
                  </ul>
                </div>

                <div>
                  <h6 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">🔊 Voice Category</h6>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Community Hangout - General voice chat</li>
                    <li>• Game Night - Community gaming sessions</li>
                    <li>• Study/Work Together - Co-working space</li>
                    <li>• Private Rooms - Member-created temporary channels</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-8">Role and Permission Strategy:</h4>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Member Role Hierarchy</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center"><span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span><strong>Owner/Admin</strong> - Full server control</div>
                  <div className="flex items-center"><span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span><strong>Moderators</strong> - Community management</div>
                  <div className="flex items-center"><span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span><strong>VIPs</strong> - Long-time supporters</div>
                  <div className="flex items-center"><span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span><strong>Subscribers</strong> - Platform subscribers</div>
                  <div className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span><strong>Members</strong> - Verified community members</div>
                  <div className="flex items-center"><span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span><strong>New Members</strong> - Pending verification</div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h5 className="font-semibold text-green-800 dark:text-green-300 mb-3">Essential Bots and Integrations</h5>
                <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                  <li><strong>MEE6</strong> - Moderation and leveling system</li>
                  <li><strong>StreamElements</strong> - Stream notifications and integration</li>
                  <li><strong>Carl-bot</strong> - Advanced moderation and automod</li>
                  <li><strong>Ticket Tool</strong> - Support ticket system</li>
                  <li><strong>Rythm/Groovy</strong> - Music bot for voice channels</li>
                  <li><strong>Custom Webhooks</strong> - Social media notifications</li>
                </ul>
              </div>
            </div>
          </div>
        }
        className="mb-12"
      />

      <RichText
        heading="Content Strategy for Community Engagement"
        content={
          <div className="space-y-6">
            <p>
              Successful communities need consistent, valuable content that gives members reasons to return and participate. 
              Your content strategy should balance community building with your streaming goals.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">The Community Content Mix:</h4>
            
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h5 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">40% Community-Driven Content</h5>
                <ul className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                  <li>• Member spotlights and achievements</li>
                  <li>• Community challenges and contests</li>
                  <li>• Member-created content sharing</li>
                  <li>• Discussion prompts and questions</li>
                  <li>• Community polls and decisions</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">35% Behind-the-Scenes Content</h5>
                <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                  <li>• Stream preparation and setup</li>
                  <li>• Personal updates and stories</li>
                  <li>• Equipment reviews and recommendations</li>
                  <li>• Streaming tips and lessons learned</li>
                  <li>• Community feedback on decisions</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h5 className="font-semibold text-green-800 dark:text-green-300 mb-3">25% Promotional Content</h5>
                <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                  <li>• Stream schedule announcements</li>
                  <li>• New content previews and teasers</li>
                  <li>• Special events and collaborations</li>
                  <li>• Merchandise or product updates</li>
                  <li>• Platform milestone celebrations</li>
                </ul>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-8">Regular Community Events and Activities:</h4>
            
            <div className="space-y-4 mt-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h5 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">📅 Weekly Recurring Events</h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Monday Motivation:</strong> Member achievement sharing
                  </div>
                  <div>
                    <strong>Wednesday Q&A:</strong> Community questions answered
                  </div>
                  <div>
                    <strong>Friday Fun Day:</strong> Games and community activities
                  </div>
                  <div>
                    <strong>Sunday Planning:</strong> Upcoming week discussion
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h5 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">🎉 Monthly Special Events</h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Community Game Night:</strong> Group gaming sessions
                  </div>
                  <div>
                    <strong>Creative Contests:</strong> Fan art, meme, or video competitions
                  </div>
                  <div>
                    <strong>Member Spotlight Month:</strong> Feature different community members
                  </div>
                  <div>
                    <strong>Behind the Scenes:</strong> Exclusive community-only content
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        className="mb-12"
      />

      <RichText
        heading="Cross-Platform Integration and Growth"
        content={
          <div className="space-y-6">
            <p>
              Your off-platform community should enhance your streaming, not compete with it. Strategic integration creates 
              a seamless experience that benefits both your streams and your community growth.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Integration Strategies:</h4>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                <h5 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">Stream-to-Community Flow</h5>
                <ul className="space-y-2 text-sm text-orange-700 dark:text-orange-300">
                  <li>• Mention Discord community during streams</li>
                  <li>• Create stream-specific discussion channels</li>
                  <li>• Share community-exclusive stream highlights</li>
                  <li>• Use community polls to decide stream content</li>
                  <li>• Offer community member recognition during streams</li>
                </ul>
              </div>

              <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-lg">
                <h5 className="font-semibold text-pink-800 dark:text-pink-300 mb-3">Community-to-Stream Flow</h5>
                <ul className="space-y-2 text-sm text-pink-700 dark:text-pink-300">
                  <li>• Send automated stream notifications to community</li>
                  <li>• Create pre-stream hype in community channels</li>
                  <li>• Share community suggestions during streams</li>
                  <li>• Use community-created content in streams</li>
                  <li>• Host community game nights on stream</li>
                </ul>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-8">Community Growth Tactics:</h4>
            
            <div className="space-y-4 mt-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">🎯 Organic Growth Methods</h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <ul className="space-y-2">
                    <li>• Word-of-mouth referral programs</li>
                    <li>• Member invite incentives</li>
                    <li>• Cross-community collaborations</li>
                    <li>• Social media community highlights</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Community-driven content creation</li>
                    <li>• Public community events</li>
                    <li>• Guest creator community visits</li>
                    <li>• Community success story sharing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        }
        className="mb-12"
      />

      <CTAButtons
        buttons={relatedButtons}
        align="left"
        className="mb-12"
      />

      <FAQComponent
        title="Community Building: Frequently Asked Questions"
        faqs={communityFaqs}
        className="mb-12"
      />

      <RichText
        heading="Your Community Building Action Plan"
        content={
          <div className="space-y-4">
            <p>
              Building a thriving off-platform community takes time and consistent effort, but it creates the foundation 
              for long-term streaming success and deeper audience relationships that last beyond any single platform.
            </p>
            
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg p-6">
              <h4 className="font-semibold text-white mb-3">🏗️ Your Community Building Roadmap</h4>
              <ol className="list-decimal pl-4 space-y-2 text-sm">
                <li>Choose your primary community platform based on your audience preferences</li>
                <li>Set up essential structure, channels, and moderation systems</li>
                <li>Create your content calendar with 40% community, 35% behind-scenes, 25% promotional</li>
                <li>Integrate community promotion into your regular streaming routine</li>
                <li>Launch your first community event within 2 weeks of setup</li>
                <li>Track engagement metrics and adjust strategy based on member feedback</li>
              </ol>
            </div>

            <p>
              Remember: Great communities are built on genuine relationships and consistent value delivery. Focus on serving 
              your members' interests and creating connections between community members, not just between you and individuals.
            </p>
          </div>
        }
        className="mb-8"
      />
    </GuideLayout>
  );
};

export default CommunityBuildingGuide; 