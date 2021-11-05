import React from 'react';
import { Layout } from '../components/layout';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

export default function Post({ pageContext }) {
  const { title, id, body } = pageContext.post;

  return (
    <Layout pageTitle={title}>
      <div key={id}>
        <h2>{title}</h2>
        {renderRichText(body)}
      </div>
    </Layout>
  );
}
