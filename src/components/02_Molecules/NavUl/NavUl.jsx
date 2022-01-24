import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import { Link } from 'react-router-dom';
import { PC, Mobile } from 'components/04_Templates/MediaQuery/MediaQuery';

const NavUl = () => {
	return (
		<>
			<PC>
				<ul css={pcNavulStyle}>
					<li>
						<Link to="/">전체카테고리</Link>
					</li>
					{data &&
						data.map(({ id, name, lnk }) => (
							<li key={id}>
								<Link to={lnk}>{name}</Link>
							</li>
						))}
				</ul>
			</PC>
			<Mobile>
				<ul css={moNavulStyle}>
					<li>
						<Link to="/">전체카테고리</Link>
					</li>
					{data &&
						data.map(({ id, name, lnk }) => (
							<li key={id}>
								<Link to={lnk}>{name}</Link>
							</li>
						))}
				</ul>
			</Mobile>
		</>
	);
};

const data = [
	{
		id: 0,
		name: '인기클래스',
		lnk: '/',
	},
	{
		id: 1,
		name: '신규클래스',
		lnk: '/',
	},
	{
		id: 2,
		name: '이벤트',
		lnk: '/',
	},
	{
		id: 3,
		name: '바로수강',
		lnk: '/',
	},
	{
		id: 4,
		name: '오픈예정',
		lnk: '/',
	},
];

const pcNavulStyle = css`
	display: flex;
	flex-direction: row;
	width: 100%;
	margin: 0 -2rem;
	& > li {
		// flex: 1;
		/* border: 1px solid red; */
		a {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			padding: 1rem 2rem;
			font-size: ${theme.size.base};
			font-weight: 600;
		}
		&:hover,
		&.is-active {
			a {
				color: ${theme.color.main};
			}
		}
	}
`;
const moNavulStyle = css`
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	width: 100%;
	margin: 0;
	// align-items: flex-start;
	overflow-x: auto;
	white-space: nowrap;
	& > li {
		flex: 0 0 11rem;
		a {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 1rem;
		}
	}
`;

export default NavUl;
