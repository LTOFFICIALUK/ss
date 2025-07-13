import React from 'react';
import GuideLayout from '../../guides/GuideLayout';
import Title from '../../../components/sub-components/title';
import RichText from '../../../components/sub-components/rich-text';
import CTAButtons from '../../../components/sub-components/cta-buttons';

const DiscordServerSetup: React.FC = () => {
  const today = new Date().toISOString();
  
  return (
    <GuideLayout
      title="Setting Up a Discord Community for Your Stream"
      description="Learn how to create and manage a Discord server for your streaming community. Complete guide with setup instructions, moderation tips, and community building strategies."
      publishDate={today}
      category="community-building"
    >
      <Title
        title="Setting Up a Discord Community for Your Stream"
        description="Learn how to create and manage a Discord server for your streaming community. Complete guide with setup instructions, moderation tips, and community building strategies."
        align="left"
        className="mb-12"
      />

      <RichText
        heading="Why Discord is Essential for Streamers"
        content={
          <div>
            <p>Discord has become the backbone of streaming communities, providing a space where your audience can connect, chat, and build relationships beyond your live streams. Unlike platform-specific chats that only exist during streams, Discord creates a persistent community that stays active 24/7.</p>
            
            <p className="mt-4">A well-managed Discord server offers numerous benefits:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>24/7 community interaction even when you're offline</li>
              <li>Deeper relationships between community members</li>
              <li>Organized channels for different topics and activities</li>
              <li>Direct communication with your most dedicated fans</li>
              <li>Event organization and community management tools</li>
              <li>Integration with streaming platforms and bots</li>
            </ul>
            
            <p className="mt-4">Whether you're streaming on <a href="https://avie.live" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">AVIE</a>, Twitch, YouTube, or multiple platforms, Discord serves as your community's home base where relationships deepen and loyalty grows.</p>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="Setting Up Your Discord Server"
        content={
          <div>
            <p>Creating a Discord server is straightforward, but setting it up properly requires planning and attention to detail:</p>

            <h3 className="text-lg font-semibold mt-6">Initial Server Creation</h3>
            <p className="mt-2">Start with the basics:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Server name:</strong> Use your streaming name or brand</li>
              <li><strong>Server icon:</strong> Upload your logo or profile picture</li>
              <li><strong>Server region:</strong> Choose the closest to your audience</li>
              <li><strong>Template selection:</strong> Start with "Gaming" or "Community" template</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">Essential Channel Structure</h3>
            <p className="mt-2">Organize your server with these fundamental channels:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Welcome & Rules:</strong> Server rules, guidelines, and introductions</li>
              <li><strong>Announcements:</strong> Stream schedules, important updates</li>
              <li><strong>General Chat:</strong> Main conversation area</li>
              <li><strong>Stream Chat:</strong> Discussion during live streams</li>
              <li><strong>Gaming:</strong> Game-specific discussions and LFG</li>
              <li><strong>Voice Channels:</strong> Hangout spaces for voice chat</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">Server Settings Configuration</h3>
            <p className="mt-2">Configure important server settings:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Verification level:</strong> Medium for balanced security</li>
              <li><strong>Default notifications:</strong> Only mentions to reduce spam</li>
              <li><strong>Content filter:</strong> Appropriate for your community</li>
              <li><strong>Server boost perks:</strong> Plan rewards for boosters</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">Roles and Permissions</h3>
            <p className="mt-2">Create a role hierarchy that serves your community:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Owner/Admin:</strong> Full permissions for you and trusted staff</li>
              <li><strong>Moderators:</strong> Kick, ban, and manage messages</li>
              <li><strong>VIP/Subscribers:</strong> Special perks and access</li>
              <li><strong>Members:</strong> Basic permissions for verified users</li>
              <li><strong>New Members:</strong> Limited permissions until verified</li>
            </ul>
          </div>
        }
        className="mb-8"
      />

      <CTAButtons
        buttons={[
          {
            label: "Build Your Community on AVIE",
            href: "https://avie.live",
            variant: "primary",
            isExternal: true
          },
          {
            label: "Learn Community Building",
            href: "/guides/building-community",
            variant: "secondary",
            isExternal: false
          }
        ]}
        align="left"
        className="mb-12"
      />

      <RichText
        heading="Advanced Channel Organization"
        content={
          <div>
            <p>As your community grows, organize channels to maintain clarity and engagement:</p>

            <h3 className="text-lg font-semibold mt-6">Category-Based Organization</h3>
            <p className="mt-2">Group related channels under categories:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>📋 INFO & RULES</strong>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>welcome-and-rules</li>
                  <li>announcements</li>
                  <li>faq</li>
                </ul>
              </li>
              <li><strong>💬 GENERAL</strong>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>general-chat</li>
                  <li>introductions</li>
                  <li>off-topic</li>
                </ul>
              </li>
              <li><strong>🎮 GAMING</strong>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>game-discussion</li>
                  <li>looking-for-group</li>
                  <li>clips-and-highlights</li>
                </ul>
              </li>
              <li><strong>🔊 VOICE CHANNELS</strong>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>General Hangout</li>
                  <li>Gaming Voice</li>
                  <li>Stream Watch Party</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">Specialized Channels</h3>
            <p className="mt-2">Create channels for specific community activities:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Fan Art:</strong> Showcase community creativity</li>
              <li><strong>Suggestions:</strong> Gather feedback and ideas</li>
              <li><strong>Tech Support:</strong> Help with streaming/gaming issues</li>
              <li><strong>Events:</strong> Organize community events and tournaments</li>
              <li><strong>Memes:</strong> Share humor and inside jokes</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">Subscriber/VIP Exclusive Areas</h3>
            <p className="mt-2">Reward your most dedicated supporters:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>VIP Lounge:</strong> Exclusive chat for subscribers</li>
              <li><strong>Early Access:</strong> First look at announcements</li>
              <li><strong>Direct Access:</strong> Channel for direct streamer communication</li>
              <li><strong>Special Events:</strong> Subscriber-only activities</li>
            </ul>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="Essential Discord Bots for Streamers"
        content={
          <div>
            <p>Bots automate tasks and enhance your server's functionality:</p>

            <h3 className="text-lg font-semibold mt-6">Moderation Bots</h3>
            <p className="mt-2">Keep your community safe and organized:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Carl-bot:</strong> Comprehensive moderation and automod features</li>
              <li><strong>Dyno:</strong> Advanced moderation with custom commands</li>
              <li><strong>MEE6:</strong> Leveling system and basic moderation</li>
              <li><strong>Features:</strong> Auto-delete spam, warn systems, role management</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">Streaming Integration Bots</h3>
            <p className="mt-2">Connect your Discord to streaming platforms:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>StreamElements:</strong> Live notifications and chat integration</li>
              <li><strong>Streamlabs:</strong> Stream alerts and subscriber notifications</li>
              <li><strong>NotSoBot:</strong> Twitch integration and stream status</li>
              <li><strong>Features:</strong> Go-live notifications, viewer counts, chat relay</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">Community Engagement Bots</h3>
            <p className="mt-2">Increase interaction and fun:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Dank Memer:</strong> Memes and economy system</li>
              <li><strong>Mudae:</strong> Character collecting game</li>
              <li><strong>Pokecord:</strong> Pokemon catching game</li>
              <li><strong>Features:</strong> Mini-games, currency systems, interactive activities</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">Utility Bots</h3>
            <p className="mt-2">Helpful tools for server management:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Ticket Tool:</strong> Support ticket system</li>
              <li><strong>Reaction Roles:</strong> Self-assignable roles</li>
              <li><strong>Reminder Bot:</strong> Schedule announcements and reminders</li>
              <li><strong>Features:</strong> Automated tasks, user management, scheduling</li>
            </ul>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="Community Management and Moderation"
        content={
          <div>
            <p>Effective moderation maintains a positive environment while allowing your community to thrive:</p>

            <h3 className="text-lg font-semibold mt-6">Creating Clear Rules</h3>
            <p className="mt-2">Establish guidelines that protect your community:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Be respectful:</strong> No harassment, hate speech, or personal attacks</li>
              <li><strong>Stay on topic:</strong> Use appropriate channels for discussions</li>
              <li><strong>No spam:</strong> Avoid excessive messages, links, or self-promotion</li>
              <li><strong>Family-friendly:</strong> Keep content appropriate for all ages</li>
              <li><strong>Follow Discord ToS:</strong> Adhere to platform-wide rules</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">Building a Moderation Team</h3>
            <p className="mt-2">Select and train trusted community members:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Trusted members:</strong> Choose long-time, active community members</li>
              <li><strong>Time zone coverage:</strong> Ensure moderation across all hours</li>
              <li><strong>Clear guidelines:</strong> Provide detailed moderation procedures</li>
              <li><strong>Regular training:</strong> Keep moderators updated on policies</li>
              <li><strong>Support system:</strong> Private channels for mod communication</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">Automated Moderation</h3>
            <p className="mt-2">Use bots to handle routine moderation tasks:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Word filters:</strong> Automatically delete inappropriate content</li>
              <li><strong>Spam protection:</strong> Prevent message flooding and raids</li>
              <li><strong>Link filtering:</strong> Block malicious or inappropriate links</li>
              <li><strong>Raid protection:</strong> Automatically handle server raids</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">Handling Conflicts</h3>
            <p className="mt-2">Address issues professionally and fairly:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Private resolution:</strong> Move conflicts to DMs or private channels</li>
              <li><strong>Warning system:</strong> Progressive discipline for minor infractions</li>
              <li><strong>Documentation:</strong> Keep records of moderation actions</li>
              <li><strong>Appeals process:</strong> Allow users to contest decisions</li>
            </ul>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="Growing and Engaging Your Discord Community"
        content={
          <div>
            <p>Transform your Discord server from a quiet space into a thriving community hub:</p>

            <h3 className="text-lg font-semibold mt-6">Onboarding New Members</h3>
            <p className="mt-2">Create a welcoming experience for newcomers:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Welcome messages:</strong> Automated greetings with server info</li>
              <li><strong>Verification system:</strong> Reaction roles or bot verification</li>
              <li><strong>Server tour:</strong> Guide new members through channels</li>
              <li><strong>Introduction channel:</strong> Space for new members to introduce themselves</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">Regular Events and Activities</h3>
            <p className="mt-2">Keep your community active and engaged:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Game nights:</strong> Community gaming sessions</li>
              <li><strong>Movie nights:</strong> Watch parties for shows or movies</li>
              <li><strong>Contests:</strong> Art contests, meme competitions, trivia</li>
              <li><strong>Q&A sessions:</strong> Regular interaction with community</li>
              <li><strong>Tournaments:</strong> Gaming competitions with prizes</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">Reward Systems</h3>
            <p className="mt-2">Recognize and reward active community members:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Leveling system:</strong> XP and levels for activity</li>
              <li><strong>Special roles:</strong> Recognition for contributions</li>
              <li><strong>Exclusive perks:</strong> Access to special channels or events</li>
              <li><strong>Monthly highlights:</strong> Spotlight active members</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">Integration with Streaming</h3>
            <p className="mt-2">Connect your Discord to your streaming platforms:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Go-live notifications:</strong> Alert Discord when you stream</li>
              <li><strong>Stream chat relay:</strong> Connect Discord to stream chat</li>
              <li><strong>Subscriber perks:</strong> Discord benefits for platform subscribers</li>
              <li><strong>Multi-platform support:</strong> Integrate AVIE, Twitch, YouTube notifications</li>
            </ul>
          </div>
        }
        className="mb-8"
      />

      <CTAButtons
        title="Ready to Build Your Discord Community?"
        description="Create a thriving Discord server that brings your streaming community together and builds lasting relationships beyond your live streams."
        buttons={[
          {
            label: "Start Your Streaming Journey on AVIE",
            href: "https://https://avie.live",
            variant: "primary",
            isExternal: true
          },
          {
            label: "Learn More Community Building",
            href: "/guides/building-community",
            variant: "secondary",
            isExternal: false
          }
        ]}
        align="left"
        className="mt-12"
      />
    </GuideLayout>
  );
};

export default DiscordServerSetup; 