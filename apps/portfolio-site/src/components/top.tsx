import * as React from 'react';
import { css } from '@emotion/react';
import { getTypographyStyle } from '../styles/typography';

export const Top = () => {
  return (
    <div
      css={css`
        min-height: 100vh;
        @supports (-webkit-touch-callout: none) {
          min-height: -webkit-fill-available;
        }
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <h1 css={getTypographyStyle('title')}>
        <span
          css={css`
            letter-spacing: 1rem;
          `}
        >
          S
        </span>
        <span
          css={css`
            letter-spacing: 0.9rem;
          `}
        >
          H
        </span>
        <span
          css={css`
            letter-spacing: 0.8rem;
          `}
        >
          U
        </span>
        <span
          css={css`
            letter-spacing: 0.9rem;
          `}
        >
          F
        </span>
        <span
          css={css`
            letter-spacing: 0.9rem;
          `}
        >
          E
        </span>
        <span>I</span>
      </h1>
    </div>
  );
};
