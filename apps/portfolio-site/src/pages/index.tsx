import React from 'react';
import { css } from '@emotion/react';

import { Layout } from '../components/layout';
import { Top } from '../components/top';
import { About } from '../components/about';
import { Work } from '../components/work';
import { Post } from '../components/post';

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
      <Post
        cssStyles={css`
          margin-top: 8rem;
        `}
      />
    </Layout>
  );
}

export default Index;
