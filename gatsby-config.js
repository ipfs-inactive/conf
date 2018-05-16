module.exports = {
  pathPrefix: `/ipfssummit`,
  siteMetadata: {
    title: "IPFS Summit",
    author: "Subvisual",
    description: "Website for the IPFS Summit",
    keywords: "ipfs, summit, conference, libp2p, decentralized, web, meeting",
    twitterAccount: "@ipfsbot",
    url: "",
    image: "",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "trackingIDhere",
        head: true,
        anonymize: true,
      },
    },
  ],
};
