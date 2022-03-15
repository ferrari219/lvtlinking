import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Title from 'components/99_Etc/Title';
import PageTemplate from 'components/04_Templates/PageTemplate/PageTemplate';
import { PC, Mobile } from 'components/04_Templates/MediaQuery/MediaQuery';
import Header from 'components/03_Organisms/Header';
import Footer from 'components/03_Organisms/Footer';
import ClassInfoWrap from 'components/03_Organisms/ClassInfoWrap';
import PriceInfoWrap from 'components/03_Organisms/PriceInfoWrap';
import PropTypes from 'prop-types';

const Detail = ({ wide = false }) => {
	return (
		<>
			<Title />
			<PC>
				<PageTemplate header={<Header />} footer={<Footer />}>
					<div css={pcDetailStyle(wide)}>
						<div className="left">
							<ClassInfoWrap />
						</div>
						<div className="right">
							<PriceInfoWrap />
						</div>
					</div>
				</PageTemplate>
			</PC>
			<Mobile>제작중</Mobile>
		</>
	);
};

Detail.propTypes = {
	wide: PropTypes.bool,
};

const pcDetailStyle = (wide) => {
	return css`
		display: flex;
		flexflow: row wrap;
		width: ${wide ? '100%' : '120rem'};
		margin: 2rem auto 0 auto;
		& > .left {
			flex: 6;
			padding: 0 5rem 10rem 0;
		}
		& > .right {
			flex: 2;
		}
	`;
};

export default Detail;
