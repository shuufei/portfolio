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
  dd {
    margin: 0;
    padding: 0;
  }
`;
