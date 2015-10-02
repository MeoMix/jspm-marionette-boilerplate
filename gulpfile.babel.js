/* eslint-env node */
const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const eslint = require('gulp-eslint');
const gutil = require('gulp-util');
const Builder = require('systemjs-builder');
const Server = require('karma').Server;
const srcJavaScript = ['src/**/*.js'];
const allJavaScript = ['src/**/*.js', 'test/**/*.js', 'gulpfile.babel.js'];

// Transpile ES6 files and copy results to /compiled directory.
// Copy non-ES6 files to /compiled directory.
gulp.task('compile', () => {
  return gulp.
    src(srcJavaScript).
    pipe(plumber()).
    pipe(babel({ modules: 'system' })).
    pipe(gulp.dest('compiled'));
});

// Watch source files for changes. Run compile task when changes detected.
gulp.task('watch', () => {
  return gulp.
    watch(srcJavaScript, ['compile']).
    on('change', (event) => {
      const simplePath = event.path.replace(__dirname, '');
      gutil.log(gutil.colors.cyan(`${simplePath} was ${event.type}, recompiling...`));
    });
});

// Use jspm's builder to create a self-executing bundle of files.
// Written to a destination directory and ready for production use.
gulp.task('build', (done) => {
  const dest = 'dist/';
  const builder = new Builder('.', 'config.js');
  const options = {
    runtime: false,
    sourceMaps: false,
    minify: false
  };

  builder.buildStatic('src/main.js', `${dest}main.js`, options).then(() => {
    gutil.log(gutil.colors.green(`Built successfully to ${dest}`));
  }).catch((errorMessage) => {
    gutil.log(gutil.colors.red(errorMessage));
  }).finally(done);
});

// Lint and enforce code quality style. Configuration found in .jscsrc files.
// http://jscs.info/
gulp.task('lint', () => {
  return gulp.
    src(allJavaScript).
    pipe(eslint()).
    pipe(eslint.format()).
    pipe(eslint.failAfterError());
});

// Start a Karma server and execute test suites. Configuraiton bound in karma.conf.js
// http://karma-runner.github.io/
gulp.task('test', (done) => {
  const server = new Server({
    configFile: `${__dirname}/karma.conf.js`,
    singleRun: true
  }, done);

  server.start();
});