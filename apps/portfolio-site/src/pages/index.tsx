import React from 'react';

import { Layout } from '../components/layout';
import { Top } from '../components/top';
import { About } from '../components/about';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./portfolio-site.@emotion/styled file.
   */
  return (
    <Layout>
      <Top />
      <About />
    </Layout>
  );
}

export default Index;
