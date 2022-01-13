import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Logo from 'assets/img/logo.png';
import { Link } from 'react-router-dom';
import SearchForm from 'components/02_Molecules/SearchForm';
import theme from 'styles/theme';

const Header = () => {
	return (
		<header css={headerStyle}>
			<div className="top">
				<div className="left">
					<div className="logo">
						<img src={Logo} alt="LivartLinking" />
					</div>
					<div className="tab">
						<ul>
							<li>
								<Link to="/">클래스</Link>
							</li>
							<li>
								<Link to="/">플리마켓</Link>
							</li>
						</ul>
					</div>
					<div className="sch">
						<SearchForm />
					</div>
				</div>
				<div className="right">로그인</div>
			</div>
			<div className="mid">nav</div>
		</header>
	);
};

const headerStyle = css`
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
				flex: 0 0 150px;
				/* border: 1px solid red; */
				img {
					display: block;
					width: 100%;
					padding-top: 0.3rem;
				}
			}
			& > .tab {
				ul {
					display: flex;
					flex-direction: row;
					justify-content: center;
					width: 150px;
					margin: 0 2rem;
					li {
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
					}
				}
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
`;

export default Header;
