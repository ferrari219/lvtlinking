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
import { PC, Mobile } from 'components/04_Templates/MediaQuery/MediaQuery';
import { SrOnly } from 'styles/Globals';

const Header = ({ wide = false }) => {
	return (
		<>
			<PC>
				<section css={pcheaderStyle(wide)}>
					<h2>헤더</h2>
					<div className="top">
						<div className="left">
							<h1 className="logo">
								<img src={Logo} alt="LivartLinking" />
							</h1>
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
							<NavpUl />
						</div>
					</nav>
				</section>
			</PC>
			<Mobile>
				<section css={moheaderStyle}>
					<h2>헤더</h2>
					<div className="top">
						<div className="left">
							<div className="logo">
								<img src={Logo} alt="LivartLinking" />
							</div>
							<div className="sch">
								<SearchForm />
							</div>
						</div>
					</div>
					<nav className="mid">
						<div className="left">
							<NavUl />
						</div>
					</nav>
				</section>
			</Mobile>
		</>
	);
};

const pcheaderStyle = (wide) => {
	return css`
		width: ${wide ? '100%' : '120rem'};
		margin: 2rem auto 0 auto;
		& > h2 {
			${SrOnly};
		}
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
const moheaderStyle = css`
	overflow: hidden;
	width: 100%;
	max-width: iniitial;
	margin: 2rem auto 0 auto;
	& > h2 {
		${SrOnly};
	}
	& > .top {
		height: 4rem;
		padding: 0 2rem;
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
			& > .sch {
				flex: 1;
			}
		}
	}
	& > .mid {
		& > .left {
			a {
				font-size: ${theme.size.sm};
				font-weight: normal;
			}
		}
	}
`;

export default Header;
