import { Block, BLOCKS, Inline, Text } from '@contentful/rich-text-types';
import { css } from '@emotion/react';
import dayjs from 'dayjs';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import * as React from 'react';
import { ArrowLeft } from 'react-feather';
import { ColumnLayoutGrid } from '../components/column-layout-grid';
import { Layout } from '../components/layout';
import { breakpoint } from '../styles/breakpoint';
import { white } from '../styles/color';
import { getTypographyStyle } from '../styles/typography';

const subTitle = getTypographyStyle('customize', {
  desktop: {
    fontSize: '1.2rem',
    fontWeight: '700',
    letterSpacing: '0.2rem',
  },
  mobile: {
    fontSize: '1.1rem',
    fontWeight: '700',
    letterSpacing: '0.2rem',
  },
});

const body = css`
  ${getTypographyStyle('customize', {
    desktop: {
      fontSize: '1.4rem',
      fontWeight: '400',
      letterSpacing: '0.12rem',
    },
    mobile: {
      fontSize: '1.2rem',
      fontWeight: '400',
      letterSpacing: '0.12rem',
    },
  })}
  word-break: break-all;
  line-height: 1.5;
`;

const WordItem = ({ word }: { word: string }) => {
  return (
    <a
      href={`https://www.google.com/search?q=${word}&hl=ja`}
      target="_blank"
      rel="noreferrer"
      css={css`
        ${getTypographyStyle('property-value')}
        width: 100%;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
        line-height: 1.5;
      `}
    >
      {word}
    </a>
  );
};

const ImageList = ({ imageList }: { imageList: IGatsbyImageData[] }) => {
  return (
    <>
      {imageList.map((image, i) => {
        const img = getImage(image);
        return (
          <GatsbyImage
            image={img}
            alt={'alt'}
            key={i}
            css={css`
              width: 36rem;
              @media (max-width: 1000px) {
                width: 24rem;
              }
              @media (max-width: ${breakpoint}px) {
                width: 100%;
              }
            `}
          />
        );
      })}
    </>
  );
};

const isTextNodeType = (content: Text | Block | Inline): content is Text => {
  return content.nodeType === 'text';
};

const CustomRichText = ({
  content,
}: {
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
}) => {
  return (
    <>
      {renderRichText(content, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node) => {
            return (
              <p
                css={css`
                  margin-bottom: 1.6rem;
                  line-height: 1.6;
                `}
              >
                {node.content.map((v) => {
                  return isTextNodeType(v) ? v.value : '';
                })}
              </p>
            );
          },
        },
      })}
    </>
  );
};

