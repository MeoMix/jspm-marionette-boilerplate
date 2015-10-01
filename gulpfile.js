var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var Builder = require('systemjs-builder');
var Server = require('karma').Server;

var sourceFiles = ['src/**/*.js'];

// Convert ES6 files to ES5 and move to /compiled directory.
// Move non-ES6 files over to /compiled directory.
gulp.task('compile', function() {
  return gulp
    .src(sourceFiles)
    .pipe(plumber())
    .pipe(babel({
      modules: 'system'
    }))
    .pipe(gulp.dest('compiled'));
});

// Watch source files for changes and re-compile all files into /compile directory when a file changes.
// TODO: Prefer re-compiling only changed files.
gulp.task('watch', function() {
  return gulp
    .watch(sourceFiles, ['compile'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('build', function(done) {
  var builder = new Builder('.', 'config.js');

  builder.buildStatic('src/main.js', 'dist/main.js', {
    runtime: false,
    sourceMaps: false,
    minify: false
  }).then(function() {
    done();
  }).catch(function(errorMessage) {
    console.error(errorMessage);
    done();
  });
});

// TODO: jshint, jscs, css linting
gulp.task('test', function(done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function(exitStatus) {
    console.log('exitStatus:', exitStatus);
    done();
  }).start();
});