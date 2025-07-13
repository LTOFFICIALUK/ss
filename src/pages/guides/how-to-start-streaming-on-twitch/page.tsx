import React from 'react';
import GuideLayout from '../../guides/GuideLayout';
import Title from '../../../components/sub-components/title';
import RichText from '../../../components/sub-components/rich-text';
import CTAButtons from '../../../components/sub-components/cta-buttons';

const TwitchStreamingGuide: React.FC = () => {
  const today = new Date().toISOString();
  
  return (
    <GuideLayout
      title="How to Start Streaming on Twitch: Complete Beginner's Guide (2024)"
      description="Learn how to start streaming on Twitch with our comprehensive guide. From setting up your account to going live, discover everything you need to become a successful Twitch streamer."
      publishDate={today}
      category="stream-setup"
    >

      <RichText
        heading="What You'll Need to Start Streaming"
        content={
          <div>
            <p>Before you start streaming on Twitch, make sure you have these essential items:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>A Twitch account</li>
              <li>A computer that meets minimum streaming requirements</li>
              <li>Stable internet connection (recommended: 5Mbps upload speed)</li>
              <li>Broadcasting software (OBS, Streamlabs, etc.)</li>
              <li>Basic streaming equipment (microphone recommended)</li>
            </ul>
          </div>
        }
        className="mb-8"
      />

      <CTAButtons
        buttons={[
          {
            label: "Create Twitch Account",
            href: "https://www.twitch.tv/signup",
            variant: "primary",
            isExternal: true
          },
          {
            label: "Download OBS Studio",
            href: "https://obsproject.com/download",
            variant: "secondary",
            isExternal: true
          }
        ]}
        align="left"
        className="mb-12"
      />

      <RichText
        heading="Step 1: Setting Up Your Twitch Account"
        content={
          <div>
            <p>Creating your Twitch account is the first step in your streaming journey. Visit Twitch.tv and click 'Sign Up'. Choose a unique username that represents you and your content. This will be your channel name, so choose wisely!</p>
            <p className="mt-4">Important account settings to configure:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Two-factor authentication (required for streaming)</li>
              <li>Channel description and profile picture</li>
              <li>Basic channel panels</li>
              <li>Stream key (keep this private!)</li>
            </ul>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="Step 2: Setting Up Your Streaming Software"
        content={
          <div>
            <p>OBS (Open Broadcaster Software) is the most popular free streaming software. After downloading and installing:</p>
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              <li>Add your Twitch stream key in OBS Settings {'>'} Stream</li>
              <li>Configure your video settings (recommended starting at 720p/30fps)</li>
              <li>Set up your audio sources (microphone and desktop audio)</li>
              <li>Create basic scenes (Starting Soon, Live, and Ending screens)</li>
            </ol>
            <p className="mt-4">Pro Tip: Test your stream in a private broadcast before going live to ensure everything works properly.</p>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="Step 3: Optimizing Your Stream Quality"
        content={
          <div>
            <p>Finding the right balance between stream quality and performance is crucial:</p>
            <div className="mt-4">
              <p>Start with these recommended settings:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Resolution: 1280x720 (720p)</li>
                <li>Framerate: 30 fps</li>
                <li>Bitrate: 2500-3500 kbps</li>
                <li>Encoder: x264 (CPU) or NVENC (NVIDIA GPU)</li>
              </ul>
            </div>
            <p className="mt-4">Adjust these settings based on your internet speed and computer performance.</p>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="Step 4: Creating Engaging Stream Content"
        content={
          <div>
            <p>Success on Twitch isn't just about technical setup. Consider these content aspects:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Choose your main content category (games, music, art, etc.)</li>
              <li>Set a consistent streaming schedule</li>
              <li>Interact with chat while streaming</li>
              <li>Use overlays and alerts to enhance viewer experience</li>
              <li>Network with other streamers in your category</li>
            </ul>
          </div>
        }
        className="mb-8"
      />

      <CTAButtons
        title="Ready to Start Your Streaming Journey?"
        description="Get the essential tools and resources to kickstart your streaming career."
        buttons={[
          {
            label: "Join Twitch Today",
            href: "https://www.twitch.tv/signup",
            variant: "primary"
          },
          {
            label: "View More Streaming Guides",
            href: "/guides",
            variant: "outline"
          }
        ]}
        align="left"
        className="mt-12"
      />
    </GuideLayout>
  );
};

export default TwitchStreamingGuide; 