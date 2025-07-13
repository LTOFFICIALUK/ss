import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { initGA, pageview } from './utils/analytics';

// Lazy load all routes with optimized loading strategies
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Privacy = React.lazy(() => import('./pages/privacy'));
const Terms = React.lazy(() => import('./pages/terms'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const GuidesIndex = React.lazy(() => import('./pages/guides'));

// Lazy load guide pages
const TwitchStreamingGuide = React.lazy(() => import('./pages/guides/how-to-start-streaming-on-twitch/page'));
const LiveStreamingGuide = React.lazy(() => import('./pages/guides/how-to-live-stream/page'));
const AVIELiveStreamingGuide = React.lazy(() => import('./pages/guides/how-to-live-stream-on-AVIE-Streaming/page'));
const BestPlacesToLiveStream = React.lazy(() => import('./pages/guides/best-places-to-live-stream/page'));
const MobileStreamingGuide = React.lazy(() => import('./pages/guides/how-to-stream-from-mobile/page'));
const EarnMoreAsALiveStreamerWithAVIE = React.lazy(() => import('./pages/guides/earn-more-from-live-streaming-with-avie/page'));
const EarnMoreMultiStreaming = React.lazy(() => import('./pages/guides/earn-more-multi-streaming/page'));
const MonetizeYourLiveStreamContent = React.lazy(() => import('./pages/guides/monetize-your-live-stream-content/page'));
const MonetizeYourClips = React.lazy(() => import('./pages/guides/monetize-your-clips/page'));
const StrategiesToMakeMoneyFromLiveStreaming = React.lazy(() => import('./pages/guides/strategies-to-make-money-from-live-streaming/page'));
const BestMicForStreaming = React.lazy(() => import('./pages/guides/what-is-the-best-mic-for-streaming/page'));
const StreamingEquipmentGuide = React.lazy(() => import('./pages/guides/streaming-equipment-guide/page'));
const OBSSetupGuide = React.lazy(() => import('./pages/guides/obs-setup-guide/page'));
const MultiStreamRevenue = React.lazy(() => import('./pages/guides/using-avie-multistreaming-to-earn-more/page'));
const ContentPlanningStrategy = React.lazy(() => import('./pages/guides/content-planning-strategy/page'));
const ContentCalendarCreation = React.lazy(() => import('./pages/guides/content-calendar-creation/page'));
const BuildingCommunity = React.lazy(() => import('./pages/guides/building-community/page'));
const DiscordServerSetup = React.lazy(() => import('./pages/guides/discord-server-setup/page'));
const SocialMediaForStreamers = React.lazy(() => import('./pages/guides/social-media-for-streamers/page'));
const TwitchMonetization = React.lazy(() => import('./pages/guides/twitch-monetization/page'));
const SponsorshipGuide = React.lazy(() => import('./pages/guides/sponsorship-guide/page'));
const GrowthHackingTwitch = React.lazy(() => import('./pages/guides/growth-hacking-twitch/page'));
const HowMuchRevenueFromStreaming = React.lazy(() => import('./pages/guides/how-much-revenue-can-you-make-from-streaming/page'));

// Category page lazy loading
const StreamSetupCategory = React.lazy(() => import('./pages/category/stream-setup/page'));
const ContentStrategyCategory = React.lazy(() => import('./pages/category/content-strategy/page'));
const GrowthMarketingCategory = React.lazy(() => import('./pages/category/growth-marketing/page'));
const MonetizationCategory = React.lazy(() => import('./pages/category/monetization/page'));
const CommunityBuildingCategory = React.lazy(() => import('./pages/category/community-building/page'));

// Pillar page lazy loading
const StreamSetupGuide = React.lazy(() => import('./pages/StreamSetupGuide'));
const ContentStrategyGuide = React.lazy(() => import('./pages/ContentStrategyGuide'));
const GrowthMarketingGuide = React.lazy(() => import('./pages/GrowthMarketingGuide'));
const MonetizationGuide = React.lazy(() => import('./pages/MonetizationGuide'));
const CommunityBuildingGuide = React.lazy(() => import('./pages/CommunityBuildingGuide'));
const AVIEStreamingGuide = React.lazy(() => import('./pages/AVIEStreamingGuide'));

// Optimized loading spinner with better UX
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="loading-spinner"></div>
  </div>
);

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    initGA();
  }, []);

  useEffect(() => {
    // Track page views on route change
    pageview(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          } />
          <Route path="/about" element={
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
          } />
          <Route path="/privacy" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Privacy />
            </Suspense>
          } />
          <Route path="/terms" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Terms />
            </Suspense>
          } />
          <Route path="/guides" element={
            <Suspense fallback={<LoadingSpinner />}>
              <GuidesIndex />
            </Suspense>
          } />
          <Route path="/guides/how-to-start-streaming-on-twitch" element={
            <Suspense fallback={<LoadingSpinner />}>
              <TwitchStreamingGuide />
            </Suspense>
          } />
          <Route path="/guides/earn-more-from-live-streaming-with-avie" element={
            <Suspense fallback={<LoadingSpinner />}>
              <EarnMoreAsALiveStreamerWithAVIE />
            </Suspense>
          } />
          <Route path="/guides/using-avie-multistreaming-to-earn-more" element={
            <Suspense fallback={<LoadingSpinner />}>
              <MultiStreamRevenue />
            </Suspense>
          } />
          <Route path="/guides/best-places-to-live-stream" element={
            <Suspense fallback={<LoadingSpinner />}>
              <BestPlacesToLiveStream />
            </Suspense>
          } />
          <Route path="/guides/how-to-live-stream" element={
            <Suspense fallback={<LoadingSpinner />}>
              <LiveStreamingGuide />
            </Suspense>
          } />
          <Route path="/guides/how-to-live-stream-on-AVIE-Streaming" element={
            <Suspense fallback={<LoadingSpinner />}>
              <AVIELiveStreamingGuide />
            </Suspense>
          } />
          <Route path="/guides/how-to-stream-from-mobile" element={
            <Suspense fallback={<LoadingSpinner />}>
              <MobileStreamingGuide />
            </Suspense>
          } />
          <Route path="/guides/obs-setup-guide" element={
            <Suspense fallback={<LoadingSpinner />}>
              <OBSSetupGuide />
            </Suspense>
          } />
          <Route path="/guides/streaming-equipment-guide" element={
            <Suspense fallback={<LoadingSpinner />}> 
              <StreamingEquipmentGuide />
            </Suspense>
          } />
          <Route path="/category/stream-setup" element={
            <Suspense fallback={<LoadingSpinner />}>
              <StreamSetupCategory />
            </Suspense>
          } />
          <Route path="/category/growth-marketing" element={
            <Suspense fallback={<LoadingSpinner />}>
              <GrowthMarketingCategory />
            </Suspense>
          } />
          <Route path="/category/community-building" element={
            <Suspense fallback={<LoadingSpinner />}>
              <CommunityBuildingCategory />
            </Suspense>
          } />
          <Route path="/category/monetization" element={
            <Suspense fallback={<LoadingSpinner />}>
              <MonetizationCategory />
            </Suspense>
          } />
          <Route path="/category/content-strategy" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ContentStrategyCategory />
            </Suspense>
          } />
          <Route path="/guides/earn-more-multi-streaming" element={
            <Suspense fallback={<LoadingSpinner />}>
              <EarnMoreMultiStreaming />
            </Suspense>
          } />
          <Route path="/guides/monetize-your-live-stream-content" element={
            <Suspense fallback={<LoadingSpinner />}>
              <MonetizeYourLiveStreamContent />
            </Suspense>
          } />
          <Route path="/guides/monetize-your-clips" element={
            <Suspense fallback={<LoadingSpinner />}>
              <MonetizeYourClips />
            </Suspense>
          } />
          <Route path="/guides/strategies-to-make-money-from-live-streaming" element={
            <Suspense fallback={<LoadingSpinner />}>
              <StrategiesToMakeMoneyFromLiveStreaming />
            </Suspense>
          } />
          <Route path="/guides/what-is-the-best-mic-for-streaming" element={
            <Suspense fallback={<LoadingSpinner />}>
              <BestMicForStreaming />
            </Suspense>
          } />
          <Route path="/guides/content-planning-strategy" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ContentPlanningStrategy />
            </Suspense>
          } />
          <Route path="/guides/content-calendar-creation" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ContentCalendarCreation />
            </Suspense>
          } />
          <Route path="/guides/growth-hacking-twitch" element={
            <Suspense fallback={<LoadingSpinner />}>
              <GrowthHackingTwitch />
            </Suspense>
          } />
          <Route path="/guides/social-media-for-streamers" element={
            <Suspense fallback={<LoadingSpinner />}>
              <SocialMediaForStreamers />
            </Suspense>
          } />
          <Route path="/guides/twitch-monetization" element={
            <Suspense fallback={<LoadingSpinner />}>
              <TwitchMonetization />
            </Suspense>
          } />
          <Route path="/guides/sponsorship-guide" element={
            <Suspense fallback={<LoadingSpinner />}>
              <SponsorshipGuide />
            </Suspense>
          } />
          <Route path="/guides/building-community" element={
            <Suspense fallback={<LoadingSpinner />}>
              <BuildingCommunity />
            </Suspense>
          } />
          <Route path="/guides/discord-server-setup" element={
            <Suspense fallback={<LoadingSpinner />}>
              <DiscordServerSetup />
            </Suspense>
          } />
          <Route path="/guides/how-much-revenue-can-you-make-from-streaming" element={
            <Suspense fallback={<LoadingSpinner />}>
              <HowMuchRevenueFromStreaming />
            </Suspense>
          } />
          <Route path="/stream-setup-guide" element={
            <Suspense fallback={<LoadingSpinner />}>
              <StreamSetupGuide />
            </Suspense>
          } />
          <Route path="/content-strategy-for-streamers" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ContentStrategyGuide />
            </Suspense>
          } />
          <Route path="/grow-your-stream" element={
            <Suspense fallback={<LoadingSpinner />}>
              <GrowthMarketingGuide />
            </Suspense>
          } />
          <Route path="/streaming-monetization-guide" element={
            <Suspense fallback={<LoadingSpinner />}>
              <MonetizationGuide />
            </Suspense>
          } />
          <Route path="/streamer-community-building-guide" element={
            <Suspense fallback={<LoadingSpinner />}>
              <CommunityBuildingGuide />
            </Suspense>
          } />
          <Route path="/avie-streaming-guide" element={
            <Suspense fallback={<LoadingSpinner />}>
              <AVIEStreamingGuide />
            </Suspense>
          } />
          <Route path="*" element={
            <Suspense fallback={<LoadingSpinner />}>
              <NotFound />
            </Suspense>
          } />
        </Route>
      </Routes>
    </>
  );
};

export default App; 