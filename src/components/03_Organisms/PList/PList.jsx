import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PropTypes from 'prop-types';
import Unit from 'components/02_Molecules/PUnit/PUnit';

const PList = ({ divide = '3' }) => {
	const swiperOption = {
		spaceBetween: 20,
		slidesPerView: divide,
		// onSlideChange: () => console.log('slide change'),
		// onSwiper: (swiper) => console.log(swiper),
	};
	return (
		<section
			css={plistStyle}
			// className={[divide ? `list${divide}` : null].join(' ')}
		>
			<Swiper {...swiperOption}>
				{data &&
					data.map((item) => (
						<SwiperSlide key={item.id}>
							<Unit {...item} />
						</SwiperSlide>
					))}
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
		name: '구리미',
		title: '[BEST] 그림 작가와 함께, 쉽게 배우고 바로 적용하자! (아이패드, 갤럭시탭, 타블렛 모두 OK)',
		pic: 'sample_750_1',
		price: '35800',
		term: '5개월',
		lnk: '/',
	},
	{
		id: 1,
		name: '독설가',
		title: '[New] 매년 결심하는 책 읽기, 올해는 성공하셔야죠?',
		pic: 'sample_750_2',
		price: '2600',
		term: '5개월',
		lnk: '/',
	},
	{
		id: 2,
		name: 'Name',
		title: '영어',
		pic: 'sample_750_3',
		price: '39500',
		term: '5개월',
		lnk: '/',
	},
	{
		id: 3,
		name: '리얼컨버세이션',
		title: '[새해특가] 하루 5분, 애니메이션으로 영어 왕초보 탈출',
		pic: '',
		price: '39500',
		term: '5개월',
		lnk: '/',
	},
	{
		id: 4,
		name: '동동 작가',
		title: '[BEST] 이모티콘 작가와 함께, 쉽게 배우는 이모티콘! (아이패드, 갤럭시탭, 타블렛 모두 OK)',
		pic: '',
		price: '35800',
		term: '5개월',
		lnk: '/',
	},
	{
		id: 5,
		name: 'Name',
		title: '[00] 클래스명',
		pic: '',
		price: '39500',
		term: '5개월',
		lnk: '/',
	},
];

const plistStyle = css``;

export default PList;
