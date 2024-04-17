import React from 'react';
import styles from './Header.module.css';
import logoImage from '../../assets/logo-svg.svg';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <a href="/" className={styles.logo}>
          <img src={logoImage} alt="Logo Anuncie Aqui" />
        </a>

        <nav className={styles.nav}>
          {/* <a href="#" className={styles.link}>
            Sobre nós
          </a> */}

          <a href="#" className={styles.buttonAd}>
            <h2>Anuncie agora</h2>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
