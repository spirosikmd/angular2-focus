const wallabyWebpack = require('wallaby-webpack');

// if you use the webpack defined variable ENV in any components
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ENV = process.env.ENV = process.env.NODE_ENV = 'test';

const webpackPostprocessor = wallabyWebpack({
  entryPatterns: [
    'config/karma-test-shim.js',
    'src/**/*spec.js',
  ],

  module: {
    rules: [
      {test: /\.json$/, loader: 'json-loader'},
      {test: /karma-require/, loader: 'null-loader'},
    ]
  },
  plugins: [
    new DefinePlugin({
      'ENV': JSON.stringify(ENV)
    })
  ]
});

module.exports = function() {

  return {
    files: [
      {pattern: 'config/karma-test-shim.js', load: false},
      {pattern: 'config/karma-require.js', load: false},
      {pattern: 'src/**/*.ts', load: false},
      {pattern: 'src/**/*.json', load: false},
      {pattern: 'src/**/*spec.ts', ignore: true},
      {pattern: 'src/**/*.d.ts', ignore: true}
    ],

    tests: [
      {pattern: 'src/**/*spec.ts', load: false},
    ],

    testFramework: 'jasmine',

    postprocessor: webpackPostprocessor,

    setup: function() {
      window.__moduleBundler.loadTests();
    },

    debug: true
  };
};
