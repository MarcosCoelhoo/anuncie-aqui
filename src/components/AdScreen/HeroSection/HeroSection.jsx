import React from 'react';
import styles from './HeroSection.module.css';
import backgroundImg from '../../../assets/background-pattern.svg';
import { AdScreenContext } from '../../../contexts/AdScreenContext';
import { Link } from 'react-router-dom';

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

          <ul className="tagsList">
            {dataAd.tags.map((tag, index) => (
              <li key={index} className="tagItem">
                <Link to={`/search?tag=${tag}`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
