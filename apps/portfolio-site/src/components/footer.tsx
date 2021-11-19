import * as React from 'react';
import { css } from '@emotion/react';
import { getTypographyStyle } from '../styles/typography';
import { breakpoint } from '../styles/breakpoint';
import { CssStylesProps } from '../types';

export const Footer = ({ cssStyles }: CssStylesProps) => {
  return (
    <footer
      css={css`
        ${cssStyles}
        text-align: center;
      `}
    >
      <a
        href="https://github.com/shuufei/portfolio"
        target="_blank"
        rel="noreferrer"
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
      </a>
    </footer>
  );
};
