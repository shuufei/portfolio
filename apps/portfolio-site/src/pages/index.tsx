import React from 'react';
import { css } from '@emotion/react';

import { Layout } from '../components/layout';
import { Top } from '../components/top';
import { About } from '../components/about';
import { Work } from '../components/work';
import { Post } from '../components/post';
import { Experience } from '../components/experience';

export function Index() {
  return (
    <Layout>
      <Top />
      <About />
      <Work
        cssStyles={css`
          margin-top: 12rem;
        `}
      />
      <Post
        cssStyles={css`
          margin-top: 12rem;
        `}
      />
      <Experience
        cssStyles={css`
          margin-top: 12rem;
        `}
      />
    </Layout>
  );
}

export default Index;
