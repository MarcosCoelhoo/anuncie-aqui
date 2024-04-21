import React from 'react';
import styles from './Adverts.module.css';
import AdvertsCard from '../AdvertsCard/AdvertsCard';
import dataCards from '../../../../data.json';

const Adverts = () => {
  return (
    <section className={styles.container}>
      <div className={styles.adverts}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Anúncios Recentes</h1>

          <ul className={styles.listCards}>
            {dataCards.map((info) => (
              <AdvertsCard key={info.id} data={info} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Adverts;
