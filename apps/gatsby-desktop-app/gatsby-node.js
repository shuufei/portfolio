/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`{
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
  }`);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { edges } = result.data.allContentfulBlog

  edges.forEach(edge => {
    createPage({
      path: `/contentful/${edge.node.id}`,
      component: path.resolve('./src/templates/post.tsx'),
      context: {
        post: edge.node
      }
    })
  });
}