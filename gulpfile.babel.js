/* eslint-env node */
// Options:
// * gulp: Compile src files, spin-up local server, open browser, watch files for changes.
// * gulp build: Build a release and place it into /dist.
// * gulp compile: Move files from /src to /compiled while transpiling ES6 to ES5.
// * gulp lint: Lint /src files for errors.
// * gulp test: Instantiate a Karma server and run specs found in /test.
// * gulp watch: Watch /src and /compiled files for changes.
const gulp = require('gulp');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');

// Specify paths & globbing patterns for tasks.
// Don't make these relative (e.g. prefix with ./) otherwise gulp-watch
// will fail to detect added/deleted files.
global.paths = {
  'allJs': ['src/**/*.js', 'test/**/*.js', 'gulp/**/*.js', 'gulpfile.babel.js'],
  'src': 'src/',
  'srcFiles': 'src/**/*',
  'srcHtml': 'src/**/*.+(html|hbs)',
  'srcJs': 'src/**/*.js',
  'srcCss': 'src/**/*.css',
  'srcNonJs': ['src/**/*', '!src/**/*.js'],
  'compiled': 'compiled/',
  'compiledFiles': 'compiled/**/*',
  'compiledHtml': 'src/**/*.html',
  'dist': 'dist/'
};

// Load all the gulp tasks declared in /gulp directory so that gulp cli can leverage them.
requireDir('./gulp', { recurse: false });

// Compile src files, start a local server to host the compiled files, and
// watch src files for changes so server can reload newly compiled files.
gulp.task('default', (done) => {
  // Use runSequence to prevent 'watch' from triggering on 'compile'
  runSequence('compile', 'connect', 'watch', done);
});