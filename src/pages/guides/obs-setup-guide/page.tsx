import React from 'react';
import GuideLayout from '../GuideLayout';
import Title from '../../../components/sub-components/title';
import RichText from '../../../components/sub-components/rich-text';
import CTAButtons from '../../../components/sub-components/cta-buttons';

const OBSSetupGuide: React.FC = () => {
  const today = new Date().toISOString();
  
  return (
    <GuideLayout
      title="OBS Setup Guide"
      description="Learn how to setup OBS Studio for streaming with our comprehensive guide."
      publishDate={today}
      category="stream-setup"
    >

      <RichText
        heading="What is OBS Studio?"
        content={
          <div>
            <p>OBS Studio is a free and open-source streaming software that allows you to stream your content to multiple platforms. It's a popular choice for streamers because it's easy to use and has a lot of features.</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>OBS Studio is a free and open-source streaming software that allows you to stream your content to multiple platforms.</li>
              <li>It's a popular choice for streamers because it's easy to use and has a lot of features.</li>
              <li>It's a popular choice for streamers because it's easy to use and has a lot of features.</li>
            </ul>
            <p className="mt-4">OBS Studio is a popular choice for streamers because it's easy to use and has a lot of features and set up is simple with platforms like Vibes.</p>
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
        heading="How to Setup OBS Studio"
        content={
          <div>
            <p>We will discuss the steps to setup OBS Studio for streaming with Vibes.</p>
            <p className="mt-4"> <strong>Step 1</strong> - Download OBS Studio from the official website.</p>
            <p className="mt-2"> <strong>Step 2</strong> - Open OBS Studio and click on the "Settings" button.</p>
            <p className="mt-2"> <strong>Step 3</strong> - Click on the "Output" tab.</p>
            <p className="mt-2"> <strong>Step 4</strong> - Click on the "+" button to add a new output.</p>
            <p className="mt-2"> <strong>Step 5</strong> - Select "Advanced Settings" and click on the "+" button to add a new output.</p>
            <p className="mt-2"> <strong>Step 6</strong> - Select "Advanced Settings" and click on the "+" button to add a new output.</p>
            <p className="mt-2"> <strong>Step 7</strong> - Select "Advanced Settings" and click on the "+" button to add a new output.</p>
           </div>
        }
        className="mb-8"
      />

      <RichText
        heading="OBS Studio vs Other Streaming Softwares"
        content={
          <div>
            <p>We'll compare OBS Studio with other streaming softwares.</p>

            <h2 className="text-2xl font-semibold mt-6">OBS Studio</h2>
            <p className="mt-2">OBS Studio is a free and open-source streaming software that allows you to stream your content to multiple platforms. It's a popular choice for streamers because it's easy to use and has a lot of features.</p>
            
            <h3 className="text-lg font-medium mt-4">Simple setup:</h3>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>OBS Studio is a free and open-source streaming software that allows you to stream your content to multiple platforms.</li>
              <li>Built in browser sources that can be used to display specific websites, social media pages, and more.</li>
              <li>Simple RTMP & Stream Key setup.</li>
              <li>Easy overlay setup to improve viewer experience.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">Streamlabs Desktop</h2>
            <p className="mt-2">Streamlabs Desktop is a streaming software based on OBS Studio but designed with ease of use and monetization in mind. It’s often the go-to choice for beginners due to its user-friendly interface and all-in-one features.</p>
            
            <h3 className="text-lg font-medium mt-4">Built-in overlays for:</h3>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Quick-access overlays via Streamlabs Theme Library.</li>
              <li>Pre-designed alerts, widgets, and layouts.</li>
              <li>One-click import of overlays from the Streamlabs dashboard.</li>
              <li>Integration with Streamlabs donations and merch tools.</li>
            </ul> 

            <h2 className="text-2xl font-semibold mt-6">Lightstream Studio</h2>
            <p className="mt-2">Lightstream Studio is a cloud-powered streaming platform designed for simplicity — ideal for Xbox/PlayStation streamers or those with limited PC power.</p>
            
            <h3 className="text-lg font-medium mt-4">Ideal for Console Streamers</h3>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Connect directly from Xbox or PlayStation without a capture card.</li>
              <li>No downloads or installations — runs entirely in your browser.</li>
              <li>Easy Vibes & Twitch integration for quick streaming.</li>
            </ul> 

            <h2 className="text-2xl font-semibold mt-6">Restream Studio</h2>
            <p className="mt-2">Restream Studio is a browser-based live streaming tool that makes it easy to broadcast to multiple platforms at once. It's great for multistreamers, marketers, and remote interviews.</p>
            
            <h3 className="text-lg font-medium mt-4">Built for Multistreaming</h3>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Go live on Twitch, YouTube, <a href="https://vibes.stream" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Vibes</a>, and more — all at the same time.</li>
              <li>Supports over 30 platforms with one click.</li>
              <li>No encoding setup required; stream from your browser instantly.</li>
            </ul> 
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="Wrapping Up: Build the Best Streaming Setup for You"
        content={
          <div>
            <p>Choosing the best streaming equipment doesn't have to be overwhelming. Whether you're just getting started or looking to upgrade your current setup, investing in the right gear — from cameras and microphones to lighting and software — makes a noticeable difference in stream quality and audience engagement.</p>            
            <p className="mt-4">Remember to prioritize clear audio and consistent visuals, as they have the biggest impact on your viewers’ experience. Start with equipment that fits your budget and upgrade as your channel grows. Choose tools that align with your content type — whether you're gaming, podcasting, streaming IRL, or running a professional broadcast. With the right combination of hardware and software, you’ll be ready to go live on platforms like Twitch, YouTube, Kick, and more — and stand out from the crowd.</p>
          </div>
        }
        className="mb-8"
      />

      <CTAButtons
        title="Ready to Stream Seamlessly?"
        description="Take the first step toward building a rewarding and sustainable streaming career with Vibes's creator-first platform."
        buttons={[
          {
            label: "OBS Studio Download",
            href: "https://obsproject.com/download",
            variant: "primary",
            isExternal: true
          },
          {
            label: "View More Streaming Guides",
            href: "/guides",
            variant: "secondary",
            isExternal: true
          }
        ]}
        align="left"
        className="mt-12"
      />
    </GuideLayout>
  );
};

export default OBSSetupGuide; 