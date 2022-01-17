import React from 'react';
import Title from 'components/99_Etc/Title';
import Header from 'components/03_Organisms/Header';
import PageTemplate from 'components/04_Templates/PageTemplate';
import Footer from 'components/03_Organisms/Footer';
import MainSwiper from '../components/03_Organisms/MainSwiper/MainSwiper';
import PList from 'components/03_Organisms/PList';

const Home = () => {
	return (
		<>
			<Title />
			<PageTemplate header={<Header />} footer={<Footer />}>
				<MainSwiper />
				<PList divide="3" />
				<PList divide="4" />
			</PageTemplate>
		</>
	);
};

export default Home;
