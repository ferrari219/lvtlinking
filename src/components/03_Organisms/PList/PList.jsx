import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PropTypes from 'prop-types';
import Unit from 'components/02_Molecules/PUnit/PUnit';

const PList = ({ divide = '4' }) => {
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
		pic: 'sample_750_0',
		price: '35800',
		term: '5개월',
		lnk: '/',
	},
	{
		id: 1,
		name: '독설가',
		title: '[New] 매년 결심하는 책 읽기, 올해는 성공하셔야죠?',
		pic: 'sample_750_1',
		price: '2600',
		term: '5개월',
		lnk: '/',
	},
	{
		id: 2,
		name: '영문학과',
		title: '올해는 진짜 영어로 대화해야죠',
		pic: 'sample_750_2',
		price: '17800',
		term: '5개월',
		lnk: '/',
	},
	{
		id: 3,
		name: '뜨개질리언',
		title: '[새해특가] 마음이 편해지는 뜨개질',
		pic: 'sample_750_3',
		price: '2000',
		term: '2개월',
		lnk: '/',
	},
	{
		id: 4,
		name: '프로그래마',
		title: '[BEST] 개발 첫걸음, 아무것도 몰라도 괜찮아요',
		pic: 'sample_750_4',
		price: '165800',
		term: '5개월',
		lnk: '/',
	},
	{
		id: 5,
		name: '절세미인',
		title: '절세를 알아야 내 돈을 지킬수 있어',
		pic: 'sample_750_5',
		price: '39500',
		term: '5개월',
		lnk: '/',
	},
];

const plistStyle = css`
	width: 120rem;
	margin: 0 auto;
`;

export default PList;
