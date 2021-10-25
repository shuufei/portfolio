import { graphql } from 'gatsby';
import * as React from 'react';
import { Layout } from '../../components/layout';
import { renderRichText, RenderRichTextData, ContentfulRichTextGatsbyReference } from 'gatsby-source-contentful/rich-text';

const Contentful = ({ data }: AllContentfulBlogResponse) => {
  console.log('-- contentful: ', data);
  return (
    <Layout pageTitle="Contentful Blog">
      {
        data.allContentfulBlog.edges.map(edge => {
          return (
            <div key={edge.node.id}>
              <h2>{edge.node.title}</h2>
              {renderRichText(edge.node.body)}
            </div>
          )
        })
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulBlog {
      pageInfo {
        totalCount
      }
      edges {
        node {
          id
          title
          body {
            raw
          }
          createdAt
          updatedAt
          contentful_id
          __typename
        }
      }
    }
  }
`;

type AllContentfulBlogResponse = {
  data: {
    allContentfulBlog: {
      edges: ({
        node: {
          id: string;
          title: string;
          body: RenderRichTextData<ContentfulRichTextGatsbyReference>;
        }
      })[];
    }
  }
}

export default Contentful;
