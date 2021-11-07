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
import { Accounts } from '../components/accounts';
import { breakpoint } from '../styles/breakpoint';

const sectionMarginStyle = css`
  margin-top: 12rem;
  @media (max-width: ${breakpoint}px) {
    margin-top: 6.4rem;
  }
`;

export function Index() {
  return (
    <Layout>
      <Top />
      <About />
      <Work cssStyles={sectionMarginStyle} />
      <Post cssStyles={sectionMarginStyle} />
      <WordListContent
        title={'EXPERIENCE'}
        words={experienceList.map((v) => ({ text: v.label, link: v.link }))}
        cssStyles={sectionMarginStyle}
      />
      <WordListContent
        title={'TOOLS'}
        words={tools.map((v) => ({ text: v.label, link: v.link }))}
        layoutOptions={{
          desktop: { maxWidthRem: 56 },
          mobile: { maxWidthPer: 64 },
        }}
        cssStyles={sectionMarginStyle}
      />
      <Accounts
        cssStyles={css`
          margin-top: 24rem;
          @media (max-width: ${breakpoint}px) {
            margin-top: 12rem;
          }
        `}
      />
    </Layout>
  );
}

export default Index;
