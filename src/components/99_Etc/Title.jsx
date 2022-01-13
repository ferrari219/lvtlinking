import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';

const Title = ({ ttl = '' }) => {
	return (
		<HelmetProvider>
			<Helmet>
				<title>{ttl && `${ttl}:`} Livart Linking</title>
			</Helmet>
		</HelmetProvider>
	);
};

Title.propTypes = {
	ttl: PropTypes.string,
};

export default Title;
