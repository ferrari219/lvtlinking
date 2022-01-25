import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper';
import 'swiper/css';
import MainSwiperLi from '../../02_Molecules/MainSwiperLi/index';
import { PC, Mobile } from 'components/04_Templates/MediaQuery/MediaQuery';
import { SrOnly } from 'styles/Globals';

const MainSwiper = () => {
	const [controlledSwiper, setControlledSwiper] = useState(null);
	return (
		<>
			<PC>
				<section css={pcSectionStyle}>
					<h2>메인배너</h2>
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
				</section>
			</PC>
			<Mobile>
				<section css={moSectionStyle}>
					<h2>메인배너</h2>
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
				</section>
			</Mobile>
		</>
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

const pcSectionStyle = css`
	height: 45rem;
	& > h2 {
		${SrOnly};
	}
	.swiper {
		overflow: visible;
	}
`;
const moSectionStyle = css`
	margin-bottom: 2rem;
	& > h2 {
		${SrOnly};
	}
	.swiper {
		/* overflow: visible; */
	}
`;

export default MainSwiper;
