import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Logo from 'assets/img/logo.png';
import SearchForm from 'components/02_Molecules/SearchForm';

const Header = () => {
	return (
		<header css={headerStyle}>
			<div className="top">
				<div className="left">
					<div className="logo">
						<img src={Logo} alt="LivartLinking" />
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
		& > .left {
			flex: 1;
			display: flex;
			flex-flow: row wrap;
			justify-content: center;
			// background-color: red;
			& > .logo {
				flex: 0 0 150px;
				img {
					width: 100%;
				}
			}
			& > .sch {
				flex: 1;
			}
		}
		& > .right {
			flex: 0 0 20rem;
			text-align: right;
			// background-color: blue;
		}
	}
`;

export default Header;
