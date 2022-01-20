import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Logo from 'assets/img/logo.png';
import SearchForm from 'components/02_Molecules/SearchForm';
import theme from 'styles/theme';
import TabUl from 'components/02_Molecules/TabUl/TabUl';
import NavUl from 'components/02_Molecules/NavUl';
import NavpUl from 'components/02_Molecules/NavpUl';
import Gnb from 'components/02_Molecules/Gnb/Gnb';

const Header = ({ wide = false }) => {
	return (
		<section css={headerStyle(wide)}>
			<div className="top">
				<div className="left">
					<div className="logo">
						<img src={Logo} alt="LivartLinking" />
					</div>
					<div className="tab">
						<TabUl />
					</div>
					<div className="sch">
						<SearchForm />
					</div>
				</div>
				<div className="right">
					<Gnb />
				</div>
			</div>
			<nav className="mid">
				<div className="left">
					<NavUl />
				</div>
				<div className="right">
					{/* 프로모션 */}
					<NavpUl />
				</div>
			</nav>
		</section>
	);
};

const headerStyle = (wide) => {
	return css`
		width: ${wide ? '100%' : '120rem'};
		margin: 2rem auto 0 auto;
		/* padding: 0 2rem; */
		& > .top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 80px;
			/* border: 1px solid blue; */
			& > .left {
				flex: 1;
				display: flex;
				flex-flow: row wrap;
				align-items: center;
				// background-color: red;
				& > .logo {
					flex: 0 0 15rem;
					position: relative;
					bottom: 0.2rem;
					/* border: 1px solid red; */
					img {
						display: block;
						width: 100%;
						padding-top: 0.3rem;
					}
				}
				& > .tab {
					flex: 0 0 16rem;
					margin: 0 2rem;
				}
				& > .sch {
					flex: 1;
				}
			}
			& > .right {
				flex: 0 0 20rem;
				text-align: right;
				font-size: ${theme.size.base};
				// background-color: blue;
			}
		}
		& > .mid {
			display: flex;
			flex-direction: row;
			& > .left {
				flex: 1;
			}
			& > .right {
				flex: 0 0 30rem;
			}
		}
	`;
};

export default Header;
