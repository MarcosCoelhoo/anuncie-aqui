import React, { useState } from 'react';
import styles from './Search.module.css';
import { Link, useSearchParams } from 'react-router-dom';
import dataCards from '../../../data.json';
import AdvertsCard from '../Home/AdvertsCard/AdvertsCard';
import dataTags from '../../../tags.json';

const Search = () => {
  const [dataVisible, setDataVisible] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const tagSearch = searchParams.get('tag');

  // const compareTags = (tagCard) => {
  //   const hasTag =
  // };

  React.useEffect(() => {
    if (tagSearch) {
      const searchArr = dataCards.filter((card) => {
        const tagsCard = card.tags;
        console.log(tagsCard);

        const hasTag = tagsCard.some((tag) => {
          return tag === tagSearch;
        });
        console.log(hasTag);

        if (!hasTag) {
          return;
        }

        return card;
      });

      console.log(searchArr);
      setDataVisible(searchArr);

      return;
    }

    setDataVisible(dataCards);
  }, [searchParams]);

  if (!dataVisible) return null;
  return (
    <>
      <header className={styles.header}>
        <h1 className="headerTitle">
          {!tagSearch ? 'Todos os anúncios' : `Pesquisa por "${tagSearch}"`}
        </h1>

        <div className={styles.tagsContainer}>
          <ul className={`tagsList ${styles.list}`}>
            {dataTags.map((tag, index) => (
              <li key={index} className={`tagItem ${styles.list}`}>
                <Link to={`/search?tag=${tag}`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <ul className={styles.listCards}>
        {dataVisible.map((info) => (
          <AdvertsCard key={info.id} data={info} />
        ))}
      </ul>
    </>
  );
};

export default Search;
