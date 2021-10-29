import { graphql, Link } from 'gatsby';
import * as React from 'react';
import { Layout } from '../../components/layout';
import { renderRichText, RenderRichTextData, ContentfulRichTextGatsbyReference } from 'gatsby-source-contentful/rich-text';

const Contentful = ({ data }: AllContentfulBlogResponse) => {
  return (
    <Layout pageTitle="Contentful Blog">
      {
        data.allContentfulBlog.edges.map(edge => {
          return (
            <h3 key={edge.node.id}>
              <Link to={`/contentful/${edge.node.id}`}>{edge.node.title}</Link>
            </h3>
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
