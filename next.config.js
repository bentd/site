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
    // Allows code to import qraphql files
    // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
    // https://github.com/apollographql/graphql-tag#webpack-loading-and-preprocessing    
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    })
    return config
  }
});
