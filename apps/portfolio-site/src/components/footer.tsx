import * as React from 'react';
import { css } from '@emotion/react';
import { getTypographyStyle } from '../styles/typography';
import { breakpoint } from '../styles/breakpoint';

export const Footer = () => {
  return (
    <footer
      css={css`
        text-align: center;
        padding: 50vh 24px 24px;
        @media (max-width: ${breakpoint}px) {
          padding-top: 36vh;
        }
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
