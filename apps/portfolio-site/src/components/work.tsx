import * as React from 'react';
import { css } from '@emotion/react';
import { Property } from './property';
import { sectionTitle } from '../styles/home/typography';
import { CssStylesProps } from '../types';
import { graphql, useStaticQuery } from 'gatsby';

export const Work = (props: CssStylesProps) => {
  const data = useStaticQuery(graphql`
    query ListWorkQuery {
      allContentfulWork {
        edges {
          node {
            title
            subTitle
            slug
            type
            startDatetime
          }
        }
      }
    }
  `) as ListWorkQueryResponse;

  return (
    <section
      css={css`
        ${props.cssStyles}
        text-align: center;
      `}
    >
      <h2 css={sectionTitle}>WORKS</h2>

      <dl
        css={css`
          margin-top: 1.6rem;
        `}
      >
        {data.allContentfulWork.edges
          .sort(
            (v1, v2) =>
              new Date(v2.node.startDatetime).valueOf() -
              new Date(v1.node.startDatetime).valueOf()
          )
          .map(({ node }, i) => (
            <Property
              label={node.type}
              value={node.title}
              link={`/${node.slug}`}
              cssStyles={css`
                margin-top: ${i === 0 ? 0 : '0.4rem'};
              `}
              key={node.slug}
            />
          ))}
      </dl>
    </section>
  );
};

export type ListWorkQueryResponse = {
  allContentfulWork: {
    edges: {
      node: {
        title: string;
        subTitle: string;
        slug: string;
        type: string;
        startDatetime: string;
      };
    }[];
  };
};
