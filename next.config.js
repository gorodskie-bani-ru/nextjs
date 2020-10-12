const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins')

/**
 * Просто так некст не дружит с лесс
 * https://github.com/vercel/next-plugins/issues/624
 */
const nextConfig = {
  env: {
    spaceID: process.env.spaceID,
    accessTokenDelivery: process.env.accessTokenDelivery,
  },
  distDir: '.next',
  webpack: (config, _options) => {
    // modify the `config` here

    return config
  },
}

const plugins = [
  [
    withSass,
    {
      cssModules: true,
      cssLoaderOptions: {
        url: false,
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]',
      },
    },
  ],
  [
    withCSS,
    {
      cssModules: true,
      cssLoaderOptions: {
        url: false,
      },
    },
  ],
  [
    withLess,
    {
      cssModules: true,
      // lessLoaderOptions: {
      //   javascriptEnabled: true,
      //   modifyVars: themeVariables
      // },
      // webpack: (config, { isServer }) => {
      //   if (isServer) {
      //     const antStyles = /antd\/.*?\/style.*?/;

      //     const origExternals = [...config.externals];
      //     config.externals = [
      //       (context, request, callback) => {
      //         if (request.match(antStyles)) return callback();
      //         if (typeof origExternals[0] === "function") {
      //           origExternals[0](context, request, callback);
      //         } else {
      //           callback();
      //         }
      //       },
      //       ...(typeof origExternals[0] === "function" ? [] : origExternals)
      //     ];
      //     config.module.rules.unshift({
      //       test: antStyles,
      //       use: "null-loader"
      //     });
      //   }
      //   return config;
      // }
    },
  ],
  // withFonts,
  withBundleAnalyzer,
]
module.exports = withPlugins(plugins, nextConfig)
