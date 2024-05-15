import React from 'react';
import styles from './Content.module.css';
import { AdScreenContext } from '../../../contexts/AdScreenContext';

const Content = () => {
  const { dataAd } = React.useContext(AdScreenContext);
  console.log(dataAd);

  if (!dataAd) return null;
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.infoContainer}>
          <div className={styles.titleBox}>
            <h1>{dataAd.title}</h1>

            {/* <ul className={styles.socials}>
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
            </ul> */}
          </div>

          <p className={styles.description}>{dataAd.description}</p>
        </div>

        <div className={styles.info}>
          <div className={styles.infoData}>
            <i className="ph-bold ph-phone"></i>
            <p>{dataAd.phone}</p>
          </div>

          <div className={styles.infoData}>
            <i className="ph-bold ph-map-pin"></i>
            <p>{dataAd.address}</p>
          </div>
        </div>

        <a
          href={dataAd.buttonCTA.url}
          target="_blank"
          className={styles.buttonCTA}
        >
          {dataAd.buttonCTA.label}
        </a>
      </div>
    </section>
  );
};

export default Content;
