import React from 'react';
import styles from './HeroSection.module.css';
import backgroundImg from '../../../assets/background-pattern.svg';
import { AdScreenContext } from '../../../contexts/AdScreenContext';

const HeroSection = () => {
  const { dataAd } = React.useContext(AdScreenContext);

  if (!dataAd) return null;
  return (
    <section className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.background}>
          <img src={backgroundImg} alt="Background Image" />
        </div>

        <div className={styles.content}>
          <div className={styles.profileImg}>
            <img
              src="https://fakeimg.pl/352x200/863cff/fcfcfc?text=anunciante&font=lobster"
              alt=""
            />
          </div>

          <ul className={styles.tags}>
            {dataAd.tags.map((tag, index) => (
              <li key={index} className={styles.tag}>
                <p>{tag}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
