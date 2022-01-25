import React from 'react';
import Title from 'components/99_Etc/Title';
import PageTemplate from 'components/04_Templates/PageTemplate/PageTemplate';
import Header from 'components/03_Organisms/Header/Header';

const Detail = () => {
	return (
		<>
			<Title ttl="Detail" />
			<PageTemplate header={<Header />}>
				<div>상단이미지</div>
				<div>탭+클래스 소개</div>
				<div>결제영역</div>
			</PageTemplate>
		</>
	);
};

export default Detail;
