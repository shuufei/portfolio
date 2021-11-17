const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query ListWorkQuery {
      allContentfulWork {
        edges {
          node {
            title
            subTitle
            slug
            type
            startDatetime
            endDatetime
            description {
              raw
            }
            repository {
              id
              repository
            }
            design {
              id
              design
            }
            technologies
            tools
            images {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              fixed {
                src
              }
            }
            relatedPosts {
              id
              title
              link {
                id
                link
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const { edges } = result.data.allContentfulWork;

  edges.forEach((edge) => {
    createPage({
      path: `/${edge.node.slug}`,
      component: path.resolve('./src/templates/work.tsx'),
      context: {
        work: edge.node,
      },
    });
  });
};
