import React from 'react';
import styles from './HeroSection.module.css';
import backgroundImg from '../../../assets/background-pattern.svg';

const HeroSection = () => {
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
            <li className={styles.tag}>
              <p>Markonha</p>
            </li>
            <li className={styles.tag}>
              <p>Futebol</p>
            </li>
            <li className={styles.tag}>
              <p>Roupas</p>
            </li>
            <li className={styles.tag}>
              <p>Society</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
