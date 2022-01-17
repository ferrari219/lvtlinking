import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const PList = ({ divide }) => {
	return (
		<section
			css={plistStyle}
			className={[divide ? `list${divide}` : null].join(' ')}
		>
			<Swiper {...swiperOption}>
				<SwiperSlide>test1</SwiperSlide>
				<SwiperSlide>test2</SwiperSlide>
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

const plistStyle = css`
	&.list3 {
	}
	&.list4 {
	}
`;

export default PList;
