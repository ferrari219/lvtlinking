import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import theme from 'styles/theme';
import { baseURL } from 'api';

const PUnit = ({ id, name, title, pic, price, lnk }) => {
	return (
		<div css={punitStyle}>
			<Link to={lnk}>
				<div className="pic">
					{pic && (
						<img
							src={`${baseURL}assets/img/${pic}.jpg`}
							alt={title}
						/>
					)}
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
	margin: 1rem 0;
	/* padding: 0 1rem; */
	& > a .pic {
		position: relative;
		overflow: hidden;
		height: 0;
		padding-top: 80%;
		img {
			position: absolute;
			left: 50%;
			top: 50%;
			width: 100%;
			height: auto;
			transform: scale(1) translate(-50%, -50%);
			transition: transform 0.5s ease-in-out;
			&:hover {
				transform: scale(1.2) translate(-40%, -40%);
			}
		}
	}
	& > a .txt {
		padding: 1rem 0;
		& > .name {
			display: inline-flex;
			padding: 0 1rem;
			border: 1px solid #999;
			border-radius: 2rem;
			font-size: ${theme.size.sm};
			font-weight: 400;
			color: ${theme.color.def};
		}
		& > .title {
			margin: 1rem 0;
			font-size: ${theme.size.sm};
			font-weight: 600;
			color: #444;
			line-height: 1.4;
		}
		& > .price {
			font-size: ${theme.size.lg};
			font-weight: 600;
			color: ${theme.color.main};
		}
	}
`;

export default PUnit;
