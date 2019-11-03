const path = require('path')
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack(config) {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['contexts'] = path.join(__dirname, 'contexts')
    config.resolve.alias['styles'] = path.join(__dirname, 'styles')
    config.resolve.alias['i18n'] = path.join(__dirname, 'i18n.js')
    return config
  }
})
