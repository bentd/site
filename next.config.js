const webpack = require("webpack")

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  webpack: (config, { isServer }) => {
    // Fixes code that depend on "jquery" module
    // https://github.com/zeit/next.js/issues/1465
    config.plugins.push(
      new webpack.ProvidePlugin({
        "$": "jquery",
        "jQuery": "jquery",
      })
    )
    return config
  }
});
