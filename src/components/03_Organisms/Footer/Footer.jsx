import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Logo from 'assets/img/logo.png';
import theme from 'styles/theme';
import { PC, Mobile } from 'components/04_Templates/MediaQuery/MediaQuery';
import { SrOnly } from 'styles/Globals';

const Footer = ({ wide = false }) => {
	return (
		<>
			<PC>
				<div css={pcFooterStyle(wide)}>
					<h2>풋터</h2>
					<div className="left">
						<img src={Logo} alt="LivartLinking" />
					</div>
					<div className="right">
						Copyright ⓒ2022 LivartLinking inc, ltd. All rights
						reserved
					</div>
				</div>
			</PC>
			<Mobile>
				<div css={moFooterStyle}>
					<h2>풋터</h2>
					<div className="right">
						Copyright ⓒ2022 LivartLinking inc, ltd. All rights
						reserved
					</div>
				</div>
			</Mobile>
		</>
	);
};

const pcFooterStyle = (wide) => {
	return css`
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: ${wide ? '100%' : '120rem'};
		margin: 2rem auto 0 auto;
		padding: 2rem 0;
		border-top: 1px solid #ddd;
		& > h2 {
			${SrOnly};
		}
		& > .left {
			flex: 0 0 30rem;
			img {
				width: 15rem;
				filter: grayscale(100%);
				opacity: 0.8;
			}
		}
		& > .right {
			flex: 1;
			font-size: ${theme.size.sm};
			color: #999;
		}
	`;
};
const moFooterStyle = css`
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 100%;
	margin: 2rem auto 0 auto;
	padding: 2rem 0;
	border-top: 1px solid #ddd;
	& > h2 {
		${SrOnly};
	}
	& > .right {
		flex: 1;
		display: flex;
		justify-content: center;
		font-size: ${theme.size.xsm};
		letter-spacing: 0;
		color: #999;
	}
`;

export default Footer;
