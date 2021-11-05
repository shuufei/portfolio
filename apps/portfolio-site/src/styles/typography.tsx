import { css } from '@emotion/react';
import { breakpoint } from './breakpoint';

type TypographyStyle = {
  fontSize: string;
  fontWeight: string;
  letterSpacing: string;
};

export type Level = 'title' | 'customize';

type Typography = {
  [key in Level]: {
    desktop: TypographyStyle;
    mobile: TypographyStyle;
  };
};

export const typography: Typography = {
  title: {
    desktop: {
      fontSize: '2.4rem',
      fontWeight: '700',
      letterSpacing: '1.4rem',
    },
    mobile: {
      fontSize: '2.0rem',
      fontWeight: '700',
      letterSpacing: '1.2rem',
    },
  },
  customize: {
    desktop: {
      fontSize: '1.4rem',
      fontWeight: '300',
      letterSpacing: '.1rem',
    },
    mobile: {
      fontSize: '1.2rem',
      fontWeight: '300',
      letterSpacing: '.1rem',
    },
  },
};

export const getTypographyStyle = (
  level: Level,
  customize?: {
    desktop: TypographyStyle;
    mobile: TypographyStyle;
  }
) => {
  return css`
    font-size: ${customize?.desktop.fontSize ??
    typography[level].desktop.fontSize};
    font-weight: ${customize?.desktop.fontWeight ??
    typography[level].desktop.fontWeight};
    letter-spacing: ${customize?.desktop.letterSpacing ??
    typography[level].desktop.letterSpacing};
    @media (max-width: ${breakpoint}px) {
      font-size: ${customize?.mobile.fontSize ??
      typography[level].mobile.fontSize};
      font-weight: ${customize?.mobile.fontWeight ??
      typography[level].mobile.fontWeight};
      letter-spacing: ${customize?.mobile.letterSpacing ??
      typography[level].mobile.letterSpacing};
    }
  `;
};