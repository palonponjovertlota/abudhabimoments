const path = require('path')
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack(config) {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['styles'] = path.join(__dirname, 'styles')
    return config
  }
})
