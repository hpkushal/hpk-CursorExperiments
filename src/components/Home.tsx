import React from 'react';
import HeroSection from './HeroSection';
import MobileHeroSection from './MobileHeroSection';
import WhatIDoSection from './WhatIDoSection';
import FeaturedToolsSection from './FeaturedToolsSection';
import LatestContentSection from './LatestContentSection';
import GetInTouchSection from './GetInTouchSection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <MobileHeroSection />
      <WhatIDoSection />
      <FeaturedToolsSection />
      <LatestContentSection />
      <GetInTouchSection />
    </>
  );
};

export default Home; 