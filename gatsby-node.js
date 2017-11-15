exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-html") {
    config.loader("null", {
      test: /webfontloader/,
      loader: "null-loader"
    });
  }
};
