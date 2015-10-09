const gulp = require('gulp');
const minifyHtml = require('gulp-minify-html');
const useref = require('gulp-useref');
const runSequence = require('run-sequence');
const Builder = require('systemjs-builder');
const util = require('gulp-util');
const del = require('del');
const packageConfig = require('../package.json');

gulp.task('build', (done) => {
  // Ensure cleaning dist directory happens before placing any files into it.
  // Ensure compiled files are current before generating a build from them.
  runSequence(['build-cleanDist', 'compile'], 'build-compiledHtml', 'build-compiledJs', done);
});

// Delete the contents of build location to ensure no build artifacts remain.
gulp.task('build-cleanDist', () => {
  return del(global.paths.dist);
});

// Move HTML from src to dest while transforming for production.
gulp.task('build-compiledHtml', () => {
  return gulp.src(global.paths.compiledHtml)
    // Replace js references with a single reference to bundled js.
    .pipe(useref())
    .pipe(minifyHtml())
    .pipe(gulp.dest(global.paths.dist));
});

// Use jspm's builder to create a self-executing bundle of files.
// Written to a destination directory and ready for production use.
gulp.task('build-compiledJs', (done) => {
  // By default, the config file can be found in the root directory. If defaults have been
  // changed then jspm's entry in packageConfig will know the correct value.
  const builder = new Builder('.', packageConfig.jspm.configFile || 'config.js');
  const options = {
    runtime: false,
    sourceMaps: false,
    minify: false
  };

  builder.buildStatic(`${global.paths.compiled}main.js`, `${global.paths.dist}main.js`, options)
    .then(() => {
      util.log(util.colors.green(`Built successfully to ${global.paths.dist}`));
    })
    .catch((errorMessage) => {
      util.log(util.colors.red(errorMessage));
    })
    .finally(done);
});