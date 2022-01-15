import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import { Link } from 'react-router-dom';

const MainSwiperLi = ({ id, title, sub, pic, bg, color, lnk }) => {
  return (
    <div css={mainSwiperLiStyle(bg, color)}>
      <Link to={lnk}>
        <div className="picArea">pic</div>
        <div className="txtArea">
          <dl>
            <dt>{title}</dt>
            <dd>{sub}</dd>
          </dl>
        </div>
      </Link>
    </div>
  );
};

const mainSwiperLiStyle = (bg, color) => {
  return css`
    height: 34rem;
    margin-bottom: 4rem;
    color: ${color};
    & > a {
      display: flex;
      flex-flow: row wrap;
      width: inherit;
      height: calc(100% - 3rem);
      background-color: ${bg};
      .picArea {
        flex: 0 0 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        left: 2rem;
        top: 3rem;
        width: calc(100% - 2rem);
        background-color: black;
        opacity: 0.5;
      }
      .txtArea {
        flex: 1;
        display: flex;
        align-items: center;
        dl {
          max-width: 32rem;
          padding: 5rem;
        }
        dt {
          font-size: 3.4rem;
          font-weight: 700;
          line-height: 1.2;
          white-space: pre-line;
          word-break: keep-all;
          letter-spacing: -0.05em;
        }
        dd {
          margin: 0;
          padding: 0;
          font-size: ${theme.size.base};
          whie-space: pre-line;
          word-break: keep-all;
          letter-spacing: -0.05em;
        }
      }
    }
  `;
};

export default MainSwiperLi;
