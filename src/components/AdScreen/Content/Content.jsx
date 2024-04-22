import React from 'react';
import styles from './Content.module.css';

const Content = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.titleBox}>
            <h1>Circuito C4 Bol</h1>

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

          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Egestas risus nulla luctus
            at duis adipiscing dictumst facilisi nibh. Blandit bibendum
            tincidunt aenean quam vestibulum. Morbi nisi ultricies elit lorem
            eros tellus venenatis quis felis. Diam faucibus lectus mauris
            scelerisque tortor.
          </p>
        </div>

        <a href="#" className={styles.buttonCTA}>
          Agende seu horário
        </a>
      </div>
    </section>
  );
};

export default Content;
