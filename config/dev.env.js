'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
environment.loaders.delete('sass')
environment.loaders.delete('moduleSass')
environment.loaders.delete('moduleCss')
environment.loaders.delete('css')