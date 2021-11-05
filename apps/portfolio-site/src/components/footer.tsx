import * as React from 'react';
import { css } from '@emotion/react';
import { getTypographyStyle } from '../styles/typography';

export const Footer = () => {
  return (
    <footer
      css={css`
        text-align: center;
        padding: 60vh 24px 24px;
      `}
    >
      <p
        css={getTypographyStyle('customize', {
          desktop: {
            fontSize: '1.4rem',
            fontWeight: '700',
            letterSpacing: '0.4rem',
          },
          mobile: {
            fontSize: '1.2rem',
            fontWeight: '700',
            letterSpacing: '0.4rem',
          },
        })}
      >
        SHUFEI
      </p>
      <p
        css={css`
          ${getTypographyStyle('customize', {
            desktop: {
              fontSize: '1.2rem',
              fontWeight: '300',
              letterSpacing: '0.04rem',
            },
            mobile: {
              fontSize: '0.9rem',
              fontWeight: '300',
              letterSpacing: '0.04rem',
            },
          })}
          margin-top: 4px;
        `}
      >
        Design & Developed by shuufei
      </p>
    </footer>
  );
};
