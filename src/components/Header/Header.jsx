import React from 'react';
import styles from './Header.module.css';
import logoImage from '../../assets/logo.svg';

const Header = () => {
  const [isScroll, setIsScroll] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', (event) => {
      // console.log(window.scrollY);

      if (window.scrollY > 90) {
        setIsScroll(true);

        return true;
      }

      setIsScroll(false);
    });

    return window.removeEventListener('scroll', window);
  }, []);

  return (
    <header className={`${styles.container} ${isScroll ? styles.scroll : ''}`}>
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
