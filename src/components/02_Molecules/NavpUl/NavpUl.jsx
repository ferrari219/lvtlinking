import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import { Link } from 'react-router-dom';

const NavpUl = () => {
  return (
    <ul css={navpulStyle}>
      {data &&
        data.map(({ id, name, lnk }) => (
          <li key={id}>
            <Link to={lnk}>{name}</Link>
          </li>
        ))}
    </ul>
  );
};

const data = [
  {
    id: 0,
    name: '시그니처',
    lnk: '/',
  },
  {
    id: 1,
    name: '무료클래스',
    lnk: '/',
  },
];

const navpulStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin: 0 2rem;
  & > li {
    // flex: 1;
    /* border: 1px solid red; */
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 1rem 2rem;
      font-size: ${theme.size.base};
      font-weight: 400;
      color: #1a1a1a;
    }
  }
`;

export default NavpUl;
