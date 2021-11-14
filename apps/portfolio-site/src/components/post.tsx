import { css } from '@emotion/react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { breakpoint } from '../styles/breakpoint';
import { sectionTitle } from '../styles/home/typography';
import { getTypographyStyle } from '../styles/typography';
import { CssStylesProps } from '../types';
import { ColumnLayout } from '../components/column-layout';

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
          line-height: 2.1rem;
          max-width: 100%;
          overflow-x: hidden;
          text-overflow: ellipsis;
          /*
              TODO: insert bracket
              ::after {
                display: inline-block;
                content: '」';
                position: absolute;
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
          max-width: 100%;
          overflow-x: hidden;
          text-overflow: ellipsis;
        `}
      >
        {dayjs(publishedDatetime).format('MMMM DD, YYYY')}
      </span>
      <span
        css={css`
          ${getTypographyStyle('caption')}
          margin-top: 2px;
          max-width: 100%;
          overflow-x: hidden;
          text-overflow: ellipsis;
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

  const displayCountUnit = 8;
  const [displayCount, setDisplayCount] = React.useState(displayCountUnit);

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
        POSTS
      </h2>

      <div
        css={css`
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        `}
      >
        <ColumnLayout
          layoutStyles={{
            desktop: {
              maxWidthRem: 68,
              gapXRem: 2.0,
              gapYRem: 3.2,
              columnCount: 2,
            },
            mobile: {
              maxWidthPer: 100,
              gapXRem: 0,
              gapYRem: 2.0,
              columnCount: 1,
            },
          }}
          items={data.allContentfulPost.edges
            .sort(
              (v1, v2) =>
                new Date(v2.node.publishedDatetime).valueOf() -
                new Date(v1.node.publishedDatetime).valueOf()
            )
            .slice(0, displayCount)
            .map(({ node }) => {
              return {
                id: node.link.id,
                component: (
                  <PostItem
                    title={node.title}
                    link={node.link.link}
                    media={node.media}
                    publishedDatetime={new Date(node.publishedDatetime)}
                  />
                ),
              };
            })}
        />
      </div>

      {data.allContentfulPost.edges.length > displayCount ? (
        <div
          css={css`
            margin-top: 4rem;
            @media (max-width: ${breakpoint}px) {
              margin-top: 1.6rem;
            }
          `}
        >
          <span
            css={css`
              ${getTypographyStyle('caption')}
              cursor: pointer;
              :hover {
                text-decoration: underline;
              }
            `}
            onClick={() => {
              setDisplayCount(displayCount + displayCountUnit);
            }}
          >
            more...
          </span>
        </div>
      ) : undefined}
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
