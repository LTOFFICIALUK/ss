import React from 'react';
import GuideLayout from '../../guides/GuideLayout';
import Title from '../../../components/sub-components/title';
import RichText from '../../../components/sub-components/rich-text';
import CTAButtons from '../../../components/sub-components/cta-buttons';

const LiveStreamingGuide: React.FC = () => {
  const today = new Date().toISOString();
  
  return (
    <GuideLayout
      title="How To Set Up Your Live Stream"
      description="Learn how to set up your live stream with our comprehensive guide. From setting up your account to going live, discover everything you need to become a successful streamer."
      publishDate={today}
      category="stream-setup"
    >

      <RichText
        heading="What You'll Need to Start Streaming"
        content={
          <div>
            <p>Before you start streaming, make sure you have these essential items:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>A streaming platform account. You can get started with <a href="https://avie.live" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">AVIE</a>, <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Twitch</a>, <a href="https://kick.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Kick</a> or <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">YouTube</a>.</li>
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
            label: "Create AVIE Account",
            href: "https://avie.live",
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
        heading="Step 1: Setting Up Your AVIE Account"
        content={
          <div>
            <p>Creating your AVIE account is the first step in your streaming journey. Visit <a href="https://avie.live" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">avie.live</a> and click 'Register'. Choose a unique username that represents you and your content. This will be your channel name, and cannot be changed later so choose wisely!</p>
            <p className="mt-4">Important account settings to configure:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Add a profile picture</li>
              <li>Connect your Phantom Wallet to your AVIE account</li> 
            </ul>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="Step 2: Setting Up OBS Studio"
        content={
          <div>
            <p>OBS Studio is the most popular free streaming software. After downloading and installing:</p>
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              <li>Add your AVIE stream key in OBS Settings {'>'} Stream</li>
              <li>Configure your video settings (AVIE provides recommended setting on their "Go Live" page)</li>
              <li>Set up your audio sources and video sources</li>
              <li>Create basic scenes (Starting Soon, Live, and Ending screens) and save them (OBS saves these automatically)</li>
            </ol>
            <p className="mt-4">Pro Tip: Check your stream preview on OBS to ensure everything looks how you want it to before you start streaming.</p>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="Step 3: Optimizing Your Stream Quality"
        content={
          <div>
            <p>AVIE provides recommended settings for your stream quality and performance:</p>
            <div className="mt-4">
              <p>Start with these recommended settings:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Resolution: 1920x1080 (1080p)</li>
                <li>Framerate: 30 or 60 fps</li>
                <li>Bitrate: 2500-7500 kbps</li>
                <li>Encoder: NVIDIA NVENC H.264 or x264</li>
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
            <p>Success on AVIE isn't just about technical setup. Consider these content aspects:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Choose your main content category (games, music, art, etc.)</li>
              <li>Set a consistent streaming schedule (AVIE recommends 1-2 hours per day). Streaming around the same time each day will help you build a consistent audience.</li>
              <li>Interact with chat while streaming. This will help you build a relationship with your audience and increase your engagement.</li>
              <li>Use overlays and alerts to enhance viewer experience. This will help improve how your stream looks and make it more attractive to newcomers.</li>
              <li>Add a facecam to your stream. This will help your viewers feel like they're building a more personal connection with you.</li>
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
            label: "Join AVIE Today",
            href: "https://avie.live",
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

export default LiveStreamingGuide; 