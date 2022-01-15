import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import { Link } from 'react-router-dom';

const TabUl = () => {
	return (
		<ul css={tabulStyle}>
			{data &&
				data.map(({ id, name, lnk }) => (
					<li key={id}>
						<Link to={lnk}>{name}</Link>
					</li>
				))}
		</ul>
	);
};

const data = [
	{
		id: 0,
		name: '클래스',
		lnk: '/',
	},
	{
		id: 1,
		name: '플리마켓',
		lnk: '/',
	},
];

const tabulStyle = css`
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 100%;
	& > li {
		flex: 1;
		/* border: 1px solid red; */
		a {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			font-size: ${theme.size.lg};
			font-weight: 400;
		}
		&:hover,
		&.is-active {
			a {
				color: ${theme.color.main};
			}
		}
	}
`;

export default TabUl;
