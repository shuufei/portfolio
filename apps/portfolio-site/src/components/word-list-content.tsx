import { css } from '@emotion/react';
import * as React from 'react';
import { ColumnLayout } from '../components/column-layout';
import { sectionTitle } from '../styles/home/typography';
import { getTypographyStyle } from '../styles/typography';
import { CssStylesProps } from '../types';

export const WordListContent = ({
  title,
  words,
  layoutOptions,
  cssStyles,
}: {
  title: string;
  words: { text: string; link?: string }[];
  layoutOptions?: {
    desktop: {
      maxWidthRem: number;
    };
    mobile: {
      maxWidthPer: number;
    };
  };
} & CssStylesProps) => {
  return (
    <section
      css={css`
        ${cssStyles}
        text-align: center;
      `}
    >
      <h2
        css={css`
          ${sectionTitle}
        `}
      >
        {title}
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
              maxWidthRem: layoutOptions?.desktop.maxWidthRem ?? 64,
              gapXRem: 1.6,
              gapYRem: 1.2,
              columnCount: 4,
            },
            mobile: {
              maxWidthPer: layoutOptions?.mobile.maxWidthPer ?? 80,
              gapXRem: 1.6,
              gapYRem: 0.4,
              columnCount: 2,
            },
          }}
          items={words.map((word) => {
            return {
              id: word.text,
              component: (
                <a
                  href={
                    word.link ||
                    `https://www.google.com/search?q=${word.text}&hl=ja`
                  }
                  target="_blank"
                  rel="noreferrer"
                  css={css`
                    ${getTypographyStyle('property-value')}
                    width: 100%;
                    text-align: left;
                    overflow-x: hidden;
                    text-overflow: ellipsis;
                    margin-top: 0.4rem;
                  `}
                >
                  {word.text}
                </a>
              ),
            };
          })}
        />
      </div>
    </section>
  );
};
