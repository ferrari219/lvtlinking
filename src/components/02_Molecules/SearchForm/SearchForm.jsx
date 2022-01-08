import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchForm = () => {
  return (
    <Form css={formStyle} className="d-flex">
      <FormControl
        type="search"
        // placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-success">찾기</Button>
    </Form>
  );
};

const formStyle = css`
  height: 3rem;
  padding: 0 2rem;
  input {
    background-color: #f8f8f8;
    border-radius: 3rem;
    border: 0;
  }
  button {
  }
`;

export default SearchForm;
