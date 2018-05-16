const ExtractTextPlugin = require("extract-text-webpack-plugin");

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.removeLoader("css");

  if (stage === "develop") {
    config.loader("css", {
      test: /\.(scss|css)$/,
      loaders: [
        "style",
        "css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]",
        "postcss",
      ],
    });
  } else {
    config.loader("css", {
      test: /\.(scss|css)$/,
      loader: ExtractTextPlugin.extract([
        "css-loader?minimze&importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]",
        "postcss",
      ]),
    });
  }

  return config;
};

exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  plugins: babelrc.plugins.concat(["babel-plugin-react-css-modules"]),
});
