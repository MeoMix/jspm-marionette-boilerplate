const gulp = require('gulp');
const babel = require('gulp-babel');
const copy = require('gulp-copy');
const changed = require('gulp-changed');

// Create a directory, /compiled, and copy all files from /src into it.
// While copying - transpile all ES6 JavaScript to ES5.
// Use the /compiled directory instead of /src during development
// to avoid waiting for ES6 to transpile.
gulp.task('compile', ['compile-babelSrcJs', 'compile-copySrcNonJs']);

// Transpile ES6 files through babel and copy results to /compiled directory.
gulp.task('compile-babelSrcJs', () => {
  return gulp.src(global.paths.srcJs)
    // Don't waste time compiling files which have not changed.
    // Don't compare using sha1. Changed thinks all files changed when saving through Visual Studio.
    .pipe(changed(global.paths.compiled))
    .pipe(babel({
      modules: 'system'
    }))
    .pipe(gulp.dest(global.paths.compiled));
});

// Copy non-ES6 files (e.g. .css, .html, .hbs) to the /compiled directory.
gulp.task('compile-copySrcNonJs', () => {
  return gulp.src(global.paths.srcNonJs)
    // Don't waste time copying files which have not changed.
    // Don't compare using sha1. Changed thinks all files changed when saving through Visual Studio.
    .pipe(changed(global.paths.compiled))
    .pipe(copy(global.paths.compiled, {
      // prefix: 1 indicates the desire to drop the '/src' parent directory.
      prefix: 1
    }));
});