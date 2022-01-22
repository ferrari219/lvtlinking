import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import { Link } from 'react-router-dom';

const NavUl = () => {
  return (
    <ul css={navulStyle}>
      <li>
        <Link to="/">전체카테고리</Link>
      </li>
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
    name: '인기클래스',
    lnk: '/',
  },
  {
    id: 1,
    name: '신규클래스',
    lnk: '/',
  },
  {
    id: 2,
    name: '이벤트',
    lnk: '/',
  },
  {
    id: 3,
    name: '바로수강',
    lnk: '/',
  },
  {
    id: 4,
    name: '오픈예정',
    lnk: '/',
  },
];

const navulStyle = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 -2rem;
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
      font-weight: 600;
    }
    &:hover,
    &.is-active {
      a {
        color: ${theme.color.main};
      }
    }
  }
  @media screen and (max-width: 78rem) {
  }
  @media screen and (max-width: 36rem) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    // align-items: flex-start;
    overflow-x: auto;
    white-space: nowrap;
    & > li {
      flex: 0 0 11rem;
    }
  }
`;

export default NavUl;
