import React from 'react';

import { Layout } from '../components/layout';
import { Top } from '../components/top';
import { About } from '../components/about';
import { Work } from '../components/work';
import { css } from '@emotion/react';

export function Index() {
  return (
    <Layout>
      <Top />
      <About />
      <Work
        cssStyles={css`
          margin-top: 8rem;
        `}
      />
    </Layout>
  );
}

export default Index;
