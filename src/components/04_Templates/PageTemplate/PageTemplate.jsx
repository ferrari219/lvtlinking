import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const PageTemplate = ({ header, children, footer, ...props }) => {
  return (
    <div css={templateStyle} {...props}>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  );
};

const templateStyle = css`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  /* background-color: red; */
  header {
    /* background-color: red; */
  }
  main {
    /* background-color: blue; */
  }
  footer {
    /* background-color: green; */
  }
  @media screen and (max-width: 78rem) {
    // background-color: blue;
  }
  @media screen and (max-width: 36rem) {
    // background-color: red;
  }
`;

export default PageTemplate;
