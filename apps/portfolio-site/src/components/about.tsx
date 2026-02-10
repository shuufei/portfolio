import * as React from 'react';
import { css } from '@emotion/react';
import { getTypographyStyle } from '../styles/typography';
import { Property } from './property';
import { sectionTitle } from '../styles/home/typography';

export const About = () => {
  return (
    <section
      css={css`
        text-align: center;
        padding: 0 2rem;
      `}
    >
      <h2 css={sectionTitle}>ABOUT</h2>

      <dl
        css={css`
          margin-top: 1.6rem;
        `}
      >
        <Property label={'NAME'} value={'Shuuhei Hanashiro'} link={'./'} />
        <Property
          label={'BIRTHDAY'}
          value={'March 20, 1995'}
          cssStyles={css`
            margin-top: 0.4rem;
          `}
        />
        <Property
          label={'HOMETOWN'}
          value={'Okinawa'}
          cssStyles={css`
            margin-top: 0.4rem;
          `}
        />
        <Property
          label={'ADDRESS'}
          value={'Kawasaki'}
          cssStyles={css`
            margin-top: 0.4rem;
          `}
        />
        <Property
          label={'JOB'}
          value={'Web Engineer'}
          cssStyles={css`
            margin-top: 0.4rem;
          `}
        />
      </dl>
    </section>
  );
};
