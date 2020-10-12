const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

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

const plugins = [withBundleAnalyzer]

module.exports = withPlugins(plugins, nextConfig)
