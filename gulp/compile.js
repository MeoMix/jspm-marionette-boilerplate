const gulp = require('gulp');
const babel = require('gulp-babel');
const copy = require('gulp-copy');

// Create a directory, /compiled, and copy all files from /src into it.
// While copying - transpile all ES6 JavaScript to ES5.
// Use the /compiled directory instead of /src during development
// to avoid waiting for ES6 to transpile.
gulp.task('compile', ['babel', 'copy-srcNonJavaScript']);

// Transpile ES6 files through babel and copy results to /compiled directory.
gulp.task('babel', () => {
  return gulp.src(global.paths.srcJs)
    .pipe(babel({
      modules: 'system'
    }))
    .pipe(gulp.dest(global.paths.compiled));
});

// Copy non-ES6 files (e.g. .css, .html, .hbs) to the /compiled directory.
gulp.task('copy-srcNonJavaScript', () => {
  return gulp.src(global.paths.srcNonJs)
    .pipe(copy(global.paths.compiled, { prefix: 1 }));
});