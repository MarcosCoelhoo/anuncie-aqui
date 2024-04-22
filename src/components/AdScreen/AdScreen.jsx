import React from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from './HeroSection/HeroSection';
import Content from './Content/Content';

const AdScreen = () => {
  const { id: adId } = useParams();

  return (
    <>
      <HeroSection />

      <Content />
    </>
  );
};

export default AdScreen;
