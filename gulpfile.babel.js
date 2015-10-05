/* eslint-env node */
const gulp = require('gulp');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');

// Specify paths & globbing patterns for tasks.
global.paths = {
  'allJs': ['./src/**/*.js', './test/**/*.js', './gulp/**/*.js', './gulpfile.babel.js'],
  'src': './src',
  'srcFiles': './src/**/*',
  'srcHtml': './src/**/*.html',
  'srcJs': './src/**/*.js',
  'srcNonJs': ['./src/**/*', '!./src/**/*.js'],
  'compiled': './compiled',
  'compiledFiles': './compiled/**/*',
  'dist': './dist'
};

// Require all tasks in the gulp folder.
requireDir('./gulp', { recurse: false });

gulp.task('default', (done) => {
  runSequence('compile', 'connect', 'watch', done);
});