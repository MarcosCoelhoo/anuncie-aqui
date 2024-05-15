import React from 'react';
import { useParams } from 'react-router-dom';
// import data from '../../data.json';
import data from '../../dataOficial.json';

export const AdScreenContext = React.createContext();

export const AdScreenStorage = ({ children }) => {
  const { id: adId } = useParams();
  const [dataAd, setDataAd] = React.useState(null);
  console.log(adId);

  React.useEffect(() => {
    const itemSearch = data.find((item) => adId === item.id);

    console.log(itemSearch);

    setDataAd(itemSearch);
  }, []);

  return (
    <AdScreenContext.Provider value={{ dataAd, setDataAd }}>
      {children}
    </AdScreenContext.Provider>
  );
};
