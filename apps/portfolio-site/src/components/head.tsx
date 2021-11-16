import Helmet from 'react-helmet';

export const Head = () => {
  const title = 'S H U F E I';
  const description = 'Shufei Poirtfolio';
  const url = 'https://competent-lichterman-6f12f6.netlify.app/';
  const image = `${url}/images/thumbnail.png`;
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
      <meta name="twitter:creator" content="@digital_fei" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={image} />
    </Helmet>
  );
};
