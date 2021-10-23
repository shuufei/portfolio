import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { container, heading, navLinks, navLinkItem, navLinkText, siteTitle } from "./layout.module.css";

export const Layout = ({ pageTitle, children}: {
  pageTitle: string,
  children?: unknown
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) as {
    site: {
      siteMetadata: {
        title: string;
      }
    }
  }
  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
