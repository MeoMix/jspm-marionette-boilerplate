/* eslint-env node */
const gulp = require('gulp');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');

// Specify paths & globbing patterns for tasks.
global.paths = {
  'allJs': ['src/**/*.js', 'test/**/*.js', 'gulp/**/*.js', 'gulpfile.babel.js'],
  'src': 'src/',
  'srcFiles': 'src/**/*',
  'srcHtml': 'src/**/*.html',
  'srcJs': 'src/**/*.js',
  'srcNonJs': ['src/**/*', '!src/**/*.js'],
  'compiled': 'compiled/',
  'compiledFiles': 'compiled/**/*',
  'dist': 'dist/'
};

// Require all tasks in the gulp folder.
requireDir('./gulp', { recurse: false });

// Compile src files, start a local server to host the compiled files, and
// watch src files for changes so server can reload newly compiled files.
gulp.task('default', (done) => {
  // Use runSequence to prevent 'watch' from triggering on 'compile'
  runSequence('compile', 'connect', 'watch', done);
});