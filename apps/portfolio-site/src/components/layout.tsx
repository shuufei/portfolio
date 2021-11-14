import * as React from 'react';
import { Global, css } from '@emotion/react';
import { Footer } from './footer';
import { globalStyles } from '../styles/global-styles';
import { breakpoint } from '../styles/breakpoint';

export const Layout = ({ children }: { children?: unknown }) => {
  return (
    <main
      css={css`
        padding: 0 1.2rem;
      `}
    >
      <Global styles={globalStyles} />
      {children}
      <Footer
        cssStyles={css`
          padding: 50vh 2.4rem 2.4rem;
          @media (max-width: ${breakpoint}px) {
            padding-top: 36vh;
          }
        `}
      />
    </main>
  );
};
