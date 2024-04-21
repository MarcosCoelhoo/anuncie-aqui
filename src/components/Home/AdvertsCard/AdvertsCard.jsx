import React from 'react';
import styles from './AdvertsCard.module.css';

const AdvertsCard = ({ data }) => {
  return (
    <li className={styles.card}>
      <div className={styles.image}>
        <img
          src="https://fakeimg.pl/352x200/863cff/fcfcfc?text=anunciante&font=lobster"
          alt=""
          loading="lazy"
        />
      </div>

      <div className={styles.cardContent}>
        <div className={styles.content}>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>

        <div className={styles.info}>
          <div className={styles.infoData}>
            <i className="ph-bold ph-phone"></i>
            <p>{data.phone}</p>
          </div>

          <div className={styles.infoData}>
            <i className="ph-bold ph-map-pin"></i>
            <p>{data.address}</p>
          </div>
        </div>

        <div className={styles.buttons}>
          <a href="#" className={`${styles.btnWhatsapp} ${styles.button}`}>
            <i className="ph ph-whatsapp-logo"></i>
            <p>WhatsApp</p>
          </a>

          <a href="#" className={`${styles.btnMoreInfo} ${styles.button}`}>
            <p>Mais informações</p>
          </a>
        </div>
      </div>
    </li>
  );
};

export default AdvertsCard;
