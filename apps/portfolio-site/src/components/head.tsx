import Helmet from 'react-helmet';

export type HeadProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

export const Head = (
  { title, description, url, image }: HeadProps = {
    title: 'S H U F E I',
    description: 'Shufei Poirtfolio',
    url: 'https://shufei.dev',
    image: `https://shufei.dev/images/thumbnail.png`,
  }
) => {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@digital_fei" />
      <meta name="twitter:creator" content="@digital_fei" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={image} />
    </Helmet>
  );
};
