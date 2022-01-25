import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PropTypes from 'prop-types';
import Unit from 'components/02_Molecules/PUnit/PUnit';
import { PC, Mobile } from 'components/04_Templates/MediaQuery/MediaQuery';
import theme from 'styles/theme';

const PList = ({ divide = '4' }) => {
	const pcSwiperOption = {
		spaceBetween: 20,
		slidesPerView: divide,
		// onSlideChange: () => console.log('slide change'),
		// onSwiper: (swiper) => console.log(swiper),
	};
	const moSwiperOption = {
		spaceBetween: 20,
		slidesPerView: 2,
	};
	const { ttl, list } = data;
	return (
		<>
			<PC>
				<section
					css={pcPlistStyle}
					// className={[divide ? `list${divide}` : null].join(' ')}
				>
					<h2>{ttl}</h2>
					<Swiper {...pcSwiperOption}>
						{list &&
							list.map((item) => (
								<SwiperSlide key={item.id}>
									<Unit {...item} />
								</SwiperSlide>
							))}
					</Swiper>
				</section>
			</PC>
			<Mobile>
				<section
					css={moPlistStyle}
					// className={[divide ? `list${divide}` : null].join(' ')}
				>
					<h2>{ttl}</h2>
					<Swiper {...moSwiperOption}>
						{list &&
							list.map((item) => (
								<SwiperSlide key={item.id}>
									<Unit {...item} />
								</SwiperSlide>
							))}
					</Swiper>
				</section>
			</Mobile>
		</>
	);
};

PList.propTypes = {
	ttl: PropTypes.string,
	divide: PropTypes.string,
};

const data = {
	ttl: '베스트클래스',
	list: [
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
	],
};

const pcPlistStyle = css`
	width: 120rem;
	margin: 0 auto;
	h2 {
		margin: 0;
		padding: 2rem 0 0 0;
		color: ${theme.color.def};
	}
`;
const moPlistStyle = css`
	width: 100%;
	margin: 0 auto;
	padding: 0 1rem;
	h2 {
		margin: 0;
		padding: 2rem 0 0 0;
		font-size: ${theme.size.lg};
		color: ${theme.color.def};
	}
`;

export default PList;
