import React from 'react';
import styles from './Footer.module.css';
import logoImage from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <img src={logoImage} alt="" />
        </div>

        <div className={styles.content}>
          <h3>
            Acompanhe nossas <strong>redes</strong>
          </h3>

          <ul className={styles.socials}>
            <li className={styles.social}>
              <a href="#">
                <i className="ph ph-whatsapp-logo"></i>
              </a>
            </li>
            <li className={styles.social}>
              <a href="#">
                <i className="ph ph-facebook-logo"></i>
              </a>
            </li>
            <li className={styles.social}>
              <a href="#">
                <i className="ph ph-instagram-logo"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
