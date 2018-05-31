import React from "react";
import Head from "next/head";

const SITE_TITLE = "IPFS Summit";
const SITE_DESCRIPTION = "Website for the IPFS Summit";
const SITE_KEYWORDS =
  "ipfs, summit, conference, libp2p, decentralized, web, meeting";
const TWITTER_ACCOUNT = "@ipfsbot";
const SITE_IMAGE = "";
const SITE_URL = "";

const Metadata = () => (
  <Head>
    <title>{SITE_TITLE}</title>

    <meta name="description" content={SITE_DESCRIPTION} />
    <meta name="keywords" content={SITE_KEYWORDS} />

    <meta name="robots" content="index,follow" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={TWITTER_ACCOUNT} />
    <meta name="twitter:title" content={SITE_TITLE} />
    <meta name="twitter:description" content={SITE_DESCRIPTION} />
    <meta name="twitter:creator" content={TWITTER_ACCOUNT} />
    <meta name="twitter:image" content={SITE_IMAGE} />

    <meta property="og:type" content="website" />
    <meta property="og:title" content={SITE_TITLE} />
    <meta property="og:url" content={SITE_URL} />
    <meta property="og:description" content={SITE_DESCRIPTION} />
    <meta property="og:site_name" content={SITE_TITLE} />
    <meta property="og:image" content={SITE_IMAGE} />

    <meta itemProp="name" content={SITE_TITLE} />
    <meta itemProp="description" content={SITE_DESCRIPTION} />
    <meta itemProp="image" content={SITE_IMAGE} />

    <meta
      property="fb:admins"
      content="100000633932565,1448175923,707387762,1187622729"
    />
  </Head>
);

export default Metadata;
