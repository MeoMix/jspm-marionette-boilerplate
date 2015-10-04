const gulp = require('gulp');
const replace = require('gulp-replace');
const minifyHtml = require('gulp-minify-html');
const Builder = require('systemjs-builder');
const util = require('gulp-util');
const packageConfig = require('../package.json');

gulp.task('build', ['build-srcJs', 'build-srcHtml']);

gulp.task('build-srcHtml', () => {
  return gulp.src(global.paths.srcHtml)
    // Replace all script tags on page with bundled script tag.
    .pipe(replace(/(<script[\s\S]*?<\/script>)[\s\S]*(?=[\s\S]*<\/script>)<\/script>/, '<script src=\'main.js\'></script>'))
    .pipe(minifyHtml())
    .pipe(gulp.dest(global.paths.dist));
});

// Use jspm's builder to create a self-executing bundle of files.
// Written to a destination directory and ready for production use.
gulp.task('build-srcJs', (done) => {
  const builder = new Builder('.', packageConfig.jspm.configFile || 'config.js');
  const options = {
    runtime: false,
    sourceMaps: false,
    minify: false
  };

  builder.buildStatic(`${global.paths.src}/main.js`, `${global.paths.dist}/main.js`, options)
    .then(() => {
      util.log(util.colors.green(`Built successfully to ${global.paths.dist}`));
    })
    .catch((errorMessage) => {
      util.log(util.colors.red(errorMessage));
    })
    .finally(done);
});