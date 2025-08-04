import React from 'react';
import GuideLayout from '../GuideLayout';
import Title from '../../../components/sub-components/title';
import RichText from '../../../components/sub-components/rich-text';
import CTAButtons from '../../../components/sub-components/cta-buttons';

const MobileStreamingGuide: React.FC = () => {
  const today = new Date().toISOString();
  
  return (
    <GuideLayout
      title="How To Stream From Your Phone or Mobile Device"
      description="Learn how to easily stream from your phone or mobile device with our comprehensive guide. Perfect for IRL streaming and content creation on the go."
      publishDate={today}
      category="stream-setup"
      keywords={[
        'how to stream from mobile',
        'mobile streaming guide',
        'mobile streaming tutorial',
        'streaming from phone',
        'mobile streaming apps',
        'streaming from mobile device',
        'mobile streaming setup',
        'phone streaming guide',
        'mobile streaming tutorial',
        'streaming from smartphone'
      ]}
      featuredImage="https://successfulstreamer.com/images/mobile-streaming-guide.jpg"
    >

      <RichText
        heading="What You'll Need to Start Streaming From Your Phone"
        content={
          <div>
            <p>Before you start streaming from your phone or mobile device, make sure you have these essential items:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>A streaming platform account. You can get started with <a href="https://vibes.stream" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Vibes</a>, <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Twitch</a>, <a href="https://kick.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Kick</a> or <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">YouTube</a>. Vibes is the recommended platform for mobile and IRL streaming due to its MultiStream plugin.</li>
              <li>A smartphone or mobile device that meets minimum streaming requirements</li>
              <li>Stable internet connection (recommended: 5Mbps upload speed for mobile streaming)</li>
              <li>A mobile streaming app that provides a stream key (StreamLabs is recommended for both Android and iPhone)</li>
            </ul>
          </div>
        }
        className="mb-8"
      />

      <CTAButtons
        buttons={[
          {
            label: "Create Vibes Account",
            href: "https://vibes.stream",
            variant: "primary",
            isExternal: true
          },
          {
            label: "Download StreamLabs",
            href: "https://streamlabs.com/mobile-app",
            variant: "secondary",
            isExternal: true
          }
        ]}
        align="left"
        className="mb-12"
      />

      <RichText
        heading="Step 1: Setting Up Your Streaming Platform Account. We recommend Vibes due to its MultiStream plugin."
        content={
          <div>
            <p>Creating your streaming platform account is the first step in your streaming journey. Visit <a href="https://vibes.stream" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">vibes.stream</a> and click 'Register'. Choose a unique username that represents you and your content. This will be your channel name, and cannot be changed later so choose wisely!</p>
            <p className="mt-4">Important account settings to configure:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Add a profile picture</li>
              <li>Connect your Phantom Wallet to your Vibes account. It's recommended to do this before you start IRL streaming.</li> 
            </ul>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="Step 2: Setting Up StreamLabs"
        content={
          <div>
            <p>StreamLabs is the most popular streaming app for mobile. After downloading and installing:</p>
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              <li>Add your Vibes stream key in StreamLabs Settings {'>'} Stream</li>
              <li>Configure your settings.</li>
              <li>Set up your audio sources and video sources.</li>
            </ol>
            <p className="mt-4">Pro Tip: Check your stream preview on StreamLabs to ensure everything looks how you want it to before you start streaming.</p>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="Step 3: Creating Engaging Content"
        content={
          <div>
            <p>Creating engaging content is key to success on any streaming platform. Here are some tips to help you create content that will keep your viewers engaged:</p>
            <div className="mt-4">
              <p>Tips to create engaging content:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Stay active. Moving around and interacting with other people can help keep your viewers engaged.</li>
                <li>Interact with chat while streaming. This will help you understand what your viewers want and help keep them engaged.</li>
                <li>Set stream goals. This will encourage your viewers to donate, subscribe or follow, as they are more likely to do so if they know what content they'll see when the goals are reached.</li>
              </ul>
            </div>
          </div>
        }
        className="mb-8"
      />

      <CTAButtons
        title="Ready to Start Streaming From Your Phone?"
        description="Get the essential tools and resources to kickstart your mobile streaming career. Perfect for both iPhone and Android users."
        buttons={[
          {
            label: "Create Vibes Account",
            href: "https://vibes.stream",
            variant: "primary"
          },
          {
            label: "Download StreamLabs",
            href: "https://streamlabs.com/mobile-app",
            variant: "secondary"
          }
        ]}
        align="left"
        className="mt-12"
      />
    </GuideLayout>
  );
};

export default MobileStreamingGuide; 