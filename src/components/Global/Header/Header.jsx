import React from 'react';
import styles from './Header.module.css';
import logoImage from '../../../assets/logo.svg';
import CategoriesModal from './CategoriesModal';

const Header = () => {
  const [isScroll, setIsScroll] = React.useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
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

        <nav className={styles.navContainer}>
          <ul className={styles.navList}>
            <li className={styles.link}>
              <p onClick={() => setIsCategoriesOpen(true)}>Ver categorias</p>

              <CategoriesModal
                isOpen={isCategoriesOpen}
                setIsOpen={setIsCategoriesOpen}
              />
            </li>

            <li className={styles.link}>
              <a href="/search">Todos os anúncios</a>
            </li>

            <li className={styles.buttonAd}>
              <a href="/">
                <h2>Anuncie agora</h2>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
