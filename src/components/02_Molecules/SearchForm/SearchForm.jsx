import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';

const SearchForm = () => {
  return (
    <form css={formStyle}>
      <input type="text" placeholder="찾으시는 클래스를 검색하세요" />
      <button type="button">
        <SearchIcon />
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  // name: PropTypes.string.isRequired,
};

const formStyle = css`
  padding: 0 1rem;
  & > input {
    width: calc(100% - 4rem);
    padding: 1rem 2rem;
    background-color: #f8f8f8;
    border-radius: 3rem;
    border: 0;
  }
  & > button {
    position: relative;
    right: 4rem;
    top: 0.5rem;
    background: transparent;
    border: none;
    svg {
      font-size: 2rem;
    }
  }
`;

export default SearchForm;
