import { css } from '@emotion/react';
import { black, white } from './color';

export const globalStyles = css`
  body {
    font-family: 'Montserrat', -apple-system, 'Helvetica Neue', sans-serif;
    color: ${white};
    background-color: ${black};
  }

  p,
  span,
  div {
    margin: 0;
    padding: 0;
  }
`;
