import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PropTypes from 'prop-types';
import Unit from 'components/02_Molecules/PUnit/PUnit';

const PList = ({ divide = '3' }) => {
	const swiperOption = {
		spaceBetween: 0,
		slidesPerView: divide,
		onSlideChange: () => console.log('slide change'),
		onSwiper: (swiper) => console.log(swiper),
	};
	return (
		<section
			css={plistStyle}
			// className={[divide ? `list${divide}` : null].join(' ')}
		>
			<Swiper {...swiperOption}>
				{data &&
					data.map((item) => (
						<SwiperSlide key={item.id} {...item}>
							<Unit />
						</SwiperSlide>
					))}
				<SwiperSlide>test2</SwiperSlide>
				<SwiperSlide>test3</SwiperSlide>
				<SwiperSlide>test4</SwiperSlide>
				<SwiperSlide>test5</SwiperSlide>
				<SwiperSlide>test6</SwiperSlide>
			</Swiper>
		</section>
	);
};

PList.propTypes = {
	divide: PropTypes.string,
};

const data = [
	{
		id: 0,
		name: 'Name',
		title: '[00] 클래스명',
		price: '39500',
		term: '5개월',
		lnk: '/',
	},
	{
		id: 1,
		name: 'Name',
		title: '[00] 클래스명',
		price: '39500',
		term: '5개월',
		lnk: '/',
	},
];

const plistStyle = css``;

export default PList;
