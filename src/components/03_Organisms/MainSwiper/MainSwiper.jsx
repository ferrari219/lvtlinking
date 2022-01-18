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
	// onSlideChange: () => console.log('slide change'),
	// onSwiper: (swiper) => console.log(swiper),
};

const data = [
	{
		id: 0,
		title: '새해니까 새로운 다짐! 최대할인',
		sub: '이렇게 할인해도 되나 싶을 정도의 할인, 지금 새해 다짐 실천하세요',
		pic: 'sample_1050_1',
		bg: '#FE5000',
		color: '#fff',
		lnk: '/',
	},
	{
		id: 1,
		title: '내 스펙을 업그레이드 해주는 클래스',
		sub: '매일 쉬지말고 업그레이드 하세요.',
		pic: 'sample_1050_2',
		bg: 'blue',
		color: '#fff',
		lnk: '/',
	},
	{
		id: 2,
		title: '금융상식 클래스, 이젠 알아야해',
		sub: '배우자마자 적용할 수 있는 자산증식 클래스',
		pic: 'sample_1050_3',
		bg: 'green',
		color: '#fff',
		lnk: '/',
	},
];

const sectionStyle = css`
	height: 45rem;
`;

export default MainSwiper;
