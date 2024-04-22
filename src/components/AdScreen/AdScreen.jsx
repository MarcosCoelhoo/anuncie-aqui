import React from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from './HeroSection/HeroSection';

const AdScreen = () => {
  const { id: adId } = useParams();

  return (
    <>
      <HeroSection />
    </>
  );
};

export default AdScreen;
