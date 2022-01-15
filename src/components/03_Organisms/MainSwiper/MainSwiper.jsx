import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper';
import 'swiper/css';
import MainSwiperLi from '../../02_Molecules/MainSwiperLi/index';

const MainSwiper = () => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  return (
    <section css={sectionStyle}>
      <Swiper
        {...swiperOption}
        modules={[Controller]}
        controller={{ control: controlledSwiper }}
      >
        {data &&
          data.map((item) => (
            <SwiperSlide key={item.id}>
              <MainSwiperLi {...item} />
            </SwiperSlide>
          ))}
      </Swiper>

      <Swiper modules={[Controller]} onSwiper={setControlledSwiper}>
        test
      </Swiper>
    </section>
  );
};

const swiperOption = {
  spaceBetween: 0,
  slidesPerView: 1,
  onSlideChange: () => console.log('slide change'),
  onSwiper: (swiper) => console.log(swiper),
};

const data = [
  {
    id: 0,
    title: '올해는 진짜 다짐하자! 최대 96%',
    sub: '올해 첫 최대 할인 찬스, 지금 지원 받고 새해 다짐 격파하세요',
    pic: '',
    bg: '#FE5000',
    color: '#fff',
    lnk: '/',
  },
  {
    id: 1,
    title: 'Slide2',
    sub: 'sub Txt',
    pic: '',
    bg: 'blue',
    color: '#fff',
    lnk: '/',
  },
  {
    id: 2,
    title: 'Slide3',
    sub: 'sub Txt',
    pic: '',
    bg: 'green',
    color: '#fff',
    lnk: '/',
  },
];

const sectionStyle = css``;

export default MainSwiper;
