import React from 'react';
import { useParams } from 'react-router-dom';

const AdScreen = () => {
  const { id: adId } = useParams();

  return <section>o id é: {adId}</section>;
};

export default AdScreen;
