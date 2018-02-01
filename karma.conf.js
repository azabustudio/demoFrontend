module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine', '@angular/cli'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],

    client:{
      clearContext: false
    },

    mime: {
      'text/x-typescript': ['ts','tsx']
    },

    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true,
      dir: 'test/Unit-Test/coverage',
    },

    angularCli: {
      config: './.angular-cli.json',
      environment: 'dev'
    },

    reporters: ['progress', 'coverage-istanbul', 'kjhtml'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
