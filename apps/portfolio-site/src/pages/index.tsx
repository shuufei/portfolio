import React from 'react';
import { css } from '@emotion/react';

import { Layout } from '../components/layout';
import { Top } from '../components/top';
import { About } from '../components/about';
import { Work } from '../components/work';
import { Post } from '../components/post';
import { WordListContent } from '../components/word-list-content';
import { experienceList } from '../data/experience';
import { tools } from '../data/tools';

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
      <WordListContent
        title={'EXPERIENCE'}
        words={experienceList.map((v) => ({ text: v.label, link: v.link }))}
        cssStyles={css`
          margin-top: 12rem;
        `}
      />
      <WordListContent
        title={'TOOLS'}
        words={tools.map((v) => ({ text: v.label, link: v.link }))}
        layoutOptions={{
          desktop: { maxWidthRem: 56 },
          mobile: { maxWidthPer: 64 },
        }}
        cssStyles={css`
          margin-top: 12rem;
        `}
      />
    </Layout>
  );
}

export default Index;
