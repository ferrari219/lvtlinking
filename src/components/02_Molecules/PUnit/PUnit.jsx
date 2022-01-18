import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import theme from 'styles/theme';

const PUnit = ({ id, name, title, pic, price, lnk }) => {
	return (
		<div css={punitStyle}>
			<Link to={lnk}>
				<div className="pic">
					<img
						src={`${theme.url}assets/img/${pic}.jpg`}
						alt={title}
					/>
				</div>
				<div className="txt">
					<div className="name">{name}</div>
					<div className="title">{title}</div>
					{/* <div className="count"></div> */}
					<div className="price">{price}</div>
				</div>
			</Link>
		</div>
	);
};

PUnit.protoTypes = {
	name: PropTypes.string,
	title: PropTypes.string,
	img: PropTypes.string,
	price: PropTypes.number,
	lnk: PropTypes.string,
};

const punitStyle = css`
	width: 100%;
	max-width: 50rem;
	margin: 2rem 0;
	/* padding: 0 1rem; */
	& > a .txt {
		& > .name {
			display: inline-flex;
			padding: 0.1rem 0.5rem;
			border: 1px solid ${theme.color.def};
			border-radius: 0.5rem;
			font-size: ${theme.size.sm};
			font-weight: 400;
			color: ${theme.color.def};
		}
		& > .title {
			margin: 1rem 0;
			font-size: ${theme.size.sm};
			font-weight: 600;
			color: ${theme.color.def};
			line-height: 1.4;
		}
		& > .price {
			font-size: ${theme.size.lg};
			font-weight: 600;
			color: ${theme.color.def};
		}
	}
`;

export default PUnit;
