import * as React from 'react';
import { Global } from '@emotion/react';
import { Footer } from './footer';
import { globalStyles } from '../styles/global-styles';

export const Layout = ({ children }: { children?: unknown }) => {
  return (
    <main>
      <Global styles={globalStyles} />
      {children}
      <Footer />
    </main>
  );
};