export default function WorkTemplate({ pageContext }: Props) {
  const { work } = pageContext;
  return (
    <Layout>
      <div
        css={css`
          padding: 2.4rem 6.4rem;
          display: flex;
          justify-content: center;
          @media (max-width: ${breakpoint}px) {
            padding: 2.4rem 0.4rem;
          }
        `}
      >
        <div
          css={css`
            max-width: 96rem;
            width: 100%;
            @media (max-width: ${breakpoint}px) {
              max-width: unset;
            }
          `}
        >
          <header>
            <a
              href="/"
              css={css`
                :hover {
                  cursor: pointer;
                }
              `}
            >
              <ArrowLeft color={white} size={24} />
            </a>
          </header>
          <div
            css={css`
              margin-top: 5.6rem;
              display: flex;
              gap: 0 4.8rem;
              @media (max-width: ${breakpoint}px) {
                display: block;
                gap: 0;
              }
            `}
          >
            <section
              css={css`
                display: flex;
                flex-direction: column;
                gap: 0.8rem 0;
                @media (max-width: ${breakpoint}px) {
                  display: none;
                }
              `}
            >
              <ImageList imageList={work.images} />
            </section>

            <section>
              <h2
                css={getTypographyStyle('customize', {
                  desktop: {
                    fontSize: '1.2rem',
                    fontWeight: '400',
                    letterSpacing: '0.04rem',
                  },
                  mobile: {
                    fontSize: '1.1rem',
                    fontWeight: '400',
                    letterSpacing: '0.04rem',
                  },
                })}
              >
                {work.type}
              </h2>
              <h1
                css={getTypographyStyle('customize', {
                  desktop: {
                    fontSize: '2.4rem',
                    fontWeight: '700',
                    letterSpacing: '0.1rem',
                  },
                  mobile: {
                    fontSize: '2.0rem',
                    fontWeight: '700',
                    letterSpacing: '0.1rem',
                  },
                })}
              >
                {work.title} - {work.subTitle}
              </h1>

              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  gap: 0.8rem 0;
                  margin-top: 1.6rem;
                  @media (min-width: ${breakpoint + 1}px) {
                    display: none;
                  }
                `}
              >
                <ImageList imageList={work.images} />
              </div>

              <div
                css={css`
                  margin-top: 8rem;
                  @media (max-width: ${breakpoint}px) {
                    margin-top: 4rem;
                  }
                `}
              >
                <h2 css={subTitle}>DURATION</h2>
                <p
                  css={css`
                    ${body}
                    margin-top: 0.8rem;
                  `}
                >
                  {dayjs(new Date(work.startDatetime)).format('MMMM DD, YYYY')}{' '}
                  -{' '}
                  {work.endDatetime
                    ? dayjs(new Date(work.endDatetime)).format('MMMM DD, YYYY')
                    : 'Now'}
                </p>
              </div>

              <div
                css={css`
                  margin-top: 4rem;
                `}
              >
                <h2 css={subTitle}>DESCRIPTION</h2>
                <div
                  css={css`
                    ${getTypographyStyle('customize', {
                      desktop: {
                        fontSize: '1.2rem',
                        fontWeight: '400',
                        letterSpacing: '0.14rem',
                      },
                      mobile: {
                        fontSize: '1.2rem',
                        fontWeight: '400',
                        letterSpacing: '0.14rem',
                      },
                    })}
                    margin-top: 0.8rem;
                    white-space: pre-line;
                  `}
                >
                  {work.description && (
                    <CustomRichText content={work.description} />
                  )}
                </div>
              </div>

              <div
                css={css`
                  margin-top: 4rem;
                `}
              >
                <h2 css={subTitle}>REPOSITORY</h2>
                <p
                  css={css`
                    ${body}
                    margin-top: 0.8rem;
                  `}
                >
                  <a
                    href={work.repository.repository}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {work.repository.repository}
                  </a>
                </p>
              </div>

              <div
                css={css`
                  margin-top: 4rem;
                `}
              >
                <h2 css={subTitle}>DESIGN</h2>
                <a
                  href={work.design.design}
                  target="_blank"
                  rel="noreferrer"
                  css={css`
                    ${body}
                    margin-top: 0.8rem;
                  `}
                >
                  {work.design.design}
                </a>
              </div>

              <div
                css={css`
                  margin-top: 4rem;
                `}
              >
                <h2 css={subTitle}>TECHNOLOGY</h2>
                <ColumnLayoutGrid
                  layoutStyles={{
                    desktop: {
                      columnCount: 4,
                      gapXRem: 1.6,
                      gapYRem: 0.4,
                    },
                    mobile: {
                      columnCount: 3,
                      gapXRem: 1.6,
                      gapYRem: 0.4,
                    },
                  }}
                  items={work.technologies.map((tech) => {
                    return {
                      id: tech,
                      component: <WordItem word={tech} />,
                    };
                  })}
                  cssStyles={css`
                    margin-top: 0.8rem;
                  `}
                />
              </div>

              <div
                css={css`
                  margin-top: 4rem;
                `}
              >
                <h2 css={subTitle}>TOOLS</h2>
                <ColumnLayoutGrid
                  layoutStyles={{
                    desktop: {
                      columnCount: 4,
                      gapXRem: 1.6,
                      gapYRem: 0.4,
                    },
                    mobile: {
                      columnCount: 3,
                      gapXRem: 1.6,
                      gapYRem: 0.4,
                    },
                  }}
                  items={work.tools.map((tool) => {
                    return {
                      id: tool,
                      component: <WordItem word={tool} />,
                    };
                  })}
                  cssStyles={css`
                    margin-top: 0.8rem;
                  `}
                />
              </div>

              {work.relatedPosts.length > 0 ? (
                <div
                  css={css`
                    margin-top: 4rem;
                  `}
                >
                  <h2 css={subTitle}>RELATED POSTS</h2>
                  <div
                    css={css`
                      ${body}
                      margin-top: 0.8rem;
                      display: flex;
                      flex-direction: column;
                      gap: 0.8rem 0;
                    `}
                  >
                    {work.relatedPosts.map((post, i) => {
                      return (
                        <a
                          href={post.link.link}
                          target="_blank"
                          rel="noreferrer"
                          key={post.id}
                          css={css`
                            margin-top: ${i === 0 ? '0.4rem' : '0'};
                          `}
                        >
                          {`「${post.title}」`}
                        </a>
                      );
                    })}
                  </div>
                </div>
              ) : undefined}
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

type Props = {
  pageContext: {
    work: {
      title: string;
      subTitle: string;
      slug: string;
      type: string;
      startDatetime: string;
      endDatetime?: string;
      description: RenderRichTextData<ContentfulRichTextGatsbyReference>;
      images: IGatsbyImageData[];
      repository: {
        repository: string;
      };
      design: {
        design: string;
      };
      technologies: string[];
      tools: string[];
      relatedPosts: {
        id: string;
        title: string;
        link: {
          id: string;
          link: string;
        };
      }[];
    };
  };
};
