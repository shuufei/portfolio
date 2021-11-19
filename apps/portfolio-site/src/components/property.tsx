import * as React from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { getTypographyStyle } from '../styles/typography';
import { white } from '../styles/color';
import { CssStylesProps } from '../types';

const labelStyle = css`
  ${getTypographyStyle('property-label')}
  font-variant-caps: all-small-caps;
  flex: 1;
  text-align: right;
`;

const valueStyle = css`
  ${getTypographyStyle('property-value')}
  flex: 1;
  text-align: left;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

export const Property = (
  props: { label: string; value: string; link?: string } & CssStylesProps
) => {
  const link =
    props.link ?? `https://www.google.com/search?q=${props.value}&hl=ja`;
  return (
    <div
      css={css`
        ${props.cssStyles}
        display: flex;
        align-items: baseline;
        gap: 1.6rem;
        justify-content: center;
      `}
    >
      <dt
        css={css`
          ${labelStyle}
        `}
      >
        {props.label}
      </dt>
      <dd
        css={css`
          ${valueStyle}
        `}
      >
        <a
          href={link}
          target={link.startsWith('http') ? '_blank' : '_self'}
          rel="noreferrer"
          css={css`
            max-width: 100%;
            overflow-x: hidden;
            text-overflow: ellipsis;
          `}
        >
          {props.value}
        </a>
      </dd>
    </div>
  );
};
