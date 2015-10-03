/* eslint-env node */
const gulp = require('gulp');
const requireDir = require('require-dir');

// Specify paths & globbing patterns for tasks.
global.paths = {
  'srcFiles': './src/**/*',
  'srcHtml': './src/**/*.html',
  'srcJs': './src/js/**/*.js',
  'srcNonJs': ['./src/**/*', '!./src/**/*.js'],
  'allJs': ['./src/**/*.js', './test/**/*.js', './gulp/**/*.js', './gulpfile.babel.js'],
  'src': './src',
  'dist': './dist',
  'compiled': './compiled'
};

// Require all tasks in the gulp folder.
requireDir('./gulp', { recurse: false });

gulp.task('default', ['watch']);