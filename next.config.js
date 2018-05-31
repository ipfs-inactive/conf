const withOptimizedImages = require("next-optimized-images");
const withCSS = require("@zeit/next-css");

module.exports = withOptimizedImages(
  withCSS({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[folder]__[local]__[hash:base64:5]",
    },
    assetPrefix: "./",
    exportPathMap: () => ({
      "/404.html": { page: "/404" },
      "/index.html": { page: "/index" },
      "/ipfs.html": { page: "/ipfs" },
      "/libp2p.html": { page: "/libp2p" },
      "/schedule.html": { page: "/schedule" },
    }),
    webpack: config => {
      config.node = { fs: "empty" }; //eslint-disable-line

      return config;
    },
  }),
);
