import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PC, Mobile } from 'components/04_Templates/MediaQuery/MediaQuery';
// import { SrOnly } from 'styles/Globals';

const PriceInfoWrap = () => {
	// const [controlledSwiper, setControlledSwiper] = useState(null);
	return (
		<>
			<PC>
				<section css={pcSectionStyle}>
					<h2>수업정보</h2>
				</section>
			</PC>
			<Mobile>
				<section css={moSectionStyle}>
					<h2>수업정보</h2>
				</section>
			</Mobile>
		</>
	);
};

const pcSectionStyle = css``;
const moSectionStyle = css``;

export default PriceInfoWrap;
