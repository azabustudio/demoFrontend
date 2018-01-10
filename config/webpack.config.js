const webpackConfig = require('../node_modules/@ionic/app-scripts/config/webpack.config');
const webpack = require('webpack');
const _ = require('lodash');
const dotEnvConfig = require('dotenv').config().parsed;
const ENV = process.env.IONIC_ENV;

webpackConfig[ENV].plugins.push(
  new webpack.DefinePlugin({
    'process.env': _(process.env)
      .pick(_.keys(dotEnvConfig))
      .mapValues(v => JSON.stringify(v))
      .value()
  })
);
