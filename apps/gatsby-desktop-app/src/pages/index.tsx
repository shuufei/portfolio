import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {Layout} from '../components/layout'

export function Index() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./gatsby-desktop-app.@emotion/styled file.
   */
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following this Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  );
}

export default Index;
