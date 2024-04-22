import React from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from './HeroSection/HeroSection';
import Content from './Content/Content';
import { AdScreenStorage } from '../../contexts/AdScreenContext';

const AdScreen = () => {
  return (
    <>
      <AdScreenStorage>
        <HeroSection />

        <Content />
      </AdScreenStorage>
    </>
  );
};

export default AdScreen;
