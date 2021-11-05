import * as React from 'react';
import { css } from '@emotion/react';
import { getTypographyStyle } from '../styles/typography';

export const Top = () => {
  return (
    <div
      css={css`
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <h1 css={getTypographyStyle('title')}>SHUFEI</h1>
    </div>
  );
};
