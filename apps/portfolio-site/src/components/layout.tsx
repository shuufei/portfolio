import * as React from 'react';
import { Footer } from './footer';

export const Layout = ({ children }: { children?: unknown }) => {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
};
