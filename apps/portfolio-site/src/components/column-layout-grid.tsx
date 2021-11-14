import { css } from '@emotion/react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import * as React from 'react';
import { breakpoint } from '../styles/breakpoint';
import { CssStylesProps } from '../types';

type ColumnStyle = {
  columnCount: number;
  gapXRem: number;
  gapYRem: number;
};

type ColumnLayoutProps = {
  layoutStyles: {
    desktop: ColumnStyle;
    mobile: ColumnStyle;
  };
  items: { component: EmotionJSX.Element; id: string }[];
};

export const ColumnLayoutGrid = ({
  layoutStyles,
  items,
  cssStyles,
}: ColumnLayoutProps & CssStylesProps) => {
  return (
    <ul
      css={css`
        ${cssStyles}
        width: 100%;
        display: grid;
        grid-template-columns: repeat(${layoutStyles.desktop.columnCount}, 1fr);
        column-gap: ${layoutStyles.desktop.gapXRem}rem;
        row-gap: ${layoutStyles.desktop.gapYRem}rem;
        @media (max-width: ${breakpoint}px) {
          grid-template-columns: repeat(
            ${layoutStyles.mobile.columnCount},
            1fr
          );
          column-gap: ${layoutStyles.mobile.gapXRem}rem;
          row-gap: ${layoutStyles.mobile.gapYRem}rem;
        }
      `}
    >
      {items.map((item) => {
        return (
          <li key={item.id} css={css``}>
            {item.component}
          </li>
        );
      })}
    </ul>
  );
};
