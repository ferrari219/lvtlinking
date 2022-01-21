import React from 'react';
import { Link } from 'react-router-dom';

const Gnb = () => {
	return (
		<div>
			{data && (
				<ul>
					{data.map(({ name, lnk }, index) => (
						<li key={index}>
							<Link to={lnk}>{name}</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

const data = [
	{
		name: '로그인',
		lnk: '/',
	},
	{
		name: '회원가입',
		lnk: '/',
	},
];

export default Gnb;
