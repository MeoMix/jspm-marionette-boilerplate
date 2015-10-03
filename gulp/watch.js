const gulp = require('gulp');
const gutil = require('gulp-util');

// Watch source files for changes. Run compile task when changes detected.
gulp.task('watch', () => {
  const watchTasks = ['compile'];

  return gulp.watch(global.paths.srcFiles, watchTasks)
    .on('change', (event) => {
      gutil.log(gutil.colors.cyan(`${event.path} was ${event.type}, recompiling...`));
    });
});