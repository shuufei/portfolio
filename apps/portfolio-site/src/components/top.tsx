import * as React from 'react';
import { css } from '@emotion/react';
import { getTypographyStyle } from '../styles/typography';

export const Top = () => {
  return (
    <div
      css={css`
        min-height: 100vh;
        min-height: -webkit-fill-available;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <h1 css={getTypographyStyle('title')}>SHUFEI</h1>
    </div>
  );
};
