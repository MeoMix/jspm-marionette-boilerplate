const gulp = require('gulp');
const minifyHtml = require('gulp-minify-html');
const useref = require('gulp-useref');
const clean = require('gulp-clean');
const runSequence = require('run-sequence');
const Builder = require('systemjs-builder');
const util = require('gulp-util');
const packageConfig = require('../package.json');

gulp.task('build', (done) => {
  // Ensure cleaning of dist folder happens first. Building of srcJs and srcHtml
  // is allowed to happen in parallel.
  runSequence('build-cleanDist', ['build-srcJs', 'build-srcHtml'], done);
});

// Delete the contents of build location to ensure no build artifacts remain.
gulp.task('build-cleanDist', () => {
  return gulp.src(global.paths.dist, { read: false })
    .pipe(clean());
});

// Move HTML from src to dest while transforming for production.
gulp.task('build-srcHtml', () => {
  return gulp.src(global.paths.srcHtml)
    // Replace js references with a single reference to bundled js.
    .pipe(useref())
    .pipe(minifyHtml())
    .pipe(gulp.dest(global.paths.dist));
});

// Use jspm's builder to create a self-executing bundle of files.
// Written to a destination directory and ready for production use.
gulp.task('build-srcJs', (done) => {
  // By default, the config file can be found in the root directory. If defaults have been
  // changed then jspm's entry in packageConfig will know the correct value.
  const builder = new Builder('.', packageConfig.jspm.configFile || 'config.js');
  const options = {
    runtime: false,
    sourceMaps: false,
    minify: false
  };

  builder.buildStatic(`${global.paths.src}main.js`, `${global.paths.dist}main.js`, options)
    .then(() => {
      util.log(util.colors.green(`Built successfully to ${global.paths.dist}`));
    })
    .catch((errorMessage) => {
      util.log(util.colors.red(errorMessage));
    })
    .finally(done);
});