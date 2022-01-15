import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Logo from 'assets/img/logo.png';
import theme from 'styles/theme';

const Footer = () => {
	return (
		<div css={footerStyle}>
			<div className="left">
				<img src={Logo} alt="LivartLinking" />
			</div>
			<div className="right">
				Copyright ⓒ2022 LivartLinking inc, ltd. All rights reserved
			</div>
		</div>
	);
};

const footerStyle = css`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 2rem;
	padding: 2rem;
	border-top: 1px solid #ddd;
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
		color: #666;
	}
`;

export default Footer;
