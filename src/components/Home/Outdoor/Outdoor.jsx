import React from 'react';
import styles from './Outdoor.module.css';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
register();

const adverts = [
  {
    id: 1,
    image: `https://fakeimg.pl/980x400/863cff/fcfcfc?text=Anunciante+1&font=lobster`,
  },
  {
    id: 2,
    image: `https://fakeimg.pl/980x400/863cff/fcfcfc?text=Anunciante+2&font=lobster`,
  },
  {
    id: 3,
    image: `https://fakeimg.pl/980x400/863cff/fcfcfc?text=Anunciante+3&font=lobster`,
  },
  {
    id: 4,
    image: `https://fakeimg.pl/980x400/863cff/fcfcfc?text=Anunciante+4&font=lobster`,
  },
];

const Outdoor = () => {
  return (
    <section className={styles.container}>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          type: 'bullets',
          clickable: true,
          dynamicBullets: true,
        }}
      >
        {adverts.map((ad) => (
          <SwiperSlide
            key={ad.id}
            className={styles.slide}
            data-swiper-autoplay="2000"
          >
            <a href="#">
              <img src={ad.image} alt="" loading="lazy" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Outdoor;
