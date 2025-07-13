import React from 'react';
import GuideLayout from '../GuideLayout';
import Title from '../../../components/sub-components/title';
import RichText from '../../../components/sub-components/rich-text';
import CTAButtons from '../../../components/sub-components/cta-buttons';
import FAQ from '../../../components/sub-components/faq';

const StreamingEquipmentGuide: React.FC = () => {
  const today = new Date().toISOString();
  
  return (
    <GuideLayout
      title="Your Guide To Finding The Best Streaming Equipment"
      description="Looking for the best streaming equipment to level up your content in 2025? This complete streaming equipment guide breaks down everything you need — from cameras to microphones, capture cards, lighting, and more — to stream like a pro on Twitch, YouTube, Kick, and other platforms."
      publishDate={today}
      category="stream-setup"
    >

      <RichText
        heading="What Equipment Do You Need to Start Streaming?"
        content={
          <div>
            <p>If you’re serious about live streaming, these are the essential pieces of streaming equipment to invest in:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Best Budget Webcam</strong> - Logitech C920 – 1080p at 30fps, plug-and-play</li>
              <li><strong>Best Mid-Range Streaming Camera</strong> - Sony ZV-1 – Crisp 4K recording, compact, perfect for desktop setups</li>
              <li><strong>Best DSLR for Streaming</strong> - Sony Alpha a6400 / Canon EOS R – Professional image quality (requires capture card)</li>
            </ul>
            <p className="mt-4">Pro Tip: Use a capture card for DSLR or mirrorless cameras to connect to your PC.</p>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="Best Streaming Microphone"
        content={
          <div>
            <p>Clear audio is just as important as video. Here’s a breakdown of the best microphones for streaming:</p>
            <h3 className="mt-4 mb-2"> <strong>Best USB Mic for Streaming</strong></h3>
            <p>Blue Yeti / Elgato Wave:3 – Great quality and easy setup</p>

            <h3 className="mt-4 mb-2"> <strong>Best XLR Mic for Streaming</strong></h3>
            <p>Shure SM7B / Rode NT1 – Studio-grade quality (requires audio interface)</p>

            <h3 className="mt-4 mb-2"> <strong>Best Audio Interfaces</strong></h3>
            <p>Focusrite Scarlett 2i2 (budget)</p>
            <p>GoXLR Mini / GoXLR (advanced – mixer + effects)</p>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="Best Lighting Setup for Streaming"
        content={
          <div>
            <p>Good lighting = better video quality, even on basic cameras.</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Best Budget Lighting</strong> - Neewer Ring Light</li>
              <li><strong>Best Key Light for Streaming</strong> - Elgato Key Light / Neewer Panel LEDs.</li>
              <li><strong>Pro Setup</strong> - Use a 3-point lighting system (key, fill, backlight) for studio-quality depth</li>
            </ul>
          </div>
        }
        className="mb-8"
      />

      <RichText
        heading="Best Capture Card for Streaming"
        content={
          <div>
            <p>Capture cards are essential if you stream console games or use a DSLR/mirrorless camera.</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Best External Capture Card</strong> - Elgato HD60 X – For console to PC streaming</li>
              <li><strong>Best Internal Capture Card</strong> - Elgato 4K60 Pro – 4K passthrough, ultra-low latency</li>
            </ul>
          </div>
        }
        className="mb-8"
      />      

      <RichText
        heading="Best Streaming PC Setup (2025)"
        content={
          <div>
            <p>Streaming demands power. Here’s the recommended streaming PC specs:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Processor (CPU)</strong> - Intel i7 / Ryzen 7 (or higher)</li>
              <li><strong>Graphics Card (GPU)</strong> - NVIDIA GTX 1660 / RTX 3060 or better</li>
              <li><strong>RAM</strong> - 16GB minimum</li>
              <li><strong>Dual PC Setup for Streaming</strong> - One PC handles gameplay, another for encoding – best for high-end streamers</li>
            </ul>
          </div>
        }
        className="mb-8"
      />      

     <RichText
        heading="Must-Have Streaming Accessories"
        content={
          <div>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Boom Arm</strong> - For flexible mic placement (Rode PSA1 / Elgato Wave Arm)</li>
              <li><strong>Shock Mount / Pop Filter</strong> - Clean audio with no pops</li>
              <li><strong>Green Screen for Streaming</strong> - Elgato Collapsible or DIY with fabric</li>
              <li><strong>Dual Monitors</strong> - For managing gameplay + chat/OBS setup</li>
            </ul>
          </div>
        }
        className="mb-8"
      />   
    
    <RichText
        heading="Best Streaming Software and Tools"
        content={
          <div>
            <p>Software is as important as hardware in your streaming setup.</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>OBS Studio / Streamlabs OBS</strong> - Top-rated streaming software</li>
              <li><strong>AVIE's Free MultiStream Plugin</strong> - Stream to Twitch, YouTube, and more simultaneously</li>
              <li><strong>Voicemeeter Banana</strong> - For pro-level audio routing</li>
              <li><strong>AVIE's Stream Overlays</strong> - Stream overlays for your stream</li>
            </ul>
          </div>
        }
        className="mb-8"
      />  
      
     <RichText
        heading="Streaming Equipment Setup Tips"
        content={
          <div>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>✅ Test Your Gear</strong> - Do dry runs before going live</li>
              <li><strong>✅ Optimize Stream Settings</strong> - Bitrate 4500–6000 kbps, 720p60 for stability</li>
              <li><strong>✅ Use Ethernet</strong> - Always use wired internet for best upload speeds</li>
              <li><strong>✅ Use A Green Screen</strong> - Where possible, use a green screen to make your facecam setup cleaner.</li>
            </ul>
          </div>
        }
        className="mb-8"
      />    

      <FAQ />
      <CTAButtons
        title="Ready to Upgrade Your Streaming Setup?"
        description="Don’t let poor audio hold back your stream. Choose the best mic for streaming and start delivering pro-level sound today."
        buttons={[
          {
            label: "Ready To Start Streaming?",
            href: "https://avie.live",
            variant: "primary",
            isExternal: true
          },
          {
            label: "View More Streaming Setup Guides",
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

export default StreamingEquipmentGuide; 