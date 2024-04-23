import React from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from './HeroSection/HeroSection';
import Content from './Content/Content';
import { AdScreenStorage } from '../../contexts/AdScreenContext';
import Gallery from './Gallery/Gallery';

const AdScreen = () => {
  return (
    <>
      <AdScreenStorage>
        <HeroSection />

        <Content />

        <Gallery />
      </AdScreenStorage>
    </>
  );
};

export default AdScreen;
