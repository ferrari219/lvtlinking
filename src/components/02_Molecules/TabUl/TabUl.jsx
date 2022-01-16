import React, { useState, useCallback } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
// import { Link } from 'react-router-dom';

const TabUl = () => {
	const [now, setNow] = useState('/');
	const onClick = useCallback((lnk) => {
		// console.log('tabChange');
		setNow(lnk);
	}, []);
	return (
		<ul css={tabulStyle}>
			{data &&
				data.map(({ id, name, lnk }) => (
					<li key={id} className={now === lnk ? 'is-active' : null}>
						<button type="button" onClick={() => onClick(lnk)}>
							{name}
						</button>
						{/* <Link to={lnk}>{name}</Link> */}
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
		lnk: '/flea',
	},
];

const tabulStyle = () => {
	return css`
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		& > li {
			flex: 1;
			/* border: 1px solid red; */
			button {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				background: transparent;
				border: none;
				font-size: ${theme.size.md};
				font-weight: 400;
			}
			&:hover,
			&.is-active {
				button {
					color: ${theme.color.main};
				}
			}
		}
	`;
};

export default TabUl;
