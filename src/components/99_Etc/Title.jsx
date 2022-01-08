import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Title = ({ ttl = '' }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{ttl && `${ttl}:`} Livart Linking</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default Title;
