import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { initGA, pageview } from './utils/analytics';

// Lazy load all routes
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
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

// Lazy load category pages
const StreamSetupPage = React.lazy(() => import('./pages/category/stream-setup/page'));
const GrowthMarketingPage = React.lazy(() => import('./pages/category/growth-marketing/page'));
const CommunityBuildingPage = React.lazy(() => import('./pages/category/community-building/page'));
const MonetizationPage = React.lazy(() => import('./pages/category/monetization/page'));
const ContentStrategyPage = React.lazy(() => import('./pages/category/content-strategy/page'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
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
          <Route path="/category/stream-setup" element={
            <Suspense fallback={<LoadingSpinner />}>
              <StreamSetupPage />
            </Suspense>
          } />
          <Route path="/category/growth-marketing" element={
            <Suspense fallback={<LoadingSpinner />}>
              <GrowthMarketingPage />
            </Suspense>
          } />
          <Route path="/category/community-building" element={
            <Suspense fallback={<LoadingSpinner />}>
              <CommunityBuildingPage />
            </Suspense>
          } />
          <Route path="/category/monetization" element={
            <Suspense fallback={<LoadingSpinner />}>
              <MonetizationPage />
            </Suspense>
          } />
          <Route path="/category/content-strategy" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ContentStrategyPage />
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