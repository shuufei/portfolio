import { css, Global } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Footer } from '../components/footer';
import { breakpoint } from '../styles/breakpoint';
import { globalStyles } from '../styles/global-styles';
import { getTypographyStyle } from '../styles/typography';

const NotFoundPage = () => {
  return (
    <main
      css={css`
        padding: 2.4rem;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
        @media (max-width: ${breakpoint}px) {
          padding: 2.4rem 1.6rem;
        }
      `}
    >
      <Global styles={globalStyles} />
      <header>
        <a
          href="/"
          css={css`
            display: inline-block;
            padding: 0.4rem;
            :hover {
              cursor: pointer;
            }
          `}
        >
          <StaticImage
            src="../images/icon/exit.svg"
            alt="exit icon"
            css={css`
              width: 2.4rem;
            `}
          />
        </a>
      </header>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <h1 css={getTypographyStyle('title')}>404</h1>
        <p
          css={css`
            ${getTypographyStyle('property-value')}
          `}
        >
          Page Not Found
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default NotFoundPage;
