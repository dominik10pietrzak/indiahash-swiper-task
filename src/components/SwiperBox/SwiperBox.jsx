import React, { useEffect, useState } from 'react';
import './SwiperBox.scss';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import { data } from '../../assets/employees';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';

import background from '../../assets/bg-swiper.png';

const SwiperBox = ({
  isSwiperVisible,
  currentPerson,
  setCurrentPerson,
  setSwiperVisibility,
}) => {
  SwiperCore.use([Navigation]);

  const [swiper, setSwiper] = useState(null);

  const slideTo = (index) => {
    swiper.slideTo(index, 0);
  };

  useEffect(() => {
    const activeSlide = data.indexOf(
      data.find((x) => x.id === currentPerson.id)
    );
    swiper && slideTo(activeSlide);
  }, [currentPerson]);

  return (
    <div className={`swiper-box ${!isSwiperVisible && 'hidden'}`}>
      <img className='background' src={background} alt='background' />
      <span className='hide-button' onClick={() => setSwiperVisibility(false)}>
        <i className='fas fa-times'></i>
      </span>

      <Swiper
        navigation={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={setSwiper}>
        {data.map((person) => (
          <SwiperSlide key={person.id}>
            <div className='person-box'>
              <div className='wrapper'>
                <h3 className='position'>{person.position}</h3>
                <h1 className='name'>{person.name}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperBox;
