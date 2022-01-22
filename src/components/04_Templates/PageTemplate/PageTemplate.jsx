import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const PageTemplate = ({ header, wide = true, children, footer, ...props }) => {
  return (
    <div css={templateStyle(wide)} {...props}>
      <header>{header}</header>
      {/* <main>{children}</main>
      <footer>{footer}</footer> */}
    </div>
  );
};

const templateStyle = (wide) => {
  return css`
    width: 100%;
    max-width: ${wide ? '100%' : '120rem'};
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
      max-width: 100%;
      // background-color: blue;
    }
    @media screen and (max-width: 36rem) {
      // background-color: red;
    }
  `;
};

export default PageTemplate;
