import { css } from '@emotion/react';
import { black, white } from './color';

export const globalStyles = css`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Montserrat', -apple-system, 'Helvetica Neue', sans-serif;
    color: ${white};
    background-color: ${black};
    margin: 0;
    padding: 0;
  }

  p,
  span,
  div,
  h1,
  h2,
  h3,
  h4,
  dl,
  dt,
  dd,
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  span {
    display: inline-block;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: ${white};
    :hover {
      text-decoration: underline;
    }
    :visited {
      color: ${white};
    }
  }
`;
