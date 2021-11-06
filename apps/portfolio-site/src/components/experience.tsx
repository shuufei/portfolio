import { css } from '@emotion/react';
import * as React from 'react';
import { ColumnLayout } from '../components/column-layout';
import { experienceList } from '../data/experience';
import { sectionTitle } from '../styles/home/typography';
import { getTypographyStyle } from '../styles/typography';
import { CssStylesProps } from '../types';

export const Experience = (props: CssStylesProps) => {
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
        EXPERIENCE
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
              maxWidthRem: 64,
              gapXRem: 1.6,
              gapYRem: 1.2,
              columnCount: 4,
            },
            mobile: {
              maxWidthPer: 80,
              gapXRem: 3.2,
              gapYRem: 0.4,
              columnCount: 2,
            },
          }}
          items={experienceList.map((item) => {
            return {
              id: item.label,
              component: (
                <a
                  href={
                    item.link ||
                    `https://www.google.com/search?q=${item.label}&hl=ja`
                  }
                  target="_blank"
                  rel="noreferrer"
                  css={css`
                    ${getTypographyStyle('property-value')}
                    width: 100%;
                    text-align: left;
                    overflow-x: hidden;
                    text-overflow: ellipsis;
                  `}
                >
                  {item.label}
                </a>
              ),
            };
          })}
        />
      </div>
    </section>
  );
};
