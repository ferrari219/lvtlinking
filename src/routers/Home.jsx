import React from 'react';
import Title from 'components/99_Etc/Title';
import Header from 'components/03_Organisms/Header';

const Home = () => {
  return (
    <>
      <Title />
      <section>
        <Header />
        <main>
          <div>main-banner</div>
          <div>list3</div>
          <div>list4</div>
        </main>
        <footer>footer</footer>
      </section>
    </>
  );
};

export default Home;
