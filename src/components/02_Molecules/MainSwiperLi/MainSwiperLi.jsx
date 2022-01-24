import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import { Link } from 'react-router-dom';
import { baseURL } from 'api';
import { PC, Mobile } from 'components/04_Templates/MediaQuery/MediaQuery';

const MainSwiperLi = ({ title, sub, pic, bg, color, lnk }) => {
	return (
		<>
			<PC>
				<div css={pcMainSwiperLiStyle(bg, color)}>
					<Link to={lnk}>
						<div className="wrap">
							<div className="picArea">
								{pic && (
									<img
										src={`${baseURL}assets/img/${pic}.jpg`}
										alt={title}
									/>
								)}
							</div>
							<div className="txtArea">
								<dl>
									<dt>{title}</dt>
									<dd>{sub}</dd>
								</dl>
							</div>
						</div>
					</Link>
				</div>
			</PC>
			<Mobile>
				<div css={moMainSwiperLiStyle(bg, color)}>
					<Link to={lnk}>
						<div className="wrap">
							<div className="picArea">
								{pic && (
									<img
										src={`${baseURL}assets/img/${pic}.jpg`}
										alt={title}
									/>
								)}
							</div>
							<div className="txtArea">
								<dl>
									<dt>{title}</dt>
									<dd>{sub}</dd>
								</dl>
							</div>
						</div>
					</Link>
				</div>
			</Mobile>
		</>
	);
};

const pcMainSwiperLiStyle = (bg, color) => {
	return css`
		height: inherit;
		margin-bottom: 4rem;
		color: ${color};
		& > a {
			display: block;
			width: inherit;
			height: calc(100% - 3rem);
			background-color: ${bg};
			& > .wrap {
				display: flex;
				flex-flow: row wrap;
				width: 120rem;
				margin: 0 auto;
				.picArea {
					flex: 0 0 55%;
					display: flex;
					justify-content: center;
					align-items: center;
					overflow: hidden;
					position: relative;
					left: 2rem;
					top: 3rem;
					width: calc(100% - 2rem);
					height: 34rem;
					background-color: black;
					/* opacity: 0.5; */
					box-shadow: ${theme.shadow.lv7};
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
				.txtArea {
					flex: 1;
					display: flex;
					align-items: center;
					dl {
						max-width: 32rem;
						padding: 5rem;
					}
					dt {
						padding: 1rem 0;
						font-size: 3.4rem;
						font-weight: 700;
						line-height: 1.2;
						white-space: pre-line;
						word-break: keep-all;
						letter-spacing: -0.05em;
					}
					dd {
						margin: 0;
						padding: 0;
						font-size: ${theme.size.base};
						white-space: pre-line;
						word-break: keep-all;
						letter-spacing: -0.05em;
					}
				}
			}
		}
	`;
};
const moMainSwiperLiStyle = (bg, color) => {
	return css`
		height: inherit;
		margin-bottom: 4rem;
		color: ${color};
		& > a {
			display: block;
			width: inherit;
			height: calc(100% - 3rem);
			background-color: ${bg};
			& > .wrap {
				display: flex;
				flex-flow: row wrap;
				width: 120rem;
				margin: 0 auto;
				.picArea {
					flex: 0 0 55%;
					display: flex;
					justify-content: center;
					align-items: center;
					overflow: hidden;
					position: relative;
					left: 2rem;
					top: 3rem;
					width: calc(100% - 2rem);
					height: 34rem;
					background-color: black;
					/* opacity: 0.5; */
					box-shadow: ${theme.shadow.lv7};
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
				.txtArea {
					flex: 1;
					display: flex;
					align-items: center;
					dl {
						max-width: 32rem;
						padding: 5rem;
					}
					dt {
						padding: 1rem 0;
						font-size: 3.4rem;
						font-weight: 700;
						line-height: 1.2;
						white-space: pre-line;
						word-break: keep-all;
						letter-spacing: -0.05em;
					}
					dd {
						margin: 0;
						padding: 0;
						font-size: ${theme.size.base};
						white-space: pre-line;
						word-break: keep-all;
						letter-spacing: -0.05em;
					}
				}
			}
		}
	`;
};

export default MainSwiperLi;
