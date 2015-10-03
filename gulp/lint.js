const gulp = require('gulp');
const eslint = require('gulp-eslint');

// Lint and enforce code quality style. Configuration found in .jscsrc files.
// http://jscs.info/
gulp.task('lint', () => {
  return gulp.src(global.paths.allJs)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});