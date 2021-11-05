import * as React from 'react';
import { css } from '@emotion/react';

export const Footer = () => {
  return (
    <footer
      css={css`
        text-align: center;
        padding: 90vh 24px 24px;
      `}
    >
      <p
        css={css`
          font-weight: 700;
          font-size: 14px;
          line-height: 1.5;
          letter-spacing: 0.4rem;
        `}
      >
        SHUFEI
      </p>
      <p
        css={css`
          font-weight: 300;
          font-size: 12px;
          line-height: 1.2;
          letter-spacing: 0.04rem;
          margin-top: 4px;
        `}
      >
        Design & Developed by shuufei
      </p>
    </footer>
  );
};
