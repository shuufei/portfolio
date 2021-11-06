import { css } from '@emotion/react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import * as React from 'react';
import { breakpoint } from '../styles/breakpoint';
import { CssStylesProps } from '../types';

type ColumnStyleMaxWidthRem = {
  maxWidthRem: number;
  gapXRem: number;
  gapYRem: number;
  columnCount: number;
};

type ColumnStyleMaxWidthPercent = {
  maxWidthPer: number;
  gapXRem: number;
  gapYRem: number;
  columnCount: number;
};

type ColumnStyle = ColumnStyleMaxWidthRem | ColumnStyleMaxWidthPercent;

type ColumnLayoutProps = {
  layoutStyles: {
    desktop: ColumnStyle;
    mobile: ColumnStyle;
  };
  items: { component: EmotionJSX.Element; id: string }[];
};

const isColumnStyleMaxWidthRem = (
  v: ColumnStyle
): v is ColumnStyleMaxWidthRem => {
  return 'maxWidthRem' in v;
};

export const ColumnLayout = ({
  layoutStyles,
  items,
  cssStyles,
}: ColumnLayoutProps & CssStylesProps) => {
  return (
    <ul
      css={css`
        ${cssStyles}
        display: flex;
        gap: ${layoutStyles.desktop.gapYRem}rem
          ${layoutStyles.desktop.gapXRem}rem;
        flex-wrap: wrap;
        max-width: ${isColumnStyleMaxWidthRem(layoutStyles.desktop)
          ? `${layoutStyles.desktop.maxWidthRem}rem`
          : `${layoutStyles.desktop.maxWidthPer}%`};
        @media (max-width: ${breakpoint}px) {
          max-width: ${isColumnStyleMaxWidthRem(layoutStyles.mobile)
            ? `${layoutStyles.mobile.maxWidthRem}rem`
            : `${layoutStyles.mobile.maxWidthPer}%`};
          gap: ${layoutStyles.mobile.gapYRem}rem
            ${layoutStyles.mobile.gapXRem}rem;
        }
      `}
    >
      {items.map((item) => (
        <li
          key={item.id}
          css={css`
            white-space: nowrap;
            width: calc(
              ${`(100% - ${
                layoutStyles.desktop.gapXRem *
                (layoutStyles.desktop.columnCount - 1)
              }rem) / ${layoutStyles.desktop.columnCount}`}
            );
            @media (max-width: ${breakpoint}px) {
              width: calc(
                ${`(100% - ${
                  layoutStyles.mobile.gapXRem *
                  (layoutStyles.mobile.columnCount - 1)
                }rem) / ${layoutStyles.mobile.columnCount}`}
              );
            }
          `}
        >
          {item.component}
        </li>
      ))}
    </ul>
  );
};
