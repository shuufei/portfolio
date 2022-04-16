import { css } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { CssStylesProps } from '../types';
import { breakpoint } from '../styles/breakpoint';

export const Accounts = ({ cssStyles }: CssStylesProps) => {
  return (
    <section
      css={css`
        ${cssStyles}
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <h2
        css={css`
          visibility: hidden;
          height: 0;
        `}
      >
        ACCOUNTS
      </h2>

      <div
        css={css`
          display: inline-flex;
          align-items: center;
        `}
      >
        <a href="https://github.com/shuufei" target="_blank" rel="noreferrer">
          <StaticImage
            src="../images/service/github.png"
            alt="GitHub Logo"
            css={css`
              width: 4.8rem;
              height: 4.8rem;
              @media (max-width: ${breakpoint}px) {
                width: 2.4rem;
                height: 2.4rem;
              }
            `}
          />
        </a>
        <a
          href="https://twitter.com/digital_fei"
          target="_blank"
          rel="noreferrer"
          css={css`
            margin-left: 4rem;
            @media (max-width: ${breakpoint}px) {
              margin-left: 1.6rem;
            }
          `}
        >
          <StaticImage
            src="../images/service/twitter.svg"
            alt="Twitter Logo"
            css={css`
              width: 4.85rem;
              height: 4rem;
              @media (max-width: ${breakpoint}px) {
                width: 1.94rem;
                height: 1.6rem;
              }
            `}
          />
        </a>
        <a
          href="https://zenn.dev/shuufei"
          target="_blank"
          rel="noreferrer"
          css={css`
            margin-left: 3.2rem;
            @media (max-width: ${breakpoint}px) {
              margin-left: 1.2rem;
            }
          `}
        >
          <StaticImage
            src="../images/service/zenn.svg"
            alt="Zenn Logo"
            css={css`
              width: 4rem;
              height: 4rem;
              @media (max-width: ${breakpoint}px) {
                width: 2rem;
                height: 2rem;
              }
            `}
          />
        </a>
        <a
          href="https://www.behance.net/digitalshu03ef"
          target="_blank"
          rel="noreferrer"
          css={css`
            margin-left: 3.2rem;
            @media (max-width: ${breakpoint}px) {
              margin-left: 1.2rem;
            }
          `}
        >
          <StaticImage
            src="../images/service/behance.png"
            alt="Behance Logo"
            css={css`
              width: 12.984rem;
              height: 4.8rem;
              @media (max-width: ${breakpoint}px) {
                width: 6.492rem;
                height: 2.4rem;
              }
            `}
          />
        </a>
      </div>
      <div
        css={css`
          display: inline-flex;
          align-items: center;
          margin-top: 2rem;
          margin-left: -0.8rem;
          @media (max-width: ${breakpoint}px) {
            /* margin-left: 0.8rem; */
          }
        `}
      >
        <a
          href="https://note.com/digitalshuufei"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../images/service/note.svg"
            alt="note Logo"
            css={css`
              width: 12.126rem;
              height: 3.591rem;
              @media (max-width: ${breakpoint}px) {
                width: 4.832rem;
                height: 1.191rem;
              }
            `}
          />
        </a>
        <a
          href="https://speakerdeck.com/shuufei"
          target="_blank"
          rel="noreferrer"
          css={css`
            margin-left: 3.6rem;
            @media (max-width: ${breakpoint}px) {
              margin-left: 2rem;
            }
          `}
        >
          <StaticImage
            src="../images/service/speaker-deck.svg"
            alt="Speaker Deck Logo"
            css={css`
              width: 4.8rem;
              height: 4.8rem;
              @media (max-width: ${breakpoint}px) {
                width: 2.4rem;
                height: 2.4rem;
              }
            `}
          />
        </a>
        <a
          href="https://qiita.com/shuuhei"
          target="_blank"
          rel="noreferrer"
          css={css`
            margin-left: 4rem;
            @media (max-width: ${breakpoint}px) {
              margin-left: 2.4rem;
            }
          `}
        >
          <StaticImage
            src="../images/service/qiita.png"
            alt="Qiita Logo"
            css={css`
              width: 9.583rem;
              height: 4rem;
              @media (max-width: ${breakpoint}px) {
                width: 3.833rem;
                height: 1.6rem;
              }
            `}
          />
        </a>
      </div>
    </section>
  );
};
