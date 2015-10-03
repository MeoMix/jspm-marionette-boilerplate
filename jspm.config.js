System.config({
  baseURL: '/',
  defaultJSExtensions: true,
  transpiler: 'babel',
  babelOptions: {
    'optional': [
      'runtime',
      'optimisation.modules.system'
    ]
  },
  paths: {
    'github:*': 'jspm_packages/github/*',
    'npm:*': 'jspm_packages/npm/*'
  },

  map: {
    'autoprefixer': 'npm:autoprefixer@6.0.3',
    'babel': 'npm:babel-core@5.8.25',
    'babel-runtime': 'npm:babel-runtime@5.8.25',
    'backbone': 'npm:backbone@1.2.3',
    'backbone.babysitter': 'github:marionettejs/backbone.babysitter@0.1.10',
    'backbone.wreqr': 'github:marionettejs/backbone.wreqr@1.3.5',
    'core-js': 'npm:core-js@1.2.1',
    'css': 'npm:jspm-loader-css@1.0.0',
    'handlebars': 'github:components/handlebars.js@4.0.3',
    'hbs': 'github:davis/plugin-hbs@1.1.0',
    'html': 'github:Hypercubed/systemjs-plugin-html@0.0.6',
    'jquery': 'github:components/jquery@2.1.4',
    'jspm-loader-css': 'npm:jspm-loader-css@1.0.0',
    'lodash': 'npm:lodash@3.10.1',
    'marionette': 'github:marionettejs/backbone.marionette@2.4.3',
    'github:Hypercubed/systemjs-plugin-html@0.0.6': {
      'webcomponentsjs': 'github:webcomponents/webcomponentsjs@0.7.14'
    },
    'github:davis/plugin-hbs@1.1.0': {
      'handlebars': 'github:components/handlebars.js@4.0.3'
    },
    'github:jspm/nodelibs-assert@0.1.0': {
      'assert': 'npm:assert@1.3.0'
    },
    'github:jspm/nodelibs-buffer@0.1.0': {
      'buffer': 'npm:buffer@3.5.0'
    },
    'github:jspm/nodelibs-path@0.1.0': {
      'path-browserify': 'npm:path-browserify@0.0.0'
    },
    'github:jspm/nodelibs-process@0.1.1': {
      'process': 'npm:process@0.10.1'
    },
    'github:jspm/nodelibs-util@0.1.0': {
      'util': 'npm:util@0.10.3'
    },
    'npm:amdefine@1.0.0': {
      'fs': 'github:jspm/nodelibs-fs@0.1.2',
      'module': 'github:jspm/nodelibs-module@0.1.0',
      'path': 'github:jspm/nodelibs-path@0.1.0',
      'process': 'github:jspm/nodelibs-process@0.1.1'
    },
    'npm:assert@1.3.0': {
      'util': 'npm:util@0.10.3'
    },
    'npm:autoprefixer@6.0.3': {
      'browserslist': 'npm:browserslist@1.0.0',
      'caniuse-db': 'npm:caniuse-db@1.0.30000333',
      'num2fraction': 'npm:num2fraction@1.2.2',
      'postcss': 'npm:postcss@5.0.8',
      'process': 'github:jspm/nodelibs-process@0.1.1',
      'systemjs-json': 'github:systemjs/plugin-json@0.1.0'
    },
    'npm:babel-runtime@5.8.25': {
      'process': 'github:jspm/nodelibs-process@0.1.1'
    },
    'npm:backbone@1.2.3': {
      'process': 'github:jspm/nodelibs-process@0.1.1'
    },
    'npm:browserslist@1.0.0': {
      'caniuse-db': 'npm:caniuse-db@1.0.30000333',
      'fs': 'github:jspm/nodelibs-fs@0.1.2',
      'path': 'github:jspm/nodelibs-path@0.1.0',
      'process': 'github:jspm/nodelibs-process@0.1.1',
      'systemjs-json': 'github:systemjs/plugin-json@0.1.0'
    },
    'npm:buffer@3.5.0': {
      'base64-js': 'npm:base64-js@0.0.8',
      'ieee754': 'npm:ieee754@1.1.6',
      'is-array': 'npm:is-array@1.0.1'
    },
    'npm:core-js@1.2.1': {
      'fs': 'github:jspm/nodelibs-fs@0.1.2',
      'process': 'github:jspm/nodelibs-process@0.1.1',
      'systemjs-json': 'github:systemjs/plugin-json@0.1.0'
    },
    'npm:css-modules-loader-core@0.0.12': {
      'fs': 'github:jspm/nodelibs-fs@0.1.2',
      'path': 'github:jspm/nodelibs-path@0.1.0',
      'postcss': 'npm:postcss@4.1.16',
      'postcss-modules-extract-imports': 'npm:postcss-modules-extract-imports@0.0.5',
      'postcss-modules-local-by-default': 'npm:postcss-modules-local-by-default@0.0.9',
      'postcss-modules-scope': 'npm:postcss-modules-scope@0.0.8'
    },
    'npm:css-selector-tokenizer@0.4.1': {
      'fastparse': 'npm:fastparse@1.1.1'
    },
    'npm:css-selector-tokenizer@0.5.4': {
      'cssesc': 'npm:cssesc@0.1.0',
      'fastparse': 'npm:fastparse@1.1.1'
    },
    'npm:debounce@1.0.0': {
      'date-now': 'npm:date-now@1.0.1'
    },
    'npm:es6-promise@2.3.0': {
      'assert': 'github:jspm/nodelibs-assert@0.1.0',
      'process': 'github:jspm/nodelibs-process@0.1.1',
      'util': 'github:jspm/nodelibs-util@0.1.0'
    },
    'npm:fastparse@1.1.1': {
      'process': 'github:jspm/nodelibs-process@0.1.1'
    },
    'npm:has-flag@1.0.0': {
      'process': 'github:jspm/nodelibs-process@0.1.1'
    },
    'npm:inherits@2.0.1': {
      'util': 'github:jspm/nodelibs-util@0.1.0'
    },
    'npm:js-base64@2.1.9': {
      'buffer': 'github:jspm/nodelibs-buffer@0.1.0'
    },
    'npm:jspm-loader-css@1.0.0': {
      'css-modules-loader-core': 'npm:css-modules-loader-core@0.0.12',
      'debounce': 'npm:debounce@1.0.0',
      'path': 'npm:path@0.12.7',
      'toposort': 'npm:toposort@0.2.12'
    },
    'npm:lodash@3.10.1': {
      'process': 'github:jspm/nodelibs-process@0.1.1'
    },
    'npm:path-browserify@0.0.0': {
      'process': 'github:jspm/nodelibs-process@0.1.1'
    },
    'npm:path@0.12.7': {
      'process': 'npm:process@0.11.2',
      'util': 'npm:util@0.10.3'
    },
    'npm:postcss-modules-extract-imports@0.0.5': {
      'postcss': 'npm:postcss@4.1.16',
      'process': 'github:jspm/nodelibs-process@0.1.1'
    },
    'npm:postcss-modules-local-by-default@0.0.9': {
      'css-selector-tokenizer': 'npm:css-selector-tokenizer@0.4.1',
      'postcss': 'npm:postcss@4.1.16'
    },
    'npm:postcss-modules-scope@0.0.8': {
      'css-selector-tokenizer': 'npm:css-selector-tokenizer@0.5.4',
      'postcss': 'npm:postcss@4.1.16',
      'process': 'github:jspm/nodelibs-process@0.1.1'
    },
    'npm:postcss@4.1.16': {
      'es6-promise': 'npm:es6-promise@2.3.0',
      'fs': 'github:jspm/nodelibs-fs@0.1.2',
      'js-base64': 'npm:js-base64@2.1.9',
      'path': 'github:jspm/nodelibs-path@0.1.0',
      'process': 'github:jspm/nodelibs-process@0.1.1',
      'source-map': 'npm:source-map@0.4.4',
      'systemjs-json': 'github:systemjs/plugin-json@0.1.0'
    },
    'npm:postcss@5.0.8': {
      'fs': 'github:jspm/nodelibs-fs@0.1.2',
      'js-base64': 'npm:js-base64@2.1.9',
      'path': 'github:jspm/nodelibs-path@0.1.0',
      'process': 'github:jspm/nodelibs-process@0.1.1',
      'source-map': 'npm:source-map@0.5.1',
      'supports-color': 'npm:supports-color@3.1.1',
      'systemjs-json': 'github:systemjs/plugin-json@0.1.0'
    },
    'npm:process@0.11.2': {
      'assert': 'github:jspm/nodelibs-assert@0.1.0'
    },
    'npm:source-map@0.4.4': {
      'amdefine': 'npm:amdefine@1.0.0',
      'process': 'github:jspm/nodelibs-process@0.1.1'
    },
    'npm:source-map@0.5.1': {
      'process': 'github:jspm/nodelibs-process@0.1.1'
    },
    'npm:supports-color@3.1.1': {
      'has-flag': 'npm:has-flag@1.0.0',
      'process': 'github:jspm/nodelibs-process@0.1.1'
    },
    'npm:toposort@0.2.12': {
      'assert': 'github:jspm/nodelibs-assert@0.1.0',
      'process': 'github:jspm/nodelibs-process@0.1.1'
    },
    'npm:util@0.10.3': {
      'inherits': 'npm:inherits@2.0.1',
      'process': 'github:jspm/nodelibs-process@0.1.1'
    }
  }
});
