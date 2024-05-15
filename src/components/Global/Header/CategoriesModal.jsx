import React from 'react';
import styles from './CategoriesModal.module.css';
import dataTags from '../../../../tags.json';

const CategoriesModal = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`${styles.categoriesContainer} ${isOpen ? styles.isOpen : ''}`}
    >
      <div className={styles.categories}>
        <div className={styles.titleContainer}>
          <h2>Todas as categorias</h2>
          <i
            onClick={() => setIsOpen(false)}
            className="ph-bold ph-x-circle"
          ></i>
        </div>
        <ul className={`tagsList ${styles.categoriesList}`}>
          {dataTags.map((tag, index) => (
            <li key={index} className={`tagItem ${styles.categoriesItem}`}>
              <a href={`/search?tag=${tag}`}>{tag}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesModal;
