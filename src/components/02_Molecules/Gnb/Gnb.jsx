import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import theme from 'styles/theme';

const Gnb = () => {
  return (
    <div css={gnbStyle}>
      {data && (
        <ul>
          {data.map(({ name, lnk }, index) => (
            <li key={index}>
              <Link to={lnk}>{name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const data = [
  {
    name: '로그인',
    lnk: '/',
  },
  {
    name: '회원가입',
    lnk: '/',
  },
];

const gnbStyle = css`
  margin: 0 -1rem;
  font-size: ${theme.size.sm};
  & > ul {
    display: flex;
    flex-direction: row;
    li {
      flex: 1;
      a {
        padding: 1rem 1rem;
      }
    }
  }
`;

export default Gnb;
