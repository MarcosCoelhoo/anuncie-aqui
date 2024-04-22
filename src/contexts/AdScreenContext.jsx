import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data.json';

export const AdScreenContext = React.createContext();

export const AdScreenStorage = ({ children }) => {
  const { id: adId } = useParams();
  const [dataAd, setDataAd] = React.useState(null);

  React.useEffect(() => {
    const itemSearch = data.find((item) => adId === item.id);

    // console.log(itemSearch);

    setDataAd(itemSearch);
  }, []);

  return (
    <AdScreenContext.Provider value={{ dataAd, setDataAd }}>
      {children}
    </AdScreenContext.Provider>
  );
};
