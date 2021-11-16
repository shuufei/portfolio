import Helmet from 'react-helmet';

export const Head = () => {
  return (
    <Helmet>
      <meta name="description" content="Shufei Poirtfolio" />
      <meta name="image" content="/images/thumbnail.png" />
      <meta
        property="og:url"
        content="https://competent-lichterman-6f12f6.netlify.app/"
      />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="S H U F E I" />
      <meta property="og:description" content="Shufei Poirtfolio" />
      <meta
        property="og:image"
        content="https://competent-lichterman-6f12f6.netlify.app/images/thumbnail.png"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@digital_fei" />
      <meta name="twitter:title" content="S H U F E I" />
      <meta name="twitter:description" content="Shufei Portfolio" />
      <meta
        name="twitter:image"
        content="https://competent-lichterman-6f12f6.netlify.app/images/thumbnail.png"
      />
    </Helmet>
  );
};
