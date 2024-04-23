import React from 'react';
import styles from './Gallery.module.css';

const Gallery = () => {
  return (
    <section className={styles.container}>
      <div className={styles.gallery}>
        <div className={styles.banner}>
          <img
            src="https://fakeimg.pl/1119x300/863CFF/909090?text=Banner"
            alt=""
          />
        </div>

        <ul className={styles.images}>
          <li className={styles.image}>
            <img
              className={styles.establishmentImg}
              src="https://fakeimg.pl/352x300/863CFF/ffcc00?text=Imagem"
              alt=""
            />
          </li>
          <li className={styles.image}>
            <img
              className={styles.establishmentImg}
              src="https://fakeimg.pl/352x300/863CFF/ffcc00?text=Imagem"
              alt=""
            />
          </li>
          <li className={styles.image}>
            <img
              className={styles.establishmentImg}
              src="https://fakeimg.pl/352x300/863CFF/ffcc00?text=Imagem"
              alt=""
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
