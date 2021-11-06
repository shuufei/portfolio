import { css } from '@emotion/react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { breakpoint } from '../styles/breakpoint';
import { sectionTitle } from '../styles/home/typography';
import { getTypographyStyle } from '../styles/typography';
import { CssStylesProps } from '../types';

dayjs.extend(customParseFormat);

const PostItem = ({
  title,
  link,
  publishedDatetime,
  media,
  cssStyles,
}: {
  title: string;
  link: string;
  publishedDatetime: Date;
  media: string;
} & CssStylesProps) => {
  const bracketsCharWidth = '1.5rem';
  return (
    <a
      href={link}
      target="_blank"
      css={css`
        ${cssStyles}
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
      rel="noreferrer"
    >
      <span
        css={css`
          ${getTypographyStyle('property-value')}
          max-width: calc(100% - ${bracketsCharWidth} - ${bracketsCharWidth});
          overflow-x: hidden;
          text-overflow: ellipsis;
          position: relative;
          /*
              TODO: insert bracket
              ::after {
                display: inline-block;
                content: '」';
                position: absolute;
                top: 0;
                right: -${bracketsCharWidth};
              }
              ::before {
                display: inline-block;
                content: '「';
                position: absolute;
              } */
        `}
      >
        {' '}
        {title}{' '}
      </span>
      <span
        css={css`
          ${getTypographyStyle('caption')}
          margin-top: 6px;
        `}
      >
        {dayjs(publishedDatetime).format('MMMM DD, YYYY')}
      </span>
      <span
        css={css`
          ${getTypographyStyle('caption')}
          margin-top: 2px;
        `}
      >
        {media}
      </span>
    </a>
  );
};

export const Post = (props: CssStylesProps) => {
  const data = useStaticQuery(graphql`
    query ListPostQuery {
      allContentfulPost {
        edges {
          node {
            title
            link {
              id
              link
            }
            publishedDatetime
            media
          }
        }
      }
    }
  `) as ListPostQueryResponse;

  const gap = 2.4;

  return (
    <section
      css={css`
        ${props.cssStyles}
        text-align: center;
      `}
    >
      <h2
        css={css`
          ${sectionTitle}
        `}
      >
        POST
      </h2>

      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <ul
          css={css`
            margin-top: 2rem;
            display: flex;
            gap: ${gap}rem;
            flex-wrap: wrap;
            max-width: 68rem;
            @media (max-width: ${breakpoint}px) {
              max-width: 100%;
              gap: 0;
            }
          `}
        >
          {data.allContentfulPost.edges
            .sort(
              (v1, v2) =>
                new Date(v2.node.publishedDatetime).valueOf() -
                new Date(v1.node.publishedDatetime).valueOf()
            )
            .map(({ node }) => (
              <li
                key={node.link.id}
                css={css`
                  margin-bottom: 32px;
                  white-space: nowrap;
                  width: calc(50% - ${gap / 2}rem);
                  @media (max-width: ${breakpoint}px) {
                    width: 100%;
                  }
                `}
              >
                <PostItem
                  title={node.title}
                  link={node.link.link}
                  media={node.media}
                  publishedDatetime={new Date(node.publishedDatetime)}
                />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export type ListPostQueryResponse = {
  allContentfulPost: {
    edges: {
      node: {
        title: string;
        link: {
          id: string;
          link: string;
        };
        media: string;
        publishedDatetime: string;
      };
    }[];
  };
};
