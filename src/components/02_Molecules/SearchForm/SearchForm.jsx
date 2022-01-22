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
  position: relative;
  padding: 0 1rem;
  & > input {
    width: 100%;
    padding: 1rem 2rem;
    background-color: #f8f8f8;
    border-radius: 3rem;
    border: 0;
  }
  & > button {
    position: absolute;
    right: 2rem;
    top: 0.8rem;
    background: transparent;
    border: none;
    svg {
      font-size: 2rem;
    }
  }
  @media only screen and (max-width: 78rem) {
    text-align: right;
    & > input {
      display: none;
    }
    & > button {
      position: initial;
      svg {
        font-size: 2.6rem;
      }
    }
  }
  @media only screen and (max-width: 36rem) {
  }
`;

export default SearchForm;
