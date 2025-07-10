import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import GuidesIndex from './pages/guides';
import TwitchStreamingGuide from './pages/guides/how-to-start-streaming-on-twitch/page';
import LiveStreamingGuide from './pages/guides/how-to-live-stream/page';
import AVIELiveStreamingGuide from './pages/guides/how-to-live-stream-on-AVIE-Streaming/page';
import BestPlacesToLiveStream from './pages/guides/best-places-to-live-stream/page';
import StreamSetupPage from './pages/category/stream-setup/page';
import GrowthMarketingPage from './pages/category/growth-marketing/page';
import CommunityBuildingPage from './pages/category/community-building/page';
import MonetizationPage from './pages/category/monetization/page';
import ContentStrategyPage from './pages/category/content-strategy/page';
import MobileStreamingGuide from './pages/guides/how-to-stream-from-mobile/page';
import EarnMoreAsALiveStreamerWithAVIE from './pages/guides/earn-more-from-live-streaming-with-avie/page';
import EarnMoreMultiStreaming from './pages/guides/earn-more-multi-streaming/page';
import MonetizeYourLiveStreamContent from './pages/guides/monetize-your-live-stream-content/page';
import MonetizeYourClips from './pages/guides/monetize-your-clips/page';
import StrategiesToMakeMoneyFromLiveStreaming from './pages/guides/strategies-to-make-money-from-live-streaming/page';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/guides" element={<GuidesIndex />} />
        <Route path="/guides/how-to-start-streaming-on-twitch" element={<TwitchStreamingGuide />} />
        <Route path="/guides/earn-more-from-live-streaming-with-avie" element={<EarnMoreAsALiveStreamerWithAVIE />} />
        <Route path="/guides/best-places-to-live-stream" element={<BestPlacesToLiveStream />} />
        <Route path="/guides/how-to-live-stream" element={<LiveStreamingGuide />} />
        <Route path="/guides/how-to-live-stream-on-AVIE-Streaming" element={<AVIELiveStreamingGuide />} />
        <Route path="/guides/how-to-stream-from-mobile" element={<MobileStreamingGuide />} />
        <Route path="/category/stream-setup" element={<StreamSetupPage />} />
        <Route path="/category/growth-marketing" element={<GrowthMarketingPage />} />
        <Route path="/category/community-building" element={<CommunityBuildingPage />} />
        <Route path="/category/monetization" element={<MonetizationPage />} />
        <Route path="/category/content-strategy" element={<ContentStrategyPage />} />
        <Route path="/guides/earn-more-multi-streaming" element={<EarnMoreMultiStreaming />} />
        <Route path="/guides/monetize-your-live-stream-content" element={<MonetizeYourLiveStreamContent />} />
        <Route path="/guides/monetize-your-clips" element={<MonetizeYourClips />} />
        <Route path="/guides/strategies-to-make-money-from-live-streaming" element={<StrategiesToMakeMoneyFromLiveStreaming />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App; 