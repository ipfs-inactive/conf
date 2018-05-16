import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";

import "./reset.css";

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
        keywords
        twitterAccount
        url
        image
      }
    }
  }
`;

export default class TemplateWrapper extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          keywords: PropTypes.string.isRequired,
          twitterAccount: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const {
      title: siteTitle,
      description: siteDescription,
      keywords: siteKeywords,
      url: siteUrl,
      image: siteImage,
      twitterAccount,
    } = this.props.data.site.siteMetadata;

    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
          <meta name="keywords" content={siteKeywords} />

          <meta name="robots" content="index,follow" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={twitterAccount} />
          <meta name="twitter:title" content={siteTitle} />
          <meta name="twitter:description" content={siteDescription} />
          <meta name="twitter:creator" content={twitterAccount} />
          <meta name="twitter:image" content={siteImage} />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={siteTitle} />
          <meta property="og:url" content={siteUrl} />
          <meta property="og:description" content={siteDescription} />
          <meta property="og:site_name" content={siteTitle} />
          <meta property="og:image" content={siteImage} />

          <meta itemProp="name" content={siteTitle} />
          <meta itemProp="description" content={siteDescription} />
          <meta itemProp="image" content={siteImage} />

          <meta
            property="fb:admins"
            content="100000633932565,1448175923,707387762,1187622729"
          />
        </Helmet>
        <Header />
        <div
          style={{
            margin: "0 auto",
            maxWidth: 960,
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    );
  }
}
