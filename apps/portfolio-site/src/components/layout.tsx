import * as React from 'react';
import { Global, css } from '@emotion/react';
import { Footer } from './footer';
import { globalStyles } from '../styles/global-styles';

export const Layout = ({ children }: { children?: unknown }) => {
  return (
    <main
      css={css`
        padding: 0 1.2rem;
      `}
    >
      <Global styles={globalStyles} />
      {children}
      <Footer />
    </main>
  );
};
