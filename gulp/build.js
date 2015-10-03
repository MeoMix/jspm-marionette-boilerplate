const gulp = require('gulp');
const replace = require('gulp-replace');
const minifyHtml = require('gulp-minify-html');
const Builder = require('systemjs-builder');
const gutil = require('gulp-util');

gulp.task('build', ['build-js', 'build-html']);

gulp.task('build-html', () => {
  return gulp.src(global.paths.srcHtml)
    .pipe(replace(/<!-- build-html:start -->[\s\S]*?<!-- build-html:end -->/, '<script src=\'main.js\'></script>'))
    .pipe(minifyHtml())
    .pipe(gulp.dest(global.paths.dist));
});

// Use jspm's builder to create a self-executing bundle of files.
// Written to a destination directory and ready for production use.
gulp.task('build-js', (done) => {
  const builder = new Builder('.', 'config.js');
  const options = {
    runtime: false,
    sourceMaps: false,
    minify: false
  };

  builder.buildStatic(`${global.paths.src}/main.js`, `${global.paths.dist}/main.js`, options)
    .then(() => {
      gutil.log(gutil.colors.green(`Built successfully to ${global.paths.dist}`));
    })
    .catch((errorMessage) => {
      gutil.log(gutil.colors.red(errorMessage));
    })
    .finally(done);
});