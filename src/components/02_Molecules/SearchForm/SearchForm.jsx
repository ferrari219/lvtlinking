import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const SearchForm = () => {
	return (
		<form css={formStyle}>
			<input type="text" />
			<button type="button">test</button>
		</form>
	);
};

SearchForm.propTypes = {
	// name: PropTypes.string.isRequired,
};

const formStyle = css`
	padding: 0 2rem;
	input {
		width: 42rem;
		padding: 1rem;
		background-color: #f8f8f8;
		border-radius: 3rem;
		border: 0;
	}
	button {
		position: relative;
		right: 5rem;
	}
`;

export default SearchForm;
