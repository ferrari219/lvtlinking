import React from 'react';
import Title from 'components/99_Etc/Title';
import Header from 'components/03_Organisms/Header';
import PageTemplate from 'components/04_Templates/PageTemplate';
import Footer from 'components/03_Organisms/Footer';
import MainSwiper from '../components/03_Organisms/MainSwiper/MainSwiper';

const Home = () => {
  return (
    <>
      <Title />
      <PageTemplate header={<Header />} footer={<Footer />}>
        <MainSwiper />
        <div>list3</div>
        <div>list4</div>
      </PageTemplate>
    </>
  );
};

export default Home;
